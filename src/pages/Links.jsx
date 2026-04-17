import heroImage from "../assets/links-hero.webp";
import secondaryImage from "../assets/links-secondary.webp";
import { useTranslation } from "../hooks/useTranslation";
import "./Links.css";

const linkKeys = [
  { key: "github", url: "https://github.com/armstrongvaloree", icon: "🐙" },
  { key: "linkedin", url: "https://www.linkedin.com/in/valoree-armstrong-462511395", icon: "💼" },
  { key: "codeboxx", url: "https://codeboxx.biz", icon: "🚀" },
];

function Links() {
  const { t } = useTranslation();

  return (
    <div className="links-page">
      {/* Page Header */}
      <section className="links-header">
        <h1 className="links-title">{t.links.title}</h1>
        <div className="links-accent"></div>
        <p className="links-subtitle">{t.links.subtitle}</p>
      </section>

      {/* Links Section */}
      <section className="links-content">
        <div className="page-center">
          <div className="links-layout">
            <div className="links-image">
              <img
                src={heroImage}
                alt="Abstract illustration representing connections and resources"
                loading="lazy"
              />
            </div>
            <div className="links-grid">
              {linkKeys.map((item) => (
                <a
                  key={item.key}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-card"
                >
                  <span className="link-icon">{item.icon}</span>
                  <div className="link-body">
                    <h2 className="link-title">{t.links[item.key].title}</h2>
                    <p className="link-description">{t.links[item.key].description}</p>
                    <span className="link-cta">{t.links[item.key].label} →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Image Section */}
      <section className="links-secondary">
        <div className="page-center">
          <div className="secondary-layout">
            <div className="secondary-text">
              <h2 className="section-title">{t.links.alwaysLearningTitle}</h2>
              <p className="secondary-description">{t.links.alwaysLearningText}</p>
            </div>
            <div className="secondary-image">
              <img
                src={secondaryImage}
                alt="Abstract illustration representing learning and knowledge sharing"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Links;
