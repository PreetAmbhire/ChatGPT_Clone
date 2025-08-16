import "../styles/globals.css";
import Sidebar from "../components/Layout/Sidebar";
import Header from "../components/Layout/Header";

export const metadata = {
  title: "ChatGPT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-screen font-inter bg-[#f7f7f8] dark:bg-[#202123] text-gray-900 dark:text-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
