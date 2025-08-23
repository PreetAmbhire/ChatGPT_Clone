"use client";

import { useEffect, useState } from "react";
import Tooltip from "../UI/Tooltip";
import {
  NewChatIcon,
  LibraryIcon,
  SettingsIcon,
  UserCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  RobotIcon,
} from "../Icons";
import favicon from "../Icons/favicon.ico";

const SIDEBAR_KEY = "sidebarCollapsed";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(SIDEBAR_KEY);
    if (saved) setCollapsed(saved === "1");
  }, []);

  useEffect(() => {
    localStorage.setItem(SIDEBAR_KEY, collapsed ? "1" : "0");
  }, [collapsed]);

  // Set a fixed width for buttons
  const buttonWidth = "w-40"; // adjust as needed

  return (
    <div className="overflow-x-hidden relative">
      <aside
        className={`fixed z-40 flex h-full flex-col border-r border-[#e5e7eb] bg-[#f7f7f8] transition-all duration-200 dark:border-[#2a2b32] dark:bg-[#202123]
          ${
            collapsed
              ? "md:w-16 w-full max-w-full"
              : "md:w-64 w-full max-w-full"
          } min-w-0`}
      >
        {/* Top Section */}
        <div className="flex flex-col px-3 py-3 min-w-0 gap-2">
          {/* Favicon + Chevron */}
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
              title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {collapsed ? (
                <ChevronRightIcon className="h-5 w-5" />
              ) : (
                <ChevronLeftIcon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* New Chat */}
          {/* New Chat */}
          <button
            className={`group mt-1 flex items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-[#3c3d3f] hover:bg-black/5 dark:text-[#e5e7eb] dark:hover:bg-white/5 min-w-0
              ${collapsed ? "w-12 justify-center" : "w-full justify-start"}`}
            title="New Chat"
          >
            <NewChatIcon className="h-4 w-4 opacity-70 flex-shrink-0" />
            {!collapsed && (
              <span className="line-clamp-1 min-w-0">New Chat</span>
            )}
          </button>

          {/* Library */}
          <button
            className={`group mt-1 flex items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-[#3c3d3f] hover:bg-black/5 dark:text-[#e5e7eb] dark:hover:bg-white/5 min-w-0
              ${collapsed ? "w-12 justify-center" : "w-full justify-start"}`}
            title="Library"
          >
            <LibraryIcon className="h-4 w-4 opacity-70 flex-shrink-0" />
            {!collapsed && (
              <span className="line-clamp-1 min-w-0">Library</span>
            )}
          </button>
        </div>

        {/* Chat history */}
        <div className="min-h-0 flex-1 overflow-y-auto px-2 min-w-0">
          {Array.from({ length: 14 }).map((_, i) => (
            <button
              key={i}
              className="group mt-1 flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-[#3c3d3f] hover:bg-black/5 dark:text-[#e5e7eb] dark:hover:bg-white/5 min-w-0"
              title={`Conversation ${i + 1}`}
            >
              <RobotIcon className="h-4 w-4 opacity-70 flex-shrink-0" />
              {!collapsed && (
                <span className="line-clamp-1 min-w-0">{`Conversation ${
                  i + 1
                }`}</span>
              )}
            </button>
          ))}
        </div>

        {/* Bottom */}
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
              <button className="rounded-md p-2 text-[#6b6c70] hover:bg-black/5 dark:text-[#9aa0a6] dark:hover:bg-white/5">
                <SettingsIcon className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
