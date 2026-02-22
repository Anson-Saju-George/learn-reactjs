// ===============================
// FILE 4: App.jsx (ROOT)
// ===============================
import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import ProfileCard from "./components/ProfileCard";
import ThemeToggle from "./components/ThemeToggle";

// Root of the app
// Provider wraps EVERYTHING
// So any component can access theme
export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 p-6 space-y-6">
        {/* Component 1 uses context */}
        <ThemeToggle />

        {/* Component 2 also uses same context */}
        <ProfileCard />
      </div>
    </ThemeProvider>
  );
}
