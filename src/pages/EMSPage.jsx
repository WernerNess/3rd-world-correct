import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emsLogo from '../assets/ems-logo.png';
import DepartmentHeader from '../components/DepartmentHeader';

// Import fleet images
import emsCar1 from '../assets/ems-car-1.png';
import emsCar2 from '../assets/ems-car-2.png';
import emsBike from '../assets/ems-bike.png';
import emsSuv from '../assets/ems-suv.png';
import emsTruck from '../assets/ems-truck.png';
import emsOffroadTruck from '../assets/ems-offroad-truck.png';

import emsBuffalo from '../assets/ems-buffalo.png';
import emsSedan2 from '../assets/ems-sedan-2.png';
import emsSuv2 from '../assets/ems-suv-2.png';
import emsCorvette from '../assets/ems-corvette.png';
import emsSport1 from '../assets/ems-sport-1.png';
import emsSport2 from '../assets/ems-sport-2.png';

const EMSPage = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('HOME');

    const fleetData = [
        { id: 1, name: 'Declasse Merit Classic', image: emsCar1, type: 'Sedan' },
        { id: 2, name: 'Canis Seminole Frontier', image: emsCar2, type: 'SUV' },
        { id: 3, name: 'Ubermacht Kandra', image: emsBike, type: 'Motorcycle' },
        { id: 4, name: 'Vapid Scout', image: emsSuv, type: 'SUV' },
        { id: 5, name: 'Vapid Sandstorm D205 SWB', image: emsTruck, type: 'Truck' },
        { id: 6, name: 'Albany Cavalcade XL', image: emsSuv2, type: 'SUV' },

        { id: 8, name: 'Albany Presidente VSTR', image: emsSedan2, type: 'Sedan' },
        { id: 9, name: 'Vapid Caracara', image: emsOffroadTruck, type: 'Off-Road' },
        { id: 10, name: 'Bravado Buffalo A/C', image: emsBuffalo, type: 'Sports' },
        { id: 11, name: 'Invetero Coquette D9 SPI', image: emsCorvette, type: 'Sports' },
        { id: 12, name: 'Invetero Coquette D5 SPI', image: emsSport1, type: 'Sports' },
        { id: 13, name: 'Jester RR', image: emsSport2, type: 'Sports' },
    ];

    return (
        <>
            <DepartmentHeader
                logo={emsLogo}
                departmentName="3rd World EMS"
                discordUrl="https://discord.gg/8ce7GQzGMP"
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />

            <div className="department-page">
                {/* Video Background */}
                <div className="video-background-container">
                    <video autoPlay loop muted playsInline className="video-background">
                        <source src="/videos/ems-background.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="video-overlay"></div>
                </div>

                <div className="department-content">
                    {/* HOME TAB CONTENT */}
                    {activeTab === 'HOME' && (
                        <>
                            <div className="department-logo-container">
                                <img src={emsLogo} alt="3rd World EMS" className="department-logo" />
                            </div>
                            <h2 className="pd-welcome-text">WELCOME TO THE MOST EFFICIENT AND FRIENDLIEST EMS IN FIVEM</h2>
                        </>
                    )}

                    {/* FLEET TAB CONTENT */}
                    {activeTab === 'FLEET' && (
                        <div className="department-section">
                            <h2 className="department-section-title">Our Fleet</h2>
                            <div className="fleet-grid">
                                {fleetData.map((vehicle) => (
                                    <div key={vehicle.id} className="fleet-card">
                                        <div className="fleet-image-container">
                                            <img src={vehicle.image} alt={vehicle.name} className="fleet-image" />
                                        </div>
                                        <div className="fleet-info">
                                            <h3>{vehicle.name}</h3>
                                            <p>{vehicle.type}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* PLACEHOLDER FOR OTHER TABS */}
                    {(activeTab === 'SOP' || activeTab === 'STAFF') && (
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

export default EMSPage;
