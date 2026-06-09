import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownMouseEnter = () => setDropdownOpen(true);
  const handleDropdownMouseLeave = () => setDropdownOpen(false);

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
          
          {/* Policies Dropdown */}
          <li 
            className={styles.dropdownContainer}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <button className={styles.navLink}>
              Policies
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className={`${styles.dropdownArrow} ${dropdownOpen ? styles.arrowOpen : ''}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {dropdownOpen && (
              <div className={styles.dropdownMenu}>
                <Link to="/privacy-policy" className={styles.dropdownLink}>Privacy Policy</Link>
                <Link to="/terms-and-conditions" className={styles.dropdownLink}>Terms & Conditions</Link>
                <Link to="/community-guidelines" className={styles.dropdownLink}>Community Guidelines</Link>
                <Link to="/account-deletion-policy" className={styles.dropdownLink}>Account Deletion</Link>
              </div>
            )}
          </li>
          
          <li><Link to="/about-developer" className={styles.navLink}>About</Link></li>
          <li><Link to="/contact" className={styles.navLink}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
