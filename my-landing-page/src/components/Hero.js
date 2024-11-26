import React, { useState, useEffect } from "react";
import "./Hero.css";

import img1 from "../components/pexels-photo-1371360.jpeg";
import img2 from "../components/pexels-quang-nguyen-vinh-222549-2161467.jpg";
import img3 from "../components/stock-photo-khao-sok-thailand-young-couple-on-vacation-in-khao-sok-thailand-traveling-by-boat-over.jpg";
import img4 from "../components/thumb-1920-742688.jpg";
import video1 from "../components/WhatsApp Video 2024-11-26 at 16.37.21_a6614043.mp4"; // Add a video file
import video2 from "../components/WhatsApp Video 2024-11-26 at 16.38.12_adda4ab4.mp4"; // Add another video file
import video3 from "../components/WhatsApp Video 2024-11-26 at 16.38.50_80a580fa.mp4"
const media = [
  {type:"video",src : video3,alt : "Awesome"},
  { type: "image", src: img1, alt: "Beautiful landscape" },
  { type: "image", src: img2, alt: "Beachside view" },
  { type: "video", src: video1, alt: "Relaxing video scene" }, // Video
  { type: "image", src: img3, alt: "River and mountains" },
  { type: "video", src: video2, alt: "Traveling by boat" }, // Video
  { type: "image", src: img4, alt: "Cityscape at night" },
];

const Hero = ({ isLoggedIn, onLoginRedirect }) => {
  const [currentMedia, setCurrentMedia] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMedia((prevMedia) => (prevMedia + 1) % media.length);
    }, 3000); // Switch media every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleGetStarted = () => {
    try {
      if (isLoggedIn) {
        window.open("https://www.irctc.co.in/nget/train-search", "_blank");
      } else if (onLoginRedirect) {
        onLoginRedirect();
      } else {
        console.error("onLoginRedirect function is not provided!");
      }
    } catch (error) {
      console.error("Redirection failed:", error);
    }
  };

  return (
    <div className="hero-container">
      {/* Conditionally render video or image */}
      {media[currentMedia].type === "image" ? (
        <div
          className="media"
          style={{
            backgroundImage: `url(${media[currentMedia].src})`,
          }}
          aria-label={media[currentMedia].alt}
        ></div>
      ) : (
        <video
          className="media"
          autoPlay
          loop
          muted
          aria-label={media[currentMedia].alt}
          key={currentMedia} // Force re-render for smooth transition
        >
          <source src={media[currentMedia].src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <div className="overlay"></div>
      <div className="content">
        <h1>Welcome to MyBrand</h1>
        <p>Your journey starts here.</p>
        <button className="cta-button" onClick={handleGetStarted}>
          Book Ticket
        </button>
      </div>
    </div>
  );
};

export default Hero;

