"use client";

import { useState } from "react";
import HeroSection from "./components/ui/HeroSection";
import Navbar from "./components/ui/Navbar";
import ChatInterface from "./components/Generate_Cold_Email/ChatInterface";
import "./components/ui/App.css";
import Contact from "./components/Contect/Contact";
import Footer from "./components/ui/Footer";
import SignInPage from "./components/Auth/SignInPage";
import Details from "./components/ui/Details";
import DetailsRight from "./components/ui/DetailsRight";

export default function Page() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="app">
      <Navbar
        onHomeClick={() => setCurrentPage("home")}
        onLoginClick={() => setCurrentPage("login")}
      />

      {currentPage === "home" && (
        <>
          <HeroSection onTryNow={() => setCurrentPage("chat")} />
            <Details/>
            <DetailsRight/>
          <Contact />
          <Footer />
        </>
      )}

      {currentPage === "login" && <SignInPage />}
      {currentPage === "chat" && <ChatInterface />}
    </div>
  );
}
