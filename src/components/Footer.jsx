import React from 'react';

import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = {
    quickLinks: [
      { label: 'Home', action: handleHomeClick },
      { label: 'Rules', action: () => navigate('/rules') },
      { label: 'Our Team', action: () => navigate('/meet-the-team') },
      { label: 'FAQ', action: () => navigate('/whitelist-faqs') }
    ],
    community: [
      { label: '3RD WORLD DISCORD', action: () => window.open('https://discord.gg/KGm8Nu9GuS', '_blank') },
      { label: 'PD DISCORD', action: () => window.open('https://discord.gg/XUGYq9wUtM', '_blank') },
      { label: 'STATE TROOPER DISCORD', action: () => window.open('https://discord.gg/kf9wntZcx3', '_blank') },
      { label: 'EMS DISCORD', action: () => window.open('https://discord.gg/8ce7GQzGMP', '_blank') }
    ]
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img
              src="https://customer-assets.emergentagent.com/job_50c0156b-e7e4-4872-9283-1e4f92ff7c6e/artifacts/j9tmcfd6_3rd%20world%20logo.png"
              alt="3rd World RP"
              className="footer-logo"
            />
            <p className="footer-tagline">
              The ultimate FiveM roleplay experience. Welcome to the concrete jungle.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">QUICK LINKS</h4>
            <ul className="footer-links">
              {footerSections.quickLinks.map((link, index) => (
                <li key={index}>
                  <button onClick={link.action} className="footer-link">{link.label}</button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">COMMUNITY</h4>
            <ul className="footer-links">
              {footerSections.community.map((link, index) => (
                <li key={index}>
                  <button onClick={link.action} className="footer-link">{link.label}</button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-disclaimer-section">
            <p className="footer-disclaimer">
              3rd World RP is not officially approved, sponsored, or endorsed by Rockstar Games nor CFX.re.
              The contents of this website were created for explicit use within the 3rd World RP community.
              The contents of this website may not be duplicated by, or distributed to any unauthorized party in any way without prior explicit approval from a 3rd World RP Owner.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 3rd World RP. All rights reserved.
          </p>
          <p className="footer-credit">
            Website created by <a href="https://zernesslab.co.za" target="_blank" rel="noopener noreferrer" className="credit-link">zernesslab.co.za</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;