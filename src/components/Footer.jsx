import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const TwitterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

const GithubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
);

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        
        {/* Top Area */}
        <div className={styles.topArea}>
          <div className={styles.socials}>
            <a href="#" aria-label="Twitter" className={styles.socialIcon}><TwitterIcon /></a>
            <a href="#" aria-label="Instagram" className={styles.socialIcon}><InstagramIcon /></a>
            <a href="#" aria-label="Github" className={styles.socialIcon}><GithubIcon /></a>
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
          <Link to="/about-developer" className={styles.link}>About Developer</Link>
          <Link to="/contact" className={styles.link}>Contact</Link>
        </nav>

        {/* Bottom Area */}
        <div className={styles.bottomArea}>
          <h2 className={styles.hugeText}>MEMORIA</h2>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>&copy; 2026 Memoria</p>
          <p>Made with ❤️ by Alison Pinto</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
