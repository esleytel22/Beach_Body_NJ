import { useState } from "react";
import { IG_POSTS } from "./data.js";
import "./Instagram.css";

export default function Instagram() {
  const [hovered, setHovered] = useState(null);
  return (
    <section className="instagram">
      <div className="instagram__inner">
        <div className="instagram__header">
          <div className="instagram__eyebrow">FOLLOW THE JOURNEY</div>
          <h2 className="instagram__heading">
            <span className="instagram__handle gold-shimmer">@NJBEACHBODY</span>
          </h2>
          <p className="instagram__hashtag">Tag your prep journey: <span className="instagram__ht">#NJBeachBodyContest</span></p>
        </div>
        <div className="instagram__grid">
          {IG_POSTS.map((p, i) => (
            <div key={i} className={`ig-cell ${p.feature ? "ig-cell--feature" : ""}`}
              style={{background: i % 2 === 0 ? '#0F0F0F' : '#0A0A0A'}}
              onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
              <div className="ig-cell__content">
                <div className={p.feature ? "ig-cell__emoji--feature" : "ig-cell__emoji--small"}>{p.emoji}</div>
                <div className={p.feature ? "ig-cell__label--feature" : "ig-cell__label--small"}>{p.label}</div>
              </div>
              <div className={`ig-cell__overlay ${hovered === i ? "ig-cell__overlay--show" : ""}`}>
                <div className="ig-cell__likes">❤️ {p.likes}</div>
                <div className="ig-cell__comments">💬 {p.comments}</div>
                <div className="ig-cell__tag">#NJBBC</div>
              </div>
              {hovered === i && <div className="ig-cell__border" />}
            </div>
          ))}
        </div>
        <div className="instagram__follow">
          <button className="instagram__follow-btn">FOLLOW @NJBEACHBODY</button>
        </div>
      </div>
    </section>
  );
}