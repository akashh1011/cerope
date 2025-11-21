import React from "react";
import PageContainer from "../components/Layout/PageContainer.jsx";
import AuthSideImage from "../components/auth/AuthSideImage.jsx";

const UserCreateAccount = () => {
  return (
    <PageContainer>
      <section className="max-w-5xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6">
        {/* LEFT form */}
        <div className="bg-white rounded-3xl p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">
            Set up your User account
          </h1>

          <form className="space-y-3">
            {/* First + Last name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-sm font-medium">First Name *</label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="w-full rounded-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">Last Name *</label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  className="w-full rounded-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
                />
              </div>
            </div>

            {/* Profile picture */}
            <div className="space-y-1">
              <label className="text-sm font-medium">Profile Picture</label>
              <button
                type="button"
                className="w-full rounded-full border border-dashed border-gray-300 px-4 py-2.5 text-xs text-gray-500 text-left"
              >
                Select Profile Picture
              </button>
            </div>

            {/* DOB + Style preference */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-sm font-medium">Date of Birth *</label>
                <input
                  type="date"
                  className="w-full rounded-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium">
                  Style Preference *
                </label>
                <div className="flex gap-4 text-xs text-gray-700">
                  <label className="flex items-center gap-1">
                    <input type="radio" name="style" />
                    <span>Men</span>
                  </label>
                  <label className="flex items-center gap-1">
                    <input type="radio" name="style" />
                    <span>Women</span>
                  </label>
                  <label className="flex items-center gap-1">
                    <input type="radio" name="style" />
                    <span>Both</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Phone + Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-sm font-medium">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full rounded-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">Country *</label>
                <input
                  type="text"
                  placeholder="Enter country"
                  className="w-full rounded-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
                />
              </div>
            </div>

            {/* City */}
            <div className="space-y-1">
              <label className="text-sm font-medium">City</label>
              <input
                type="text"
                placeholder="Select location"
                className="w-full rounded-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
              />
            </div>

            {/* Continue button */}
            <button
              type="submit"
              className="mt-3 rounded-full bg-black text-white text-sm py-2.5 px-10"
            >
              Continue
            </button>
          </form>
        </div>

        {/* RIGHT image (desktop only) */}
        <div className="bg-white rounded-3xl p-4 hidden md:block">
          <AuthSideImage
            src="https://via.placeholder.com/450x550.png?text=User+Setup+Art"
            alt="User setup illustration"
          />
        </div>
      </section>
    </PageContainer>
  );
};

export default UserCreateAccount;
