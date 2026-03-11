import React from "react";
import "./AboutHero.css";

function AboutHero() {
  return (
    <div className="about-hero">
      <div className="hero-content">
        <span className="hero-tag">ABOUT US</span>

        <h1 className="hero-title">
          YOUR TRUSTED PARTNER 
          <br />
          IN <span className="italic">AUXILIARY AND SECURITY SOLUTIONS</span>
        </h1>

        <p className="hero-subtitle">
          Our company is built on the belief that when systems are elegant,
          teams move better every time.
        </p>
      </div>
    </div>
  );
}

export default AboutHero;