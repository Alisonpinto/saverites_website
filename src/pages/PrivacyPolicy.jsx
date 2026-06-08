import { useEffect } from 'react';
import styles from './Page.module.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`container ${styles.pageSection}`}>
      <div className={styles.pageHeader}>
        <h1 className="h1">Privacy Policy</h1>
        <p className="p-large">Last updated: October 2026</p>
      </div>
      
      <div className={styles.content}>
        <h2>1. Information We Collect</h2>
        <p>
          At Memoria, we take your privacy seriously. We only collect the information necessary to provide you with our services. This includes account details, the content you choose to upload, and basic usage data to improve our app.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>
          Your information is used solely to maintain your account, securely store your memories, and provide a seamless cross-device experience. We do not sell your personal data to third parties.
        </p>

        <h2>3. Data Security</h2>
        <p>
          All data transmitted between your device and our servers is encrypted using industry-standard protocols. Your private memories remain private.
        </p>
        
        <h2>4. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at privacy@memoria-app.com.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
