"use client";

import { useEffect, useRef, useState } from "react";
import ChatInput from "../components/Chat/ChatInput";
import Chat from "../components/Chat/Chat";
// import SelectionBar from "../components/Chat/SelectionBar";
import { PlusIcon } from "../components/Icons";

type Msg = { id: string; role: "user" | "assistant"; content: string };

export default function Page() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: "m0",
      role: "assistant",
      content: "Hey Preet! I'm your pixel-perfect clone. ✨",
    },
  ]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  const send = (text: string) => {
    if (!text.trim()) return;
    const user: Msg = { id: crypto.randomUUID(), role: "user", content: text };
    setMessages((m) => [...m, user]);

    const reply: Msg = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: "",
    };
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
    <main className="flex min-h-0 flex-1 flex-col bg-[#f7f7f8] dark:bg-[#343541]">
      {/* list */}
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

      {/* sticky selection bar */}
      {selectedMsg && (
        <SelectionBar
          text={selectedMsg.content}
          onClear={() => setSelectedId(null)}
        />
      )}

      {/* composer */}
      <div className="sticky bottom-0 z-10 mx-auto w-full max-w-3xl px-4 pb-4 sm:px-6 sm:pb-6">
        <ChatInput onSend={send} />
        <p className="mt-3 text-center text-xs text-[#6b6c70] dark:text-[#9aa0a6]">
          ChatGPT can make mistakes. Check important info.
        </p>
      </div>

      {/* Mobile floating + New chat button */}
      <button
        className="fixed bottom-20 right-5 z-30 inline-flex items-center justify-center rounded-full bg-[#10a37f] p-4 text-white shadow-lg hover:bg-[#0e8f71] md:hidden"
        title="New chat"
        onClick={() =>
          setMessages([
            {
              id: crypto.randomUUID(),
              role: "assistant",
              content: "New chat started.",
            },
          ])
        }
      >
        <PlusIcon className="h-5 w-5" />
      </button>
    </main>
  );
}
