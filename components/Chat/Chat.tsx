"use client";
import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import MessageActions from "./MessageActions";

export default function Chat({
  role,
  content,
  selected,
  onSelect,
  onUpdate,
}: {
  role: "user" | "assistant";
  content: string;
  selected?: boolean;
  onSelect?: () => void;
  onUpdate?: (newText: string) => void; // callback for when user edits
}) {
  const isUser = role === "user";
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Focus and resize textarea when editing
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      resizeTextarea();
    }
  }, [isEditing]);

  // Auto-resize function
  const resizeTextarea = () => {
    if (!inputRef.current) return; // early return if null
    inputRef.current.style.height = "auto";
    inputRef.current.style.height = inputRef.current.scrollHeight + "px";
  };

  const handleSave = () => {
    if (!inputRef.current) return; // early return if null
    setIsEditing(false);
    const newText = inputRef.current.value;
    if (onUpdate && newText.trim() !== content.trim()) {
      onUpdate(newText);
    }
  };

  const displayContent =
    !content && !isUser ? "Welcome! How can I help you today?" : content;

  return (
    <div
      className={`w-full flex mb-2 ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`group relative flex px-4 py-3 rounded-2xl max-w-[50%] ${
          isUser ? "bg-[#444654]" : "bg-[#343541]"
        } ${selected ? "ring-2 ring-[#10a37f]" : ""}`}
      >
        {isUser && isEditing ? (
          <textarea
            ref={inputRef}
            defaultValue={content}
            onChange={resizeTextarea}
            onBlur={handleSave}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSave();
              }
            }}
            className="w-full resize-none rounded bg-[#444654] text-[#ececf1] p-1 outline-none dark:bg-[#444654]"
          />
        ) : (
          <div className="prose prose-sm max-w-none break-words text-left text-[#ececf1] prose-headings:mb-1 prose-headings:mt-3 dark:prose-invert">
            <ReactMarkdown>{displayContent}</ReactMarkdown>
          </div>
        )}

        <MessageActions
          text={displayContent}
          role={role}
          onEdit={isUser ? () => setIsEditing(true) : undefined}
        />
      </div>
    </div>
  );
}
