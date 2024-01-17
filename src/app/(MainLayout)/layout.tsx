import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
