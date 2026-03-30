import "./Navbar.css";

const LINKS = [
  { label: "Schedule", href: "#schedule" },
  { label: "Athletes", href: "#athletes" },
  { label: "Tickets",  href: "#tickets"  },
  { label: "Merch",    href: "#merch"    },
];

export default function Navbar({ scrolled, cartTotal }) {
  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__logo">
        NJ<span className="navbar__logo-accent">Beach Body</span>
      </div>
      <div className="navbar__links">
        {LINKS.map(l => (
          <a key={l.href} className="nav-link" href={l.href}>{l.label}</a>
        ))}
      </div>
      <div className="navbar__actions">
        {cartTotal > 0 && (
          <div className="navbar__cart">🛒 {cartTotal}</div>
        )}
        <a className="navbar__cta" href="#tickets">REGISTER NOW</a>
      </div>
    </nav>
  );
}