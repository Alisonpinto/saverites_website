import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      {/* Decorative Background Elements */}
      <div className={styles.blob} style={{ top: '10%', left: '15%' }}></div>
      <div className={styles.blob} style={{ top: '40%', right: '10%', animationDelay: '2s' }}></div>
      


      <div className={`container ${styles.content}`}>
        <h1 className={`h1 animate-fade-up ${styles.title}`}>One Platform for Everything You Save</h1>
        <h2 className={`h3 animate-fade-up ${styles.subtitle}`} style={{ animationDelay: '0.1s' }}>
          Your digital life, finally organized.
        </h2>
        <p className={`p-large animate-fade-up ${styles.description}`} style={{ animationDelay: '0.2s' }}>
          Stop scattering your important documents, links, and memories across multiple apps. Saverites is the ultimate space to secure what's private and share what's inspiring.
        </p>
        
        <div className={`animate-fade-up ${styles.buttonGroup}`} style={{ animationDelay: '0.3s' }}>
          <Link to="/early-access" className="btn btn-primary">Early Access</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
