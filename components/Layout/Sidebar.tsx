import { UserCircleIcon } from "../Icons/UserCircleIcon";

export default function Sidebar() {
  return (
    <aside className="w-80 bg-[#f5f5f5] dark:bg-[#202123] flex flex-col p-4 space-y-4">
      <h1 className="text-xl font-semibold">ChatGPT</h1>
      <button className="bg-[#10a37f] hover:bg-[#0e8c6b] text-white px-4 py-2 rounded">
        New Chat
      </button>
      <div className="mt-4 flex items-center space-x-2">
        <UserCircleIcon />
        <span className="text-sm text-gray-700 dark:text-gray-300">
          Username
        </span>
      </div>
    </aside>
  );
}
