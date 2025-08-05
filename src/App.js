import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import HeroPage from "./components/HeroPage/HeroPage";
import About from "./components/About/About";
import Tokenomics from "./components/Tokenomics/Tokenomics";
import RoadMap from "./components/RoadMap/RoadMap";
import Staking from "./components/Staking/Staking";
import Footer from "./components/Footer/Footer";
import Community from "./components/Community/Community";
import HowToBuy from "./components/HowToBuy/HowToBuy";

// Main App component replicating the Unstable States Dollar site using React
export default function App() {
  return (
    <>
      <NavBar />
      {/* Hero Section */}
      <HeroPage />

      {/* About Section */}
      <About />

      {/* Tokenomics Section */}
      <Tokenomics />

      {/* Roadmap Section */}
      <RoadMap />

      {/* Dashboard & Staking Section */}

      <Staking />
      {/* How To Buy Section */}
      <HowToBuy />

      {/* Community Section */}
      <Community />
      {/* References Section */}
      {/* <Footer /> */}
    </>
  );
}
