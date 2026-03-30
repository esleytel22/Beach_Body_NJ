import "./LegalPage.css";

export default function TermsOfService() {
  return (
    <div className="legal">
      <div className="legal__inner">
        <a href="/" className="legal__back">← Back to NJBBC</a>
        <div className="legal__eyebrow">LEGAL</div>
        <h1 className="legal__heading">Terms of Service</h1>
        <p className="legal__updated">Last updated: January 1, 2025</p>

        <div className="legal__section">
          <h2 className="legal__subheading">1. Acceptance of Terms</h2>
          <p>By purchasing tickets or registering for the NJ Beach Body Contest, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
        </div>

        <div className="legal__section">
          <h2 className="legal__subheading">2. Tickets & Registration</h2>
          <p>All ticket sales are final. No refunds will be issued except in the event of cancellation by the organizers. Tickets are non-transferable without prior written consent. The organizers reserve the right to refuse entry to any individual.</p>
        </div>

        <div className="legal__section">
          <h2 className="legal__subheading">3. Competition Rules</h2>
          <p>All athletes must comply with NPC/IFBB competition rules and standards. Athletes found using prohibited substances may be disqualified and banned from future events. All judging decisions are final.</p>
        </div>

        <div className="legal__section">
          <h2 className="legal__subheading">4. Liability Waiver</h2>
          <p>Attendees and participants enter at their own risk. The NJ Beach Body Contest, its organizers, sponsors, and staff are not liable for any injury, loss, or damage incurred during the event. Athletes competing do so voluntarily and assume all risks associated with competition.</p>
        </div>

        <div className="legal__section">
          <h2 className="legal__subheading">5. Code of Conduct</h2>
          <p>All attendees are expected to behave respectfully toward fellow attendees, athletes, judges, and staff. The organizers reserve the right to remove any individual from the event for disruptive or inappropriate behavior without refund.</p>
        </div>

        <div className="legal__section">
          <h2 className="legal__subheading">6. Event Changes</h2>
          <p>The organizers reserve the right to modify the event schedule, lineup, or format. In the unlikely event of cancellation, ticket holders will be notified and offered a refund or credit toward a future event.</p>
        </div>

        <div className="legal__section">
          <h2 className="legal__subheading">7. Contact Us</h2>
          <p>For questions regarding these Terms, contact us at <a href="mailto:info@njbeachbodycontest.com" className="legal__link">info@njbeachbodycontest.com</a>.</p>
        </div>
      </div>
    </div>
  );
}