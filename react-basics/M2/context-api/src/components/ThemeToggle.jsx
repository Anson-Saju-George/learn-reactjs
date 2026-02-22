// ===============================
// FILE 3: components/ThemeToggle.jsx
// ===============================
import React from "react";
import { useTheme } from "../context/ThemeContext";

// Another component using the SAME global state
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded-xl shadow transition ${
        theme === "light"
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >
      Toggle Theme ({theme})
    </button>
  );
}