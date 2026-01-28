import React from 'react';
import { Users, ExternalLink } from 'lucide-react';

const CommunitySection = () => {
  return (
    <section className="community-section">
      <div className="section-container">
        <div className="community-card">
          <div className="community-icon-wrapper">
            <div className="community-icon">
              <Users size={48} strokeWidth={2} />
            </div>
          </div>

          <h2 className="community-title">JOIN OUR COMMUNITY</h2>
          <p className="community-description">
            Connect with thousands of players, get support, and stay updated
          </p>

          <button 
            className="join-discord-btn"
            onClick={() => window.open('https://discord.gg/KGm8Nu9GuS', '_blank')}
          >
            <ExternalLink size={20} />
            <span>JOIN DISCORD</span>
          </button>

          <p className="community-members">5,000+ members online now</p>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;