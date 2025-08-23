"use client";

import { useEffect, useRef, useState } from "react";
import ChatInput from "../components/Chat/ChatInput";
import Chat from "../components/Chat/Chat";
import Header from "../components/Layout/Header";
import { PlusIcon } from "../components/Icons";

type Msg = { id: string; role: "user" | "assistant"; content: string };

export default function Page() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: "m0",
      role: "assistant",
      content: "Welcome! How may I help you today?",
    },
  ]);

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  // Generate unique IDs safely
  const generateId = () =>
    crypto?.randomUUID ? crypto.randomUUID() : Date.now().toString();

  const send = (text: string) => {
    if (!text.trim()) return;

    const user: Msg = { id: generateId(), role: "user", content: text };
    setMessages((m) => [...m, user]);

    const reply: Msg = { id: generateId(), role: "assistant", content: "" };
    setMessages((m) => [...m, reply]);

    const chunks = `You said: **${text}**`.split("");
    let i = 0;
    const t = setInterval(() => {
      i++;
      setMessages((m) =>
        m.map((x) =>
          x.id === reply.id ? { ...x, content: chunks.slice(0, i).join("") } : x
        )
      );
      if (i >= chunks.length) clearInterval(t);
    }, 12);
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, selectedId]);

  const selectedMsg = messages.find((m) => m.id === selectedId);

  return (
    <>
      <Header />

      <main className="flex min-h-0 flex-1 flex-col bg-[#343541] text-[#ececf1]">
        {/* Chat list */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6">
          <div className="mx-auto w-full max-w-3xl py-6 sm:py-10">
            <div className="space-y-4">
              {messages.map((m) => (
                <Chat
                  key={m.id}
                  role={m.role}
                  content={m.content}
                  selected={m.id === selectedId}
                  onSelect={() =>
                    setSelectedId((cur) => (cur === m.id ? null : m.id))
                  }
                />
              ))}
              <div ref={endRef} />
            </div>
          </div>
        </div>

        {/* Composer */}
        <div className="sticky bottom-0 z-10 mx-auto w-full max-w-3xl px-4 pb-4 sm:px-6 sm:pb-6">
          <ChatInput onSend={send} />
          <p className="mt-3 text-center text-xs text-[#9aa0a6]">
            ChatGPT can make mistakes. Check important info.
          </p>
        </div>
      </main>
    </>
  );
}
