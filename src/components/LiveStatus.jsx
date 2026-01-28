import React from 'react';
import { Wifi, Zap, ArrowRight } from 'lucide-react';

const LiveStatus = () => {
  return (
    <section className="live-status-section">
      <div className="live-status-container">
        <div className="status-card-wrapper">
          <div className="status-card">
            <div className="status-header">
              <div className="status-indicator">
                <span className="status-dot"></span>
                <span className="status-text">LIVE STATUS</span>
              </div>
              <Wifi className="wifi-icon" size={20} />
            </div>

            <div className="status-stats">
              <div className="stat-item">
                <div className="stat-number">32</div>
                <div className="stat-label">Players In-City</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">7</div>
                <div className="stat-label">In Queue</div>
              </div>
            </div>
          </div>

          <button className="connect-button" onClick={() => window.open('https://cfx.re/join/mavm3a', '_blank')}>
            <Zap size={20} />
            <span>CONNECT TO SERVER</span>
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="server-ip-card">
          <div className="server-ip-text">fivem://connect/3rdworld-rp.com</div>
        </div>
      </div>
    </section>
  );
};

export default LiveStatus;