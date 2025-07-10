import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-container">
      <div className="ai-banner">
        <span className="ai-badge">AI</span>
        Make your first impression unforgettable.
      </div>
      <h1 className="hero-title">
       When personalization <br /> meets precision.
      </h1>
      <p className="hero-subtitle">
       For cold outreach that truly converts, where every word counts — you need precision,  <br />
       personalization, and zero compromise. That’s ColdMail Genius.
      </p>
      <div className="hero-buttons">
        <button className="btn filled">Try Now</button>
        <button className="btn outlined">Sign up free</button>
      </div>
    </section>
  );
};

export default HeroSection;
