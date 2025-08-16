"use client";
import { useState, useRef, useEffect } from "react";
import Chat from "../components/Chat/Chat";
import ChatInput from "../components/Chat/ChatInput";

export default function Page() {
  const [messages, setMessages] = useState<
    { type: "user" | "bot"; text: string }[]
  >([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = () => {
    if (!input) return;
    setMessages([
      ...messages,
      { type: "user", text: input },
      { type: "bot", text: "This is GPT response." },
    ]);
    setInput("");
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 flex flex-col bg-[#f7f7f8] dark:bg-[#343541]">
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, idx) => (
          <Chat key={idx} type={msg.type} text={msg.text} />
        ))}
        <div ref={chatEndRef} />
      </div>
      <ChatInput input={input} setInput={setInput} sendMessage={sendMessage} />
    </div>
  );
}
