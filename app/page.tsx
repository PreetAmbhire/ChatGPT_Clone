"use client";

import { useRef, useState, useEffect } from "react";
import ChatInput from "../components/Chat/ChatInput";
import Chat from "../components/Chat/Chat";
import Header from "../components/Layout/Header";

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

  const generateId = () =>
    crypto?.randomUUID ? crypto.randomUUID() : Date.now().toString();

  // Send new user message
  const send = (text: string) => {
    if (!text.trim()) return;

    const userId = generateId();
    const user: Msg = { id: userId, role: "user", content: text };

    const botId = generateId();
    const bot: Msg = { id: botId, role: "assistant", content: "" };

    setMessages((prev) => [...prev, user, bot]);

    // Typing animation for bot
    const chunks = `You said: **${text}**`.split("");
    let i = 0;
    const t = setInterval(() => {
      i++;
      setMessages((prev) =>
        prev.map((m) =>
          m.id === botId ? { ...m, content: chunks.slice(0, i).join("") } : m
        )
      );
      if (i >= chunks.length) clearInterval(t);
    }, 12);
  };

  // Update edited user message and add new bot reply after last bot reply
  const updateMessage = (id: string, newText: string) => {
    const replyId = generateId();

    setMessages((prev) => {
      const updated = [...prev];
      const userIndex = updated.findIndex((m) => m.id === id);
      if (userIndex === -1) return prev;

      // Update user message
      updated[userIndex] = { ...updated[userIndex], content: newText };

      // Find the position after the last bot reply following this user
      let insertIndex = userIndex + 1;
      for (let i = userIndex + 1; i < updated.length; i++) {
        if (updated[i].role === "assistant") insertIndex = i + 1;
        else break;
      }

      // Insert new empty bot message
      updated.splice(insertIndex, 0, {
        id: replyId,
        role: "assistant",
        content: "",
      });

      return updated;
    });

    // Typing animation for new bot reply
    const chunks = `You edited your message to: **${newText}**`.split("");
    let i = 0;
    const t = setInterval(() => {
      i++;
      setMessages((prev) =>
        prev.map((m) =>
          m.id === replyId ? { ...m, content: chunks.slice(0, i).join("") } : m
        )
      );
      if (i >= chunks.length) clearInterval(t);
    }, 12);
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, selectedId]);

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
                  onUpdate={
                    m.role === "user"
                      ? (newText) => updateMessage(m.id, newText)
                      : undefined
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
