// frontend/src/components/HelpInput.tsx
import React, { useState } from "react";
// Note: HelpInput should NOT call the backend directly to avoid duplicate requests.
// The parent `ChatIlama` page handles sending the request. HelpInput only
// collects user input and invokes the onSendMessage callback with the text.

interface HelpInputProps {
  sessionId: string;
  // parent handles sending the message to the backend and updating history
  onSendMessage: (message: string) => Promise<void> | void;
}

const HelpInput: React.FC<HelpInputProps> = ({ sessionId, onSendMessage }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async () => {
    if (!message.trim()) return;

    // Delegate sending to parent. Parent is responsible for making the HTTP call.
    setLoading(true);
    setError(null);
    try {
      console.log('[HelpInput] delegating message to parent onSendMessage', { sessionId, messageSnippet: message.slice(0,200) });
      await onSendMessage(message);
      setMessage("");
    } catch (err: any) {
      console.error('[HelpInput] onSendMessage error', err);
      setError(err?.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !loading) {
      sendMessage();
    }
  };

  return (
    <div className="help-input">
      <input
        type="text"
        placeholder="Ask the medical assistant..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={loading}
      />
      <button onClick={sendMessage} disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default HelpInput;
