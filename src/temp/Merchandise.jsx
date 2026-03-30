import { MERCH } from "./data.js";
import "./Merchandise.css";

export default function Merchandise() {
  return (
    <section id="merch" className="merch">
      <div className="merch__inner">
        <div className="merch__header">
          <div>
            <div className="merch__eyebrow">OFFICIAL STORE</div>
            <h2 className="merch__heading">
              EVENT<br /><span className="gold-shimmer">MERCHANDISE</span>
            </h2>
          </div>
          <div className="merch__sub">Competition-grade gear & collectibles</div>
        </div>

        <div className="merch__grid">
          {MERCH.map((item, i) => (
            <div key={i} className="merch-card">
              <div className="merch-card__visual" style={{background: item.color + '11'}}>
                {item.tag && (
                  <div className="merch-card__tag" style={{background: item.color, color: '#080808'}}>
                    {item.tag}
                  </div>
                )}
                <div className="merch-card__emoji">{item.emoji}</div>
              </div>
              <div className="merch-card__body">
                <div className="merch-card__name">{item.name}</div>
                <div className="merch-card__desc">{item.desc}</div>
                <div className="merch-card__footer">
                  <div className="merch-card__price" style={{color: item.color}}>${item.price}</div>
                  <a
                    className="merch-card__btn"
                    href={item.paymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{background: item.color, color: '#080808', textDecoration: 'none', display: 'inline-flex', alignItems: 'center'}}
                  >
                    BUY NOW
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}