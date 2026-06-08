import { useEffect } from 'react';
import styles from './Page.module.css';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`container ${styles.pageSection}`}>
      <div className={styles.pageHeader}>
        <h1 className="h1">Terms & Conditions</h1>
        <p className="p-large">Last updated: October 2026</p>
      </div>
      
      <div className={styles.content}>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using Memoria, you accept and agree to be bound by the terms and provision of this agreement.
        </p>

        <h2>2. User Content</h2>
        <p>
          You retain all ownership rights to the content you upload to Memoria. By uploading content, you grant us the necessary licenses to store and display your content back to you across your devices.
        </p>

        <h2>3. Prohibited Conduct</h2>
        <p>
          Users agree not to use the service to store illegal content, distribute malware, or engage in any activity that disrupts the service for others.
        </p>
        
        <h2>4. Account Termination</h2>
        <p>
          We reserve the right to suspend or terminate accounts that violate these terms, with or without notice.
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;
