import React from "react";

// right side large image (desktop), mobile me hum use hide / differently show kar sakte
const AuthSideImage = ({ src, alt }) => {
  return (
    <div className="w-full h-full rounded-3xl overflow-hidden">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default AuthSideImage;
