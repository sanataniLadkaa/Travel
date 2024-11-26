import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Places from "./components/Places";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Login from "./components/Login";
import DistaCheck from "./components/DistaCheck";
import About from "./components/About";
import UserExperience from "./components/UserExperience";

import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="app">
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route
            path="/login"
            element={!isLoggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/" />}
          />
          {isLoggedIn ? (
            <>
              <Route
                path="/"
                element={
                  <>
                    <Hero isLoggedIn={isLoggedIn} onLoginRedirect={handleLogout} />
                    <Places isLoggedIn={isLoggedIn} onLoginRedirect={handleLogout} />
                    <Features isLoggedIn={isLoggedIn} onLoginRedirect={handleLogout} />
                    <About isLoggedIn={isLoggedIn} onLoginRedirect={handleLogout} />
                    <UserExperience isLoggedIn={isLoggedIn} onLoginRedirect={handleLogout} />
                  </>
                }
              />
              <Route path="/Places" element={<Places/>}/>
              <Route path="/features" element={<Features/>}/>
              <Route path="/dista-check" element={<DistaCheck />} />
              <Route path="/About" element={<About />} />
              <Route path="/user-experience" element={<UserExperience />} />


            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
