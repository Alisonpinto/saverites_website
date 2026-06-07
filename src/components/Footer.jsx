import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">Memoria</h3>
          <p className="footer-tagline">Your Memories. Your Stories. Your Space.</p>
        </div>

        <div className="footer-links">
          <Link to="/privacy-policy" className="footer-link">
            Privacy Policy
          </Link>
          <Link to="/terms-and-conditions" className="footer-link">
            Terms & Conditions
          </Link>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
        </div>

        <div className="footer-social">
          <a href="#twitter" className="social-icon" aria-label="Twitter">
            𝕏
          </a>
          <a href="#instagram" className="social-icon" aria-label="Instagram">
            📷
          </a>
          <a href="#facebook" className="social-icon" aria-label="Facebook">
            f
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Memoria. All rights reserved.</p>
      </div>
    </footer>
  );
}
