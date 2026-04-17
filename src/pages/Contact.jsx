import { useState } from "react";
import supabase from "../lib/supabaseClient";
import heroImage from "../assets/contact-hero.webp";
import secondaryImage from "../assets/contact-secondary.webp";
import { useTranslation } from "../hooks/useTranslation";
import "./Contact.css";

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        text: t.contact.validationError,
      });
      return;
    }

    setLoading(true);
    setStatus(null);

    const { error } = await supabase.from("messages").insert([
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
    ]);

    setLoading(false);

    if (error) {
      setStatus({
        type: "error",
        text: t.contact.errorMessage,
      });
    } else {
      setStatus({
        type: "success",
        text: t.contact.successMessage,
      });
      setFormData({ name: "", email: "", message: "" });
    }
  }

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="contact-header">
        <h1 className="contact-title">{t.contact.title}</h1>
        <div className="contact-accent"></div>
        <p className="contact-subtitle">{t.contact.subtitle}</p>
      </section>

      {/* Form Section */}
      <section className="contact-content">
        <div className="page-center">
          <div className="contact-layout">
            <div className="contact-image">
              <img
                src={heroImage}
                alt="Abstract illustration representing communication and connection"
                loading="lazy"
              />
            </div>
            <div className="contact-form-wrapper">
              <h2 className="section-title">Send a Message</h2>
              {status && (
                <div className={`status-message ${status.type}`}>
                  {status.text}
                </div>
              )}
              <div className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder={t.contact.namePlaceholder}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder={t.contact.emailPlaceholder}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder={t.contact.messagePlaceholder}
                    rows={6}
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="btn-submit"
                  disabled={loading}
                >
                  {loading ? t.contact.sendingButton : t.contact.sendButton}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Section */}
      <section className="contact-secondary">
        <div className="page-center">
          <div className="secondary-layout">
            <div className="secondary-text">
              <h2 className="section-title">{t.contact.connectTitle}</h2>
              <p className="secondary-description">{t.contact.connectText}</p>
              <div className="contact-links">
                <a
                  href="mailto:armstrongvaloree@gmail.com"
                  className="contact-link"
                >
                  ✉️ armstrongvaloree@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/valoree-armstrong-462511395"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  💼 LinkedIn
                </a>
                <a
                  href="https://github.com/armstrongvaloree"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  🐙 GitHub
                </a>
              </div>
            </div>
            <div className="secondary-image">
              <img
                src={secondaryImage}
                alt="Abstract illustration representing digital outreach"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
