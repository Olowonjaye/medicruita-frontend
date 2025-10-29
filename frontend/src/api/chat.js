export async function sendToChatLlama(payload) {
	// payload example: { messages: [...], model: 'llama3-8b-8192' }
	try {
		console.log('[frontend] POST /api/chatllama payload', payload);
		const res = await fetch('/api/chatllama', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
			body: JSON.stringify(payload),
		});

		console.log('[frontend] status', res.status);
		const text = await res.text();
		try {
			const json = JSON.parse(text);
			console.log('[frontend] parsed json', json);
			return { ok: true, data: json };
		} catch (e) {
			console.warn('[frontend] backend returned non-JSON:', text);
			return { ok: false, error: 'invalid_json', raw: text, status: res.status };
		}
	} catch (err) {
		console.error('[frontend] fetch error:', err);
		return { ok: false, error: 'network_error', detail: err.message };
	}
}
