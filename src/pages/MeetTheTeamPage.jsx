import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MeetTheTeamPage = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: 'IMRAAN',
      role: 'OWNER',
      motto: 'Leading the vision',
      initials: 'I'
    },
    {
      name: 'WERNER NESS',
      role: 'OWNER',
      motto: 'Building the future',
      initials: 'WN'
    },
    {
      name: 'ELIZABETH NESS',
      role: 'OWNER',
      motto: 'Driving excellence',
      initials: 'EN'
    },
    {
      name: 'ZACHARY DELANE',
      role: 'OWNER',
      motto: 'Creating the experience',
      initials: 'ZD'
    },
    {
      name: 'CAT REIGN',
      role: 'OWNER',
      motto: 'Shaping the journey',
      initials: 'CR'
    }
  ];

  return (
    <div className="team-page">
      {/* Video Background */}
      <div className="video-background-container">
        <video autoPlay loop muted playsInline className="video-background">
          <source src="/videos/team-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      <div className="team-content" style={{ position: 'relative', zIndex: 2 }}>
        <div className="team-header">
          <button className="back-button" onClick={() => navigate('/')}>
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
          <h1 className="team-main-title">Meet The Team</h1>
        </div>

        <div className="ferris-wheel-container">
          <div className="ferris-wheel-center">
            <h2 className="owners-text">OWNERS</h2>
          </div>

          <div className="ferris-wheel-orbit">
            {teamMembers.map((member, index) => {
              const angle = (360 / teamMembers.length) * index;
              return (
                <div
                  key={index}
                  className="ferris-wheel-card"
                  style={{
                    '--angle': `${angle}deg`
                  }}
                >
                  <div className="team-card-content">
                    <div className="team-member-info">
                      <div className="team-member-avatar">
                        <span className="avatar-initials">{member.initials}</span>
                      </div>
                      <div className="team-member-details">
                        <h3 className="team-member-name">{member.name}</h3>
                        <span className="team-member-role">{member.role}</span>
                      </div>
                    </div>
                    <div className="team-member-motto">
                      <p>{member.motto}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeamPage;
