import React, { useEffect, useRef } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyChooseUs from './components/WhyChooseUs';
import QuickLinks from './components/QuickLinks';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';
import RulesPage from './pages/RulesPage';
import FactionRulesPage from './pages/FactionRulesPage';
import BusinessRulesPage from './pages/BusinessRulesPage';
import WhitelistFAQsPage from './pages/WhitelistFAQsPage';
import MeetTheTeamPage from './pages/MeetTheTeamPage';

import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import PDPage from './pages/PDPage';
import EMSPage from './pages/EMSPage';
import StateTroopersPage from './pages/StateTroopersPage';
import DOJPage from './pages/DOJPage';

function HomePage() {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = async () => {
      if (!audioRef.current) return;

      try {
        await audioRef.current.play();
      } catch (err) {
        console.log("Autoplay blocked, waiting for interaction");
        const handleInteraction = () => {
          if (audioRef.current) {
            audioRef.current.play().catch(e => console.error("Play failed:", e));
          }
          document.removeEventListener('click', handleInteraction);
          document.removeEventListener('keydown', handleInteraction);
        };

        document.addEventListener('click', handleInteraction);
        document.addEventListener('keydown', handleInteraction);
      }
    };

    playAudio();
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/audio/final.wav" />
      <HeroSection />
      <WhyChooseUs />
      <QuickLinks />
      <CommunitySection />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <BackToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/faction-rules" element={<FactionRulesPage />} />
          <Route path="/business-rules" element={<BusinessRulesPage />} />
          <Route path="/whitelist-faqs" element={<WhitelistFAQsPage />} />
          <Route path="/meet-the-team" element={<MeetTheTeamPage />} />
        </Route>

        {/* Department pages without navbar */}
        <Route path="/pd" element={<PDPage />} />
        <Route path="/ems" element={<EMSPage />} />
        <Route path="/state-troopers" element={<StateTroopersPage />} />
        <Route path="/doj" element={<DOJPage />} />
      </Routes>
    </div>
  );
}

export default App;