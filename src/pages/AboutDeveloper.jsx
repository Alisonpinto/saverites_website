import { useEffect } from 'react';
import styles from './Page.module.css';

const AboutDeveloper = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`container ${styles.pageSection}`}>
      <div className={styles.pageHeader}>
        <h1 className="h1">About the Developer</h1>
        <p className="p-large">Meet the creator behind Memoria</p>
      </div>
      
      <div className={styles.content} style={{ textAlign: 'center' }}>
        <div style={{ 
          width: '150px', 
          height: '150px', 
          backgroundColor: 'var(--color-gray-200)', 
          borderRadius: '50%', 
          margin: '0 auto var(--spacing-lg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3rem'
        }}>
          👩‍💻
        </div>
        <h2>Alison Pinto</h2>
        <p>Lead Engineer & Designer</p>
        <p style={{ maxWidth: '600px', margin: 'var(--spacing-md) auto' }}>
          Hi! I'm Alison. I built Memoria because I wanted a beautiful, private, and organized space to keep all the things that matter most. No ads, no clutter, just your memories safely stored.
        </p>
        <div style={{ marginTop: 'var(--spacing-xl)' }}>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-secondary">View GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default AboutDeveloper;
