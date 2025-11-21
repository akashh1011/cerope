import React from "react";
import { Link } from "react-router-dom";
import PageContainer from "../components/Layout/PageContainer.jsx";
import AuthCard from "../components/auth/AuthCard.jsx";
import AuthSideImage from "../components/auth/AuthSideImage.jsx";

import signinImage from "../assets/signin.png"

const SignIn = () => {
  return (
    <PageContainer>
      <section className="max-w-5xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT - form */}
        <div className="bg-white rounded-3xl p-6 md:p-8">
          <AuthCard
            title="Welcome Back to Cerope"
            subtitle="Your personalized fashion journey awaits."
          >
            <form className="space-y-3">
              {/* Email */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Email</label>
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

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-gray-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  <span>Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Sign in button */}
              <button
                type="submit"
                className="w-full rounded-full bg-black text-white text-sm py-2.5 mt-1"
              >
                Sign In
              </button>

              {/* OR separator */}
              <div className="flex items-center gap-2 text-xs text-gray-400 my-2">
                <span className="flex-1 h-px bg-gray-200" />
                <span>or</span>
                <span className="flex-1 h-px bg-gray-200" />
              </div>

              {/* Social buttons */}
              <div className="flex gap-3">
                <button
                  type="button"
                  className="flex-1 rounded-full border border-gray-200 bg-white py-2 text-xs"
                >
                  G Google
                </button>
                <button
                  type="button"
                  className="flex-1 rounded-full border border-gray-200 bg-white py-2 text-xs"
                >
                   Apple
                </button>
              </div>

              {/* Switch to sign up */}
              <p className="text-xs text-center text-gray-600 mt-2">
                Don&apos;t have an account?{" "}
                <Link to="/signup" className="text-violet-500 font-medium">
                  Sign up
                </Link>
              </p>
            </form>
          </AuthCard>
        </div>

        {/* RIGHT image */}
        <div className="bg-white rounded-3xl p-4 hidden md:block">
          <AuthSideImage
            src={signinImage}
            alt="Sign in illustration"
          />
        </div>
      </section>
    </PageContainer>
  );
};

export default SignIn;
