"use client";
import { useRef, useState, useEffect } from "react";
import {
  MicIcon,
  NewChatIcon,
  SendIcon,
  PaperclipIcon,
  MagicEditIcon,
  GlobeIcon,
} from "../Icons";

const attachOptions = [
  { label: "Add photos and file", icon: PaperclipIcon },
  { label: "Canvas", icon: MagicEditIcon },
  { label: "Web search", icon: GlobeIcon },
];

export default function ChatInput({ onSend }: { onSend: (t: string) => void }) {
  const [value, setValue] = useState("");
  const [openAttach, setOpenAttach] = useState(false);
  const taRef = useRef<HTMLTextAreaElement>(null);
  const attachRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!value.trim()) return;
    onSend(value);
    setValue("");
    taRef.current?.focus();
  };

  // Close dropdown if click happens outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        attachRef.current &&
        !attachRef.current.contains(event.target as Node)
      ) {
        setOpenAttach(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative rounded-full border border-[#2a2b32] bg-[#40414f] p-2 pr-3 shadow-sm">
      <div className="flex items-end gap-2">
        {/* Attach button */}
        <div ref={attachRef} className="relative">
          <button
            onClick={() => setOpenAttach((prev) => !prev)}
            className="rounded-full p-2 text-[#b0b4ba] hover:bg-white/5"
            title="Attach"
          >
            <NewChatIcon className="h-6 w-6" />
          </button>

          {openAttach && (
            <div className="absolute bottom-full left-0 z-30 mb-1 w-48 max-h-60 overflow-y-auto rounded-md border border-[#2a2b32] bg-[#3a3b44] shadow-lg">
              {attachOptions.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => setOpenAttach(false)}
                  className="flex items-center gap-2 w-full px-3 py-2 text-left text-sm text-[#e5e7eb] hover:bg-[#4a4b57]"
                >
                  <opt.icon className="h-4 w-4 text-[#b0b4ba]" />
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Textarea */}
        <textarea
          ref={taRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={1}
          placeholder="Ask anything"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          className="max-h-40 flex-1 resize-none bg-transparent px-1 py-2 text-[15px] leading-6 placeholder-[#9aa0a6] outline-none text-[#ececf1]"
        />

        {/* Mic button */}
        <button
          className="rounded-full p-2 text-[#b0b4ba] hover:bg-white/5"
          title="Voice"
        >
          <MicIcon className="h-6 w-6" />
        </button>

        {/* Send button */}
        <button
          onClick={handleSend}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#10a37f] text-white hover:bg-[#0e8f71] disabled:opacity-60"
          disabled={!value.trim()}
          title="Send"
        >
          <SendIcon className="h-5 w-5 translate-x-[-1px]" />
        </button>
      </div>
    </div>
  );
}
