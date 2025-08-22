import ReactMarkdown from "react-markdown";
import MessageActions from "./MessageActions";

export default function Chat({
  role,
  content,
  selected,
  onSelect,
}: {
  role: "user" | "assistant";
  content: string;
  selected?: boolean;
  onSelect?: () => void;
}) {
  const isUser = role === "user";

  return (
    <div className="w-full flex justify-center mb-2">
      <div
        role="button"
        onClick={onSelect}
        className={`group relative flex px-4 py-3 rounded-2xl ${
          isUser
            ? "bg-white shadow-sm ring-1 ring-[#e5e7eb] dark:bg-[#444654] dark:ring-0 ml-auto"
            : "ml-0" // removed bot bg
        } ${selected ? "ring-2 ring-[#10a37f]" : ""} max-w-[50%]`}
      >
        <div className="prose prose-sm max-w-none break-words text-left text-[#0c0c0d] prose-headings:mb-1 prose-headings:mt-3 dark:prose-invert dark:text-[#ececf1]">
          <ReactMarkdown>{content || "…"}</ReactMarkdown>
        </div>

        {!isUser && <MessageActions text={content} />}
      </div>
    </div>
  );
}
