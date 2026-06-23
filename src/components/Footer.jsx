import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
);

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>

        {/* Top Area */}
        <div className={styles.topArea}>
          <div className={styles.socials}>
            <a href="https://www.instagram.com/saverites" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialIcon}><InstagramIcon /></a>
          </div>
          <a href="#download" className="btn btn-primary">
            Download App
          </a>
        </div>

        {/* Middle Area */}
        <nav className={styles.navLinks}>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/privacy-policy" className={styles.link}>Privacy Policy</Link>
          <Link to="/terms-and-conditions" className={styles.link}>Terms & Conditions</Link>
          <Link to="/community-guidelines" className={styles.link}>Community Guidelines</Link>
          <Link to="/account-deletion-policy" className={styles.link}>Account Deletion</Link>
          <Link to="/about-developer" className={styles.link}>About Developer</Link>
          <Link to="/support" className={styles.link}>Help & Support</Link>
          <Link to="/contact" className={styles.link}>Contact</Link>
        </nav>

        {/* Bottom Area */}
        <div className={styles.bottomArea}>
          <h2 className={styles.hugeText}>saverites</h2>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>&copy; 2026 Saverites</p>
          <p>Developed by Arktech Developers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
