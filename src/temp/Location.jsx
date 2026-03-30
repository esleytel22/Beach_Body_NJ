import "./Location.css";

export default function Location() {
  return (
    <section className="location">
      <div className="location__inner">

        <div className="location__left">
          <div className="location__eyebrow">EVENT VENUE</div>
          <h2 className="location__heading">
            ASBURY PARK<br />
            <span className="gold-shimmer">CONVENTION CENTER</span>
          </h2>
          <div className="location__address">
            <div className="location__address-line">🏛️ One Ocean Avenue</div>
            <div className="location__address-line">📍 Asbury Park, NJ 07712</div>
            <div className="location__address-line">📅 August 2–3, 2025</div>
            <div className="location__address-line">🕗 Doors open 7:30 AM daily</div>
          </div>
          <div className="location__tags">
            <span className="location__tag">Free Parking</span>
            <span className="location__tag">Beachfront</span>
            <span className="location__tag">ADA Accessible</span>
            <span className="location__tag">30 min from NYC</span>
          </div>
          <a
            className="location__directions-btn"
            href="https://maps.google.com/?q=Asbury+Park+Convention+Center,+One+Ocean+Avenue,+Asbury+Park,+NJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            GET DIRECTIONS ↗
          </a>
        </div>

        <div className="location__right">
          <div className="location__map-wrap">
            <iframe
              className="location__map"
              title="Asbury Park Convention Center"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.3!2d-74.0121!3d40.2204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2277b8a8a8a8a%3A0x1!2sAsbury+Park+Convention+Center!5e0!3m2!1sen!2sus!4v1"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="location__map-overlay" />
          </div>
        </div>

      </div>
    </section>
  );
}