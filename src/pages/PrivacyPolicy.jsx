import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
  return (
    <div className="policy-page">
      <div className="policy-container">
        <h1 className="policy-title">Privacy Policy</h1>
        <p className="policy-last-updated">Last Updated: June 2024</p>

        <section className="policy-section">
          <h2>Introduction</h2>
          <p>
            Welcome to Memoria. We are committed to protecting your privacy and ensuring you have a positive
            experience on our platform. This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you use our mobile application.
          </p>
        </section>

        <section className="policy-section">
          <h2>Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on the
            application includes:
          </p>
          <ul>
            <li><strong>Personal Data:</strong> Name, email address, and other contact information you provide</li>
            <li><strong>Memory Content:</strong> Photos, text, videos, and other media you upload and store</li>
            <li><strong>Device Information:</strong> Device type, operating system, and unique device identifiers</li>
            <li><strong>Usage Data:</strong> How you interact with the application, features used, and time spent</li>
            <li><strong>Location Data:</strong> Precise location information only with your explicit permission</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>How We Use Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and
            customized experience. Specifically, we may use information collected about you via the application to:
          </p>
          <ul>
            <li>Generate a personal profile and account to help you manage your memories</li>
            <li>Deliver targeted advertising, newsletters, and other information to you</li>
            <li>Email you regarding your account or other information we think may be of interest to you</li>
            <li>Fulfill and manage purchases, orders, payments, and other transactions</li>
            <li>Troubleshoot and improve our application performance</li>
            <li>Analyze app usage to enhance user experience and develop new features</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Data Security</h2>
          <p>
            We use administrative, technical, and physical security measures to protect your personal information.
            While we strive to use commercially acceptable means to protect your personal information,
            we cannot guarantee its absolute security.
          </p>
          <p>
            Your data is encrypted both in transit and at rest. We use industry-standard SSL/TLS protocols
            to secure data transmission. Access to personal information is restricted to employees and contractors
            who need access to perform their job functions.
          </p>
        </section>

        <section className="policy-section">
          <h2>User Rights</h2>
          <p>
            You have certain rights regarding your personal information:
          </p>
          <ul>
            <li><strong>Right to Access:</strong> You can request access to your personal data</li>
            <li><strong>Right to Correction:</strong> You can correct inaccurate information</li>
            <li><strong>Right to Deletion:</strong> You can request deletion of your account and data</li>
            <li><strong>Right to Portability:</strong> You can request to export your data</li>
            <li><strong>Right to Opt-out:</strong> You can opt out of marketing communications</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Children's Privacy</h2>
          <p>
            Memoria is not intended for children under the age of 13. We do not knowingly collect personal
            information from children under 13. If we become aware that a child under 13 has provided us with
            personal information, we will delete such information and terminate the child's account immediately.
          </p>
        </section>

        <section className="policy-section">
          <h2>Contact Information</h2>
          <p>
            If you have questions or comments about this Privacy Policy, or if you wish to exercise any of your
            rights, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> privacy@memoria.app<br />
            <strong>Address:</strong> Memoria Inc., Privacy Team
          </p>
        </section>
      </div>
    </div>
  );
}
