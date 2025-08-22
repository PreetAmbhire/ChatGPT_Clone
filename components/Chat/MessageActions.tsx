"use client";
import Tooltip from "../UI/Tooltip";
import { CopyIcon, ThumbDownIcon, ThumbUpIcon, DotsIcon } from "../Icons";
import { useState } from "react";

export default function MessageActions({ text }: { text: string }) {
  const [liked, setLiked] = useState<null | "up" | "down">(null);

  return (
    <div className="invisible absolute -top-3 right-2 z-10 flex items-center gap-1 rounded-md bg-white/90 p-1 shadow-sm ring-1 ring-[#e5e7eb] backdrop-blur-md group-hover:visible dark:bg-[#3a3b44]/80 dark:ring-[#2a2b32]">
      <Tooltip label="Copy">
        <button
          onClick={() => navigator.clipboard.writeText(text)}
          className="rounded p-1 text-[#6b6c70] hover:bg-black/5 dark:text-[#b0b4ba] dark:hover:bg-white/10"
        >
          <CopyIcon className="h-4 w-4" />
        </button>
      </Tooltip>
      <Tooltip label="Good response">
        <button
          onClick={() => setLiked(liked === "up" ? null : "up")}
          className={`rounded p-1 hover:bg-black/5 dark:hover:bg-white/10 ${
            liked === "up"
              ? "text-[#10a37f]"
              : "text-[#6b6c70] dark:text-[#b0b4ba]"
          }`}
        >
          <ThumbUpIcon className="h-4 w-4" />
        </button>
      </Tooltip>
      <Tooltip label="Bad response">
        <button
          onClick={() => setLiked(liked === "down" ? null : "down")}
          className={`rounded p-1 hover:bg-black/5 dark:hover:bg-white/10 ${
            liked === "down"
              ? "text-[#ef4444]"
              : "text-[#6b6c70] dark:text-[#b0b4ba]"
          }`}
        >
          <ThumbDownIcon className="h-4 w-4" />
        </button>
      </Tooltip>
      <Tooltip label="More">
        <button className="rounded p-1 text-[#6b6c70] hover:bg-black/5 dark:text-[#b0b4ba] dark:hover:bg-white/10">
          <DotsIcon className="h-4 w-4" />
        </button>
      </Tooltip>
    </div>
  );
}
