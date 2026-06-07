import './TermsConditions.css';

export default function TermsConditions() {
  return (
    <div className="policy-page">
      <div className="policy-container">
        <h1 className="policy-title">Terms & Conditions</h1>
        <p className="policy-last-updated">Last Updated: June 2024</p>

        <section className="policy-section">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using the Memoria application, you accept and agree to be bound by the terms,
            conditions, and notices contained herein. If you do not agree to abide by the above, please do not
            use this service. We reserve the right to make changes to these terms and conditions at any time
            and without notice.
          </p>
        </section>

        <section className="policy-section">
          <h2>License to Use</h2>
          <p>
            Memoria grants you a limited, non-exclusive, non-transferable, and revocable license to use the
            application for your personal, non-commercial purposes, subject to the restrictions that follow.
            You agree that you will not:
          </p>
          <ul>
            <li>Modify or copy the application or any portion thereof</li>
            <li>Reverse engineer or attempt to reverse engineer the application</li>
            <li>Rent, lease, or lend the application</li>
            <li>Remove or alter any proprietary notices or labels on the application</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>User Responsibilities</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials and password.
            You agree to accept responsibility for all activities that occur under your account. You must
            notify us immediately of any unauthorized use of your account or any other breach of security.
            You are responsible for all content you upload to Memoria.
          </p>
        </section>

        <section className="policy-section">
          <h2>Prohibited Activities</h2>
          <p>
            You agree that you will not engage in any activity that:
          </p>
          <ul>
            <li>Violates any applicable laws or regulations</li>
            <li>Infringes upon the rights of others</li>
            <li>Contains malware, viruses, or harmful code</li>
            <li>Harasses, threatens, or defames any person</li>
            <li>Attempts to gain unauthorized access to our systems</li>
            <li>Reproduces, distributes, or transmits copyrighted material without permission</li>
            <li>Impersonates any person or entity</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Intellectual Property Rights</h2>
          <p>
            All content included in the Memoria application, including but not limited to text, graphics,
            logos, images, audio clips, and software, is the property of Memoria or its content suppliers
            and protected by international copyright laws. The compilation of all content on the application
            is the exclusive property of Memoria, with copyright authorship for this compilation by Memoria.
          </p>
          <p>
            You retain all rights to content you create and upload. By uploading content to Memoria,
            you grant us a license to store, display, and process your content for providing the service.
          </p>
        </section>

        <section className="policy-section">
          <h2>Limitation of Liability</h2>
          <p>
            The information on Memoria is provided "as is" without any representations or warranties, express
            or implied. Memoria makes no representations or warranties in relation to this website or the
            information and materials provided. We will not be liable to you in relation to the contents of,
            or use of, or otherwise in connection with, this website for any indirect, special, or consequential
            loss, or for any business losses, loss of revenue, income, profits, or anticipated savings.
          </p>
        </section>

        <section className="policy-section">
          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Memoria and its officers, directors, employees, agents,
            and successors from and against any and all losses, damages, liabilities, deficiencies, and claims
            arising from your use of the application or your violation of these terms and conditions.
          </p>
        </section>

        <section className="policy-section">
          <h2>Termination</h2>
          <p>
            We may terminate or suspend your account and access to the Memoria application immediately,
            without prior notice or liability, for any reason whatsoever, including if you breach any of
            these terms and conditions. Upon termination, your right to use the application will immediately
            cease, and we will have no obligation to you.
          </p>
        </section>

        <section className="policy-section">
          <h2>Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of
            applicable jurisdiction, and you irrevocably submit to the exclusive jurisdiction of the
            courts located in that area.
          </p>
        </section>

        <section className="policy-section">
          <h2>Contact Information</h2>
          <p>
            If you have any questions about these Terms & Conditions, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> legal@memoria.app<br />
            <strong>Address:</strong> Memoria Inc., Legal Team
          </p>
        </section>
      </div>
    </div>
  );
}
