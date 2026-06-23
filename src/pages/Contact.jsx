import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import styles from './Page.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'submitting', 'success', 'error'

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch("https://formsubmit.co/ajax/6f95502997cbbf0c512f14cf5de68cc1", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            ...formData,
            _captcha: "false", // Disables captcha
            _subject: "New Contact Message - Saverites Website"
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section className={`container ${styles.pageSection}`}>
      <SEO 
        title="Contact Us"
        description="Get in touch with the Saverites team. Send us support inquiries, feedback, or development proposals."
        keywords="contact saverites, support email, contact developers, contact page"
      />
      <div className={styles.pageHeader}>
        <h1 className="h1">Contact Us</h1>
        <p className="p-large">We'd love to hear from you</p>
      </div>
      
      <form 
        className={styles.contactForm} 
        onSubmit={handleSubmit}
      >
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="6" placeholder="How can we help you?" value={formData.message} onChange={handleChange} required></textarea>
        </div>

        {status === 'success' && (
          <div style={{ padding: '1rem', backgroundColor: 'rgba(0, 255, 0, 0.1)', color: 'var(--color-black)', borderRadius: '8px', marginBottom: '1rem', border: '1px solid rgba(0, 255, 0, 0.2)' }}>
            Message sent successfully! We'll get back to you soon.
          </div>
        )}
        
        {status === 'error' && (
          <div style={{ padding: '1rem', backgroundColor: 'rgba(255, 0, 0, 0.1)', color: 'var(--color-black)', borderRadius: '8px', marginBottom: '1rem', border: '1px solid rgba(255, 0, 0, 0.2)' }}>
            Something went wrong. Please try again later.
          </div>
        )}

        <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};

export default Contact;
