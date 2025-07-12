"use client";

import { useRouter } from "next/navigation";
import HeroSection from "./components/ui/HeroSection";
import Navbar from "./components/ui/Navbar";
import "./components/ui/App.css";
import AIFooter from "./components/ui/AIFooter";
import EverythingInOnePlace from "./components/ui/EverythingInOnePlace";
import KeynoteTalks from "./components/ui/KeynoteTalks";

export default function Page() {
  const router = useRouter();

  return (
    <div className="app">
      <Navbar
        onHomeClick={() => router.push("/")}
        onLoginClick={() => router.push("/login")}
      />

      <HeroSection
        onTryNow={() => router.push("/chat")}
        onSignUp={() => router.push("/signup")}
      />
      <EverythingInOnePlace />
      <KeynoteTalks />
      <AIFooter />
    </div>
  );
}
