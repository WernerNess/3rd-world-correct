import React from 'react';
import { Crown, Shield, Headphones } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'John "King" Martinez',
      role: 'Server Owner',
      icon: Crown,
      description: 'Founder and visionary behind 3rd World RP',
      color: '#00FFD1'
    },
    {
      name: 'Sarah "Phoenix" Chen',
      role: 'Head Administrator',
      icon: Shield,
      description: 'Ensuring fair play and community safety',
      color: '#00FF7F'
    },
    {
      name: 'Mike "Tech" Rodriguez',
      role: 'Lead Developer',
      icon: Headphones,
      description: 'Creating custom scripts and features',
      color: '#00FFD1'
    },
    {
      name: 'Emma "Vibe" Thompson',
      role: 'Community Manager',
      icon: Headphones,
      description: 'Building and nurturing our community',
      color: '#00FF7F'
    },
    {
      name: 'Alex "Guardian" Kim',
      role: 'Senior Moderator',
      icon: Shield,
      description: 'Maintaining order in the concrete jungle',
      color: '#00FFD1'
    },
    {
      name: 'Chris "Wrench" Davis',
      role: 'Developer',
      icon: Headphones,
      description: 'Crafting unique gameplay experiences',
      color: '#00FF7F'
    }
  ];

  return (
    <section className="team-section" id="team">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">The people who make it all possible</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <div key={index} className="team-card">
                <div className="team-icon-wrapper" style={{ borderColor: member.color }}>
                  <Icon size={32} style={{ color: member.color }} />
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role" style={{ color: member.color }}>{member.role}</p>
                <p className="team-description">{member.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;