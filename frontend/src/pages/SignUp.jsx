import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageContainer from "../components/Layout/PageContainer.jsx";
import AuthCard from "../components/auth/AuthCard.jsx";
import AuthSideImage from "../components/auth/AuthSideImage.jsx";
import { GoogleLogin } from "@react-oauth/google";

import signupImage from ".././assets/signup.png";

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 48 48">
    <path
      fill="#FFC107"
      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
    ></path>
    <path
      fill="#FF3D00"
      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
    ></path>
    <path
      fill="#4CAF50"
      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
    ></path>
    <path
      fill="#1976D2"
      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574c0,0,0.001-0.001,0.002-0.001l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
    ></path>
  </svg>
);

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false); // optional
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const API_URL = `${import.meta.env.VITE_BASE_URL}/api/v1/users/register`;
  const GOOGLE_AUTH_URL = `${
    import.meta.env.VITE_BASE_URL
  }/api/v1/users/auth/google`;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      return setError("Please fill all fields.");
    }

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match.");
    }

    if (!formData.agree) {
      return setError("You must agree to the Terms & Privacy Policy.");
    }

    try {
      setLoading(true);

      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Signup failed. Please try again.");
      }

      setSuccess(data.message || "Account created successfully!");

      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        agree: false,
      });

      setTimeout(() => {
        navigate("/signin");
      }, 800);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Google signup handler
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      setGoogleLoading(true);
      setError("");
      setSuccess("");

      const idToken = credentialResponse.credential; // ID token

      if (!idToken) {
        throw new Error("Google token missing");
      }

      const res = await fetch(GOOGLE_AUTH_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Google signup failed");
      }

      if (data.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
      }
      if (data.refreshToken) {
        localStorage.setItem("refreshToken", data.refreshToken);
      }

      setSuccess(data.message || "Logged in with Google!");
      setTimeout(() => {
        navigate("/");
      }, 800);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <PageContainer>
      <section className="grid max-w-5xl grid-cols-1 gap-6 mx-auto mt-6 md:grid-cols-2">
        {/* LEFT part - form card */}
        <div className="p-6 bg-white rounded-3xl md:p-8">
          <AuthCard title="Set up Your Cerope Account">
            <form className="space-y-3" onSubmit={handleSubmit}>
              {error && (
                <p className="px-3 py-2 text-xs text-red-500 border border-red-200 bg-red-50 rounded-2xl">
                  {error}
                </p>
              )}
              {success && (
                <p className="px-3 py-2 text-xs text-green-600 border border-green-200 bg-green-50 rounded-2xl">
                  {success}
                </p>
              )}

              {/* Name */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
                />
              </div>

              {/* Password */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full rounded-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
                />
              </div>

              {/* Confirm Password */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full rounded-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
                />
              </div>

              {/* Checkbox */}
              <label className="flex items-start gap-2 text-xs text-gray-600">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
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
                disabled={loading || googleLoading}
                className="w-full rounded-full bg-black text-white text-sm py-2.5 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Creating account..." : "Sign Up"}
              </button>
              <div className="flex items-center gap-3 my-2">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-xs text-gray-400">or</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
              <div className="mt-5">
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={() => {
                    console.error("Google login error");
                    setError("Google login failed");
                  }}
                  className="flex items-center justify-center w-full gap-3 px-4 py-3 text-sm font-medium bg-white border rounded-lg shadow-sm border-slate-300 text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                >
                  <GoogleIcon />
                  Continue with google
                </GoogleLogin>
              </div>

              {/* Switch to Sign in */}
              <p className="mt-2 text-xs text-center text-gray-600">
                Already a member?{" "}
                <Link to="/signin" className="font-medium text-violet-500">
                  Sign in
                </Link>
              </p>
            </form>
          </AuthCard>
        </div>

        {/* RIGHT part - big image */}
        <div className="hidden p-4 bg-white rounded-3xl md:block">
          <AuthSideImage src={signupImage} alt="Sign up illustration" />
        </div>
      </section>
    </PageContainer>
  );
};

export default SignUp;
