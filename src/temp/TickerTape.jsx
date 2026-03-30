import { TICKER_ITEMS } from "./data.js";
import "./TickerTape.css";

export default function TickerTape() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="ticker">
      <div className="ticker__track">
        {items.map((item, i) => (
          <span key={i} className="ticker__item">{item}<span className="ticker__sep">◆</span></span>
        ))}
      </div>
    </div>
  );
}