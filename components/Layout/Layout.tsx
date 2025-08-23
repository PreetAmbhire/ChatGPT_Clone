"use client";
import React, { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type Props = { children: ReactNode };

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="dark">
      <div className="flex h-screen bg-[#343541] text-[#e5e7eb]">
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
