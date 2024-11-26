import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section className="features" id="features">
      <h2>Why Choose Us?</h2>
      <div className="feature-cards">
        <div className="feature-card">
          <h3>Fast Performance</h3>
          <p>Optimized for speed and efficiency.</p>
        </div>
        <div className="feature-card">
          <h3>Modern Design</h3>
          <p>Cutting-edge visuals and layouts.</p>
        </div>
        <div className="feature-card">
          <h3>Mobile-Friendly</h3>
          <p>Responsive design for all devices.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
