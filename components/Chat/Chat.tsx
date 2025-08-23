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

  // Default bot greeting if content is empty
  const displayContent =
    !content && !isUser ? "Welcome! How can I help you today?" : content;

  return (
    <div
      className={`w-full flex mb-2 ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        role="button"
        onClick={onSelect}
        className={`group relative flex px-4 py-3 rounded-2xl max-w-[50%] ${
          isUser ? "bg-[#444654]" : "bg-[#343541]"
        } ${selected ? "ring-2 ring-[#10a37f]" : ""}`}
      >
        <div className="prose prose-sm max-w-none break-words text-left text-[#ececf1] prose-headings:mb-1 prose-headings:mt-3 dark:prose-invert">
          <ReactMarkdown>{displayContent}</ReactMarkdown>
        </div>

        {!isUser && <MessageActions text={displayContent} />}
      </div>
    </div>
  );
}
