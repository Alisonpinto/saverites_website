import { useEffect, useRef, useState } from 'react';
import styles from './PhoneSplash.module.css';

const PhoneSplash = () => {
  const [visible, setVisible] = useState(false);
  const [animKey, setAnimKey] = useState(0); // forces fresh re-mount on every entry
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Bump key FIRST to unmount old animated elements, then mark visible
          setAnimKey(k => k + 1);
          setVisible(true);
        } else {
          // Reset when out of view so next entry re-runs from scratch
          setVisible(false);
        }
      },
      { threshold: 0.25, rootMargin: '0px 0px -60px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.screen}>
      {/* Re-keyed so animations always replay fresh on each scroll-in */}
      <div
        key={animKey}
        className={`${styles.logoWrap} ${visible ? styles.logoVisible : ''}`}
      >
        {/* Brand name */}
        <div className={styles.brandRow}>
          <span className={styles.save}>save</span>
          <span className={styles.rites}>rites</span>
        </div>

        {/* Underline — draws left → right, only under "save" */}
        <div className={`${styles.underlineWrap} ${visible ? styles.underlineVisible : ''}`}>
          <div className={styles.underline} />
        </div>
      </div>
    </div>
  );
};

export default PhoneSplash;
