"use client";
import { useState } from "react";
import {
  NewChatIcon,
  SearchIcon,
  LibraryIcon,
  ShareIcon,
  SettingsIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  UserCircleIcon,
} from "../Icons";
// import SelectionBar from "../components/Chat/SelectionBar";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`${
        collapsed ? "w-[60px]" : "w-[260px]"
      } relative flex h-screen flex-col border-r border-[#e5e7eb] bg-[#f9fafb] transition-all dark:border-[#2a2b32] dark:bg-[#202123]`}
    >
      {/* Collapse / Expand */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-4 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-[#d1d5db] bg-white shadow-sm hover:bg-[#f3f4f6] dark:border-[#2a2b32] dark:bg-[#2a2b32] dark:hover:bg-[#3a3b44]"
      >
        {collapsed ? (
          <ChevronRightIcon className="h-4 w-4 text-[#6b6c70]" />
        ) : (
          <ChevronLeftIcon className="h-4 w-4 text-[#6b6c70]" />
        )}
      </button>

      {/* Top: New Chat */}
      <div className="p-2">
        <button className="flex w-full items-center gap-3 rounded-md border border-[#e5e7eb] bg-white px-3 py-2 text-sm font-medium text-[#202123] hover:bg-[#f3f4f6] dark:border-[#2a2b32] dark:bg-[#2a2b32] dark:text-[#ececf1] dark:hover:bg-[#3a3b44]">
          <NewChatIcon className="h-4 w-4" />
          {!collapsed && <span>New Chat</span>}
        </button>
      </div>

      {/* Search */}
      {!collapsed && (
        <div className="px-2">
          <div className="flex items-center gap-2 rounded-md border border-[#e5e7eb] bg-white px-3 py-2 text-sm text-[#6b6c70] dark:border-[#2a2b32] dark:bg-[#2a2b32] dark:text-[#b0b4ba]">
            <SearchIcon className="h-4 w-4" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent text-sm outline-none placeholder-[#9ca3af] dark:placeholder-[#6b6c70]"
            />
          </div>
        </div>
      )}

      {/* Chats list */}
      <nav className="mt-3 flex-1 overflow-y-auto px-2">
        {["Trip to Japan", "Learn Tailwind", "Portfolio Ideas"].map(
          (chat, i) => (
            <button
              key={i}
              className="group flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-left text-[#202123] hover:bg-[#f3f4f6] dark:text-[#ececf1] dark:hover:bg-[#2a2b32]"
            >
              <span className="truncate">{collapsed ? chat[0] : chat}</span>
            </button>
          )
        )}
      </nav>

      {/* Bottom section */}
      <div className="border-t border-[#e5e7eb] p-2 dark:border-[#2a2b32]">
        <div className="space-y-1">
          <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-[#202123] hover:bg-[#f3f4f6] dark:text-[#ececf1] dark:hover:bg-[#2a2b32]">
            <LibraryIcon className="h-4 w-4" />
            {!collapsed && <span>Library</span>}
          </button>
          <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-[#202123] hover:bg-[#f3f4f6] dark:text-[#ececf1] dark:hover:bg-[#2a2b32]">
            <ShareIcon className="h-4 w-4" />
            {!collapsed && <span>Shared</span>}
          </button>
        </div>

        {/* Profile pinned bottom */}
        <div className="mt-2 border-t border-[#e5e7eb] pt-2 dark:border-[#2a2b32]">
          <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-[#202123] hover:bg-[#f3f4f6] dark:text-[#ececf1] dark:hover:bg-[#2a2b32]">
            <UserCircleIcon className="h-6 w-6" />
            {!collapsed && <span>My Profile</span>}
          </button>
          <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-[#202123] hover:bg-[#f3f4f6] dark:text-[#ececf1] dark:hover:bg-[#2a2b32]">
            <SettingsIcon className="h-4 w-4" />
            {!collapsed && <span>Settings</span>}
          </button>
        </div>
      </div>
    </aside>
  );
}
