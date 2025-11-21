import React from "react"; // React library import
import ReactDOM from "react-dom/client"; // Browser me render karne ke liye
import { BrowserRouter } from "react-router-dom"; // Routing support
import App from "./App.jsx"; // Main App component
import "./index.css"; // Tailwind + global CSS

ReactDOM.createRoot(document.getElementById("root")).render(
  // React StrictMode extra check karta hai dev time
  <React.StrictMode>
    {/* BrowserRouter se `<Route>` etc kaam karte hain */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
