import React from 'react';
import { Shield, AlertCircle, Users, Heart, Ban, CheckCircle } from 'lucide-react';

const RulesSection = () => {
  const ruleCategories = [
    {
      icon: Shield,
      title: 'General Rules',
      rules: [
        'Respect all players and staff members',
        'No harassment, discrimination, or toxic behavior',
        'Use appropriate language at all times',
        'Follow staff instructions without argument'
      ]
    },
    {
      icon: Users,
      title: 'Roleplay Rules',
      rules: [
        'Stay in character at all times',
        'No random deathmatch (RDM)',
        'No vehicle deathmatch (VDM)',
        'Realistic roleplay scenarios only'
      ]
    },
    {
      icon: Ban,
      title: 'Prohibited Actions',
      rules: [
        'No cheating, hacking, or exploiting',
        'No metagaming or powergaming',
        'No server advertising',
        'No impersonation of staff members'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Server Etiquette',
      rules: [
        'Use voice chat appropriately',
        'Report rule breakers to staff',
        'Value your character\'s life (FearRP)',
        'New life rule (NLR) after respawn'
      ]
    }
  ];

  return (
    <section className="rules-section" id="rules">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Server Rules</h2>
          <p className="section-subtitle">Read and follow these rules to ensure a positive experience for everyone</p>
        </div>

        <div className="rules-notice">
          <AlertCircle size={24} />
          <p>Failure to follow these rules may result in warnings, kicks, or permanent bans</p>
        </div>

        <div className="rules-grid">
          {ruleCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="rule-category-card">
                <div className="rule-category-header">
                  <Icon size={28} className="rule-category-icon" />
                  <h3 className="rule-category-title">{category.title}</h3>
                </div>
                <ul className="rules-list">
                  {category.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="rule-item">
                      <CheckCircle size={16} className="rule-check" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RulesSection;