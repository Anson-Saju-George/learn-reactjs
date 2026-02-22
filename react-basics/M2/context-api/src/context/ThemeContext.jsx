// ===============================
// FILE 1: context/ThemeContext.jsx
// ===============================
import React, { createContext, useContext, useState } from "react";

// Create a global context object
// This acts like a shared data channel
const ThemeContext = createContext();

// Provider wraps the app and exposes shared state
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Everything inside Provider can access theme
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to consume context safely
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
}
