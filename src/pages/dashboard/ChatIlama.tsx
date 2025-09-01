// src/pages/dashboard/ChatIlama.tsx
import React, { useState } from "react";
import HelpInput from '../../components/ChatIlama/HelpInput'; // adjust path if needed

const ChatIlama: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);

  // 🔗 Backend call
  const onSendMessage = async (userMessage: string) => {
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);

    try {
      const res = await fetch("https://medicruita-backend.onrender.com/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userQuestion: userMessage }), // ✅ aligned with backend
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.reply || "No response" },
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

      {/* Unified input */}
      <HelpInput onSendMessage={onSendMessage} />
    </div>
  );
};

export default ChatIlama;
