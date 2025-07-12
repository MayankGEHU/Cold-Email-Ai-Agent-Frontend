"use client";

import Link from "next/link";
import { useState } from "react";
import "./Navbar.css";
import "./App.css"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            Cold Email Genius
          </Link>
        </div>

        <button
          className="hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        <div className={`nav-center ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <strong>Home</strong>
              </Link>
            </li>
            <li>
              <strong>Another One</strong> <span className="dropdown">▾</span>
            </li>
            <li>
              <strong>Another One</strong> <span className="dropdown">▾</span>
            </li>
          </ul>

          <div className="nav-buttons mobile-only">
<Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
  <button className="btn faded">Log in</button>
</Link>
          </div>
        </div>

        <div className="nav-buttons desktop-only">
          <Link href="/login">
            <button className="btn faded">Log in</button>
          </Link>
        </div>
      </div>
    </header>
  );
}
