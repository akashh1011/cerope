import React from "react";
import ceropeLogo from "../../assets/cerope_logo.png";

const Navbar = () => {
  return (
    <header className="mx-4 md:mx-8 mt-3 rounded-full bg-white flex items-center gap-3 md:gap-5 px-4 md:px-6 py-2 shadow-sm">
      {/* Left logo */}
      <div className="flex items-center gap-2">
        {/* 👉 direct image, no circle */}
        <img
          src={ceropeLogo}
          alt="Cerope logo"
          className="h-7 w-auto object-contain"
        />
        <span className="font-semibold text-sm md:text-base">Cerope</span>
      </div>

      {/* Center search – mobile me hide */}
      <div className="hidden md:block flex-1">
        <input
          type="text"
          placeholder="Search ..."
          className="w-full rounded-full bg-gray-100 border-0 text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-300"
        />
      </div>

      {/* Right actions */}
      <div className="ml-auto flex items-center gap-3">
        <button className="rounded-full border border-violet-200 bg-gradient-to-r from-violet-50 to-pink-50 px-3 py-1 text-xs md:text-sm flex items-center gap-1">
          <span>Explore More</span>
          <span className="text-base leading-none">+</span>
        </button>
        {/* yaha avatar hi rahega (circle theek hai) */}
        <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-lg">
          👩‍🎨
        </div>
      </div>
    </header>
  );
};

export default Navbar;
