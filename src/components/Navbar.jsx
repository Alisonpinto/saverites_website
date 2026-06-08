import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.navbar} glass-effect`}>
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.logo}>
            MEMORIA
          </Link>
        </div>
        <ul className={styles.navLinks}>
          <li><Link to="/" className={styles.navLink}>Home</Link></li>
          <li><Link to="/#download" className={styles.navLink}>Download</Link></li>
          <li><Link to="/privacy-policy" className={styles.navLink}>Privacy Policy</Link></li>
          <li><Link to="/terms-and-conditions" className={styles.navLink}>Terms</Link></li>
          <li><Link to="/about-developer" className={styles.navLink}>About</Link></li>
          <li><Link to="/contact" className={styles.navLink}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
