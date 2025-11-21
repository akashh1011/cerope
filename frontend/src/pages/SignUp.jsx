import React from "react";
import { Link } from "react-router-dom";
import PageContainer from "../components/Layout/PageContainer.jsx";
import AuthCard from "../components/auth/AuthCard.jsx";
import AuthSideImage from "../components/auth/AuthSideImage.jsx";

import signupImage from ".././assets/signup.png"
const SignUp = () => {
  return (
    <PageContainer>
      {/* auth layout: desktop me 2 column, mobile me 1 */}
      <section className="max-w-5xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT part - form card */}
        <div className="bg-white rounded-3xl p-6 md:p-8">
          <AuthCard title="Set up Your Cerope Account">
            <form className="space-y-3">
              {/* Name */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
                />
              </div>

              {/* Password */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full rounded-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
                />
              </div>

              {/* Confirm Password */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full rounded-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
                />
              </div>

              {/* Checkbox */}
              <label className="flex items-start gap-2 text-xs text-gray-600">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 rounded border-gray-300"
                />
                <span>
                  I agree to Cerope&apos;s Terms of Service &amp; Privacy
                  Policy.
                </span>
              </label>

              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-full bg-black text-white text-sm py-2.5 mt-2"
              >
                Sign Up
              </button>

              {/* Switch to Sign in */}
              <p className="text-xs text-center text-gray-600 mt-2">
                Already a member?{" "}
                <Link to="/signin" className="text-violet-500 font-medium">
                  Sign in
                </Link>
              </p>
            </form>
          </AuthCard>
        </div>

        {/* RIGHT part - big image, mobile me top/bottom ho sakti hai */}
        <div className="bg-white rounded-3xl p-4 hidden md:block">
          <AuthSideImage
            src={signupImage}
            alt="Sign up illustration"
          />
        </div>
      </section>
    </PageContainer>
  );
};

export default SignUp;
