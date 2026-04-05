export const SCHEDULE = {
  "SAT AUG 2": [
    { time: "8:00 AM",  icon: "🏋️", title: "Athlete Check-In & Weigh-In",          room: "Registration Hall A", type: "OFFICIAL",    color: "#C9A84C" },
    { time: "10:00 AM", icon: "🎤", title: "Opening Ceremony & Athlete Parade",     room: "Main Stage",          type: "CEREMONY",    color: "#888" },
    { time: "11:00 AM", icon: "💪", title: "Men's Physique — Prejudging",           room: "Competition Floor",   type: "COMPETITION", color: "#8B1A1A" },
    { time: "1:00 PM",  icon: "🥗", title: "Nutrition & Contest Prep Seminar",      room: "Seminar Room B",      type: "SEMINAR",     color: "#C9A84C" },
    { time: "2:30 PM",  icon: "💪", title: "Bikini Division — Prejudging",          room: "Competition Floor",   type: "COMPETITION", color: "#8B1A1A" },
    { time: "4:00 PM",  icon: "📸", title: "Pro Athlete Meet & Greet",              room: "Sponsor Village",     type: "VIP",         color: "#888" },
    { time: "7:00 PM",  icon: "🏆", title: "Evening Show — Men's Physique Finals",  room: "Main Stage",          type: "FINALS",      color: "#C9A84C" },
  ],
  "SUN AUG 3": [
    { time: "9:00 AM",  icon: "🏋️", title: "Classic Physique — Prejudging",        room: "Competition Floor",   type: "COMPETITION", color: "#8B1A1A" },
    { time: "10:30 AM", icon: "🎤", title: "Posing Masterclass w/ Pro Athletes",    room: "Workshop Stage",      type: "SEMINAR",     color: "#C9A84C" },
    { time: "12:00 PM", icon: "🥩", title: "Bodybuilding Nutrition Q&A Panel",      room: "Seminar Room A",      type: "SEMINAR",     color: "#C9A84C" },
    { time: "2:00 PM",  icon: "💪", title: "Women's Wellness — Prejudging",         room: "Competition Floor",   type: "COMPETITION", color: "#8B1A1A" },
    { time: "4:00 PM",  icon: "📸", title: "Vendor Expo & Supplement Showcase",     room: "Expo Hall",           type: "EXPO",        color: "#888" },
    { time: "6:30 PM",  icon: "🏆", title: "Grand Finals & Awards Ceremony",        room: "Main Stage",          type: "FINALS",      color: "#C9A84C" },
  ],
};

export const GUESTS = [
  { name: "Marcus 'Iron' Webb",   title: "IFBB Pro — Classic Physique",  emoji: "🏆", color: "#C9A84C", bg: "#1A1500" },
  { name: "Destiny Cruz",         title: "NPC National Bikini Champion", emoji: "💎", color: "#C8C8C8", bg: "#141414" },
  { name: "Coach Ray Dominguez",  title: "Elite Contest Prep Coach",     emoji: "🎯", color: "#C9A84C", bg: "#1A1500" },
  { name: "Sofia 'Steel' Harmon", title: "IFBB Pro — Women's Wellness",  emoji: "⚡", color: "#C8C8C8", bg: "#141414" },
  { name: "Dr. James Okafor",     title: "Sports Nutritionist & Author", emoji: "🔬", color: "#C9A84C", bg: "#1A1500" },
  { name: "Tyler 'Titan' Brooks", title: "Men's Physique Open Champion", emoji: "🥇", color: "#C8C8C8", bg: "#141414" },
];

export const TICKETS = [
  {
    name: "GENERAL test",
    paymentLink: "https://buy.stripe.com/test_7sYcN50KXeK0dPY5ysgbm03",
    price: 49,
    color: "#888",
    featured: false,
    features: [
      "Both days — Saturday & Sunday",
      "Spectator seating — all divisions",
      "Access to vendor expo",
      "Supplement samples bag",
    ],
  },
  {
    name: "VIP",
    paymentLink: "https://buy.stripe.com/test_4gM6oH2T59pGaDMgd6gbm02",
    price: 149,
    color: "#C9A84C",
    featured: true,
    badge: "MOST POPULAR",
    features: [
      "Everything in General",
      "Front-row reserved seating",
      "VIP meet & greet with pro athletes",
      "Exclusive VIP lounge access",
      "Official event t-shirt & poster",
      "Post-show awards reception",
    ],
  },
  {
    name: "ELITE",
    paymentLink: "https://buy.stripe.com/test_aFa00j0KXbxO5js1icgbm00",
    price: 499,
    color: "#C8C8C8",
    featured: false,
    features: [
      "Everything in VIP",
      "Backstage access pass",
      "Private posing clinic w/ a pro",
      "Signed athlete photo package",
      "Premium gift bag ($150 value)",
    ],
  },
];

export const MERCH = [
  { name: "NJBBC Lifting Belt",   paymentLink: "https://buy.stripe.com/REPLACE_BELT",   desc: "Premium leather, gold hardware",     price: 89,  emoji: "🥋", tag: "BEST SELLER", color: "#C9A84C" },
  { name: "Competition Tee",      paymentLink: "https://buy.stripe.com/REPLACE_TEE",      desc: "Heavyweight cotton, gold foil logo",  price: 45,  emoji: "👕", tag: "NEW",         color: "#C8C8C8" },
  { name: "Athlete Hoodie",       paymentLink: "https://buy.stripe.com/REPLACE_HOODIE",       desc: "Fleece lined, embroidered crest",     price: 79,  emoji: "🧥", tag: null,          color: "#C9A84C" },
  { name: "Posing Trunk",         paymentLink: "https://buy.stripe.com/REPLACE_TRUNK",         desc: "Competition grade, metallic finish",  price: 55,  emoji: "🩱", tag: "LIMITED",     color: "#C8C8C8" },
  { name: "Shaker + Supplement",  paymentLink: "https://buy.stripe.com/REPLACE_SHAKER",  desc: "Branded shaker + pre-workout pack",   price: 35,  emoji: "🧴", tag: null,          color: "#C9A84C" },
  { name: "Gold Trophy Figurine", paymentLink: "https://buy.stripe.com/REPLACE_TROPHY", desc: "Collectible resin, 12 inch",          price: 120, emoji: "🏆", tag: "COLLECTOR",   color: "#C8C8C8" },
];

export const IG_POSTS = [
  { emoji: "💪", label: "PEAK WEEK",   feature: true,  likes: "4.2K", comments: "312" },
  { emoji: "🏆", label: "STAGE READY", feature: false, likes: "2.8K", comments: "198" },
  { emoji: "📸", label: "PUMP ROOM",   feature: false, likes: "3.1K", comments: "241" },
  { emoji: "🥇", label: "CHAMPIONS",   feature: false, likes: "5.6K", comments: "489" },
  { emoji: "🔥", label: "BACKSTAGE",   feature: false, likes: "1.9K", comments: "156" },
];

export const TICKER_ITEMS = [
  "🏆 NJ BEACH BODY CONTEST",
  "⚡ AUG 2-3 · ASBURY PARK NJ",
  "💪 ALL DIVISIONS OPEN",
  "🥇 REGISTER NOW",
  "🔥 PRO ATHLETES CONFIRMED",
  "🎟 VIP SPOTS LIMITED",
  "💎 PREMIUM EXPERIENCE",
];
