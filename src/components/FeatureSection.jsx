import styles from './FeatureSection.module.css';

const FeatureSection = ({ title, description, reverse, type, listItems }) => {
  return (
    <section className={`section ${styles.featureSection}`}>
      <div className={`container ${styles.grid} ${reverse ? styles.reverse : ''}`}>
        
        {/* Media Side */}
        <div className={`${styles.mediaColumn} animate-fade-up`}>
          {type === 'phone' ? (
            <div className={styles.phoneMockup}>
              <div className={styles.phoneScreen}>
                <span className={styles.placeholderText}>App Screenshot Placeholder</span>
              </div>
            </div>
          ) : (
            <div className={styles.videoMockup}>
              <span className={styles.placeholderText}>Figma Demo Video Placeholder</span>
            </div>
          )}
        </div>

        {/* Text Side */}
        <div className={`${styles.textColumn} animate-fade-up`} style={{ animationDelay: '0.2s' }}>
          <h2 className="h2">{title}</h2>
          <p className="p-large">{description}</p>
          
          {listItems && listItems.length > 0 && (
            <ul className={styles.list}>
              {listItems.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  <div className={styles.bullet}></div>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </section>
  );
};

export default FeatureSection;
