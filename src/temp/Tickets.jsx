import { TICKETS } from "./data.js";
import "./Tickets.css";

export default function Tickets() {
  return (
    <section id="tickets" className="tickets">
      <div className="tickets__inner">
        <div className="tickets__header">
          <div className="tickets__eyebrow">SECURE YOUR SPOT</div>
          <h2 className="tickets__heading">
            COMPETITION<br /><span className="gold-shimmer">PASSES</span>
          </h2>
          <p className="tickets__sub">Limited seating. All passes include both competition days.</p>
        </div>
        <div className="tickets__grid">
          {TICKETS.map((t, i) => (
            <div key={i}
              className={`tickets__tier ${t.featured ? "tickets__tier--featured" : ""}`}
              style={{'--tc': t.color}}>
              {t.badge && <div className="tickets__badge" style={{background: t.color}}>{t.badge}</div>}
              <div className="tickets__tier-top" style={{background: t.color}} />
              <div className="tickets__tier-name" style={{color: t.color}}>{t.name}</div>
              <div className="tickets__price">
                <span className="tickets__price-dollar">$</span>{t.price}
              </div>
              <div className="tickets__features">
                {t.features.map((f, j) => (
                  <div key={j} className="tickets__feature">
                    <span className="tickets__feature-dot" style={{color: t.color}}>◆</span>
                    {f}
                  </div>
                ))}
              </div>
              <a
                className="tickets__btn"
                href={t.paymentLink}
                target="_blank"
                rel="noopener noreferrer"
                style={t.featured
                  ? {background: `linear-gradient(135deg, ${t.color}99, ${t.color})`, color: '#080808', border: 'none', textDecoration: 'none', display: 'block', textAlign: 'center'}
                  : {background: 'transparent', color: t.color, border: `1px solid ${t.color}44`, textDecoration: 'none', display: 'block', textAlign: 'center'}
                }
              >
                GET {t.name} PASS
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}