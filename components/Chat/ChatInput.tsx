interface Props {
  input: string;
  setInput: (val: string) => void;
  sendMessage: () => void;
}

export default function ChatInput({ input, setInput, sendMessage }: Props) {
  return (
    <div className="border-t border-gray-300 dark:border-gray-700 p-4 flex gap-2">
      <input
        className="flex-1 bg-[#e5e5ea] dark:bg-[#40414f] text-gray-900 dark:text-gray-100 rounded-md px-4 py-2 focus:outline-none placeholder-gray-500 dark:placeholder-gray-400"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button
        onClick={sendMessage}
        className="bg-[#10a37f] hover:bg-[#0e8c6b] text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </div>
  );
}
