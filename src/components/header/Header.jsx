import React from "react";
import "./header.css";
import heroIcon from "../../assets/hero/hero.png";

function Header() {
  return (
    <header className="header-section position-relative p-0">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-detail-container">
          <h1>
            Enjoy Our <br /> Delicious Meal
          </h1>
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
          </p>
          <button className="primary-btn">BOOK A TABLE</button>
        </div>

        <div className="hero-icon-img">
          <img src={heroIcon} alt="" />
        </div>
      </section>

    </header>
  );
}

export default Header;
