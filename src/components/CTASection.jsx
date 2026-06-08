import styles from './CTASection.module.css';

const CTASection = () => {
  return (
    <section className={`section ${styles.ctaSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className="h1 animate-fade-up">Start Building Your Digital Memory Today.</h2>
          
          <div className={`animate-fade-up ${styles.buttonGroup}`} style={{ animationDelay: '0.2s' }}>
            <a href="#download" className="btn btn-primary btn-large">Download App</a>
            <a href="#learn-more" className="btn btn-secondary btn-large">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
