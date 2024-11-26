import React, { useState, useEffect } from "react";
import "./Login.css"; // Add optional styling for the login page

// Import your images
import img1 from "../components/pexels-photo-1371360.jpeg";
import img2 from "../components/pexels-quang-nguyen-vinh-222549-2161467.jpg";
import img3 from "../components/stock-photo-khao-sok-thailand-young-couple-on-vacation-in-khao-sok-thailand-traveling-by-boat-over.jpg";
import img4 from "../components/thumb-1920-742688.jpg";
import img5 from "../components/a73cbfbcf18054bf31ee42e6453c5d94.jpg";
import img6 from "../components/istockphoto-512457174-612x612.jpg";

// Store images in an array
const images = [img1, img2, img3, img4, img5, img6];

const BackgroundEffect = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length); // Cycle through images
    }, 2000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: -1, // Keep it behind the form and content
      }}
    ></div>
  );
};

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin(); // Call the login handler from App.js
    } else {
      alert("Please enter valid credentials!");
    }
  };

  return (
    <div className="login-container">
      {/* Background effect */}
      <BackgroundEffect />

      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
