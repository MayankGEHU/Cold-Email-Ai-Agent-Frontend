import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="logo"><span>Cold Email Genius</span></div>

        <button className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </button>

        <div className={`nav-center ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><strong>Home</strong></li>
            <li><strong>Another One</strong> <span className="dropdown">▾</span></li>
            <li><strong>Another One</strong> <span className="dropdown">▾</span></li>
            {/* <li><strong>Company</strong> <span className="dropdown">▾</span></li>
            <li><strong>Pricing</strong></li> */}
          </ul>

          <div className="nav-buttons mobile-only">
            <button className="btn faded">Log in</button>
            <button className="btn faded">Sign up</button>
            {/* <button className="btn white">Book a demo</button> */}
          </div>
        </div>

        <div className="nav-buttons desktop-only">
          <button className="btn faded">Log in</button>
          <button className="btn faded">Sign up</button>
          {/* <button className="btn white">Book a demo</button> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
