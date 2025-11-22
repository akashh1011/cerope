import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ceropeLogo from "../../assets/cerope_logo.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isProfilePage = location.pathname === "/profile";

  const handleLogout = () => {
    // saare tokens / user clear
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");

    navigate("/signin");
  };

  return (
    <header className="flex items-center gap-3 px-4 py-2 mx-4 mt-3 bg-white rounded-full shadow-sm md:mx-8 md:gap-5 md:px-6">
      {/* Left logo */}
      <div className="flex items-center gap-2">
        <img
          src={ceropeLogo}
          alt="Cerope logo"
          className="object-contain w-auto h-7"
        />
        <span className="text-sm font-semibold md:text-base">Cerope</span>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3 ml-auto">
        <button className="flex items-center gap-1 px-3 py-1 text-xs border rounded-full border-violet-200 bg-gradient-to-r from-violet-50 to-pink-50 md:text-sm">
          <span>Explore More</span>
          <span className="text-base leading-none">+</span>
        </button>

        {/* 👇 Logout sirf profile page pe */}
        {isProfilePage && (
          <button
            onClick={handleLogout}
            className="px-3 py-1 text-xs text-white bg-black rounded-full md:text-sm"
          >
            Logout
          </button>
        )}

        {/* avatar */}
        <div className="flex items-center justify-center w-8 h-8 text-lg bg-pink-100 rounded-full">
          👩‍🎨
        </div>
      </div>
    </header>
  );
};

export default Navbar;
