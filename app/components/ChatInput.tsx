"use client";

import { Session } from "next-auth";
import { FormEvent, useMemo, useState } from "react";
import { v4 as uuid } from "uuid";
import { queryClient } from "../../lib/react-query";
import MessageService from "../../services/messages";

interface ChatInputProps {
  user: Session | null;
}

export function ChatInput({ user }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const hasMessage = useMemo(() => message.trim().length > 0, [message]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!hasMessage || !user?.user) return;

    setMessage("");

    const messageBody = {
      id: uuid(),
      message,
      created_at: Date.now(),
      username: user.user.name!,
      profile_pic: user.user.image!,
      email: user.user.email!,
    };

    await MessageService.uploadMessage(messageBody);

    queryClient.invalidateQueries("/api/messages");
  };

  return (
    <div className="fixed bottom-0 z-50 left-0 w-full px-10 py-5 border-t border-gray-100 bg-white">
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a message here..."
          className="flex-1 px-5 py-3 border rounded border-gray-300 outline-none ring-1 ring-transparent hover:ring-blue-600 hover:border-transparent focus:border-transparent focus:ring-blue-600 text-gray-600 transition-all"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          disabled={!hasMessage}
          className="disabled:opacity-50 py-2 px-4 bg-blue-500 rounded text-white font-bold whitespace-nowrap disabled:cursor-not-allowed"
        >
          Send
        </button>
      </form>
    </div>
  );
}
