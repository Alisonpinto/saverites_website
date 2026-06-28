import { useEffect, useState, useRef } from 'react';
import styles from './NotificationAnimation.module.css';

const NotificationAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimKey(k => k + 1);
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.phoneContainer}>
      <div className={styles.phoneScreen}>
        
        {/* Lock Screen Time */}
        <div className={styles.timeContainer}>
          <div className={styles.time}>09:41</div>
          <div className={styles.date}>Wednesday, October 15</div>
        </div>

        {/* Animated Notification */}
        {isVisible && (
          <div key={animKey} className={styles.notification}>
            <div className={styles.notifHeader}>
              <div className={styles.appInfo}>
                <div className={styles.appIcon}>
                  <img src="/apple-touch-icon.png" alt="Saverites Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <span className={styles.appName}>saverites</span>
              </div>
              <span className={styles.timeAgo}>now</span>
            </div>
            <div className={styles.notifBody}>
              <div className={styles.notifTitle}>Reminder: Saved 1 week ago</div>
              <div className={styles.notifText}>Take a look at "Jacket Style" you saved. Want to buy it now?</div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default NotificationAnimation;
