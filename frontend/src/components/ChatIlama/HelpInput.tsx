// frontend/src/components/HelpInput.tsx
import React, { useState } from "react";
import apiRequest from "../../lib/apiRequest";

interface HelpInputProps {
  sessionId: string;
  onSendMessage: (reply: string, history: any[]) => void; // ✅ renamed
}

const HelpInput: React.FC<HelpInputProps> = ({ sessionId, onSendMessage }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const { data } = await apiRequest.post("/chat", {
        sessionId,
        userQuestion: message,
      });

      onSendMessage(data.reply, data.history); // ✅ using correct callback
      setMessage("");
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
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
