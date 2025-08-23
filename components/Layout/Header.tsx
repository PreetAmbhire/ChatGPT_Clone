"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronDownIcon, ShareUpIcon } from "../Icons";

const MODELS = [
  { id: "gpt-4o", name: "GPT-4o" },
  { id: "gpt-4", name: "GPT-4" },
  { id: "gpt-3.5", name: "GPT-3.5" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [model, setModel] = useState(MODELS[0]);
  const [mounted, setMounted] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-[#2a2b32] bg-[#343541]/90 px-4 backdrop-blur-sm sm:px-6 md:px-8">
      {/* Model dropdown */}
      <div className="relative flex-1 flex items-center justify-start">
        <button
          ref={buttonRef}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-[#e5e7eb] hover:text-[#10a37f] focus:outline-none focus:ring-2 focus:ring-[#10a37f] rounded-md"
        >
          {model.name}
          <ChevronDownIcon className="h-4 w-4" />
        </button>

        <div
          ref={dropdownRef}
          className={`absolute top-full left-0 z-40 mt-1 w-40 max-h-60 overflow-y-auto rounded-md border border-[#2a2b32] bg-[#3a3b44] shadow-lg transition-all duration-200 ease-in-out ${
            open
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {MODELS.map((m) => (
            <button
              key={m.id}
              onClick={() => {
                setModel(m);
                setOpen(false);
              }}
              className={`block w-full px-3 py-2 text-left text-sm rounded-md hover:bg-[#4a4b57] focus:outline-none focus:ring-2 focus:ring-[#10a37f] ${
                m.id === model.id
                  ? "font-medium text-[#10a37f]"
                  : "text-[#e5e7eb]"
              }`}
            >
              {m.name}
            </button>
          ))}
        </div>
      </div>

      {/* Share button */}
      <div className="absolute right-3">
        <button
          className="inline-flex items-center gap-1 rounded-md border border-[#2a2b32] bg-[#40414f] px-2.5 py-1.5 text-xs font-medium text-[#e5e7eb] hover:bg-[#4a4b57] focus:outline-none focus:ring-2 focus:ring-[#10a37f]"
          title="Share"
        >
          <ShareUpIcon className="h-4 w-4" />
          Share
        </button>
      </div>
    </header>
  );
}
