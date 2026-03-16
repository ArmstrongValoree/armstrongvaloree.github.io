// AI-generated images created using Microsoft Designer (designer.microsoft.com) and NanoBanana
// Images: home-hero.png, home-skills.png
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import heroImage from '../assets/home-hero.png'
import skillsImage from '../assets/home-skills.png'
import avatar from '../assets/avatar.jpg'
import { useTranslation } from '../hooks/useTranslation'
import './Home.css'

const skillKeys = ['react', 'node', 'database', 'java', 'auth']
const skillIcons = {
  react: '⚛️',
  node: '🖥️',
  database: '🗄️',
  java: '☕',
  auth: '🔐',
}

const softSkillKeys = ['collaboration', 'problemSolving', 'communication', 'attention']
const softSkillIcons = {
  collaboration: '🤝',
  problemSolving: '🧩',
  communication: '💬',
  attention: '🎯',
}

function Home() {
  const { t } = useTranslation()
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
          <h1 className="intro-name">{t.home.name}</h1>
          <div className="intro-accent"></div>
          <h2 className="intro-title">{t.home.title}</h2>
          <p className="intro-bio">{t.home.bio}</p>
          <div className="intro-buttons">
            <Link to="/portfolio" className="btn-primary">{t.home.viewWork}</Link>
            <Link to="/contact" className="btn-secondary">{t.home.getInTouch}</Link>
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
                      <p className="skill-description">{t.home.skills[key].description}</p>
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
                <p className="skill-description">{t.home.softSkills[key].description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

