// src/pages/dashboard/ChatIlama.tsx
import React, { useState } from "react";
import HelpInput from "../../components/ChatIlama/HelpInput";
import { generateSessionId } from "../../utils/session.ts";
import apiRequest from "../../lib/apiRequest";

const ChatIlama: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [sessionId] = useState(generateSessionId()); // ✅ unique session

  // 🔗 Backend call — parent handles the HTTP request. Use /chatllama endpoint which the backend exposes.
  const onSendMessage = async (userMessage: string) => {
    // add user message to UI immediately
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);

    try {
      // Add a request id header to correlate frontend/backend logs
      const requestId = `${sessionId}-${Date.now()}`;
      console.log('[ChatIlama] POST /api/chatllama', { sessionId, requestId, userSnippet: userMessage.slice(0,200) });

      const { data } = await apiRequest.post(
        "/chatllama",
        { sessionId, userQuestion: userMessage },
        { headers: { "x-request-id": requestId } }
      );

      console.log('[ChatIlama] received response from /chatllama', { requestId, status: data?.status ?? 'unknown', replyLength: data?.reply?.length ?? 0 });

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text:
            data.reply ||
            "No response, kindly consult your medical practitioner or check back later",
        },
      ]);
    } catch (error: any) {
      // Improved error logging to expose HTTP status and body for debugging 404s
      if (error?.response) {
        console.error('[ChatIlama] Chat API error response', {
          status: error.response.status,
          data: error.response.data,
        });
      } else {
        console.error('[ChatIlama] Chat API network/error', error);
      }

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Error connecting to server" },
      ]);
      // rethrow so HelpInput/displaying UI can act on it if needed
      throw error;
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      {/* Chat messages */}
      <div className="space-y-2 mb-4 max-h-[300px] overflow-y-auto">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded ${
              msg.sender === "user"
                ? "bg-blue-100 text-right"
                : "bg-gray-100 text-left"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

  {/* Input component */}
  <HelpInput sessionId={sessionId} onSendMessage={onSendMessage} />
    </div>
  );
};

export default ChatIlama;
