import React from "react";

// Emoji avatars ka dummy list
const AVATARS = ["🧑‍💻", "🧑‍🎨", "😎", "😊", "🤓", "🧔", "👩", "👩🏽‍🦱"];

const AvatarSelector = ({ value, onChange }) => {
  return (
    <div className="mt-3 border border-gray-200 rounded-2xl p-3">
      <p className="text-xs text-gray-500 mb-2">Choose your avatar</p>
      <div className="grid grid-cols-4 gap-2">
        {AVATARS.map((a) => (
          <button
            key={a}
            type="button"
            onClick={() => onChange(a)}
            className={`h-10 rounded-xl border flex items-center justify-center text-xl ${
              value === a ? "border-violet-400 bg-violet-50" : "border-gray-200"
            }`}
          >
            {a}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AvatarSelector;
