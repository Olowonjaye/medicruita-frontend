// components/HelpInput.tsx
import { useState } from "react";
import { Paperclip, Upload } from "lucide-react";

interface HelpInputProps {
  onSendMessage: (message: string) => Promise<void>;
}

const HelpInput: React.FC<HelpInputProps> = ({ onSendMessage }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    await onSendMessage(query); // call backend
    setQuery(""); // clear input
  };

  return (
    <div className="w-full flex flex-col items-center gap-6 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl flex items-center gap-2 bg-white border border-gray-400 rounded-md px-4 py-3 shadow"
      >
        <input
          type="text"
          placeholder="Ask ChatLlama a medical question..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent focus:outline-none text-gray-800 placeholder-gray-400"
        />

        <button type="button">
          <Paperclip className="w-5 h-5 text-gray-500" />
        </button>

        <button
          type="submit"
          className="bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-xl transition"
        >
          <Upload className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default HelpInput;
