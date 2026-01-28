import React from 'react';
import { MessageSquare, Users, TrendingUp } from 'lucide-react';

const DiscordSection = () => {
  const handleJoinDiscord = () => {
    // Placeholder - will be replaced with actual Discord invite
    window.open('https://discord.gg/your-invite-link', '_blank');
  };

  return (
    <section className="discord-section" id="discord">
      <div className="section-container">
        <div className="discord-content">
          <div className="discord-info">
            <div className="discord-icon-large">
              <MessageSquare size={64} />
            </div>
            <h2 className="discord-title">Join Our Discord Community</h2>
            <p className="discord-description">
              Connect with fellow players, stay updated on server news, and get support from our staff team.
            </p>

            <div className="discord-stats">
              <div className="discord-stat">
                <Users size={24} />
                <div>
                  <span className="discord-stat-value">15,932</span>
                  <span className="discord-stat-label">Members</span>
                </div>
              </div>
              <div className="discord-stat">
                <TrendingUp size={24} />
                <div>
                  <span className="discord-stat-value">4,211</span>
                  <span className="discord-stat-label">Online Now</span>
                </div>
              </div>
            </div>

            <button className="btn-primary discord-join-btn" onClick={handleJoinDiscord}>
              <MessageSquare size={20} />
              Join Discord Server
            </button>
          </div>

          <div className="discord-preview">
            <div className="discord-widget-placeholder">
              <MessageSquare size={48} className="widget-icon" />
              <p className="widget-text">Discord Widget Preview</p>
              <p className="widget-subtext">Live chat and member list will appear here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscordSection;