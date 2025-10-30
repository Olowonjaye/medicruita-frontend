import apiRequest from "../lib/apiRequest";

export async function sendToChatLlama(payload) {
	// payload example: { messages: [...], model: 'llama3-8b-8192' }
	try {
		console.log('[frontend] POST /api/chatllama payload', payload);
		const res = await apiRequest.post('/chatllama', payload);
		console.log('[frontend] status', res.status);
		return { ok: true, data: res.data };
	} catch (err) {
		console.error('[frontend] apiRequest error:', err?.response ?? err?.message ?? err);
		if (err && err.response) {
			return { ok: false, error: 'server_error', status: err.response.status, data: err.response.data };
		}
		return { ok: false, error: 'network_error', detail: err?.message || String(err) };
	}
}
