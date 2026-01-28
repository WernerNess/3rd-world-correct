import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, FileText, MessageSquare, Users, Activity, Settings, ChevronRight, X } from 'lucide-react';

const QuickLinks = () => {
  const [showPureModeModal, setShowPureModeModal] = useState(false);
  const navigate = useNavigate();

  const links = [
    {
      icon: BookOpen,
      title: 'Rules',
      description: 'View server rules and guidelines',
      action: () => navigate('/rules')
    },
    {
      icon: FileText,
      title: 'Whitelist FAQs',
      description: 'Common whitelist questions',
      action: () => navigate('/whitelist-faqs')
    },
    {
      icon: MessageSquare,
      title: 'Discord Server',
      description: 'Join our community',
      action: () => window.open('https://discord.gg/KGm8Nu9GuS', '_blank')
    },
    {
      icon: Users,
      title: 'Meet The Team',
      description: 'Our staff members',
      action: () => navigate('/meet-the-team')
    },
    {
      icon: Activity,
      title: 'Cfx.re Status',
      description: 'Check FiveM server status',
      action: () => window.open('https://status.cfx.re/', '_blank')
    },
    {
      icon: Settings,
      title: 'Pure Mode Bypass',
      description: 'Setup guide for Pure Mode',
      action: () => setShowPureModeModal(true)
    }
  ];

  return (
    <>
      <section className="quick-links-section">
        <div className="section-container">
          <h2 className="section-title-alt">
            <MessageSquare size={32} className="title-icon" />
            QUICK LINKS
          </h2>

          <div className="quick-links-bubble-grid">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <div 
                  key={index} 
                  className="bubble-card"
                  onClick={link.action}
                >
                  <div className="bubble-icon-wrapper">
                    <Icon size={32} strokeWidth={2} />
                  </div>
                  <h3 className="bubble-title">{link.title}</h3>
                  <p className="bubble-description">{link.description}</p>
                  <div className="bubble-arrow">
                    <ChevronRight size={20} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pure Mode Bypass Modal */}
      {showPureModeModal && (
        <div className="modal-overlay" onClick={() => setShowPureModeModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowPureModeModal(false)}>
              <X size={24} />
            </button>
            
            <h2 className="modal-title">Pure Mode Bypass</h2>
            
            <div className="modal-body">
              <p className="modal-description">
                To bypass the Pure Mode launch dialog, follow these steps:
              </p>
              
              <ol className="modal-steps">
                <li>Right-click on your FiveM shortcut and click on "Properties"</li>
                <li>In the "Target" field, add <code>-pure_1</code> after FiveM.exe</li>
                <li>Ensure there is a space between FiveM.exe and -pure_1</li>
                <li>Click "Apply" and then "OK"</li>
              </ol>
              
              <div className="modal-note">
                <strong>Note:</strong> You should start with Pure Mode already applied and ready after doing that. 
                Be advised that connecting to non-Pure Mode servers will require a restart. 
                So you might want to make 2 different shortcuts of FiveM.
              </div>
              
              <div className="modal-image">
                <img 
                  src="https://customer-assets.emergentagent.com/job_urban-gaming-zone/artifacts/u8w5q21x_image.png"
                  alt="Pure Mode Setup Example"
                  className="setup-example-image"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuickLinks;