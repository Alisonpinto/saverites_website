import { useEffect } from 'react';
import SEO from '../components/SEO';
import styles from './Page.module.css';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={`container ${styles.pageSection}`}>
      <SEO 
        title="Contact Us"
        description="Get in touch with the Memoria team. Send us support inquiries, feedback, or development proposals."
        keywords="contact memoria, support email, contact developers, contact page"
      />
      <div className={styles.pageHeader}>
        <h1 className="h1">Contact Us</h1>
        <p className="p-large">We'd love to hear from you</p>
      </div>
      
      <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your name" required />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="your@email.com" required />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="6" placeholder="How can we help you?" required></textarea>
        </div>
        
        <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
