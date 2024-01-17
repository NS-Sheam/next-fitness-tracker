import Footer from "@/components/shared/Footer/Footer";
import React from "react";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex justify-between">
      <Sidebar />
      <div className="w-[70vw] ms-auto">{children}</div>
    </div>
  );
};

export default DashboardLayout;
