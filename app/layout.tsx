// app/layout.tsx
import "../styles/globals.css";
import Sidebar from "../components/Layout/Sidebar";

export const metadata = {
  title: "ChatGPT",
  icons: { icon: "/favicon.ico" },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-[#202123] text-[#ececf1]">
        <div className="flex h-screen w-screen overflow-hidden">
          <Sidebar />
          <main className="flex min-w-0 flex-1 flex-col">{children}</main>
        </div>
      </body>
    </html>
  );
}
