
// import React from "react";
import "./Hero.css";
import heroImage from "../../assets/images/hero-image.png";

// interface HeroProps {}

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-message-wrapper">
        <span>
          Basketful of
          <br />
          <span className="highlight">WEEKLY</span>
          <br /> Deals
        </span>
      </div>

      <img src={heroImage} alt="Basket of goods" className="hero-image" />
      <span className="hero-subtext">
        Skip the trip, shop fresh!
        <br /> Straight from the market to your doorstep!
      </span>
      <button className="hero-cta">SHOP FOR WEEKLY DEALS</button>

      <div className="hero-image-plate"></div>
    </div>
  );
};

export default Hero;
