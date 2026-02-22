// ===============================
// FILE 2: components/ProfileCard.jsx
// ===============================
import React from "react";
import { useTheme } from "../context/ThemeContext";

// Deep child component
// Notice: NO props passed
// Theme is accessed directly via Context
export default function ProfileCard() {
  const { theme } = useTheme();

  return (
    <div
      className={`p-6 rounded-2xl shadow-lg ${
        theme === "light" ? "bg-white" : "bg-gray-800 text-white"
      }`}
    >
      <h2 className="text-xl font-semibold">User Profile</h2>
      <p className="text-sm opacity-70">Theme applied via Context</p>
    </div>
  );
}