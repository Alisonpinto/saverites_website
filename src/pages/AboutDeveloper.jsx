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
        description="Meet Arktech Developers, the creators behind Memoria. Learn about our vision to make personal content cataloging simple and secure."
        keywords="about memoria, arktech developers, memory backup creators, contact developers, software engineers"
      />
      <div className={styles.pageHeader}>
        <h1 className="h1">About Us</h1>
        <p className="p-large">Meet the creators behind Memoria</p>
      </div>

      <div className={styles.content}>
        <p>
          Memoria was built by{' '}
          <a
            href="https://github.com/alisonpinto"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            Alison Pinto
          </a>
          {', '}
          <a
            href="https://github.com/abhishekkulbainur"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            Abhishek Kulbainur
          </a>
          {', '}
          <a
            href="https://github.com/Beeb4Life"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            Aiden Rodrigues
          </a>
          {' and '}
          <a
            href="https://github.com/jawaanquizziz"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            Jawaan Santh
          </a>
          {', a team passionate about creating technology that helps people save, organize, and rediscover valuable information effortlessly. Our goal is to make digital content management simple, accessible, and meaningful for everyone.'}
        </p>

        <div className={styles.emailSection}>
          <span className={styles.emailTitle}>Get in Touch</span>
          <a href="mailto:memoria@gmail.com" className={styles.emailLink}>
            memoria@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutDeveloper;



