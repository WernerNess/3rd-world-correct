import React from 'react';
import { Zap, Users, Gamepad2, Shield, Wrench, TrendingUp } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized server infrastructure ensuring smooth gameplay with minimal lag and maximum uptime.'
    },
    {
      icon: Users,
      title: 'Active Community',
      description: 'Join thousands of active players in a vibrant, welcoming community that spans the globe.'
    },
    {
      icon: Gamepad2,
      title: 'Custom Scripts',
      description: 'Unique gameplay mechanics and custom scripts that you won\'t find anywhere else.'
    },
    {
      icon: Shield,
      title: 'Fair Moderation',
      description: 'Professional staff team ensuring fair play and maintaining a positive gaming environment.'
    },
    {
      icon: Wrench,
      title: 'Custom Assets',
      description: 'Exclusive vehicles, weapons, and items designed specifically for our server.'
    },
    {
      icon: TrendingUp,
      title: 'Regular Updates',
      description: 'Constant improvements and new content additions to keep the experience fresh and exciting.'
    }
  ];

  return (
    <section className="features-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Why Choose 3rd World RP?</h2>
          <p className="section-subtitle">Experience roleplay like never before</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="feature-card">
                <div className="feature-icon-wrapper">
                  <Icon size={32} className="feature-icon" />
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

export default FeaturesSection;