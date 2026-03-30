import "./Footer.css";

const LINKS = [
  { label: "Schedule", href: "#schedule" },
  { label: "Athletes", href: "#athletes" },
  { label: "Tickets",  href: "#tickets"  },
  { label: "Merch",    href: "#merch"    },
  { label: "Apply",    href: "#apply"    },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="gold-line" />
      <div className="footer__inner">
        <div className="footer__brand">
          <a className="footer__logo" href="#">NJ<span>Beach Body</span></a>
          <div className="footer__tagline">Where Champions Are Crowned</div>
        </div>
        <div className="footer__links">
          {LINKS.map(l => (
            <a key={l.href} className="nav-link" href={l.href}>{l.label}</a>
          ))}
        </div>
        <div className="footer__social">
          {["Instagram","Facebook","YouTube","TikTok"].map(s => (
            <span key={s} className="footer__social-link">{s}</span>
          ))}
        </div>
      </div>
      <div className="gold-line" />
      <div className="footer__bottom">
        <div className="footer__copy">
          © 2026 NJ Beach Body Contest · Asbury Park, NJ · All Rights Reserved
        </div>
        <div className="footer__legal">
          <a href="/privacy-policy" className="footer__legal-link">Privacy Policy</a>
          <span className="footer__legal-sep">◆</span>
          <a href="/terms-of-service" className="footer__legal-link">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}