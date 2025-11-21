import React, { useState } from "react";
import PageContainer from "../components/Layout/PageContainer.jsx";
import AvatarSelector from "../components/profile/AvatarSelector.jsx";

const Profile = () => {
  // avatar state – default ek emoji
  const [avatar, setAvatar] = useState("🧑‍💻");

  return (
    <PageContainer>
      <section className="max-w-5xl mx-auto mt-6">
        <h1 className="text-2xl md:text-3xl font-semibold">My Profile</h1>

        <div className="mt-4 bg-white rounded-3xl p-5 md:p-7">
          {/* Header row */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Personal Details</h2>
            <button className="rounded-full border border-gray-300 text-xs px-4 py-1">
              Edit
            </button>
          </div>

          {/* Content grid: form + avatar section */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-6">
            {/* LEFT: form fields */}
            <div className="space-y-3">
              {/* First + last name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-sm font-medium">First Name</label>
                  <input
                    type="text"
                    defaultValue="Roshani"
                    className="w-full rounded-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    defaultValue="Shah"
                    className="w-full rounded-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
                  />
                </div>
              </div>

              {/* Email + number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-sm font-medium">Email ID</label>
                  <input
                    type="email"
                    defaultValue="roshani123@gmail.com"
                    className="w-full rounded-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">Number</label>
                  <input
                    type="tel"
                    defaultValue="+91 9920587654"
                    className="w-full rounded-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
                  />
                </div>
              </div>

              {/* Gender + DOB */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-sm font-medium">Gender</label>
                  <div className="flex gap-4 text-xs text-gray-700">
                    <label className="flex items-center gap-1">
                      <input type="radio" name="gender" defaultChecked />
                      <span>Male</span>
                    </label>
                    <label className="flex items-center gap-1">
                      <input type="radio" name="gender" />
                      <span>Female</span>
                    </label>
                    <label className="flex items-center gap-1">
                      <input type="radio" name="gender" />
                      <span>Other</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium">DOB</label>
                  {/* day / month / year inputs */}
                  <div className="grid grid-cols-3 gap-2">
                    <input
                      defaultValue="01"
                      className="rounded-full border border-gray-200 px-3 py-2 text-sm text-center focus:outline-none focus:ring-2 focus:ring-violet-300"
                    />
                    <input
                      defaultValue="10"
                      className="rounded-full border border-gray-200 px-3 py-2 text-sm text-center focus:outline-none focus:ring-2 focus:ring-violet-300"
                    />
                    <input
                      defaultValue="2000"
                      className="rounded-full border border-gray-200 px-3 py-2 text-sm text-center focus:outline-none focus:ring-2 focus:ring-violet-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: avatar */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-pink-50 flex items-center justify-center text-4xl">
                {avatar}
              </div>
              <button className="mt-2 rounded-full border border-gray-300 text-xs px-4 py-1">
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
