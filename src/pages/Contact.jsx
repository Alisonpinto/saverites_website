import { useEffect } from 'react';
import styles from './Page.module.css';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`container ${styles.pageSection}`}>
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
    </div>
  );
};

export default Contact;
