import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import stateTroopersLogo from '../assets/state-troopers-logo.png';
import DepartmentHeader from '../components/DepartmentHeader';

const StateTroopersPage = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('HOME');

    return (
        <>
            <DepartmentHeader
                logo={stateTroopersLogo}
                departmentName="3rd World State Troopers"
                discordUrl="https://discord.gg/kf9wntZcx3"
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />
            <div className="department-page">
                {/* Video Background */}
                <div className="video-background-container">
                    <video autoPlay loop muted playsInline className="video-background">
                        <source src="/videos/state-troopers-background.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="video-overlay"></div>
                </div>

                <div className="department-content">
                    {/* HOME TAB CONTENT */}
                    {activeTab === 'HOME' && (
                        <>
                            <div className="department-logo-container">
                                <img src={stateTroopersLogo} alt="3rd World State Troopers" className="department-logo" />
                            </div>
                            <h2 className="pd-welcome-text">WELCOME TO THE BEST AND FASTEST STATE TROOPERS IN FIVEM</h2>
                        </>
                    )}

                    {/* PLACEHOLDER FOR OTHER TABS */}
                    {(activeTab === 'SOP' || activeTab === 'STAFF' || activeTab === 'FLEET') && (
                        <div className="department-placeholder">
                            <h2>Coming Soon</h2>
                            <p>This section is currently under development.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default StateTroopersPage;
