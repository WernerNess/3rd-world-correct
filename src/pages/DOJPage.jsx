import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText } from 'lucide-react';
import dojLogo from '../assets/doj-logo.png';
import DepartmentHeader from '../components/DepartmentHeader';

const DOJPage = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('HOME');

    return (
        <>
            <DepartmentHeader
                logo={dojLogo}
                departmentName="3rd World DOJ"
                discordUrl="https://discord.gg/tZWAq9Kywq"
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />
            <div className="department-page">
                {/* Video Background */}
                <div className="video-background-container">
                    <video autoPlay loop muted playsInline className="video-background">
                        <source src="/videos/doj-background.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="video-overlay"></div>
                </div>

                <div className="department-content">
                    {activeTab === 'HOME' && (
                        <>
                            <div className="department-logo-container">
                                <img src={dojLogo} alt="3rd World DOJ" className="department-logo" />
                            </div>
                            <h2 className="pd-welcome-text">WELCOME TO THE DEPARTMENT OF JUSTICE</h2>
                        </>
                    )}

                    {activeTab === 'SOP' && (
                        <div className="department-section">
                            <h2 className="department-section-title">Standard Operating Procedures</h2>
                            <div className="sop-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', width: '100%' }}>
                                <div
                                    className="bubble-card"
                                    style={{ maxWidth: '400px', width: '100%' }}
                                    onClick={() => window.open('/documents/doj-sop.pdf', '_blank')}
                                >
                                    <div className="bubble-icon-wrapper">
                                        <FileText size={32} />
                                    </div>
                                    <h3 className="bubble-title">Standard Operating Procedures</h3>
                                    <p className="bubble-description">
                                        Access the official Department of Justice SOP document.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Placeholder for other tabs if they exist in header but not handled */}
                    {(activeTab !== 'HOME' && activeTab !== 'SOP') && (
                        <div className="department-placeholder">
                            <h2>{activeTab}</h2>
                            <p>Content coming soon...</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default DOJPage;
