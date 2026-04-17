// AI-generated images created using Microsoft Designer (designer.microsoft.com) and NanoBanana

import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import heroImage from "../assets/home-hero.webp";
import skillsImage from "../assets/home-skills.webp";
import avatar from "../assets/avatar.jpg";
import { useTranslation } from "../hooks/useTranslation";
import "./Home.css";

const skillKeys = ["react", "node", "database", "java", "auth"];
const skillIcons = {
  react: "⚛️",
  node: "🖥️",
  database: "🗄️",
  java: "☕",
  auth: "🔐",
};

const softSkillKeys = [
  "collaboration",
  "problemSolving",
  "communication",
  "attention",
];
const softSkillIcons = {
  collaboration: "🤝",
  problemSolving: "🧩",
  communication: "💬",
  attention: "🎯",
};

const featuredProjects = [
  {
    name: "Personal Portfolio",
    tech: ["React", "Vite", "Supabase", "GitHub Actions"],
    description:
      "A full stack personal portfolio site with authentication, a contact form with database persistence, and an authenticated back office for message management.",
    link: "/",
    external: false,
  },
  {
    name: "Rocket Food Delivery",
    tech: ["Spring Boot", "MySQL", "React Native", "Expo"],
    description:
      "A mobile food delivery app with a Spring Boot REST API backend, JWT authentication, and a React Native frontend for browsing restaurants and placing orders.",
    link: "https://github.com/armstrongvaloree",
    external: true,
  },
];

function Home() {
  const { t } = useTranslation();
  const skillCardsRef = useRef([]);
  const softCardsRef = useRef([]);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    skillCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    softCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home-intro">
        <img
          src={heroImage}
          alt="Abstract digital art representing full stack development"
          className="hero-bg"
        />
        <div className="intro-content">
          <div className="intro-avatar-wrapper">
            <img
              src={avatar}
              alt="Valoree Armstrong - Full Stack Developer"
              className="intro-avatar"
            />
          </div>
          <h1 className="intro-name">{t.home.name}</h1>
          <div className="intro-accent"></div>
          <h2 className="intro-title">{t.home.title}</h2>
          <p className="intro-value-prop">
            I am a Full Stack Developer who believes that great software is
            built with equal parts technical skill, empathy, and clarity. After
            15+ years of working at the intersection of people and complex
            systems, I bring a unique perspective to software development — one
            that keeps the end user at the center of every solution I build.
          </p>
          <div className="intro-buttons">
            <Link to="/portfolio" className="btn-primary">
              {t.home.viewWork}
            </Link>
            <Link to="/contact" className="btn-secondary">
              {t.home.getInTouch}
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="home-skills">
        <div className="page-center">
          <div className="skills-layout">
            <div className="skills-image">
              <img
                src={skillsImage}
                loading="lazy"
                alt="Abstract circuit brain illustration representing technical skills"
              />
            </div>
            <div className="skills-content">
              <h2 className="section-title">{t.home.technicalSkillsTitle}</h2>
              <div className="skills-grid">
                {skillKeys.map((key, index) => (
                  <div
                    key={key}
                    className="skill-card slide-in"
                    ref={(el) => (skillCardsRef.current[index] = el)}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <span className="skill-icon">{skillIcons[key]}</span>
                    <div>
                      <h3 className="skill-name">{t.home.skills[key].name}</h3>
                      <p className="skill-description">
                        {t.home.skills[key].description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="home-soft-skills">
        <div className="page-center">
          <h2 className="section-title centered">{t.home.softSkillsTitle}</h2>
          <div className="soft-skills-grid">
            {softSkillKeys.map((key, index) => (
              <div
                key={key}
                className="soft-skill-card slide-in"
                ref={(el) => (softCardsRef.current[index] = el)}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="soft-skill-icon">{softSkillIcons[key]}</span>
                <h3 className="skill-name">{t.home.softSkills[key].name}</h3>
                <p className="skill-description">
                  {t.home.softSkills[key].description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="home-featured-projects">
        <div className="page-center">
          <h2
            className="section-title centered slide-in"
            ref={(el) => (sectionRefs.current[1] = el)}
          >
            {t.home.featuredProjectsTitle}
          </h2>
          <div className="featured-projects-grid">
            {featuredProjects.map((project, index) => (
              <div
                key={project.name}
                className="featured-project-card slide-in"
                ref={(el) => (sectionRefs.current[index + 2] = el)}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <h3 className="project-name">{project.name}</h3>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="project-description">{project.description}</p>
                {project.external ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {t.home.viewOnGitHub}
                  </a>
                ) : (
                  <a href={project.link} className="project-link">
                    {t.home.viewOnGitHub}
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="featured-projects-cta">
            <Link to="/portfolio" className="btn-secondary">
              {t.home.viewAllProjects}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Hire Me Section */}
      <section className="home-why-hire">
        <div className="page-center">
          <div
            className="why-hire-card slide-in"
            ref={(el) => (sectionRefs.current[4] = el)}
          >
            <h2 className="section-title">{t.home.whyHireTitle}</h2>
            <p className="why-hire-intro">{t.home.whyHireIntro}</p>
            <p className="why-hire-text">{t.home.whyHireText}</p>
            <p className="why-hire-item">{t.home.whyHireItem1}</p>
            <p className="why-hire-item">{t.home.whyHireItem2}</p>
            <p className="why-hire-item">{t.home.whyHireItem3}</p>
            <p className="why-hire-item">{t.home.whyHireItem4}</p>
            <p className="why-hire-item">{t.home.whyHireItem5}</p>
            <p className="why-hire-closing">{t.home.whyHireClosing}</p>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="home-contact-cta">
        <div className="page-center">
          <div
            className="contact-cta-card slide-in"
            ref={(el) => (sectionRefs.current[5] = el)}
          >
            <h2 className="section-title centered">{t.home.contactCTA}</h2>
            <p className="contact-cta-text">{t.home.contactCTAText}</p>
            <Link to="/contact" className="btn-primary">
              {t.home.contactCTAButton}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
