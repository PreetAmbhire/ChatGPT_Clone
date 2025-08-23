"use client";
import Tooltip from "../UI/Tooltip";
import { CopyIcon, ThumbDownIcon, ThumbUpIcon, Pencil } from "../Icons";
import { useState } from "react";

export default function MessageActions({
  text,
  role,
  onEdit,
}: {
  text: string;
  role: "user" | "assistant";
  onEdit?: () => void;
}) {
  const [liked, setLiked] = useState<null | "up" | "down">(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="invisible absolute -top-3 right-2 z-10 flex items-center gap-1 rounded-md bg-[#3a3b44]/80 p-1 shadow-sm ring-1 ring-[#2a2b32] backdrop-blur-md group-hover:visible">
      {/* Copy button (for both roles) */}
      <Tooltip label={copied ? "Copied!" : "Copy"}>
        <button
          onClick={handleCopy}
          className="rounded p-1 text-[#b0b4ba] hover:bg-white/10"
        >
          <CopyIcon className="h-4 w-4" />
        </button>
      </Tooltip>

      {/* Edit button only for user */}
      {role === "user" && (
        <Tooltip label="Edit">
          <button
            onClick={onEdit}
            className="rounded p-1 text-[#b0b4ba] hover:bg-white/10"
          >
            <Pencil className="h-4 w-4" />
          </button>
        </Tooltip>
      )}

      {/* Bot-specific options */}
      {role === "assistant" && (
        <>
          <Tooltip label="Good response">
            <button
              onClick={() => setLiked(liked === "up" ? null : "up")}
              className={`rounded p-1 hover:bg-white/10 ${
                liked === "up" ? "text-[#10a37f]" : "text-[#b0b4ba]"
              }`}
            >
              <ThumbUpIcon className="h-4 w-4" />
            </button>
          </Tooltip>

          <Tooltip label="Bad response">
            <button
              onClick={() => setLiked(liked === "down" ? null : "down")}
              className={`rounded p-1 hover:bg-white/10 ${
                liked === "down" ? "text-[#ef4444]" : "text-[#b0b4ba]"
              }`}
            >
              <ThumbDownIcon className="h-4 w-4" />
            </button>
          </Tooltip>
        </>
      )}
    </div>
  );
}
