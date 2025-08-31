// utils/session.js
export function generateSessionId() {
  return "session-" + Date.now() + "-" + Math.floor(Math.random() * 10000);
}
