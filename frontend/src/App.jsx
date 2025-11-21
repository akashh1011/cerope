import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Routing components

// Saare pages import
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import UserCreateAccount from "./pages/UserCreateAccount.jsx";
import Profile from "./pages/Profile.jsx";

const App = () => {
  return (
    // Routes ke andar alag-alag path define karte hain
    <Routes>
      {/* root pe aaye to signin pe redirect */}
      <Route path="/" element={<Navigate to="/signin" replace />} />

      {/* har page ke liye ek Route */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/user-setup" element={<UserCreateAccount />} />
      <Route path="/profile" element={<Profile />} />

      {/* koi bhi random URL ho to signin pe redirect */}
      <Route path="*" element={<Navigate to="/signin" replace />} />
    </Routes>
  );
};

export default App;
