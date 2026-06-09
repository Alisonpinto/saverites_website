import { useEffect } from 'react';
import styles from './Page.module.css';

const AccountDeletionPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`container ${styles.pageSection}`}>
      <div className={styles.pageHeader}>
        <h1 className="h1">Account Deletion Policy</h1>
        <p className="p-large">Last Updated: June 2026</p>
      </div>
      
      <div className={styles.content}>
        <p>
          Users may delete their Memoria account at any time.
        </p>

        <h2>How to Delete Your Account</h2>
        <p>
          Users can delete their account through the application's account settings.
        </p>
        <p>
          If account deletion is unavailable within the application, users may request deletion by contacting:
        </p>
        <p>
          Email: <a href="mailto:memoria2026@gmail.com">memoria2026@gmail.com</a>
        </p>

        <h2>What Happens After Deletion</h2>
        <p>
          When an account is deleted:
        </p>
        <ul>
          <li>Access to the account is removed.</li>
          <li>Personal profile information is deleted.</li>
          <li>User-created content may be removed from the platform.</li>
          <li>Associated data may remain temporarily in backups for security and legal purposes.</li>
        </ul>

        <h2>Processing Time</h2>
        <p>
          Deletion requests are typically processed within 30 days.
        </p>

        <h2>Contact</h2>
        <p>
          For questions regarding account deletion, contact:
        </p>
        <p>
          <a href="mailto:memoria2026@gmail.com">memoria2026@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default AccountDeletionPolicy;
