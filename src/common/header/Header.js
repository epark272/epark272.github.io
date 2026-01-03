import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") || "modern";
    setTheme(stored);
    document.documentElement.setAttribute("data-theme", stored);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "modern" ? "light" : "modern"));
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-blue-600 focus:text-white focus:rounded"
      >
        Skip to main content
      </a>
      <header className="navbar bg-base-100/80 backdrop-blur border-b border-base-300 sticky top-0 z-20" role="banner">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl font-semibold tracking-tight" aria-current="page">
          Edward Park
        </Link>
      </div>

      <div className="navbar-end flex items-center gap-2">
        <button
          type="button"
          className="btn btn-ghost btn-square focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "modern" ? "light" : "dark"} mode`}
        >
          {theme === "modern" ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </div>
    </header>
    </>
  );
}
