import { useState, useEffect, useRef } from 'react';
import { PlaySquare, ShoppingBag, FileText, Lightbulb, CheckCircle2, Bookmark, Bell } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import SEO from '../components/SEO';
import styles from './EarlyAccess.module.css';

const EarlyAccess = () => {
  const [formData, setFormData] = useState({ name: '', email: '', reason: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(() => {
    return localStorage.getItem('saverites_early_access_joined') ? 'success' : null;
  }); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');
  const [waitlistCount, setWaitlistCount] = useState(127); // Mocked initial count
  
  const formRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    trackEvent('Early Access Page Viewed');
    
    // In a real scenario, fetch the current waitlist count from Google Apps Script here
    // fetch('YOUR_GOOGLE_APPS_SCRIPT_URL?action=getCount')
    //   .then(res => res.json())
    //   .then(data => setWaitlistCount(data.count))
    //   .catch(err => console.error(err));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.trim()) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return 'Please enter a valid email address';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    
    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setIsSubmitting(true);
    trackEvent('early_access_signup', { hasReason: !!formData.reason });

    try {
      const endpoint = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;
      
      if (!endpoint) {
        throw new Error('Google Apps Script URL is not configured.');
      }
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8', // Apps script prefers this sometimes to avoid CORS preflight, but let's stick to standard json if preflight is handled. Actually, text/plain is much safer to avoid CORS issues with Apps script. Let's send text/plain.
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) throw new Error('Submission failed');
      
      const data = await response.json();
      
      if (data.success) {
        // On success:
        setSubmitStatus('success');
        localStorage.setItem('saverites_early_access_joined', 'true');
        setFormData({ name: '', email: '', reason: '' }); // clear form
        setWaitlistCount(prev => prev + 1); // increment count
      } else {
        if (data.message === 'Email already exists') {
          setSubmitStatus(null);
          setErrorMessage('You have already joined the Early Access list.');
        } else {
          throw new Error(data.message || 'Server error');
        }
      }
      
    } catch (error) {
      console.error("Early Access Submission Error:", error);
      setSubmitStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.pageContainer}>
      <SEO 
        title="Early Access | Saverites" 
        description="Join the Saverites early access waitlist. Never lose a post, product, PDF, or idea again." 
      />

      {/* SECTION 1 - HERO */}
      <section className={`${styles.section} ${styles.hero} animate-fade-up`}>
        <h1 className="h2">Never lose a post, product, PDF, reel, video, or idea again.</h1>
        <p className="p-large">
          Saverites helps you save anything from anywhere and reminds you about it later, so nothing important gets forgotten.
        </p>
        <div className={styles.ctaGroup}>
          <button 
            className={styles.primaryBtn}
            onClick={() => {
              trackEvent('Hero Join Early Access Clicked');
              scrollToRef(formRef);
            }}
          >
            Join Early Access
          </button>
          <button 
            className={styles.secondaryBtn}
            onClick={() => {
              trackEvent('Hero See How It Works Clicked');
              scrollToRef(featuresRef);
            }}
          >
            See How It Works
          </button>
        </div>
      </section>

      {/* SECTION 2 - PROBLEM */}
      <section className={`${styles.section} animate-fade-up`}>
        <div className={styles.sectionTitle}>
          <h2 className="h2">Do you save things and never find them again?</h2>
        </div>
        
        <div className={styles.problemGrid}>
          <div className={styles.problemCard}>
            <PlaySquare size={32} className={styles.problemIcon} />
            <h4 className="h4">Saved Instagram Reel</h4>
            <p className="p-large" style={{ color: 'var(--color-gray-400)' }}>&rarr; Forgotten</p>
          </div>
          <div className={styles.problemCard}>
            <ShoppingBag size={32} className={styles.problemIcon} />
            <h4 className="h4">Product you wanted to buy later</h4>
            <p className="p-large" style={{ color: 'var(--color-gray-400)' }}>&rarr; Lost</p>
          </div>
          <div className={styles.problemCard}>
            <FileText size={32} className={styles.problemIcon} />
            <h4 className="h4">Important PDF</h4>
            <p className="p-large" style={{ color: 'var(--color-gray-400)' }}>&rarr; Buried in downloads</p>
          </div>
          <div className={styles.problemCard}>
            <Lightbulb size={32} className={styles.problemIcon} />
            <h4 className="h4">Great idea</h4>
            <p className="p-large" style={{ color: 'var(--color-gray-400)' }}>&rarr; Never revisited</p>
          </div>
        </div>
        <p className={styles.problemBottomText}>
          Most people save hundreds of things every month but rarely return to them. Saverites helps you organize and revisit what matters.
        </p>
      </section>

      {/* SECTION 3 - WHAT IS SAVERITES */}
      <section ref={featuresRef} className={`${styles.section} animate-fade-up`}>
        <div className={styles.sectionTitle}>
          <h2 className="h2">One place for everything worth remembering.</h2>
        </div>
        
        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <ShoppingBag size={28} className={styles.featureIcon} />
            <h4 className="h4">Save Products</h4>
          </div>
          <div className={styles.featureItem}>
            <PlaySquare size={28} className={styles.featureIcon} />
            <h4 className="h4">Save Videos</h4>
          </div>
          <div className={styles.featureItem}>
            <FileText size={28} className={styles.featureIcon} />
            <h4 className="h4">Save PDFs</h4>
          </div>
          <div className={styles.featureItem}>
            <Bookmark size={28} className={styles.featureIcon} />
            <h4 className="h4">Save Photos</h4>
          </div>
          <div className={styles.featureItem}>
            <Lightbulb size={28} className={styles.featureIcon} />
            <h4 className="h4">Save Notes</h4>
          </div>
          <div className={styles.featureItem}>
            <Bell size={28} className={styles.featureIcon} />
            <h4 className="h4">Get Smart Reminders</h4>
          </div>
        </div>
      </section>

      {/* SECTION 4 - EARLY ACCESS FORM */}
      <section ref={formRef} className={`${styles.section} animate-fade-up`}>
        <div className={styles.formSection}>
          <div className={styles.sectionTitle}>
            <h2 className="h2">Join Early Access</h2>
            <p>We're currently testing Saverites with early users. Join the waitlist and help shape the future of the product.</p>
          </div>

          {submitStatus === 'success' ? (
            <div className={styles.successMessage}>
              <CheckCircle2 size={32} style={{ margin: '0 auto 12px' }} />
              <h4 className="h4">Thank you for joining Saverites Early Access.</h4>
              <p>We'll keep you updated.</p>
            </div>
          ) : (
            <form className={styles.waitlistForm} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Jane Doe"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="jane@example.com"
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="reason">Why would you use Saverites? (Optional)</label>
                <textarea 
                  id="reason" 
                  name="reason" 
                  value={formData.reason}
                  onChange={handleInputChange}
                  placeholder="I want to save my online shopping finds..."
                  disabled={isSubmitting}
                />
              </div>

              {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}

              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Joining...' : 'Join Early Access'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* SECTION 5 - SOCIAL PROOF COUNTER */}
      <section className={`${styles.socialProof} animate-fade-up`}>
        <div className={styles.counterValue}>{waitlistCount}</div>
        <div className={styles.counterLabel}>People Waiting For Launch</div>
      </section>

    </div>
  );
};

export default EarlyAccess;
