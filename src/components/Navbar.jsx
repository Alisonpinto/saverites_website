import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [policiesOpen, setPoliciesOpen] = useState(false);

  const handleDropdownMouseEnter = () => setDropdownOpen(true);
  const handleDropdownMouseLeave = () => setDropdownOpen(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setPoliciesOpen(false);
  };

  const togglePoliciesMobile = (e) => {
    e.preventDefault();
    setPoliciesOpen(!policiesOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.navbar} glass-effect`}>
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
            memoria
          </Link>
        </div>

        {/* Desktop links */}
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
          <li><Link to="/support" className={styles.navLink}>Support</Link></li>
          <li><Link to="/contact" className={styles.navLink}>Contact</Link></li>
        </ul>

        {/* Hamburger Toggle (Mobile Only) */}
        <button 
          className={`${styles.hamburger} ${mobileMenuOpen ? styles.hamburgerActive : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle Navigation Menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        {/* Mobile Navigation Panel */}
        <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuVisible : ''} glass-effect`}>
          <ul className={styles.mobileNavLinks}>
            <li>
              <Link to="/" className={styles.mobileNavLink} onClick={closeMobileMenu}>Home</Link>
            </li>
            <li>
              <Link to="/#download" className={styles.mobileNavLink} onClick={closeMobileMenu}>Download</Link>
            </li>
            
            {/* Policies Collapsible on Mobile */}
            <li className={styles.mobileDropdownContainer}>
              <button className={styles.mobileNavLink} onClick={togglePoliciesMobile}>
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
                  className={`${styles.dropdownArrow} ${policiesOpen ? styles.arrowOpen : ''}`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              
              <div className={`${styles.mobileDropdownMenu} ${policiesOpen ? styles.mobileDropdownVisible : ''}`}>
                <Link to="/privacy-policy" className={styles.mobileDropdownLink} onClick={closeMobileMenu}>Privacy Policy</Link>
                <Link to="/terms-and-conditions" className={styles.mobileDropdownLink} onClick={closeMobileMenu}>Terms & Conditions</Link>
                <Link to="/community-guidelines" className={styles.mobileDropdownLink} onClick={closeMobileMenu}>Community Guidelines</Link>
                <Link to="/account-deletion-policy" className={styles.mobileDropdownLink} onClick={closeMobileMenu}>Account Deletion</Link>
              </div>
            </li>
            
            <li>
              <Link to="/about-developer" className={styles.mobileNavLink} onClick={closeMobileMenu}>About</Link>
            </li>
            <li>
              <Link to="/support" className={styles.mobileNavLink} onClick={closeMobileMenu}>Support</Link>
            </li>
            <li>
              <Link to="/contact" className={styles.mobileNavLink} onClick={closeMobileMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

