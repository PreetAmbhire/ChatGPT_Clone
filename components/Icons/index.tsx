// components/Icons/index.tsx
type IconProps = { className?: string };
const cx = (...a: (string | undefined | false)[]) =>
  a.filter(Boolean).join(" ");

/* Brand / common */
export const NewChatIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={cx("stroke-current", className)}
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 5v14M5 12h14" />
  </svg>
);
export const PlusIcon = NewChatIcon;

export const SearchIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={cx("stroke-current", className)}
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-3.8-3.8" />
  </svg>
);
export const MenuFoldIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={cx("stroke-current", className)}
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M4 6h16M4 12h10M4 18h16" />
  </svg>
);
export const LibraryIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={cx("stroke-current", className)}
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19h16" />
    <path d="M6 17V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v12" />
    <path d="M14 17V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v12" />
  </svg>
);
export const ShareIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={cx("stroke-current", className)}
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 12v7a1 1 0 0 0 1 1h7" />
    <path d="M14 10l7-7M21 3v6h-6" />
  </svg>
);
export const SettingsIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={cx("stroke-current", className)}
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c0 .66.42 1.25 1.02 1.51H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

/* Avatars */
export const RobotIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={cx("fill-[#10a37f] dark:fill-[#10a37f]", className)}
  >
    <circle cx="12" cy="12" r="12" />
    <circle cx="9" cy="10" r="1.5" fill="#fff" />
    <circle cx="15" cy="10" r="1.5" fill="#fff" />
    <rect x="7.5" y="13" width="9" height="1.6" rx="0.8" fill="#fff" />
  </svg>
);
export const UserCircleIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={cx("fill-[#2563eb]", className)}>
    <circle cx="12" cy="12" r="12" />
    <circle cx="12" cy="10" r="3.5" fill="#fff" />
    <path d="M4.5 19.5a7.5 7.5 0 0 1 15 0" fill="#fff" />
  </svg>
);

/* Composer */
export const MicIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={cx("stroke-current", className)}
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <rect x="9" y="3" width="6" height="10" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
  </svg>
);
export const PaperclipIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={cx("stroke-current", className)}
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M21 15V7a5 5 0 0 0-10 0v9a3 3 0 0 0 6 0V8" />
    <path d="M7 12v4a7 7 0 0 0 14 0" />
  </svg>
);
export const SendIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={cx("stroke-current", className)}
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 2L11 13" />
    <path d="M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);

/* Message hover / sticky bar */
export const CopyIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={cx("stroke-current", className)}
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <rect x="2" y="2" width="13" height="13" rx="2" />
  </svg>
);
export const ThumbUpIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={cx("stroke-current", className)}
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 9V5a3 3 0 0 0-6 0v4M5 22h10a3 3 0 0 0 3-3l1-7a2 2 0 0 0-2-2h-7" />
    <path d="M5 22V11H2v11h3z" />
  </svg>
);
export const ThumbDownIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={cx("stroke-current", className)}
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 15v4a3 3 0 0 0 6 0v-4M19 2H9a3 3 0 0 0-3 3l-1 7a2 2 0 0 0 2 2h7" />
    <path d="M19 2v11h3V2h-3z" />
  </svg>
);
export const DotsIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={cx("fill-current", className)}>
    <circle cx="5" cy="12" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="19" cy="12" r="2" />
  </svg>
);

/* Header dropdown */
export const ChevronDownIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={cx("stroke-current", className)}
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

/* Sidebar collapse/expand */
export const ChevronLeftIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={cx("stroke-current", className)}
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 6l-6 6 6 6" />
  </svg>
);
export const ChevronRightIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={cx("stroke-current", className)}
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 6l6 6-6 6" />
  </svg>
);
