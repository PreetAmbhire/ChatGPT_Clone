// components/Chat/ChatInput.tsx
"use client";
import { useRef, useState } from "react";
import { MicIcon, PaperclipIcon, SendIcon } from "../Icons";

export default function ChatInput({ onSend }: { onSend: (t: string) => void }) {
  const [value, setValue] = useState("");
  const taRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (!value.trim()) return;
    onSend(value);
    setValue("");
    taRef.current?.focus();
  };

  return (
    <div className="rounded-xl border border-[#e5e7eb] bg-white p-2 shadow-sm dark:border-[#2a2b32] dark:bg-[#40414f]">
      <div className="flex items-end gap-2">
        <button
          className="rounded-md p-2 text-[#6b6c70] hover:bg-black/5 dark:text-[#b0b4ba] dark:hover:bg-white/5"
          title="Attach"
        >
          <PaperclipIcon className="h-5 w-5" />
        </button>

        <textarea
          ref={taRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={1}
          placeholder="Message ChatGPT"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          className="max-h-40 flex-1 resize-none bg-transparent px-1 py-2 text-[15px] leading-6 placeholder-[#9aa0a6] outline-none"
        />

        <button
          className="rounded-md p-2 text-[#6b6c70] hover:bg-black/5 dark:text-[#b0b4ba] dark:hover:bg-white/5"
          title="Voice"
        >
          <MicIcon className="h-5 w-5" />
        </button>
        <button
          onClick={handleSend}
          className="rounded-md bg-[#10a37f] p-2 text-white hover:bg-[#0e8f71] disabled:opacity-60"
          disabled={!value.trim()}
          title="Send"
        >
          <SendIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
