"use client";
import { useRef } from "react";

import HeroSection from "./components/ui/HeroSection";
import Navbar from "./components/ui/Navbar";
import './components/ui/App.css'

export default function Home() {

    return (
      <div className="app">
        <Navbar/>
        <HeroSection/>
      </div>
    )
};