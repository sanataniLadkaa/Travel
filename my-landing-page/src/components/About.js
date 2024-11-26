import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Explore the world with us. Your adventure begins here!</p>
      </div>
      <div className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At <strong>Tour & Ghumo</strong>, we aim to make travel easy, accessible, and affordable for everyone. Whether you're planning a family vacation, a solo adventure, or a business trip, we are here to help you create unforgettable memories.
          </p>
        </section>
        <section className="about-section">
          <h2>What We Offer</h2>
          <ul>
            <li>Easy train ticket booking directly through our platform.</li>
            <li>Comprehensive details about popular tourist destinations.</li>
            <li>Nearby hotel suggestions to make your stay comfortable.</li>
            <li>Personalized travel itineraries tailored to your preferences.</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Contact Us</h2>
          <p>
            Have questions? Feel free to reach out to us at:
            <br />
            <strong>Email:</strong> support@tourandghumo.com
            <br />
            <strong>Phone:</strong> +91-1234567890
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
