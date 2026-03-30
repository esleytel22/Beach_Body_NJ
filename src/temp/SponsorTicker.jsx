import "./SponsorTicker.css";

import elev8       from "../sponsors/4-Elev8_Logo-black.png";
import as_logo     from "../sponsors/AS-VerticalLogo-Black.png";
import biowell     from "../sponsors/Biowell_Labs_BIALE NOWA STRONA.png";
import bum         from "../sponsors/BUM ENERGY LOGO BLACK.png";
import celsius     from "../sponsors/celsius logo vert black tag - cty-usa_graphic-img_.png";
import evogen      from "../sponsors/Evogen logo title safety white on black2.png";
import evolgear    from "../sponsors/evolgear_logo_bk.png";
import gnc         from "../sponsors/GNC Logo Red.jpg";
import gym80       from "../sponsors/Gym80 black and red logo.png";
import gymshark    from "../sponsors/Gymshark_Combi_Logo_Black.png";
import htp         from "../sponsors/HTP-logo-RGB.png";
import integral    from "../sponsors/IntegralMedicaLogo.png";
import jw          from "../sponsors/jw sport logo.png";
import linear      from "../sponsors/Logo 2_150944 Enhanced.png";
import logoDK      from "../sponsors/logoDKnew.png";
import logoStacked from "../sponsors/Logo_stacked_blue.png";
import masterBlack from "../sponsors/Master Black Logo Square.png";
import mutant      from "../sponsors/Mutant_Brandmark_Stacked_v1_Black_RGB PREFERRED FOR WHITE BACKGROUND.png";
import nebbia      from "../sponsors/Nebbia.jpg";
import newtech     from "../sponsors/NEWTECH LOGO_OLYMPIA.png";
import wolfhead    from "../sponsors/OFFICAL WOLF HEAD LOGO.png";
import olympia     from "../sponsors/Olympia Trading Cards Black.png";
import orangeBlack from "../sponsors/Orange and Black Logo.png";
import protan      from "../sponsors/ProTan.jpg";
import raw         from "../sponsors/RAW-Logo-01.png";
import redone      from "../sponsors/red one logo.png";
import redcon1     from "../sponsors/REDCON1_MAIN_LOGO_RED.png";
import reign       from "../sponsors/REIGN Logo.png";
import rosen       from "../sponsors/Rosen LOGO.png";
import ruleone     from "../sponsors/RuleOne_Black Logo.png";
import skull       from "../sponsors/skulllogoWwordmark.png";
import steelfit    from "../sponsors/Steel-Fit-Logo-Horiz-Tag_140851.jpg";
import superfitness from "../sponsors/superfitness.png";
import titan       from "../sponsors/thumbnail_2.0 titan-final-registered.png";
import tsunami     from "../sponsors/TSUNAMI LOGO-black font.png";
import tyr         from "../sponsors/TYR_Black.png";
import u7          from "../sponsors/U7logo.png";
import usafed      from "../sponsors/USA Fed Logo PNG.png";
import wings       from "../sponsors/WingsofStrength-Logo-2019-RGB.png";
import xmaster     from "../sponsors/xmaster.png";

const SPONSORS = [
  { src: elev8,        alt: "Elev8",           invert: true  },
  { src: as_logo,      alt: "AS",              invert: true  },
  { src: biowell,      alt: "Biowell Labs",    invert: false },
  { src: bum,          alt: "Bum Energy",      invert: true  },
  { src: celsius,      alt: "Celsius",         invert: true  },
  { src: evogen,       alt: "Evogen",          invert: false },
  { src: evolgear,     alt: "Evolgear",        invert: true  },
  { src: gnc,          alt: "GNC",             invert: false },
  { src: gym80,        alt: "Gym80",           invert: false },
  { src: gymshark,     alt: "Gymshark",        invert: true  },
  { src: htp,          alt: "Hi-Tech Pharma",  invert: false },
  { src: integral,     alt: "Integral Medica", invert: false },
  { src: jw,           alt: "JW Sport",        invert: false },
  { src: linear,       alt: "Linear",          invert: false },
  { src: logoDK,       alt: "DK",              invert: false },
  { src: logoStacked,  alt: "Sponsor",         invert: false },
  { src: masterBlack,  alt: "Master",          invert: true  },
  { src: mutant,       alt: "Mutant",          invert: true  },
  { src: nebbia,       alt: "Nebbia",          invert: false },
  { src: newtech,      alt: "New Tech",        invert: false },
  { src: wolfhead,     alt: "Wolf",            invert: false },
  { src: olympia,      alt: "Olympia",         invert: false },
  { src: orangeBlack,  alt: "Sponsor",         invert: false },
  { src: protan,       alt: "Pro Tan",         invert: false },
  { src: raw,          alt: "RAW",             invert: true  },
  { src: redone,       alt: "Red One",         invert: false },
  { src: redcon1,      alt: "Redcon1",         invert: false },
  { src: reign,        alt: "Reign",           invert: false },
  { src: rosen,        alt: "Rosen",           invert: false },
  { src: ruleone,      alt: "Rule One",        invert: true  },
  { src: skull,        alt: "Skull",           invert: true  },
  { src: steelfit,     alt: "Steel Fit",       invert: false },
  { src: superfitness, alt: "Super Fitness",   invert: false },
  { src: titan,        alt: "Titan",           invert: false },
  { src: tsunami,      alt: "Tsunami",         invert: true  },
  { src: tyr,          alt: "TYR",             invert: true  },
  { src: u7,           alt: "U7",              invert: false },
  { src: usafed,       alt: "USA Federation",  invert: false },
  { src: wings,        alt: "Wings of Strength", invert: false },
  { src: xmaster,      alt: "X Master",        invert: false },
];

export default function SponsorTicker() {
  const items = [...SPONSORS, ...SPONSORS];
  return (
    <div className="sponsor-ticker">
      <div className="sponsor-ticker__label">SPONSORS</div>
      <div className="sponsor-ticker__track-wrap">
        <div className="sponsor-ticker__track">
          {items.map((s, i) => (
            <div key={i} className="sponsor-ticker__logo-wrap">
              <img
                src={s.src}
                alt={s.alt}
                className={"sponsor-ticker__logo" + (s.invert ? " sponsor-ticker__logo--invert" : "")}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}