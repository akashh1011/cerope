import { OAuth2Client } from "google-auth-library";
import { User } from "../models/user.model.js";

// ========================
// Google Client
// ========================
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Helper: send tokens + user
const sendTokensResponse = (user, res, message = "Success") => {
  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  // Optional: HTTP-only cookie me bhi bhej sakte ho
  // res.cookie("accessToken", accessToken, {
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV === "production",
  // });
  // res.cookie("refreshToken", refreshToken, {
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV === "production",
  // });

  return res.status(200).json({
    message,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      provider: user.provider || "local",
      avatar: user.avatar || null,
    },
    accessToken,
    refreshToken,
  });
};

// ========================
// Register (normal email + password)
// ========================
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Name, email and password are required" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const user = await User.create({
      name,
      email,
      password,
      provider: "local",
    });

    return sendTokensResponse(user, res, "User registered successfully");
  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// ========================
// Login (normal email + password)
// ========================
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });

    if (!user || user.provider === "google") {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    return sendTokensResponse(user, res, "Logged in successfully");
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// ========================
// Google Login / Signup
// ========================
// POST /api/auth/google
// body: { idToken: "..." }
export const googleLogin = async (req, res) => {
  try {
    const { idToken } = req.body;

    if (!idToken) {
      return res.status(400).json({ message: "ID token is required" });
    }

    // 1. Verify token
    const ticket = await googleClient.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { sub, email, name, picture } = payload; // sub = unique Google ID

    if (!email) {
      return res
        .status(400)
        .json({ message: "Email not found from Google account" });
    }

    // 2. Find or create user
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name: name || "No Name",
        email,
        googleId: sub,
        provider: "google",
        avatar: picture,
      });
    } else {
      // agar pehle local tha, ab google se aa raha hai, to provider update kar sakte ho
      if (!user.googleId) user.googleId = sub;
      if (!user.avatar && picture) user.avatar = picture;
      if (!user.provider) user.provider = "google";
      await user.save();
    }

    return sendTokensResponse(user, res, "Logged in with Google successfully");
  } catch (error) {
    console.error("Google login error:", error);
    return res.status(500).json({ message: "Google login failed" });
  }
};

// ========================
// Refresh Access Token (optional)
// ========================
import jwt from "jsonwebtoken";

export const refreshAccessToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(401).json({ message: "Refresh token required" });
    }

    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    const user = await User.findById(decoded._id);

    if (!user) {
      return res.status(401).json({ message: "Invalid refresh token" });
    }

    const newAccessToken = user.generateAccessToken();

    return res.status(200).json({
      message: "Access token refreshed",
      accessToken: newAccessToken,
    });
  } catch (error) {
    console.error("Refresh token error:", error);
    return res
      .status(401)
      .json({ message: "Invalid or expired refresh token" });
  }
};

// ========================
// Get current user (requires auth middleware)
// ========================
export const getCurrentUser = async (req, res) => {
  try {
    // auth middleware me req.user me _id set kiya hoga
    const userId = req.user?._id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error("Get current user error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
