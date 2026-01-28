import React from 'react';
import { ArrowLeft, Shield, AlertTriangle, Gavel, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FactionRulesPage = () => {
    const navigate = useNavigate();

    return (
        <div className="rules-page">
            <div className="rules-header">
                <button className="back-button" onClick={() => navigate('/')}>
                    <ArrowLeft size={20} />
                    <span>Back to Home</span>
                </button>
                <h1 className="rules-main-title">Faction Rules</h1>
            </div>

            <div className="rules-container">

                {/* General Rules */}
                <section className="rules-section">
                    <div className="section-icon-header">
                        <Shield className="section-icon" />
                        <h2 className="section-title">General Rules</h2>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">01.01: Identifiers</h3>
                        <p className="rule-text">
                            [C] - Factions members must read the faction rules. You are agreeing that you have read the rules, and will be punished if you break any of the rules. You must wear the identifiers(colours/items) to roll around with your gang.
                        </p>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">01.02: Member Limits</h3>
                        <p className="rule-text">
                            [A] - Factions should only have a max of 15 members. To start a faction, you need a minimum of 3 members.
                        </p>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">01.03: Identifiers (Person)</h3>
                        <p className="rule-text">
                            [A] - Factions must have 2 specific identifiers that can be easily recognized by another faction. This includes pocket flags, gang coloured attire and vest.
                        </p>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">01.04: Identifiers (Vehicle)</h3>
                        <p className="rule-text">
                            [A] - Factions must have 1 specific identifier that can be easily recognized by another faction for their vehicle. This should be the same color as your gangs main color.
                        </p>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">01.05: Pressing Identifiers</h3>
                        <p className="rule-text">
                            [A] - As a faction, you can press anyone who is wearing your clothing that has been chosen as your identifier, and they are not in your gang. Please remember to keep the interaction civil.
                        </p>
                        <p className="rule-text highlight">
                            (Remember just because you are a gang you cannot claim the specific clothing item unless its a gang mask and or branded item (gang name) or colour its there for everyone to wear at their own disgretion)
                        </p>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">01.06: Hanging Out</h3>
                        <p className="rule-text">
                            [A] - Wearing the identifier and clothing of a faction while hanging out with them as non-faction members is prohibited.
                        </p>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">01.06.1: Participation</h3>
                        <p className="rule-text">
                            [B] - Wearing the identifier and clothing of a faction and participating in gang activities ie shootouts and robberies are strictly prohibited and will result in a penalty for the faction and the members involved.
                        </p>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">01.07: Active Identifiers</h3>
                        <p className="rule-text">
                            [A] - If you are doing active gang activities, like selling drugs or spraying, you MUST be in your gang identifiers. A gang will press you if they see you in your identifiers, so if you are at your business and don't want pressed, don't wear your identifiers.
                        </p>
                    </div>
                </section>

                {/* Heist/PD/Gang Interactions */}
                <section className="rules-section major">
                    <div className="section-icon-header">
                        <AlertTriangle className="section-icon" />
                        <h2 className="section-title">Heist/PD/Gang Interactions</h2>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">02.01: Scene Limits</h3>
                        <p className="rule-text">
                            [B] - When involved in criminal activity factions are limited to the amount of members they can have with them for scenes. At no point, can there be more criminals in a heist than PD. These group limitations are as follows:
                        </p>
                        <div className="rule-examples">
                            <h4 className="examples-title">Gang Activities:</h4>
                            <ul className="examples-list">
                                <li><strong>High Level Robberies:</strong> [8] Pacific Standard Bank, Paleto Bank [6]</li>
                                <li><strong>Mid Level Robberies:</strong> [5] Fleeca Banks, G6 Bank Trucks, Bank Truck Robbery, Laundromat Robbery, Cash Exchange Robbery, Art Gallery Heist, Union Heist</li>
                                <li><strong>Low Level Robberies:</strong> [4] ATM Robberies, G6 Bank Trucks, Convenience Stores, House Robberies, Morgue Robbery, Warehouse Robbery, Roof Running, Shoe Store Heist</li>
                            </ul>
                        </div>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">02.02: Cooldowns</h3>
                        <p className="rule-text">
                            [C] - Upon the conclusion of a heist, or any gang activity, you are to refrain from carrying out any further heists in the same category as the heist you have just concluded. The cooldowns of the different categories of heists are as follows:
                        </p>
                        <ul className="rule-list">
                            <li>Gang activities/wars: 30 – 45 minutes</li>
                            <li>High Level robberies: 4 hours</li>
                            <li>Mid Level Robberies: 2 hours</li>
                            <li>Low Level Robberies: 1 hour</li>
                        </ul>
                    </div>
                </section>

                {/* Gang Beef */}
                <section className="rules-section major">
                    <div className="section-icon-header">
                        <Gavel className="section-icon" />
                        <h2 className="section-title">Gang Beef</h2>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">03.01: Scene Cooldown</h3>
                        <p className="rule-text">
                            [C] - There is a 30 - 45 minute cooldown between scenes involving other gangs.
                        </p>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">03.02: 3rd Party Involvement</h3>
                        <p className="rule-text">
                            [B] - Other gangs should not get involved in your gang beef. You can have alliances, but the alliances should only be utilized for resources purposes and or PD scenarios ie Prison Transport and or City Events.
                        </p>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">03.03: Initiation</h3>
                        <p className="rule-text">
                            [C] - All gang beef within the city needs to have some sort of initiation or reason for the beef and must be an in city reason for the beef. Initiation can happen through birdy or through text messages, but cannot happen through discord. Selling drugs in your turf is initiation.
                        </p>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">03.04: Rooftops</h3>
                        <p className="rule-text">
                            [B] - Factions are permitted to utilize rooftop shooters.
                        </p>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">03.05: Picking up Bodies</h3>
                        <p className="rule-text">
                            [B] - Alliances are prohibited from involving themselves in active disputes and conflicts with the sole intention to pick up the bodies of their counterpart. Faction members are mandated to value their life, you are only allowed to pick up the bodies of your counterpart if you are directly involved in the gunfight yourself.
                        </p>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">03.06: Flatback Robbery</h3>
                        <p className="rule-text">
                            [B] - You are permitted to flatback rob someone.(If they are dead and you or a member of your faction killed them)
                        </p>
                    </div>
                </section>

                {/* Taxing Gangs/Businesses */}
                <section className="rules-section major">
                    <div className="section-icon-header">
                        <FileText className="section-icon" />
                        <h2 className="section-title">Taxing Gangs/Businesses</h2>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">04.01: Taxing Individuals</h3>
                        <p className="rule-text">
                            [B] - Established factions and groups may tax individuals engaging in business and/or criminal activities in their territory, but the limit is set at $5,000 or 10% of their valuables (excluding firearms). Taxing the same individual must be avoided for 1 week, and chain taxing or abusing the standard taxing conduct is not allowed.
                        </p>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">04.02: Taxing Businesses</h3>
                        <p className="rule-text">
                            [B] - Established factions and groups may tax businesses within their territorial regions for roleplay purposes, but the limit is set at 10% or $10,000 weekly. Taxes may be based on profits or static, and the same business cannot be taxed for 2 weeks. (Businesses may enlist help from other sources ie Criminal or PD)
                        </p>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">04.03: Hostages</h3>
                        <p className="rule-text">
                            [B] - Bear in mind with regards to hostage taking – at your own disgretion make sure the hostages you take from businesses DOES NOT affect the economic flow of the city ie taking the only food store worker or taking the only mechanic on duty. This rule will be subject to change if it is abused.
                        </p>
                    </div>
                </section>

                {/* Faction Menu Rules */}
                <section className="rules-section major">
                    <div className="section-icon-header">
                        <Shield className="section-icon" />
                        <h2 className="section-title">Faction Menu Rules</h2>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">05.01: Gov Buildings</h3>
                        <p className="rule-text">
                            [B] - Factions are prohibited from spraying/tagging inside or outside Government Buildings (Hospitals, PD Stations and CourtHouse) (Members caught spraying inside holding cells of these properties will result in Faction penalty as well as member penalty)
                        </p>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">05.02: Vehicles</h3>
                        <p className="rule-text">
                            [B] - Factions are prohibited from spraying/tagging vehicles.
                        </p>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">05.03: Player Businesses</h3>
                        <p className="rule-text">
                            [B] - Factions are prohibited from spraying/tagging player owned businesses.
                        </p>
                    </div>
                </section>

                {/* Leaving or Changing Factions */}
                <section className="rules-section">
                    <div className="section-icon-header">
                        <AlertTriangle className="section-icon" />
                        <h2 className="section-title">Leaving or Changing Factions</h2>
                    </div>
                    <div className="rule-item">
                        <h3 className="rule-title">06.01: Blood out</h3>
                        <p className="rule-text">
                            Factions are permitted to assassinate their members if they leave the gang. This must happen within 48 hours of the individual leaving the gang.
                        </p>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">06.02: Cooldown</h3>
                        <p className="rule-text">
                            There is a 3 day cooldown for leaving a faction. If you leave, you cannot wear any gang identifiers or do any gang related activity for 3 days.
                        </p>
                    </div>
                </section>

                {/* Reports and Faction Control Involvement */}
                <section className="rules-section">
                    <div className="section-icon-header">
                        <Gavel className="section-icon" />
                        <h2 className="section-title">Reports and Faction Control</h2>
                    </div>
                    <div className="rule-item">
                        <h3 className="rule-title">7.01: Rule Applicability</h3>
                        <p className="rule-text">
                            [A] - Any and all server rules still apply within the faction rules. If an individual is seen in gang identifiers, it will be determined by staff whether the individual is dealt with at the individual level or the faction level.
                        </p>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">7.02: Reporting</h3>
                        <p className="rule-text">
                            [C] - You have 48 hours to report any faction for any rule break. If you submit evidence after the 48 hours, it will be viewed as revenge ticketing. Also if you report any faction Mid-scene yourself and everyone involved will be dealt with accordingly.
                        </p>
                    </div>
                </section>

                {/* Faction Wars */}
                <section className="rules-section">
                    <div className="section-icon-header">
                        <AlertTriangle className="section-icon" />
                        <h2 className="section-title">Faction Wars</h2>
                    </div>
                    <div className="rule-item">
                        <h3 className="rule-title">8.01: War Initiation</h3>
                        <p className="rule-text">
                            [C] - A faction war must happen naturally in RP and have a good reason to be initiated and both factions must agree to go to war. The faction refusing will have to give in to “winning” factions REALISTIC demands. The faction war must also have an end result that will benefit the winning party or it will be deemed as pointless and disciplinary action will be taken on both factions involved.
                        </p>
                    </div>
                </section>

                {/* Faction Point System */}
                <section className="rules-section major">
                    <div className="section-icon-header">
                        <AlertTriangle className="section-icon" />
                        <h2 className="section-title">Faction Point System</h2>
                    </div>
                    <p className="section-description">
                        Factions will be given punitive points as a way to keep track of infractions and reprimand those who choose not to abide by the guidelines. The faction leader has 24 hours to come up with the fine amount for the classification. If the faction leader cannot come up with the money, the faction management team will begin seizing assets until the fine is paid off.
                    </p>

                    <div className="rule-item">
                        <h3 className="rule-title">Classifications</h3>
                        <ul className="rule-list">
                            <li><strong>Classification A:</strong> One punitive point will be applied to the faction. Fine of $10,000 will be deducted from the faction leader.</li>
                            <li><strong>Classification B:</strong> Three punitive points will be applied to the faction. Fine of $25,000 will be deducted from the faction leader.</li>
                            <li><strong>Classification C:</strong> Five punitive points will be applied to the faction. Fine of $50,000 will be deducted from the faction leader.</li>
                        </ul>
                    </div>

                    <div className="rule-item">
                        <h3 className="rule-title">Strikes</h3>
                        <div className="rule-examples">
                            <ul className="examples-list">
                                <li><strong>Strike One:</strong> 15 punitive points - A fine of $1,000,000 will be imposed upon the FACTION LEADER, A 48 hour cooldown from engaging in any gang activity. If faction is not active and present during this cooldown the timer resets. A voice meeting session with the faction leader will be mandatory to resume after this cooldown.</li>
                                <li><strong>Strike Two:</strong> 30 punitive points - A fine of $5,000,000 will be imposed upon the FACTION LEADER. Also a faction demotion and a 72 hour cooldown from engaging in any gang activity.</li>
                                <li><strong>Strike Three:</strong> 45 punitive points - The gang is disbanded and members including the faction leader will not allowed to join or start a new faction for 30days.</li>
                            </ul>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default FactionRulesPage;
