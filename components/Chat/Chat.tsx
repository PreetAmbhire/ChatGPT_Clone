import ReactMarkdown from "react-markdown";
import MessageActions from "./MessageActions";
import { DotsIcon, Pencil } from "../Icons";

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

  // Default bot greeting if content is empty
  const displayContent =
    !content && !isUser ? "Welcome! How can I help you today?" : content;

  return (
    <div
      className={`w-full flex mb-2 ${isUser ? "justify-end" : "justify-start"}`}
    >
      {
        // <div style={{ width: "200px" }}>
        //   <Pencil />
        // </div>
      }
      <div
        role="button"
        onClick={onSelect}
        className={`group relative flex px-4 py-3 rounded-2xl ${
          isUser
            ? "bg-white shadow-sm ring-1 ring-[#e5e7eb] dark:bg-[#444654] dark:ring-0"
            : ""
        } ${selected ? "ring-2 ring-[#10a37f]" : ""} max-w-[50%]`}
      >
        <div className="prose prose-sm max-w-none break-words text-left text-[#0c0c0d] prose-headings:mb-1 prose-headings:mt-3 dark:prose-invert dark:text-[#ececf1]">
          <ReactMarkdown>{displayContent}</ReactMarkdown>
        </div>

        {!isUser && <MessageActions text={displayContent} />}
      </div>
    </div>
  );
}
