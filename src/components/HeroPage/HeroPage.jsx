import React from "react";

const HeroPage = () => {
  return (
    <div>
      <section
        id="home"
        className="hero"
        style={{
          backgroundImage: "url('/assets/bg-abstract.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-logo">
            <img src="/assets/logo.png" alt="$USD logo" />
          </div>
          <h1 className="hero-title">Unstable States Dollar</h1>
          <p className="hero-subtitle">The only dollar that embraces chaos.</p>
          <div className="hero-buttons">
            <a
              href="https://jup.ag"
              target="_blank"
              className="btn btn-primary"
            >
              Buy $USD
            </a>
            <a
              href="https://x.com/i/communities/1951079426835267602"
              target="_blank"
              className="btn btn-secondary"
            >
              Join Community
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
