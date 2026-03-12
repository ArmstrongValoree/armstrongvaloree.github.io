import { useState } from "react";
import supabase from "../lib/supabaseClient";
import heroImage from "../assets/contact-hero.png";
import secondaryImage from "../assets/contact-secondary.png";
import "./Contact.css";

function Contact() {
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
        text: "Please fill in all fields before submitting.",
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
        text: "Something went wrong. Please try again.",
      });
    } else {
      setStatus({
        type: "success",
        text: "Your message has been sent! I will be in touch soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    }
  }

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="contact-header">
        <h1 className="contact-title">Contact</h1>
        <div className="contact-accent"></div>
        <p className="contact-subtitle">
          I would love to hear from you. Send me a message and I will get back
          to you as soon as possible.
        </p>
      </section>

      {/* Form Section */}
      <section className="contact-content">
        <div className="page-center">
          <div className="contact-layout">
            <div className="contact-image">
              <img
                src={heroImage}
                alt="Abstract illustration representing communication and connection"
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
                    placeholder="Your full name"
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
                    placeholder="your@email.com"
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
                    placeholder="Your message..."
                    rows={6}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="btn-submit"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
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
              <h2 className="section-title">Let's Connect</h2>
              <p className="secondary-description">
                Whether you have a project in mind, a question about my work, or
                just want to say hello — my inbox is always open. You can also
                find me on LinkedIn and GitHub where I share my latest projects
                and professional updates.
              </p>
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
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
