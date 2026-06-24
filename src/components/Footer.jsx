import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
);

const DiscordIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>

        {/* Top Area */}
        <div className={styles.topArea}>
          <div className={styles.socials}>
            <a href="https://x.com/saverites" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)" className={styles.socialIcon}><XIcon /></a>
            <a href="https://www.instagram.com/saverites/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialIcon}><InstagramIcon /></a>
            <a href="https://discord.gg/e6ffQ7SCRu" target="_blank" rel="noopener noreferrer" aria-label="Discord" className={styles.socialIcon}><DiscordIcon /></a>
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
