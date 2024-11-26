import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="logo">Tour & Ghumo</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/places">Places</Link>
        </li>
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/dista-check">Dista Check</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
  <Link to="/user-experience">User Experience</Link>
</li>

        {isLoggedIn ? (
          <li>
            <button onClick={onLogout} className="logout-btn">
              Logout
            </button>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
