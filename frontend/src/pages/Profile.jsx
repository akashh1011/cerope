import React, { useState } from "react";
import PageContainer from "../components/Layout/PageContainer.jsx";
import AvatarSelector from "../components/profile/AvatarSelector.jsx";
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const navigate = useNavigate();   
  const [avatar, setAvatar] = useState("🧑‍💻");
  const [user] = useState(() => {
    try {
      const stored = localStorage.getItem("user");
      return stored ? JSON.parse(stored) : null;
    } catch {
      console.error("Invalid user in storage");
      return null;
    }
  });

  const firstName = user?.name?.split(" ")[0] || "User";
  const lastName = user?.name?.split(" ").slice(1).join(" ") || "";

  return (
    <PageContainer>
      <section className="max-w-5xl mx-auto mt-6">
        <h1 className="text-2xl font-semibold md:text-3xl">My Profile</h1>

        <div className="p-5 mt-4 bg-white rounded-3xl md:p-7">
          {/* Header row */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Personal Details</h2>
            <button
            onClick={() => navigate("/user-setup")}  
             className="px-4 py-1 text-xs border border-gray-300 rounded-full">
              Edit
            </button>
          </div>

          {/* Content grid: form + avatar section */}
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-[1.6fr_1fr]">
            {/* LEFT: form fields */}
            <div className="space-y-3">
              {/* First + last name */}
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-sm font-medium">First Name</label>
                  <input
                    type="text"
                    defaultValue={firstName}
                    className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-300"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    defaultValue={lastName}
                    className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-300"
                  />
                </div>
              </div>

              {/* Email + number */}
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-sm font-medium">Email ID</label>
                  <input
                    type="email"
                    defaultValue={user?.email || ""}
                    className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-300"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">Number</label>
                  <input
                    type="tel"
                    defaultValue="+91 9920587654"
                    className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-300"
                  />
                </div>
              </div>

              {/* Gender + DOB etc. yaha pe baaki jo bhi tha tu same rakh sakta hai */}
            </div>

            {/* RIGHT: avatar */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-20 h-20 text-4xl rounded-full bg-pink-50">
                {avatar}
              </div>
              <button className="px-4 py-1 mt-2 text-xs border border-gray-300 rounded-full">
                Change Profile Picture
              </button>

              <AvatarSelector value={avatar} onChange={setAvatar} />
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Profile;
