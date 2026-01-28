import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import pdLogo from '../assets/pd-logo.png';
import DepartmentHeader from '../components/DepartmentHeader';

const PDPage = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('HOME');

    return (
        <>
            <DepartmentHeader
                logo={pdLogo}
                departmentName="3rd World Police Department"
                discordUrl="https://discord.gg/XUGYq9wUtM"
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />
            <div className="department-page">
                {/* Video Background */}
                <div className="video-background-container">
                    <video autoPlay loop muted playsInline className="video-background">
                        <source src="/videos/pd-background.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="video-overlay"></div>
                </div>

                <div className="department-content">
                    {/* HOME TAB CONTENT */}
                    {activeTab === 'HOME' && (
                        <>
                            <div className="department-logo-container">
                                <img src={pdLogo} alt="3rd World PD" className="department-logo" />
                            </div>
                            <h2 className="pd-welcome-text">WELCOME TO THE BEST POLICE DEPARTMENT IN FIVEM</h2>
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

export default PDPage;
