// app/page.jsx
"use client";

import { useRef, useState } from "react";
import HeroSection from "./components/ui/HeroSection";
import Navbar from "./components/ui/Navbar";
import GenerateColdEmail from "./components/ui/GenerateColdEmail";
import "./components/ui/App.css";
import ChatInterface from "./components/Generate_Cold_Email/ChatInterface";

export default function Home() {
  const [showGenerator, setShowGenerator] = useState(false);
  const heroRef = useRef(null);

  const scrollToHero = () => {
    setShowGenerator(false);
    setTimeout(() => {
      heroRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); 
  };

  return (
    <div className="app">
      <Navbar onHomeClick={scrollToHero} />
      <div ref={heroRef}>
        {!showGenerator ? (
          <HeroSection onTryNow={() => setShowGenerator(true)} />
        ) : (
          <ChatInterface />
        )}
      </div>
    </div>
  );
}
