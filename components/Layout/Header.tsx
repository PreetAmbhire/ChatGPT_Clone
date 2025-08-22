// components/Layout/Header.tsx
"use client";
import { ChevronDownIcon, ShareIcon } from "../Icons";
import { useState } from "react";

const MODELS = [
  { id: "gpt-4o", name: "GPT-4o" },
  { id: "gpt-4", name: "GPT-4" },
  { id: "gpt-3.5", name: "GPT-3.5" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [model, setModel] = useState(MODELS[0]);

  return (
    <header className="sticky top-0 z-20 flex h-14 shrink-0 items-center justify-center border-b border-[#e5e7eb] bg-[#f7f7f8]/80 px-4 backdrop-blur-sm dark:border-[#2a2b32] dark:bg-[#343541]/80 sm:px-6 md:px-8">
      {/* centered model dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-1.5 rounded-md border border-[#e5e7eb] bg-white px-3 py-1.5 text-sm font-medium text-[#111] hover:bg-[#f3f4f6] dark:border-[#2a2b32] dark:bg-[#40414f] dark:text-[#e5e7eb] dark:hover:bg-[#4a4b57]"
        >
          {model.name}
          <ChevronDownIcon className="h-4 w-4" />
        </button>

        {open && (
          <div className="absolute left-1/2 z-30 mt-2 w-40 -translate-x-1/2 overflow-hidden rounded-md border border-[#e5e7eb] bg-white shadow-lg dark:border-[#2a2b32] dark:bg-[#3a3b44]">
            {MODELS.map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  setModel(m);
                  setOpen(false);
                }}
                className={`block w-full px-3 py-2 text-left text-sm hover:bg-[#f3f4f6] dark:hover:bg-[#4a4b57] ${
                  m.id === model.id
                    ? "font-medium text-[#10a37f]"
                    : "text-[#111] dark:text-[#e5e7eb]"
                }`}
              >
                {m.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* right share button */}
      <div className="absolute right-3">
        <button
          className="inline-flex items-center gap-1 rounded-md border border-[#e5e7eb] bg-white px-2.5 py-1.5 text-xs font-medium text-[#111] hover:bg-[#f3f4f6] dark:border-[#2a2b32] dark:bg-[#40414f] dark:text-[#e5e7eb] dark:hover:bg-[#4a4b57]"
          title="Share"
        >
          <ShareIcon className="h-4 w-4" />
          Share
        </button>
      </div>
    </header>
  );
}
