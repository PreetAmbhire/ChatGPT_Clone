interface Props {
  type: "user" | "bot";
  text: string;
}

export default function Chat({ type, text }: Props) {
  const isUser = type === "user";
  const bgColor = isUser
    ? "bg-[#10a37f] text-white"
    : "bg-[#444654] text-white";
  const justify = isUser ? "justify-end" : "justify-start";

  return (
    <div className={`flex ${justify}`}>
      <div className={`px-4 py-2 rounded-lg max-w-xs break-words ${bgColor}`}>
        {text}
      </div>
    </div>
  );
}
