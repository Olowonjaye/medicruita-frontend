export function generateSessionId(): string {
  return "session-" + Date.now() + "-" + Math.floor(Math.random() * 10000);
}

