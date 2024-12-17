import React, { useEffect, useState } from "react";

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.getAttribute("data-theme") === "dark"
  );

  useEffect(() => {
    // Update the `data-theme` attribute on the `<html>` element based on the toggle state
    document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // Toggle the dark mode state
  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

  return (
    <button
      className="btn btn-link"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <i className="bi bi-sun-fill" style={{ fontSize: "1.5rem", color: "gold" }}></i>
      ) : (
        <i className="bi bi-moon-fill" style={{ fontSize: "1.5rem", color: "blue" }}></i>
      )}
    </button>
  );
}

export default ThemeToggle;
