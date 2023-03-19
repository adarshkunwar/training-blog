import React from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const Layout = ({ children }) => {
  return (
    <div>
      <TopBar />
      <Sidebar />
    </div>
  );
};

export default Layout;
