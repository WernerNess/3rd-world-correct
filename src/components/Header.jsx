import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [exploreDropdownOpen, setExploreDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (path) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(path);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.getElementById(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const navLinks = [
    { name: 'HOME', action: () => navigate('/') },
    { name: 'RULES', action: () => navigate('/rules') },
    { name: 'OUR TEAM', action: () => navigate('/meet-the-team') },
    { name: 'FAQ', action: () => navigate('/whitelist-faqs') }
  ];

  const handleDiscordClick = () => {
    window.open('https://discord.gg/KGm8Nu9GuS', '_blank');
  };

  const handleConnectClick = () => {
    window.open('https://cfx.re/join/mavm3a', '_blank');
  };

  const exploreMenuItems = [
    { name: '3RD WORLD PD', url: '/pd' },
    { name: '3RD WORLD STATE TROOPERS', url: '/state-troopers' },
    { name: '3RD WORLD EMS', url: '/ems' },
    { name: '3RD WORLD DOJ', url: '/doj' }
  ];

  const handleExploreClick = (url) => {
    navigate(url);
    setExploreDropdownOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <img
            src="https://customer-assets.emergentagent.com/job_50c0156b-e7e4-4872-9283-1e4f92ff7c6e/artifacts/j9tmcfd6_3rd%20world%20logo.png"
            alt="3rd World RP"
            className="logo-img"
          />
        </div>

        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={link.action}
              className="nav-link"
            >
              {link.name}
            </button>
          ))}
        </nav>

        <div className="header-buttons-group">
          <button className="connect-btn" onClick={handleConnectClick}>CONNECT TO SERVER</button>

          <div className="explore-dropdown-container">
            <button
              className="explore-btn"
              onClick={() => setExploreDropdownOpen(!exploreDropdownOpen)}
            >
              EXPLORE HERE
              <svg
                className={`dropdown-arrow ${exploreDropdownOpen ? 'open' : ''}`}
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            {exploreDropdownOpen && (
              <div className="explore-dropdown-menu">
                {exploreMenuItems.map((item) => (
                  <button
                    key={item.name}
                    className="explore-dropdown-item"
                    onClick={() => handleExploreClick(item.url)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="discord-btn" onClick={handleDiscordClick}>DISCORD</button>
        </div>

        <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                link.action();
                setMobileMenuOpen(false);
              }}
              className="mobile-nav-link"
            >
              {link.name}
            </button>
          ))}
          <button className="connect-btn-mobile" onClick={handleConnectClick}>CONNECT TO SERVER</button>
          <button className="discord-btn-mobile" onClick={handleDiscordClick}>DISCORD</button>
        </div>
      )}
    </header>
  );
};

export default Header;