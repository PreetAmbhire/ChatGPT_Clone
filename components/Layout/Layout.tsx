"use client";
import React, { ReactNode, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type Props = { children: ReactNode };

const Layout: React.FC<Props> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        the header width should depend on the sidebar, it should occupy the
        space left by the side bar, when the side bar is open the header width
        will be a lil smaller and when it is closed the headder width will be a
        lil longer
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
