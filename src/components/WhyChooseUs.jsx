import React from 'react';
import { Shield, Users, Zap, Trophy } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: 'Serious RP',
      description: 'Immersive roleplay with strict quality standards'
    },
    {
      icon: Users,
      title: 'Active Community',
      description: 'Join hundreds of players in the concrete jungle'
    },
    {
      icon: Zap,
      title: 'Custom Scripts',
      description: 'Unique features and mechanics you won\'t find elsewhere'
    },
    {
      icon: Trophy,
      title: 'Events & Rewards',
      description: 'Regular events with exclusive prizes and rewards'
    }
  ];

  return (
    <section className="why-choose-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-gradient">WHY CHOOSE</span> US
          </h2>
          <p className="section-subtitle">The best FiveM experience you'll ever have</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <Icon size={28} strokeWidth={2.5} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;