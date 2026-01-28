import React from 'react';
import { ArrowLeft, Briefcase, DollarSign, Users, Clock, AlertTriangle, Shield, Shirt, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BusinessRulesPage = () => {
    const navigate = useNavigate();

    return (
        <div className="rules-page">
            <div className="rules-header">
                <button className="back-button" onClick={() => navigate('/')}>
                    <ArrowLeft size={20} />
                    <span>Back to Home</span>
                </button>
                <h1 className="rules-main-title">Business Rules</h1>
            </div>

            <div className="rules-container">

                <div className="rules-intro-card">
                    <p className="section-description" style={{ textAlign: 'center', fontSize: '1.2rem', color: '#fff' }}>
                        Business Owners are required to read, know, and follow every rule mentioned below.
                    </p>
                </div>

                {/* Buying Business */}
                <section className="rules-section">
                    <div className="section-icon-header">
                        <DollarSign className="section-icon" />
                        <h2 className="section-title">Buying Business</h2>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">1.1 Purchase from Owner</h3>
                        <p className="rule-text">
                            If the owner of a business that’s already in the city is selling it you can purchase it for ingame money as long as the owner of the business created a ticket about it and let Business Control know that he/she is selling (consider rule 2.3).
                        </p>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">1.2 Real World Money</h3>
                        <p className="rule-text">
                            Buying business that’s already in the city for real world money from another player is prohibited as stated in rule 2.4.
                        </p>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">1.3 New Business Benefits</h3>
                        <p className="rule-text">
                            All new businesses added to the city for the first time will get following benefits:
                        </p>
                        <ul className="rule-list">
                            <li>Boss menu</li>
                            <li>Employee stash</li>
                            <li>Locks on doors (option to unlock doors by having a job or/and special password/s)</li>
                        </ul>
                    </div>
                </section>

                {/* Selling Business */}
                <section className="rules-section">
                    <div className="section-icon-header">
                        <Briefcase className="section-icon" />
                        <h2 className="section-title">Selling Business</h2>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">2.1 Procedure</h3>
                        <p className="rule-text">
                            If you decide to sell your business you have to make a ticket in Discord and let us know which business you are selling and how much you want for it (in-game money only). We will help you advertise and find a new buyer.
                        </p>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">2.2 Notification</h3>
                        <p className="rule-text">
                            The sale has to be brought up to Business Control. If you sell the business without notifying the Business Control about it the sale will be invalid and you will lose the ownership of the business as a punishment.
                        </p>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">2.3 RMT Prohibition</h3>
                        <p className="rule-text">
                            Selling in game business for real world money is prohibited by rules of FiveM so please don’t advertise selling your businesses in the discord’s or in the city.
                        </p>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">2.4 Co-Owners Rights</h3>
                        <p className="rule-text">
                            Prior to selling a business all co-owner/s must be informed and given a fair chance to buy it.
                        </p>
                    </div>
                </section>

                {/* Owning Businesses & Co-Owners */}
                <section className="rules-section major">
                    <div className="section-icon-header">
                        <Users className="section-icon" />
                        <h2 className="section-title">Owning & Co-Owners</h2>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">3.1 Discord Communities</h3>
                        <p className="rule-text">
                            Business discords/sub communities which contain 3rd World RP community members or affiliated in any way will be required to have a member of staff in them.
                        </p>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">4.1 Documentation</h3>
                        <p className="rule-text">
                            All co-owners must be listed on our and your documentation. If the business gets a new co-owner you must let the business board know (make a ticket in discord).
                        </p>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">4.2 Liability</h3>
                        <p className="rule-text">
                            All official co-owners will hold the right to certain percent of shares of the business and are liable, legally and financially for the business.
                        </p>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">4.3 Selling Shares</h3>
                        <p className="rule-text">
                            All co-owners also have the right to sell their shares under conditions from rule 2.5 (intended 2.4/2.1 context).
                        </p>
                    </div>
                </section>

                {/* Inactivity & Bans */}
                <section className="rules-section major">
                    <div className="section-icon-header">
                        <Clock className="section-icon" />
                        <h2 className="section-title">Inactivity & Bans</h2>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">5.1 Activity Requirements</h3>
                        <p className="rule-text">
                            Business owners need to be active players. If a business goes a week without being open, they will receive a business strike. Three strikes is the business siege by the government. Meaning the individual needs to put enough dedicated roleplay time in, so the business is not left empty or unattended.
                        </p>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">5.2 Discord RP</h3>
                        <p className="rule-text">
                            Any form of Business RP done in Discord is strictly prohibited ie Having people make orders in your discord to collect in city. ROLEPLAY IN THE CITY.
                        </p>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">6.1 Perma Ban</h3>
                        <p className="rule-text">
                            If a business owner is permanently banned, the ownership of the business cannot be transferred, however the co owner may assume ownership.
                        </p>
                    </div>
                </section>

                {/* Directory & Defense */}
                <section className="rules-section">
                    <div className="section-icon-header">
                        <Shield className="section-icon" />
                        <h2 className="section-title">Directory & Defense</h2>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">7.1 Public Directory</h3>
                        <p className="rule-text">
                            There is a public business directory that lists current businesses and owners.
                        </p>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">7.2 In-Character Knowledge</h3>
                        <p className="rule-text">
                            Information on business directory is considered in-character knowledge as it would be/is a readily available knowledge that would be available to any citizen.
                        </p>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">8.1 Greenzones</h3>
                        <p className="rule-text">
                            Businesses are NOT a greenzone, and individuals should act accordingly.
                        </p>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">8.2 Weapons</h3>
                        <p className="rule-text">
                            Business owners are allowed to have a weapon in their business, with a weapon license, to defend their business if necessary.
                        </p>
                    </div>
                </section>

                {/* Etiquette */}
                <section className="rules-section">
                    <div className="section-icon-header">
                        <Shirt className="section-icon" />
                        <h2 className="section-title">Business Etiquette</h2>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">10.1 Uniforms</h3>
                        <p className="rule-text">
                            All businesses are to require a uniform for their employees while on clock. The employees must adhere to this uniform while on duty, and the business can receive a strike if their employees are not in uniform.
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default BusinessRulesPage;
