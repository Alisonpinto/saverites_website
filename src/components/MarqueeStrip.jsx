import styles from './MarqueeStrip.module.css';

const messages = [
  "Save Memories",
  "Remember Everything",
  "Store Important Documents",
  "Keep Life Organized",
  "Access Saved Items Anytime",
  "Capture Every Moment",
  "Never Forget Important Things",
  "Your Digital Memory Vault"
];

const MarqueeStrip = () => {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeContent}>
        {/* We render the messages twice to create a seamless infinite loop */}
        {[...messages, ...messages].map((msg, index) => (
          <span key={index} className={styles.marqueeItem}>
            {msg}
            <span className={styles.separator}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
