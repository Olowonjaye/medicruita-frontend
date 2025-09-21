// src/pages/dashboard/ChatIlama.tsx
import React, { useState } from "react";
import HelpInput from "../../components/ChatIlama/HelpInput";
import { generateSessionId } from "medicruita-dashboard\src\utils\session";

const ChatIlama: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [sessionId] = useState(generateSessionId()); // ✅ unique session

  // 🔗 Backend call
  const onSendMessage = async (userMessage: string) => {
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);

    try {
      const res = await fetch("https://medicruita-backend.onrender.com/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,              // ✅ backend requires sessionId
          userQuestion: userMessage, // ✅ backend requires userQuestion
        }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text:
            data.reply ||
            "No response, kindly consult your medical practitioner or check back later",
        },
      ]);
    } catch (error) {
      console.error("Chat API error:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Error connecting to server" },
      ]);
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
      <HelpInput onSendMessage={onSendMessage} />
    </div>
  );
};

export default ChatIlama;
