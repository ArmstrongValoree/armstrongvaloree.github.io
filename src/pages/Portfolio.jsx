import { useEffect, useRef } from "react";
import educationImage from "../assets/portfolio-education.png";
import projectsImage from "../assets/portfolio-projects.png";
import "./Portfolio.css";

const education = [
  {
    year: "2025 – 2026",
    title: "Full Stack Development",
    institution: "CodeBoxx Academy",
    description:
      "Intensive full stack bootcamp covering the MERN stack, Spring Boot, React Native, DevOps, automated testing, and cloud deployment.",
  },
  {
    year: "2004",
    title: "Bachelor of Science — Criminal Justice",
    institution: "Florida Metropolitan University",
    description:
      "Foundational studies in criminal justice systems, law, policy, and public administration.",
  },
];

const experience = [
  {
    year: "March 2026 – Present",
    title: "Part-Time Student Success Coach (Contract)",
    institution: "CodeBoxx Academy · Onsite",
    description:
      "Provide part-time coaching and mentorship to full-stack development students, supporting their progress across the MERN stack, Spring Boot, and React Native curriculum. Guide learners through debugging, project development, and best practices in modern software engineering. Represent CodeBoxx Academy at community and recruiting events, engaging with prospective students and promoting the program's mission and values.",
  },
  {
    year: "2023 – Present",
    title: "Administrative Assistant (Remote)",
    institution: "AQualiT Health · Jacksonville, FL",
    description:
      "Track and verify provider patient visits for accurate billing and compensation. Manage sensitive clinical and provider data with accuracy and confidentiality.",
  },
  {
    year: "2009 – 2022",
    title: "Instructional Roles (K–6 Education)",
    institution: "Pinellas County Schools · Orange County Public Schools · Imagine School",
    description:
      "Delivered inclusive instruction across general and special education classrooms. Served as grade-level lead and team mentor, integrating technology into virtual and hybrid learning environments.",
  },
];

const projects = [
  {
    name: "Personal Portfolio",
    tech: ["React", "Vite", "Supabase", "GitHub Actions"],
    description:
      "A full stack personal portfolio site with authentication, a contact form with database persistence, and an authenticated back office for message management.",
    link: "/",
    linkLabel: "View Portfolio",
    external: false,
  },
  {
    name: "CodeBloggs",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    description:
      "A full stack social media blogging application with user authentication, post feeds, comment modals, admin dashboard, and responsive navigation.",
    link: "https://github.com/armstrongvaloree",
    linkLabel: "View on GitHub",
    external: true,
  },
  {
    name: "Rocket Food Delivery",
    tech: ["Spring Boot", "MySQL", "React Native", "Expo"],
    description:
      "A mobile food delivery app with a Spring Boot REST API backend, JWT authentication, and a React Native frontend for browsing restaurants and placing orders.",
    link: "https://github.com/armstrongvaloree",
    linkLabel: "View on GitHub",
    external: true,
  },
  {
    name: "Rocket Elevators Dashboard",
    tech: ["MongoDB", "Express", "React", "Chart.js"],
    description:
      "An admin dashboard for managing elevator agents and transactions, featuring JWT authentication, CRUD operations, and Chart.js data visualizations.",
    link: "https://github.com/armstrongvaloree",
    linkLabel: "View on GitHub",
    external: true,
  },
];

function Portfolio() {
  const cardRefs = useRef([]);

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

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  let cardIndex = 0;

  return (
    <div className="portfolio">
      {/* Page Header */}
      <section className="portfolio-header">
        <h1 className="portfolio-title">Portfolio</h1>
        <div className="portfolio-accent"></div>
        <p className="portfolio-subtitle">
          A snapshot of my education, professional background, and the projects
          I have built.
        </p>
      </section>

      {/* Education & Experience Section */}
      <section className="portfolio-background">
        <div className="page-center">
          <div className="background-layout">
            <div className="background-image">
              <img
                src={educationImage}
                alt="Abstract illustration representing education and career growth"
              />
            </div>

            <div className="background-content">
              <div className="timeline-block">
                <h2 className="section-title">Education</h2>
                {education.map((item, index) => (
                  <div
                    key={index}
                    className="timeline-card slide-in"
                    ref={(el) => (cardRefs.current[cardIndex++] = el)}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <span className="timeline-year">{item.year}</span>
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-institution">{item.institution}</p>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="timeline-block">
                <h2 className="section-title">Experience</h2>
                {experience.map((item, index) => (
                  <div
                    key={index}
                    className="timeline-card slide-in"
                    ref={(el) => (cardRefs.current[cardIndex++] = el)}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <span className="timeline-year">{item.year}</span>
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-institution">{item.institution}</p>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="portfolio-projects">
        <div className="page-center">
          <div className="projects-layout">
            <div className="projects-content">
              <h2 className="section-title">Projects</h2>
              <div className="projects-grid">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="project-card slide-in"
                    ref={(el) => (cardRefs.current[cardIndex++] = el)}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <h3 className="project-name">{project.name}</h3>
                    <div className="project-tech">
                      {project.tech.map((t, i) => (
                        <span key={t} className="tech-tag">
                          {t}
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
                        {project.linkLabel}
                      </a>
                    ) : (
                      <a href={project.link} className="project-link">
                        {project.linkLabel}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="projects-image">
              <img
                src={projectsImage}
                alt="Abstract illustration representing software projects and coding"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="portfolio-resume">
        <div className="page-center">
          <h2 className="section-title centered">Resume</h2>
          <p className="resume-text">
            Download my full resume to learn more about my background, skills,
            and experience.
          </p>

          <a href="/resume.pdf" download className="btn-primary">
            Download Resume (PDF)
          </a>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
