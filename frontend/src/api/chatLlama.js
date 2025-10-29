// Single-file frontend helper with in-flight dedupe
const inFlightRequests = new Map();

// simple UUID fallback
function uuidv4() {
	try {
		return (crypto && crypto.randomUUID && crypto.randomUUID()) || ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
			(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
		);
	} catch (e) {
		return `${Date.now()}-${Math.random().toString(16).slice(2,8)}`;
	}
}

export async function sendToChatLlama(payload, options = {}) {
	// options: { baseUrl, timeoutMs, token, dedupeKey }.
	const { baseUrl, timeoutMs = 20000, token, dedupeKey } = options;
	const apiBase = baseUrl ? baseUrl.replace(/\/+$/, '') : '';
	const url = apiBase ? `${apiBase}/api/chatllama` : '/api/chatllama';

	// choose a dedupe key: explicit > provided payload signature
	const signature = dedupeKey || (() => {
		try {
			const s = JSON.stringify(payload || {});
			return s.length > 2000 ? s.slice(0, 2000) : s;
		} catch (e) {
			return String(Date.now());
		}
	})();

	// If a request with same signature is already in-flight, reuse the promise
	if (inFlightRequests.has(signature)) {
		console.log('[frontend] Reusing in-flight request for signature:', signature.slice(0, 80));
		return inFlightRequests.get(signature);
	}

	const requestId = uuidv4();
	console.log('[frontend] Sending /api/chatllama', { url, requestId, signature: signature.slice(0,80) });

	const promise = (async () => {
		const controller = new AbortController();
		const timeout = setTimeout(() => controller.abort(), timeoutMs);

		try {
			const headers = { 'Content-Type': 'application/json', Accept: 'application/json' };
			if (token) headers['Authorization'] = `Bearer ${token}`;
			headers['x-request-id'] = requestId;

			const res = await fetch(url, {
				method: 'POST',
				headers,
				body: JSON.stringify(payload),
				signal: controller.signal,
			});

			clearTimeout(timeout);
			const text = await res.text();

			// Try parse
			try {
				const json = text ? JSON.parse(text) : null;
				console.log('[frontend] Received response', { status: res.status, ok: res.ok, requestId, jsonSnippet: JSON.stringify(json).slice(0,500) });
				return { ok: res.ok, status: res.status, data: json };
			} catch (parseErr) {
				console.warn('[frontend] Could not parse JSON from backend', { requestId, textSnippet: (text||'').slice(0,400) });
				return { ok: false, status: res.status, rawText: text, error: 'invalid_json' };
			}
		} catch (err) {
			clearTimeout(timeout);
			if (err.name === 'AbortError') {
				console.error('[frontend] Request aborted (timeout)', { requestId });
				return { ok: false, status: 0, error: 'timeout' };
			}
			console.error('[frontend] Network error', { requestId, err });
			return { ok: false, status: 0, error: err.message || 'network_error' };
		} finally {
			// ensure we remove in-flight entry so future requests can run
			inFlightRequests.delete(signature);
		}
	})();

	// store the promise and return it
	inFlightRequests.set(signature, promise);
	return promise;
}