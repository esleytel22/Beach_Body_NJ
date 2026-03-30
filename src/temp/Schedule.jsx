import { useState } from "react";
import { SCHEDULE } from "./data.js";
import "./Schedule.css";

export default function Schedule() {
  const days = Object.keys(SCHEDULE);
  const [active, setActive] = useState(days[0]);

  return (
    <section id="schedule" className="schedule">
      <div className="schedule__inner">
        <div className="schedule__header">
          <div>
            <div className="schedule__eyebrow">COMPETITION PROGRAM</div>
            <h2 className="schedule__heading">
              EVENT<br /><span className="gold-shimmer">SCHEDULE</span>
            </h2>
          </div>
          <div className="schedule__tabs">
            {days.map(d => (
              <button key={d} className={`schedule__tab ${active === d ? "schedule__tab--active" : ""}`}
                onClick={() => setActive(d)}>{d}</button>
            ))}
          </div>
        </div>

        <div className="gold-line" style={{marginBottom: '2px'}} />

        <div className="schedule__list">
          {SCHEDULE[active].map((row, i) => (
            <div key={i} className={`schedule__row ${i % 2 === 1 ? "schedule__row--alt" : ""}`}>
              <div className="schedule__time">{row.time}</div>
              <div className="schedule__icon">{row.icon}</div>
              <div>
                <div className="schedule__title">{row.title}</div>
                <div className="schedule__room">{row.room}</div>
              </div>
              <div className="schedule__badge" style={{color: row.color, borderColor: row.color + "44"}}>
                {row.type}
              </div>
            </div>
          ))}
        </div>
        <div className="gold-line" />
      </div>
    </section>
  );
}