import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const DepartmentHeader = ({ logo, departmentName, discordUrl, activeTab, onTabChange }) => {
    const navigate = useNavigate();

    const handleDiscordClick = () => {
        if (discordUrl) {
            window.open(discordUrl, '_blank');
        } else {
            console.log('No discord link provided');
        }
    };

    return (
        <>
            <header className="department-navbar">
                <div className="department-navbar-container">
                    <div className="department-navbar-logo">
                        <img
                            src={logo}
                            alt={departmentName}
                            className="department-navbar-logo-img"
                        />
                    </div>

                    <nav className="department-nav-links">
                        <button
                            className={`dept-nav-link ${activeTab === 'HOME' ? 'active' : ''}`}
                            onClick={() => onTabChange && onTabChange('HOME')}
                        >
                            HOME
                        </button>
                        <button
                            className={`dept-nav-link ${activeTab === 'SOP' ? 'active' : ''}`}
                            onClick={() => onTabChange && onTabChange('SOP')}
                        >
                            SOP'S
                        </button>
                        <button
                            className={`dept-nav-link ${activeTab === 'STAFF' ? 'active' : ''}`}
                            onClick={() => onTabChange && onTabChange('STAFF')}
                        >
                            STAFF
                        </button>
                        <button
                            className={`dept-nav-link ${activeTab === 'FLEET' ? 'active' : ''}`}
                            onClick={() => onTabChange && onTabChange('FLEET')}
                        >
                            OUR FLEET
                        </button>
                    </nav>

                    <button className="dept-discord-btn" onClick={handleDiscordClick}>
                        DISCORD
                    </button>
                </div>
            </header>

            <div className="department-back-button-container">
                <button className="back-button" onClick={() => navigate('/')}>
                    <ArrowLeft size={20} />
                    <span>Back to Home</span>
                </button>
            </div>
        </>
    );
};

export default DepartmentHeader;
