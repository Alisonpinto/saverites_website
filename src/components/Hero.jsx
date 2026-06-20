import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      {/* Decorative Background Elements */}
      <div className={styles.blob} style={{ top: '10%', left: '15%' }}></div>
      <div className={styles.blob} style={{ top: '40%', right: '10%', animationDelay: '2s' }}></div>
      


      <div className={`container ${styles.content}`}>
        <h1 className={`h1 animate-fade-up ${styles.title}`}>memoria</h1>
        <h2 className={`h3 animate-fade-up ${styles.subtitle}`} style={{ animationDelay: '0.1s' }}>
          Your Memories. Your Stories. Your Space.
        </h2>
        <p className={`p-large animate-fade-up ${styles.description}`} style={{ animationDelay: '0.2s' }}>
          A modern platform where users can save memories, important moments, stories, documents, and experiences forever.
        </p>
        
        <div className={`animate-fade-up ${styles.buttonGroup}`} style={{ animationDelay: '0.3s' }}>
          <a href="#download" className="btn btn-primary">Download App</a>
          <Link to="/early-access" className="btn btn-secondary">Early Access</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
