import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "../hooks/useTranslation";
import "./Header.css";

function Header() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });

  const { t, language, switchLanguage } = useTranslation();

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
          <Link to="/">{t.nav.home}</Link>
          <Link to="/portfolio">{t.nav.portfolio}</Link>
          <Link to="/links">{t.nav.links}</Link>
          <Link to="/contact">{t.nav.contact}</Link>
          <div className="language-switcher">
            <button
              className={language === "en" ? "lang-btn active" : "lang-btn"}
              onClick={() => switchLanguage("en")}
            >
              EN
            </button>
            <button
              className={language === "fr" ? "lang-btn active" : "lang-btn"}
              onClick={() => switchLanguage("fr")}
            >
              FR
            </button>
            <button
              className={language === "sw" ? "lang-btn active" : "lang-btn"}
              onClick={() => switchLanguage("sw")}
            >
              SW
            </button>
          </div>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            title="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </nav>
      </div>
      <nav className="mobile-nav">
        <Link to="/" title={t.nav.home}>
          🏠
        </Link>
        <Link to="/portfolio" title={t.nav.portfolio}>
          📄
        </Link>
        <Link to="/links" title={t.nav.links}>
          🔗
        </Link>
        <Link to="/contact" title={t.nav.contact}>
          ✉️
        </Link>
        <button
          className="theme-toggle-mobile"
          onClick={toggleTheme}
          title="Toggle theme"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
        <div className="language-switcher-mobile">
          <button
            className={language === "en" ? "lang-btn active" : "lang-btn"}
            onClick={() => switchLanguage("en")}
          >
            EN
          </button>
          <button
            className={language === "fr" ? "lang-btn active" : "lang-btn"}
            onClick={() => switchLanguage("fr")}
          >
            FR
          </button>
          <button
            className={language === "sw" ? "lang-btn active" : "lang-btn"}
            onClick={() => switchLanguage("sw")}
          >
            SW
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
