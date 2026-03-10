import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo-link">
          <img
            src={logo}
            alt="Valoree Armstrong - Full Stack Developer logo"
            className="logo"
          />
        </Link>
        <nav className="desktop-nav">
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/links">Links</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
      <nav className="mobile-nav">
        <Link to="/" title="Home">
          🏠
        </Link>
        <Link to="/portfolio" title="Portfolio">
          📄
        </Link>
        <Link to="/links" title="Links">
          🔗
        </Link>
        <Link to="/contact" title="Contact">
          ✉️
        </Link>
      </nav>
    </header>
  );
}

export default Header;
