export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Rajdhani:wght@400;500;600;700&display=swap');

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

      html { -webkit-text-size-adjust: 100%; scroll-behavior: smooth; scroll-padding-top: 70px; }

      body {
        background: #080808;
        color: #E8E0D0;
        font-family: 'Rajdhani', sans-serif;
        min-height: 100dvh;
        overflow-x: hidden;
      }

      :root {
        --gold:       #C9A84C;
        --gold-light: #E8C870;
        --gold-dim:   #7A6030;
        --chrome:     #C8C8C8;
        --chrome-dim: #888;
        --obsidian:   #080808;
        --obsidian-2: #0F0F0F;
        --obsidian-3: #161616;
        --cream:      #E8E0D0;
        --red:        #8B1A1A;
      }

      /* ── Keyframes ── */
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(40px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
      @keyframes shimmer {
        0%   { background-position: -200% center; }
        100% { background-position:  200% center; }
      }
      @keyframes marquee {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes pulse-gold {
        0%, 100% { box-shadow: 0 0 0 0 rgba(201,168,76,0.4); }
        50%       { box-shadow: 0 0 0 10px rgba(201,168,76,0); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50%       { transform: translateY(-10px); }
      }
      @keyframes driftA {
        0%,100% { transform: translate(0,0) rotate(12deg); }
        33%      { transform: translate(12px,-18px) rotate(15deg); }
        66%      { transform: translate(-8px,-10px) rotate(9deg); }
      }
      @keyframes driftB {
        0%,100% { transform: translate(0,0) rotate(-6deg); }
        33%      { transform: translate(-14px,-12px) rotate(-9deg); }
        66%      { transform: translate(10px,-20px) rotate(-4deg); }
      }
      @keyframes driftC {
        0%,100% { transform: translate(0,0) rotate(3deg); }
        50%      { transform: translate(8px,-16px) rotate(7deg); }
      }
      @keyframes addPop {
        0%   { transform: scale(1); }
        50%  { transform: scale(1.08); }
        100% { transform: scale(1); }
      }
      @keyframes scanline {
        0%   { transform: translateY(-100%); }
        100% { transform: translateY(100vh); }
      }

      /* ── Shared gold shimmer text ── */
      .gold-shimmer {
        background: linear-gradient(90deg, var(--gold-dim), var(--gold-light), var(--gold), var(--gold-dim));
        background-size: 200% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: shimmer 4s linear infinite;
      }

      /* ── Nav link ── */
      .nav-link {
        font-family: 'Rajdhani', sans-serif;
        font-weight: 600;
        font-size: 13px;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: var(--chrome-dim);
        text-decoration: none;
        cursor: pointer;
        transition: color 0.2s;
        min-height: 44px;
        display: inline-flex;
        align-items: center;
        -webkit-tap-highlight-color: transparent;
      }
      @media (hover:hover) { .nav-link:hover { color: var(--gold-light); } }

      .added-pop { animation: addPop 0.3s ease; }

      input, textarea, select, button {
        font-family: 'Rajdhani', sans-serif;
        -webkit-appearance: none;
        appearance: none;
        border-radius: 0;
      }
      input, textarea, select { font-size: 16px; }
      input::placeholder, textarea::placeholder { color: #333; font-family: 'Cormorant Garamond', serif; font-size: 14px; }
      input::-webkit-inner-spin-button { display: none; }
      select option { background: #111; color: var(--cream); }

      /* Gold divider line */
      .gold-line {
        height: 1px;
        background: linear-gradient(90deg, transparent, var(--gold), transparent);
      }

      .zigzag-top {
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--gold), var(--gold-light), var(--gold), transparent);
      }
    `}</style>
  );
}