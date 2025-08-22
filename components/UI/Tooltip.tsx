"use client";
import { ReactNode, useState } from "react";

export default function Tooltip({
  children,
  label,
  side = "top",
}: {
  children: ReactNode;
  label: string;
  side?: "top" | "bottom" | "left" | "right";
}) {
  const [open, setOpen] = useState(false);
  const pos =
    side === "top"
      ? "bottom-full mb-1 left-1/2 -translate-x-1/2"
      : side === "bottom"
      ? "top-full mt-1 left-1/2 -translate-x-1/2"
      : side === "left"
      ? "right-full mr-1 top-1/2 -translate-y-1/2"
      : "left-full ml-1 top-1/2 -translate-y-1/2";
  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {children}
      <span
        className={`pointer-events-none absolute z-50 whitespace-nowrap rounded-md bg-[#111] px-2 py-1 text-[11px] font-medium text-white opacity-0 shadow-sm transition-opacity dark:bg-[#111]/90 ${
          open ? "opacity-100" : ""
        } ${pos}`}
      >
        {label}
      </span>
    </span>
  );
}
