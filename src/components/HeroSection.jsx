import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-effects">
        <div className="hero-gradient-1"></div>
        <div className="hero-gradient-2"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="hero-content">
        <div className="hero-logo-container">
          <img
            src="https://customer-assets.emergentagent.com/job_50c0156b-e7e4-4872-9283-1e4f92ff7c6e/artifacts/j9tmcfd6_3rd%20world%20logo.png"
            alt="3rd World RP Logo"
            className="hero-logo"
          />
        </div>

        <p className="hero-subtitle-main">
          The ultimate FiveM roleplay experience. WELCOME TO A NEW WORLD
        </p>
      </div>
    </section>
  );
};

export default HeroSection;