import "./LegalPage.css";

export default function PrivacyPolicy() {
  return (
    <div className="legal">
      <div className="legal__inner">
        <a href="/" className="legal__back">← Back to NJBBC</a>
        <div className="legal__eyebrow">LEGAL</div>
        <h1 className="legal__heading">Privacy Policy</h1>
        <p className="legal__updated">Last updated: January 1, 2025</p>

        <div className="legal__section">
          <h2 className="legal__subheading">1. Information We Collect</h2>
          <p>We collect information you provide directly, including name, email address, phone number, and payment information when you register for the NJ Beach Body Contest or purchase tickets and merchandise.</p>
        </div>

        <div className="legal__section">
          <h2 className="legal__subheading">2. How We Use Your Information</h2>
          <p>We use the information we collect to process registrations and ticket purchases, communicate event details and updates, send marketing communications (with your consent), and improve our services.</p>
        </div>

        <div className="legal__section">
          <h2 className="legal__subheading">3. Information Sharing</h2>
          <p>We do not sell or rent your personal information to third parties. We may share your information with event sponsors and partners only with your explicit consent, and with service providers who assist in operating our website and conducting our events.</p>
        </div>

        <div className="legal__section">
          <h2 className="legal__subheading">4. Photography & Media</h2>
          <p>By attending the NJ Beach Body Contest, you consent to being photographed and filmed. Images and footage may be used for promotional purposes including social media, marketing materials, and future event promotion.</p>
        </div>

        <div className="legal__section">
          <h2 className="legal__subheading">5. Data Security</h2>
          <p>We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>
        </div>

        <div className="legal__section">
          <h2 className="legal__subheading">6. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:info@njbeachbodycontest.com" className="legal__link">info@njbeachbodycontest.com</a>.</p>
        </div>
      </div>
    </div>
  );
}