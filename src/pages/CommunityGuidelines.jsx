import { useEffect } from 'react';
import SEO from '../components/SEO';
import styles from './Page.module.css';

const CommunityGuidelines = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={`container ${styles.pageSection}`}>
      <SEO 
        title="Community Guidelines"
        description="Read the community standards and rules for using Memoria. Learn what content is allowed and how to report violations."
        keywords="community guidelines, user rules, content policy, reporting abuse, memoria guidelines"
      />
      <div className={styles.pageHeader}>
        <h1 className="h1">Community Guidelines</h1>
        <p className="p-large">Last Updated: June 2026</p>
      </div>
      
      <div className={styles.content}>
        <p>
          Memoria is designed to help people save, organize, and discover content.
        </p>

        <p>
          To keep the platform safe and useful, all users must follow these guidelines.
        </p>

        <h2>Be Respectful</h2>
        <p>
          Treat other users with respect.
        </p>
        <p>
          Do not:
        </p>
        <ul>
          <li>Harass others</li>
          <li>Threaten others</li>
          <li>Bully others</li>
          <li>Encourage violence</li>
        </ul>

        <h2>No Harmful Content</h2>
        <p>
          The following content is prohibited:
        </p>
        <ul>
          <li>Hate speech</li>
          <li>Terrorist content</li>
          <li>Child exploitation material</li>
          <li>Pornographic content</li>
          <li>Graphic violence</li>
          <li>Illegal activities</li>
        </ul>

        <h2>Respect Copyright</h2>
        <p>
          Only upload content that:
        </p>
        <ul>
          <li>You created, or</li>
          <li>You have permission to share</li>
        </ul>
        <p>
          Do not upload pirated movies, software, music, books, or other copyrighted material.
        </p>

        <h2>No Spam</h2>
        <p>
          Do not:
        </p>
        <ul>
          <li>Post repetitive content</li>
          <li>Mislead users</li>
          <li>Manipulate engagement</li>
          <li>Spread scams</li>
        </ul>

        <h2>Report Violations</h2>
        <p>
          Users may report content that violates these guidelines.
        </p>
        <p>
          Reported content may be reviewed and removed.
        </p>

        <h2>Enforcement</h2>
        <p>
          Violations may result in:
        </p>
        <ul>
          <li>Content removal</li>
          <li>Account restrictions</li>
          <li>Permanent account suspension</li>
        </ul>

        <p>
          Our goal is to maintain a safe and positive environment for all users.
        </p>
      </div>
    </section>
  );
};

export default CommunityGuidelines;
