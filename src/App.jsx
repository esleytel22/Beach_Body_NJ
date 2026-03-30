import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import GlobalStyles     from "./temp/GlobalStyles.jsx";
import Navbar           from "./temp/Navbar.jsx";
import Hero             from "./temp/Hero.jsx";
import TickerTape       from "./temp/TickerTape.jsx";
import Location         from "./temp/location.jsx";
import Schedule         from "./temp/Schedule.jsx";
import Guests           from "./temp/Guests.jsx";
import SponsorTicker    from "./temp/SponsorTicker.jsx";
import Tickets          from "./temp/Tickets.jsx";
import Merchandise      from "./temp/Merchandise.jsx";
import Instagram        from "./temp/Instagram.jsx";
import EventRequestForm from "./temp/EventRequestForm.jsx";
import Footer           from "./temp/Footer.jsx";
import PrivacyPolicy    from "./temp/Privacypolicy.jsx";
import TermsOfService   from "./temp/Termsofservice.jsx";

function MainSite() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="app-root">
      <Navbar scrolled={scrolled} />
      <Hero />
      <TickerTape />
      <Location />
      <Schedule />
      <Guests />
      <SponsorTicker />
      <Tickets />
      <Merchandise />
      <Instagram />
      <EventRequestForm />
      <Footer />
    </div>
  );
}

function LegalPage({ children }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/"                 element={<MainSite />} />
        <Route path="/privacy-policy"   element={<LegalPage><PrivacyPolicy /></LegalPage>} />
        <Route path="/terms-of-service" element={<LegalPage><TermsOfService /></LegalPage>} />
      </Routes>
    </BrowserRouter>
  );
}

// import { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";


// import GlobalStyles from "./temp/GlobalStyles.jsx";
// import Navbar       from "./temp/Navbar.jsx";
// import Hero         from "./temp/Hero.jsx";
// import TickerTape   from "./temp/TickerTape.jsx";
// import Location       from "./temp/location.jsx";
// import Schedule     from "./temp/Schedule.jsx";
// import Guests       from "./temp/Guests.jsx";
// import SponsorTicker    from "./temp/SponsorTicker.jsx";
// import Tickets      from "./temp/Tickets.jsx";
// import Merchandise  from "./temp/Merchandise.jsx";
// import Instagram        from "./temp/Instagram.jsx";
// import EventRequestForm from "./temp/EventRequestForm.jsx";
// import Footer           from "./temp/Footer.jsx";
// import PrivacyPolicy    from "./temp/Privacypolicy.jsx";
// import TermsOfService   from "./temp/Termsofservice.jsx";

// function MainSite() {
//   const [scrolled, setScrolled] = useState(false);
//   const [cart, setCart]         = useState({});

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 60);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const addToCart = (name) => setCart(c => ({ ...c, [name]: (c[name] || 0) + 1 }));
//   const cartTotal = Object.values(cart).reduce((a, b) => a + b, 0);

//   return (
//     <div className="app-root">
//       <Navbar scrolled={scrolled} cartTotal={cartTotal} />
//       <Hero />
//       <TickerTape />
//       <Schedule /> 
//       <Location />
//       <Guests />
//       <SponsorTicker />
//       <Tickets />
//       <Merchandise cart={cart} onAddToCart={addToCart} />
//       <Instagram />
//       <EventRequestForm />
//       <Footer />
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <GlobalStyles />
//       <Routes>
//         <Route path="/"                 element={<MainSite />} />
//         <Route path="/privacy-policy"   element={<PrivacyPolicy />} />
//         <Route path="/terms-of-service" element={<TermsOfService />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }