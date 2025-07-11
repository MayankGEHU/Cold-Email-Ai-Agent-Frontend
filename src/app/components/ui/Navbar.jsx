// components/ui/Navbar.jsx
"use client";

import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ onHomeClick, onLoginClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <span>Cold Email</span>
        </div>

        <button
          className="hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        <div className={`nav-center ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="nav-links">
<li onClick={onHomeClick}>
  <strong>Home</strong>
</li>

            <li>
              <strong>Another One</strong>{" "}
              <span className="dropdown">▾</span>
            </li>
            <li>
              <strong>Another One</strong>{" "}
              <span className="dropdown">▾</span>
            </li>
          </ul>

          <div className="nav-buttons mobile-only">
            <button className="btn faded" onClick={onLoginClick}>
              Log in
            </button>
            <button className="btn faded">Sign up</button>
          </div>
        </div>

        <div className="nav-buttons desktop-only">
          <button className="btn faded" onClick={onLoginClick}>
            Log in
          </button>
          <button className="btn faded">Sign up</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
