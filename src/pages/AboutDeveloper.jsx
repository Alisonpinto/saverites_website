import { useEffect } from 'react';
import styles from './Page.module.css';

const AboutDeveloper = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const team = [
    { name: 'Alison Pinto', gradient: 'linear-gradient(135deg, #FF5E62 0%, #FF9966 100%)' },
    { name: 'Abhishek Kulbainur', gradient: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)' },
    { name: 'Jawaan Santh', gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' },
    { name: 'Aiden Rodrigues', gradient: 'linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)' }
  ];

  return (
    <div className={`container ${styles.pageSection}`}>
      <div className={styles.pageHeader}>
        <h1 className="h1">About the Developers</h1>
        <p className="p-large">Meet the creators behind Memoria</p>
      </div>

      <div className={styles.content}>
        <div className={styles.teamGrid}>
          {team.map((member, index) => (
            <div
              key={index}
              className={styles.teamCard}
              style={{ '--hover-gradient': member.gradient }}
            >
              <h3 className={styles.teamName}>
                {member.name.split(/\s+/).map((part, idx) => (
                  <span key={idx} className={styles.namePart}>{part}</span>
                ))}
              </h3>
            </div>
          ))}
        </div>

        <div className={styles.emailSection}>
          <span className={styles.emailTitle}>Get in Touch</span>
          <a href="mailto:memoria@gmail.com" className={styles.emailLink}>
            memoria@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutDeveloper;



