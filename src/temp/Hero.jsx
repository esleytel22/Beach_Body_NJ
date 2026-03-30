import { useState, useEffect } from "react";
import "./Hero.css";

export default function Hero() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const target = 847;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      setCount(c => { if (c >= target) { clearInterval(timer); return target; } return c + step; });
    }, 20);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      {/* Background texture */}
      <div className="hero__grid-bg" />
      <div className="hero__vignette" />

      {/* Drifting decorative frames */}
      <div className="hero__frame hero__frame--a" />
      <div className="hero__frame hero__frame--b" />
      <div className="hero__frame hero__frame--c" />

      {/* Floating medals */}
      <div className="hero__medal hero__medal--left">🥇</div>
      <div className="hero__medal hero__medal--right">🏆</div>

      <div className="hero__content">
        <div className="hero__eyebrow">AUG 2–3, 2025 · ASBURY PARK, NJ</div>

        <h1 className="hero__title">
          <span className="hero__title-line hero__title-line--1">NJ BEACH</span>
          <span className="hero__title-line hero__title-line--2 gold-shimmer">BODY</span>
          <span className="hero__title-line hero__title-line--3">CONTEST</span>
        </h1>

        <div className="hero__tagline">
          Where Champions Are Crowned on the Shore
        </div>

        <div className="hero__divider">
          <div className="hero__divider-line" />
          <div className="hero__divider-diamond">◆</div>
          <div className="hero__divider-line" />
        </div>

        <div className="hero__stats">
          {[
            { num: count + "+", label: "Athletes Registered" },
            { num: "12",        label: "Divisions" },
            { num: "2",         label: "Days of Competition" },
            { num: "$25K+",     label: "Prize Pool" },
          ].map(s => (
            <div key={s.label} className="hero__stat">
              <div className="hero__stat-num">{s.num}</div>
              <div className="hero__stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="hero__ctas">
          <button className="hero__cta-primary">🎟 REGISTER NOW</button>
          <button className="hero__cta-secondary">VIEW SCHEDULE</button>
        </div>

        <div className="hero__divisions">
          {["Men's Physique","Classic Physique","Bikini","Women's Wellness","Figure","Bodybuilding"].map(d => (
            <span key={d} className="hero__division-tag">{d}</span>
          ))}
        </div>
      </div>

      <div className="hero__scroll-hint">
        <div className="hero__scroll-line" />
        <span>SCROLL</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}