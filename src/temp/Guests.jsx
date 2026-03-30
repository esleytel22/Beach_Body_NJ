import { GUESTS } from "./data.js";
import "./Guests.css";

export default function Guests() {
  return (
    <section id="athletes" className="guests">
      <div className="guests__inner">
        <div className="guests__header">
          <div className="guests__eyebrow">FEATURED ATHLETES & SPEAKERS</div>
          <h2 className="guests__heading">
            MEET THE<br /><span className="gold-shimmer">CHAMPIONS</span>
          </h2>
        </div>
        <div className="guests__grid">
          {GUESTS.map((g, i) => (
            <div key={i} className="guest-card" style={{'--card-color': g.color, background: g.bg}}>
              <div className="guest-card__top" style={{background: g.color}} />
              <div className="guest-card__avatar" style={{background: g.color + '22', color: g.color}}>
                {g.emoji}
              </div>
              <div className="guest-card__name">{g.name}</div>
              <div className="guest-card__title">{g.title}</div>
              <div className="guest-card__corner" style={{color: g.color}}>◆</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}