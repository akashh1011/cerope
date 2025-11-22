import React from "react"; // React library import
import ReactDOM from "react-dom/client"; // Browser me render karne ke liye
import { BrowserRouter } from "react-router-dom"; // Routing support
import App from "./App.jsx"; // Main App component
import "./index.css"; // Tailwind + global CSS
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  // React StrictMode extra check karta hai dev time
  <React.StrictMode>
    {/* BrowserRouter se `<Route>` etc kaam karte hain */}
    <BrowserRouter>
       <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <App />
  </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
