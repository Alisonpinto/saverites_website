import { useEffect } from 'react';
import styles from './Page.module.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`container ${styles.pageSection}`}>
      <div className={styles.pageHeader}>
        <h1 className="h1">Privacy Policy – Memoria</h1>
        <p className="p-large">Last Updated: June 2026</p>
      </div>
      
      <div className={styles.content}>
        <p>
          Welcome to Memoria, operated by ARKTECH DEVELOPERS.
        </p>

        <p>
          Memoria is a platform that allows users to save, organize, and share memories, bookmarks, links, images, videos, audio, documents, and other content from websites and applications. Users may also discover public content shared by other users.
        </p>

        <h2>Information We Collect</h2>
        <p>
          When you create an account, we may collect:
        </p>
        <ul>
          <li>Name</li>
          <li>Email Address</li>
          <li>Login Credentials</li>
          <li>User-generated Content</li>
          <li>Usage Information</li>
          <li>Device Information necessary for app functionality</li>
        </ul>
        <p>
          We do not collect your precise location.
        </p>

        <h2>How We Use Your Information</h2>
        <p>
          We use collected information to:
        </p>
        <ul>
          <li>Create and manage your account</li>
          <li>Save and organize your content</li>
          <li>Deliver reminders and notifications</li>
          <li>Improve app performance</li>
          <li>Maintain security and prevent abuse</li>
          <li>Provide customer support</li>
        </ul>

        <h2>User Content</h2>
        <p>
          Users may upload text, images, videos, audio, links, and documents.
        </p>
        <p>
          Content shared publicly may be visible to other users of the platform.
        </p>
        <p>
          Users are responsible for the content they upload.
        </p>

        <h2>Account Deletion</h2>
        <p>
          Users may delete their account at any time.
        </p>
        <p>
          Upon account deletion, associated content may be permanently removed from our systems, subject to technical and legal requirements.
        </p>

        <h2>Data Sharing</h2>
        <p>
          We do not sell user data to third parties.
        </p>
        <p>
          We may share data with trusted service providers such as Firebase solely for operating and improving the service.
        </p>

        <h2>Children's Privacy</h2>
        <p>
          Memoria is intended for users aged 13 years and above.
        </p>
        <p>
          We do not knowingly collect information from children under 13 years of age.
        </p>

        <h2>Security</h2>
        <p>
          We take reasonable measures to protect user information; however, no method of electronic storage or transmission is completely secure.
        </p>

        <h2>Changes To This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Updates will be posted on this page.
        </p>

        <h2>Contact Us</h2>
        <p>
          ARKTECH DEVELOPERS
        </p>
        <p>
          Email: <a href="mailto:memoria2026@gmail.com">memoria2026@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
