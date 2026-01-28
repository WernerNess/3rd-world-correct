import React from 'react';
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
  return (
    <>
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