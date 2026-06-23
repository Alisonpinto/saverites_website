import { useEffect } from 'react';
import SEO from '../components/SEO';
import styles from './Page.module.css';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={`container ${styles.pageSection}`}>
      <SEO 
        title="Terms & Conditions"
        description="Read the Terms and Conditions for using Memoria. Learn about user eligibility, account registration, acceptable use, and intellectual property."
        keywords="terms and conditions, user agreement, legal policy, terms of service, developer contact"
      />
      <div className={styles.pageHeader}>
        <h1 className="h1">Terms and Conditions</h1>
        <p className="p-large">Last Updated: June 2026</p>
      </div>
      
      <div className={styles.content}>
        <p>
          Welcome to Memoria, operated by ARKTECH DEVELOPERS.
        </p>

        <p>
          By creating an account or using Memoria, you agree to these Terms and Conditions.
        </p>

        <h2>1. About Memoria</h2>
        <p>
          Memoria is a platform that allows users to:
        </p>
        <ul>
          <li>Save personal items, links, notes, documents, audio, images, videos, checklists, code snippets, and other content in their private Self Save section.</li>
          <li>Create public posts that can be viewed by other users.</li>
          <li>Receive reminders and notifications for saved content.</li>
          <li>Discover content shared by other users.</li>
        </ul>

        <h2>2. Eligibility</h2>
        <p>
          You must be at least 13 years old to use Memoria.
        </p>
        <p>
          By using the platform, you confirm that you meet this requirement.
        </p>

        <h2>3. User Accounts</h2>
        <p>
          Users may create accounts using:
        </p>
        <ul>
          <li>Email and Password</li>
          <li>Google Sign-In</li>
        </ul>
        <p>
          You are responsible for maintaining the security of your account.
        </p>

        <h2>4. Private and Public Content</h2>
        <h3>Self Save Content</h3>
        <p>
          Items saved in the Self Save section are intended for personal use and are not publicly visible.
        </p>
        <h3>Public Posts</h3>
        <p>
          Content submitted through the public posting feature may be visible to all Memoria users.
        </p>
        <p>
          By posting publicly, you grant Memoria permission to display and distribute that content within the platform.
        </p>

        <h2>5. Acceptable Use</h2>
        <p>
          You agree not to upload, share, or distribute:
        </p>
        <ul>
          <li>Illegal content</li>
          <li>Harmful or malicious software</li>
          <li>Spam</li>
          <li>Harassment or bullying</li>
          <li>Hate speech</li>
          <li>Violent or graphic content</li>
          <li>Sexually explicit content</li>
          <li>Content that violates the rights of others</li>
        </ul>

        <h2>6. Intellectual Property</h2>
        <p>
          You retain ownership of the content you upload.
        </p>
        <p>
          You may only upload content that:
        </p>
        <ul>
          <li>You own, or</li>
          <li>You have permission to share</li>
        </ul>
        <p>
          Copyright infringement is prohibited.
        </p>

        <h2>7. Likes and Interactions</h2>
        <p>
          Users may interact with public posts through available features such as likes or reactions.
        </p>
        <p>
          Memoria may add, remove, or modify interaction features at any time.
        </p>

        <h2>8. Content Moderation</h2>
        <p>
          Memoria reserves the right to remove content that violates these Terms.
        </p>
        <p>
          Reported content may be reviewed and removed without prior notice.
        </p>

        <h2>9. Account Termination</h2>
        <p>
          We may suspend or terminate accounts that:
        </p>
        <ul>
          <li>Violate these Terms</li>
          <li>Abuse the platform</li>
          <li>Engage in harmful activities</li>
        </ul>
        <p>
          Users may delete their accounts at any time.
        </p>

        <h2>10. Disclaimer</h2>
        <p>
          Memoria is provided "as is" without warranties of any kind.
        </p>
        <p>
          We do not guarantee uninterrupted availability of the service.
        </p>

        <h2>11. Limitation of Liability</h2>
        <p>
          ARKTECH DEVELOPERS shall not be liable for any indirect, incidental, or consequential damages resulting from use of the platform.
        </p>

        <h2>12. Changes to Terms</h2>
        <p>
          We may update these Terms at any time.
        </p>
        <p>
          Continued use of Memoria after updates constitutes acceptance of the revised Terms.
        </p>

        <h2>13. Contact</h2>
        <p>
          ARKTECH DEVELOPERS
        </p>
        <p>
          Email: <a href="mailto:memoriaapp2026@gmail.com">memoriaapp2026@gmail.com</a>
        </p>
      </div>
    </section>
  );
};

export default TermsConditions;
