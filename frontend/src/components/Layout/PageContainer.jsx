import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const PageContainer = ({ children, showFooter = true }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* 
        flex-1 = navbar aur footer ke beech ka area
        max-w-5xl = content ko center mein rakhna (jaise Figma)
      */}
      <main className="flex-1 px-3 sm:px-4 lg:px-8 py-4 sm:py-6">
        <div className="max-w-5xl mx-auto">{children}</div>
      </main>

      {showFooter && <Footer />}
    </div>
  );
};

export default PageContainer;
