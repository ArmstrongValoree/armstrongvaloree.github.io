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
    title: "Bachelor of Science — Health Services Administration",
    institution: "Florida A&M University",
    description:
      "Foundational studies in healthcare systems, administration, policy, and human services management.",
  },
];

const experience = [
  {
    year: "2020 – 2025",
    title: "Administrative Director",
    institution: "Healthcare Organization",
    description:
      "Led cross-functional teams, managed complex operational systems, and drove process improvements across multiple departments.",
  },
  {
    year: "2015 – 2020",
    title: "Education Program Coordinator",
    institution: "Education Services",
    description:
      "Designed and delivered educational programs, coordinated staff training, and managed community outreach initiatives.",
  },
  {
    year: "2008 – 2015",
    title: "Social Services Case Manager",
    institution: "Social Services Agency",
    description:
      "Provided case management services, connected clients with community resources, and maintained detailed administrative records.",
  },
];

const projects = [
  {
    name: "Personal Portfolio",
    tech: ["React", "Vite", "Supabase", "GitHub Actions"],
    description:
      "A full stack personal portfolio site with authentication, a contact form with database persistence, and an authenticated back office for message management.",
  },
  {
    name: "CodeBloggs",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    description:
      "A full stack social media blogging application with user authentication, post feeds, comment modals, admin dashboard, and responsive navigation.",
  },
  {
    name: "Rocket Food Delivery",
    tech: ["Spring Boot", "MySQL", "React Native", "Expo"],
    description:
      "A mobile food delivery app with a Spring Boot REST API backend, JWT authentication, and a React Native frontend for browsing restaurants and placing orders.",
  },
  {
    name: "Rocket Elevators Dashboard",
    tech: ["MongoDB", "Express", "React", "Chart.js"],
    description:
      "An admin dashboard for managing elevator agents and transactions, featuring JWT authentication, CRUD operations, and Chart.js data visualizations.",
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
