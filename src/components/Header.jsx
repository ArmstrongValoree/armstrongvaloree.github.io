import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo-link">
          <img
            src="/logo.png"
            alt="Valoree Armstrong - Full Stack Developer logo"
            className="logo"
          />
        </Link>
        <nav className="desktop-nav">
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/links">Links</Link>
          <Link to="/contact">Contact</Link>
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </nav>
      </div>
      <nav className="mobile-nav">
        <Link to="/" title="Home">🏠</Link>
        <Link to="/portfolio" title="Portfolio">📄</Link>
        <Link to="/links" title="Links">🔗</Link>
        <Link to="/contact" title="Contact">✉️</Link>
        <button className="theme-toggle-mobile" onClick={toggleTheme} title="Toggle theme">
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
}

export default Header;

