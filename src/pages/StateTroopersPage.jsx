import React from 'react';
import { useNavigate } from 'react-router-dom';
import stateTroopersLogo from '../assets/state-troopers-logo.png';
import DepartmentHeader from '../components/DepartmentHeader';

const StateTroopersPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <DepartmentHeader
                logo={stateTroopersLogo}
                departmentName="3rd World State Troopers"
                discordUrl="https://discord.gg/kf9wntZcx3"
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
                    <div className="department-logo-container">
                        <img src={stateTroopersLogo} alt="3rd World State Troopers" className="department-logo" />
                    </div>
                    <h2 className="pd-welcome-text">WELCOME TO THE BEST AND FASTEST STATE TROOPERS IN FIVEM</h2>
                </div>
            </div>
        </>
    );
};

export default StateTroopersPage;
