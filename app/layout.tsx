import "../styles/globals.css";
import Sidebar from "../components/Layout/Sidebar";
// import Header from "../components/Layout/Header";
export const metadata = { title: "ChatGPT", icons: { icon: "/favicon.ico" } };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <div className="flex h-screen w-screen overflow-hidden bg-[#f7f7f8] text-[#0c0c0d] dark:bg-[#202123] dark:text-[#ececf1]">
          <Sidebar />
          <div className="flex min-w-0 flex-1 flex-col">
            {/* <Header />  */}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
