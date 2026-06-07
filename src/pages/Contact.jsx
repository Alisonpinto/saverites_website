import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-content">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">We'd love to hear from you. Send us a message!</p>

          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <a href="mailto:hello@memoria.app">hello@memoria.app</a>
            </div>
            <div className="contact-item">
              <h3>App Name</h3>
              <p>Memoria</p>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>

          <div className="social-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#twitter" className="social-link" aria-label="Twitter">
                <span className="social-icon">𝕏</span>
              </a>
              <a href="#instagram" className="social-link" aria-label="Instagram">
                <span className="social-icon">📷</span>
              </a>
              <a href="#facebook" className="social-link" aria-label="Facebook">
                <span className="social-icon">f</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
