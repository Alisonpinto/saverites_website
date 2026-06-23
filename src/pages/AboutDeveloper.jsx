import { useEffect } from 'react';
import SEO from '../components/SEO';
import styles from './Page.module.css';

const AboutDeveloper = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={`container ${styles.pageSection}`}>
      <SEO
        title="About Us"
        description="Meet Arktech Developers, the creators behind Saverites. Learn about our vision to make personal content cataloging simple and secure."
        keywords="about saverites, arktech developers, memory backup creators, contact developers, software engineers"
      />
      <div className={styles.pageHeader}>
        <h1 className="h1">About Us</h1>
        <p className="p-large">Meet the creators behind Saverites</p>
      </div>

      <div className={styles.content}>
        <p>
          Saverites was built by <strong>Arktech Developers</strong>, a team passionate about creating technology that helps people save, organize, and rediscover valuable information effortlessly. Our goal is to make digital content management simple, accessible, and meaningful for everyone.
        </p>

        <div className={styles.emailSection}>
          <span className={styles.emailTitle}>Get in Touch</span>
          <a href="mailto:saverites2026@gmail.com" className={styles.emailLink}>
            saverites2026@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutDeveloper;



