// AI-generated images created using Microsoft Designer (designer.microsoft.com) and NanoBanana
// Images: home-hero.png, home-skills.png

import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import heroImage from '../assets/home-hero.png'
import skillsImage from '../assets/home-skills.png'
import avatar from '../assets/avatar.jpg'
import './Home.css'

const technicalSkills = [
  {
    icon: '⚛️',
    name: 'React & React Native',
    description: 'Building dynamic, responsive web and mobile applications using component-based architecture and modern React hooks.'
  },
  {
    icon: '🖥️',
    name: 'Node.js & Express',
    description: 'Developing scalable server-side applications and RESTful APIs that power full stack solutions.'
  },
  {
    icon: '🗄️',
    name: 'Database Management',
    description: 'Designing and querying both relational databases (MySQL) and NoSQL databases (MongoDB) to store and manage application data.'
  },
  {
    icon: '☕',
    name: 'Java & Spring Boot',
    description: 'Creating robust backend services and REST APIs using Java with the Spring Boot framework.'
  },
  {
    icon: '🔐',
    name: 'Authentication & Security',
    description: 'Implementing secure user authentication using JWT tokens and Supabase Auth to protect application data.'
  }
]

const softSkills = [
  {
    icon: '🤝',
    name: 'Collaboration',
    description: 'Over 15 years of experience working with diverse teams across healthcare, education, and social services to achieve shared goals.'
  },
  {
    icon: '🧩',
    name: 'Problem Solving',
    description: 'Analytical thinker who breaks down complex challenges into clear, actionable steps — in code and in life.'
  },
  {
    icon: '💬',
    name: 'Communication',
    description: 'Skilled at translating technical concepts for non-technical audiences, bridging the gap between people and technology.'
  },
  {
    icon: '🎯',
    name: 'Attention to Detail',
    description: 'Meticulous and thorough in all work — from writing clean, readable code to managing complex administrative systems.'
  }
]

function Home() {
  const skillCardsRef = useRef([])
  const softCardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    skillCardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    softCardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

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
          <h1 className="intro-name">Valoree Armstrong</h1>
          <div className="intro-accent"></div>
          <h2 className="intro-title">Full Stack Developer</h2>
          <p className="intro-bio">
            I am a Full Stack Developer with a background spanning healthcare, education,
            and social services administration. After 15+ years of working at the intersection
            of people and complex systems, I bring a unique perspective to software development —
            one that keeps the end user at the center of every solution I build.
          </p>
          <div className="intro-buttons">
            <Link to="/portfolio" className="btn-primary">View My Work</Link>
            <Link to="/contact" className="btn-secondary">Get In Touch</Link>
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
                alt="Abstract circuit brain illustration representing technical skills"
              />
            </div>
            <div className="skills-content">
              <h2 className="section-title">Technical Skills</h2>
              <div className="skills-grid">
                {technicalSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="skill-card slide-in"
                    ref={(el) => (skillCardsRef.current[index] = el)}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <span className="skill-icon">{skill.icon}</span>
                    <div>
                      <h3 className="skill-name">{skill.name}</h3>
                      <p className="skill-description">{skill.description}</p>
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
          <h2 className="section-title centered">Strengths & Talents</h2>
          <div className="soft-skills-grid">
            {softSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="soft-skill-card slide-in"
                ref={(el) => (softCardsRef.current[index] = el)}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="soft-skill-icon">{skill.icon}</span>
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home

