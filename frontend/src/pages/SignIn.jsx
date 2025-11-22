import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageContainer from "../components/Layout/PageContainer.jsx";
import AuthCard from "../components/auth/AuthCard.jsx";
import AuthSideImage from "../components/auth/AuthSideImage.jsx";
import signinImage from "../assets/signin.png";
import { loginUserApi, googleLoginApi } from "../services/authApi.js";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ yaha Google button render hoga
  const googleButtonRef = useRef(null);

  // -----------------------------
  // Normal Email/Password Login
  // -----------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await loginUserApi({ email, password });

      const { accessToken, refreshToken, user } = data;

      if (remember) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
      } else {
        sessionStorage.setItem("accessToken", accessToken);
        sessionStorage.setItem("refreshToken", refreshToken);
      }

      localStorage.setItem("user", JSON.stringify(user));

      navigate("/profile");
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------
  // Google Sign-in (GSI Button)
  // -----------------------------
  useEffect(() => {
    // agar script load nahi hua to kuch mat karo
    if (!window.google || !window.google.accounts || !googleButtonRef.current) {
      return;
    }

    // initialize with callback
    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: async (response) => {
        try {
          // yaha se loading start – backend call se pehle
          setGoogleLoading(true);

          const credential = response.credential; // id_token
          const data = await googleLoginApi({ idToken: credential });

          const { accessToken, refreshToken, user } = data;

          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          localStorage.setItem("user", JSON.stringify(user));

          navigate("/profile");
        } catch (err) {
          console.error(err);
          setError(err.message || "Google Sign-In failed");
        } finally {
          setGoogleLoading(false);
        }
      },
    });

    window.google.accounts.id.renderButton(googleButtonRef.current, {
      type: "standard",
      theme: "outline",
      text: "continue_with",
      shape: "pill",
      size: "large",
      width: "100",
    });
  });

  return (
    <PageContainer>
      <section className="grid max-w-5xl grid-cols-1 gap-6 mx-auto mt-6 md:grid-cols-2">
        {/* LEFT - form */}
        <div className="p-6 bg-white rounded-3xl md:p-8">
          <AuthCard
            title="Welcome Back to Cerope"
            subtitle="Your personalized fashion journey awaits."
          >
            <form className="space-y-3" onSubmit={handleSubmit}>
              {/* Error message */}
              {error && (
                <p className="px-3 py-2 text-xs text-red-500 border border-red-100 rounded-lg bg-red-50">
                  {error}
                </p>
              )}

              {/* Email */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-1">
                <label className="text-sm font-medium">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full rounded-full border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-300"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-gray-600">
                  <input
                    type="checkbox"
                    className="w-4 h-4 border-gray-300 rounded"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  <span>Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => {
                    // TODO: forgot password page
                  }}
                >
                  Forgot Password?
                </button>
              </div>

              {/* Sign in button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-black text-white text-sm py-2.5 mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>

              {/* OR separator */}
              <div className="flex items-center gap-2 my-2 text-xs text-gray-400">
                <span className="flex-1 h-px bg-gray-200" />
                <span>or</span>
                <span className="flex-1 h-px bg-gray-200" />
              </div>

              {/* Social buttons */}
              <div className="flex gap-3">
                {/* ✅ Google button yaha render hoga */}
                <div className="flex-1">
                  <div ref={googleButtonRef} className="w-full" />
                  {googleLoading && (
                    <p className="mt-1 text-[10px] text-gray-400">
                      Signing in with Google...
                    </p>
                  )}
                </div>

                {/* Apple placeholder */}
                <button
                  type="button"
                  className="flex-1 py-2 text-xs bg-white border border-gray-200 rounded-full"
                >
                   Continue with Apple
                </button>
              </div>

              {/* Switch to sign up */}
              <p className="mt-2 text-xs text-center text-gray-600">
                Don&apos;t have an account?{" "}
                <Link to="/signup" className="font-medium text-violet-500">
                  Sign up
                </Link>
              </p>
            </form>
          </AuthCard>
        </div>

        {/* RIGHT image */}
        <div className="hidden p-4 bg-white rounded-3xl md:block">
          <AuthSideImage src={signinImage} alt="Sign in illustration" />
        </div>
      </section>
    </PageContainer>
  );
};

export default SignIn;
