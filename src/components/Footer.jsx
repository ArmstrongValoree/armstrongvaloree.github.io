import { useTranslation } from "../hooks/useTranslation";
import "./Footer.css";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-contact">
          <a href="mailto:armstrongvaloree@gmail.com" className="footer-link">
            armstrongvaloree@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/valoree-armstrong-462511395"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/armstrongvaloree"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} Valoree Armstrong. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}

export default Footer;