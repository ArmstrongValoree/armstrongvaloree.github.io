import heroImage from "../assets/links-hero.png";
import secondaryImage from "../assets/links-secondary.png";
import "./Links.css";

const links = [
  {
    title: "GitHub",
    url: "https://github.com/armstrongvaloree",
    description:
      "Explore my repositories and follow along as I build projects across the full stack — from MERN apps to Spring Boot APIs and React Native mobile apps.",
    icon: "🐙",
    label: "View GitHub Profile",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/valoree-armstrong-462511395",
    description:
      "Connect with me professionally. My LinkedIn highlights my transition from healthcare and education administration into full stack development.",
    icon: "💼",
    label: "View LinkedIn Profile",
  },
  {
    title: "CodeBoxx Academy",
    url: "https://codeboxx.biz",
    description:
      "The intensive full stack bootcamp where I trained. CodeBoxx covers the MERN stack, Spring Boot, React Native, DevOps, and more across 16 modules.",
    icon: "🚀",
    label: "Visit CodeBoxx Academy",
  },
];

function Links() {
  return (
    <div className="links-page">
      {/* Page Header */}
      <section className="links-header">
        <h1 className="links-title">Links</h1>
        <div className="links-accent"></div>
        <p className="links-subtitle">
          A curated collection of places where you can find my work, connect
          with me, and learn more about my journey.
        </p>
      </section>

      {/* Links Section */}
      <section className="links-content">
        <div className="page-center">
          <div className="links-layout">
            <div className="links-image">
              <img
                src={heroImage}
                alt="Abstract illustration representing connections and resources"
              />
            </div>

            <div className="links-grid">
              {links.map((link) => (
                <a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-card"
                >
                  <span className="link-icon">{link.icon}</span>
                  <div className="link-body">
                    <h2 className="link-title">{link.title}</h2>
                    <p className="link-description">{link.description}</p>
                    <span className="link-cta">{link.label} →</span>
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
              <h2 className="section-title">Always Learning</h2>
              <p className="secondary-description">
                My journey into tech is fueled by curiosity and a commitment to
                continuous growth. Whether it is exploring new frameworks,
                solving LeetCode challenges, or building projects that bridge my
                background in people-centered work with modern technology — I am
                always moving forward.
              </p>
            </div>
            <div className="secondary-image">
              <img
                src={secondaryImage}
                alt="Abstract illustration representing learning and knowledge sharing"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Links;
