import React from "react";

// ye wrapper hai jo title + subtitle + form content dikhata hai
const AuthCard = ({ title, subtitle, children }) => {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-semibold mb-1">{title}</h1>
      {subtitle && (
        <p className="text-sm text-gray-500 mb-4 max-w-sm">{subtitle}</p>
      )}
      <div className="mt-2">{children}</div>
    </div>
  );
};

export default AuthCard;
