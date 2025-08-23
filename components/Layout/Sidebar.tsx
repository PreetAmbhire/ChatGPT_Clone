"use client";

import { useEffect, useState, useRef } from "react";
import Tooltip from "../UI/Tooltip";
import {
  NewChatIcon,
  LibraryIcon,
  SettingsIcon,
  UserCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  RobotIcon,
  DotsIcon,
  PaperclipIcon,
  Pencil,
} from "../Icons";
import favicon from "../Icons/favicon.ico";

const SIDEBAR_KEY = "sidebarCollapsed";

const attachOptions = [
  { label: "Rename", icon: Pencil },
  { label: "Delete", icon: PaperclipIcon }, // Consider replacing with a trash icon
];

export default function Sidebar() {
  const [mounted, setMounted] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const [dropdownPosition, setDropdownPosition] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });

  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  // Save collapsed state
  useEffect(() => {
    localStorage.setItem(SIDEBAR_KEY, collapsed ? "1" : "0");
  }, [collapsed]);

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !buttonRefs.current.some(
          (btn) => btn && btn.contains(event.target as Node)
        )
      ) {
        setOpenDropdownIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) return null;

  return (
    <div className="overflow-x-hidden relative" ref={sidebarRef}>
      <aside
        className={`z-40 flex h-screen flex-shrink-0 flex-col border-r border-[#e5e7eb] bg-[#f7f7f8] transition-all duration-200 dark:border-[#2a2b32] dark:bg-[#202123] ${
          collapsed ? "w-16" : "w-64"
        }`}
      >
        {/* Top Section */}
        <div className="flex flex-col px-3 py-3 min-w-0 gap-2">
          <div
            className={`flex w-full ${
              collapsed
                ? "flex-col gap-1 items-start"
                : "flex-row justify-between items-center"
            }`}
          >
            <img src={favicon.src} alt="Logo" className="h-6 w-6" />
            <button
              onClick={() => setCollapsed((v) => !v)}
              className="rounded-md bg-white/90 p-1 text-[#6b6c70] shadow-sm ring-1 ring-[#e5e7eb] backdrop-blur dark:bg-[#40414f]/80 dark:text-[#9aa0a6] dark:ring-[#2a2b32]"
            >
              {collapsed ? (
                <ChevronRightIcon className="h-5 w-5" />
              ) : (
                <ChevronLeftIcon className="h-5 w-5" />
              )}
            </button>
          </div>

          <button
            className={`group mt-1 flex items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-[#3c3d3f] hover:bg-black/10 dark:text-[#e5e7eb] dark:hover:bg-white/10 min-w-0 ${
              collapsed ? "w-12 justify-center" : "w-full justify-start"
            }`}
          >
            <NewChatIcon className="h-4 w-4 opacity-70 flex-shrink-0" />
            {!collapsed && (
              <span className="line-clamp-1 min-w-0">New Chat</span>
            )}
          </button>

          <button
            className={`group mt-1 flex items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-[#3c3d3f] hover:bg-black/10 dark:text-[#e5e7eb] dark:hover:bg-white/10 min-w-0 ${
              collapsed ? "w-12 justify-center" : "w-full justify-start"
            }`}
          >
            <LibraryIcon className="h-4 w-4 opacity-70 flex-shrink-0" />
            {!collapsed && (
              <span className="line-clamp-1 min-w-0">Library</span>
            )}
          </button>
        </div>

        {/* Chat History */}
        <div className="min-h-0 flex-1 overflow-y-auto px-2 min-w-0">
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className="group relative flex items-center">
              <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-[#3c3d3f] hover:bg-black/10 dark:text-[#e5e7eb] dark:hover:bg-white/10 min-w-0">
                <RobotIcon className="h-4 w-4 opacity-70 flex-shrink-0" />
                {!collapsed && (
                  <span className="line-clamp-1 min-w-0">{`Conversation ${
                    i + 1
                  }`}</span>
                )}

                {!collapsed && (
                  <button
                    ref={(el) => {
                      buttonRefs.current[i] = el;
                    }}
                    className={`absolute right-2 top-1/2 -translate-y-1/2 p-1 transition-opacity ${
                      openDropdownIndex === i
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      const rect =
                        buttonRefs.current[i]?.getBoundingClientRect();
                      if (rect)
                        setDropdownPosition({
                          top: rect.bottom + 4, // small gap
                          left: rect.right - 28,
                        });
                      setOpenDropdownIndex(openDropdownIndex === i ? null : i);
                    }}
                  >
                    <DotsIcon className="h-4 w-4 text-[#6b6c70] dark:text-[#9aa0a6]" />
                  </button>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="sticky bottom-0 border-t border-[#e5e7eb] bg-[#f7f7f8] p-3 dark:border-[#2a2b32] dark:bg-[#202123] min-w-0">
          {collapsed ? (
            <div className="flex justify-center">
              <Tooltip label="Profile" side="right">
                <button className="rounded-full p-1">
                  <UserCircleIcon className="h-7 w-7" />
                </button>
              </Tooltip>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <UserCircleIcon className="h-7 w-7" />
                <div className="leading-tight">
                  <div className="text-sm font-medium text-[#111] dark:text-[#e5e7eb] truncate">
                    Preet
                  </div>
                  <div className="text-xs text-[#6b6c70] dark:text-[#9aa0a6] truncate">
                    Free plan
                  </div>
                </div>
              </div>
              <button className="rounded-md p-2 text-[#6b6c70] hover:bg-black/10 dark:text-[#9aa0a6] dark:hover:bg-white/10">
                <SettingsIcon className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Dropdown outside scrollable area */}
      {openDropdownIndex !== null && (
        <div
          className="fixed z-50 w-28 rounded-xl border border-[#e5e7eb] bg-white shadow-lg dark:border-[#2a2b32] dark:bg-[#3a3b44] transition-opacity"
          style={{
            top: dropdownPosition.top,
            left: dropdownPosition.left,
          }}
        >
          {attachOptions.map((option) => (
            <button
              key={option.label}
              onClick={() => setOpenDropdownIndex(null)}
              className="flex items-center gap-2 w-full px-3 py-2 text-left text-sm hover:bg-[#f3f4f6] dark:hover:bg-[#4a4b57] text-[#111] dark:text-[#e5e7eb]"
            >
              <option.icon className="h-4 w-4" />
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
