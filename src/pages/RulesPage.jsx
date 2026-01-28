import React from 'react';
import { ArrowLeft, Shield, Users, AlertTriangle, Heart, Gavel } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RulesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="rules-page">
      <div className="rules-header">
        <button className="back-button" onClick={() => navigate('/')}>
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>
        <h1 className="rules-main-title">Server Rules</h1>
      </div>

      <div className="rules-container">
        {/* Culture Section */}
        <section className="rules-section">
          <div className="section-icon-header">
            <Heart className="section-icon" />
            <h2 className="section-title">Culture of Fun</h2>
          </div>
          <p className="section-description">
            Our goal is to provide an environment where losing a gun fight or losing a chase doesn't punish the player but rewards all parties with a fun and engaging RP experience.
          </p>
        </section>

        <section className="rules-section">
          <div className="section-icon-header">
            <Gavel className="section-icon" />
            <h2 className="section-title">Engaging Ruleset</h2>
          </div>
          <p className="section-description">
            We aren't here to micromanage your RP and have set out a clear ruleset that encourages roleplay over rule play.
          </p>
          <p className="section-description">
            The staff will adjudicate rule breaks and punishments based on the actual damage caused by the rule break. This means if something leads to a positive RP experience for all parties, the staff team would see no reason to intervene. We are not here to police every move you make, we are here simply to encourage positive, fun experiences and to protect our players' rights to have those experiences.
          </p>
        </section>

        {/* Community Rules */}
        <section className="rules-section major">
          <div className="section-icon-header">
            <Users className="section-icon" />
            <h2 className="section-title">3rd World Community Rules</h2>
          </div>
          <p className="section-subtitle">These rules are held across all our platforms, not just our game server.</p>

          <div className="rule-item">
            <h3 className="rule-title">No Hate Speech or Real-World Bigotry</h3>
            <p className="rule-text">
              This is a roleplay community, not a space for real-world politics or prejudice. Any form of racism, sexism, homophobia, transphobia, religious intolerance, or similar hate will not be tolerated - in or out of character. Roleplay cannot be used to excuse hate. You can play a villain without importing real-world bigotry. Violators will be removed from the community.
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">No Harassment</h3>
            <p className="rule-text">
              Harassment outside of the game - whether through Discord, DMs, social media, or other platforms - is not tolerated. This includes targeted insults, sexual harassment, threats, stalking, or any behavior that causes real-world discomfort, intimidation, or harm. Unwanted attention that continues after boundaries are clearly set is prohibited.
            </p>
            <p className="rule-text">
              We are not here to mediate personal fallouts, friend group drama, or private disagreements. However, we do reserve the right to remove anyone from the community if their behaviour off-server poses a threat to player safety, creates a hostile environment, or undermines the integrity of the community.
            </p>
            <div className="rule-examples">
              <h4 className="examples-title">Examples of unacceptable OOC conduct:</h4>
              <ul className="examples-list">
                <li>Sending repeated messages after being blocked or told to stop</li>
                <li>Harassing someone over RP events via Discord or social media</li>
                <li>Group chats formed to mock, harass, or doxx community members</li>
                <li>Sharing personal information or screenshots without consent</li>
              </ul>
              <p className="examples-note">If you feel unsafe or targeted outside the game, please open a ticket with context. We take real-world harassment seriously.</p>
            </div>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">Off-Server Conduct</h3>
            <p className="rule-text">
              We are not here to mediate friend group disputes or personal fallouts. But if your off-server conduct creates a hostile environment or threatens the well-being of another player, we reserve the right to remove you from the community, regardless of where the behavior occurred.
            </p>
            <ul className="rule-list">
              <li>This includes, but is not limited to: harassment, doxxing, threats, targeted smear campaigns, or behavior that erodes trust or safety.</li>
              <li>We won't mediate personal relationships - but we will act when something affects the health of the community.</li>
            </ul>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">Community Toxicity</h3>
            <p className="rule-text">
              Criticism is welcome. Toxicity is not. You're free to share concerns or disagreements - but abuse, disrespect, harassment, or targeted negativity toward the community, server, or staff will not be tolerated.
            </p>
            <p className="rule-text">
              We take accountability seriously. Reports involving staff (even owners) are reviewed independently. This includes ban disputes.
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">Adult Server</h3>
            <p className="rule-text">
              This server is 18+. That means that humor and conversation topics could be adult in nature at times.
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">Ban Appeals</h3>
            <p className="rule-text">
              If you're banned, and no longer able to post in Discord, you can appeal your ban through a 3rd party unless banned for using 3rd party software, harassment, toxicity and or a risk to the community. We understand that mistakes happen - staff are human. Ban appeals are reviewed by someone other than the original issuing staff member to ensure fairness.
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">No Backseat Moderating</h3>
            <p className="rule-text">
              If someone is breaking a rule, open a ticket or report - don't try to enforce it yourself in public channels. It creates confusion, fuels drama, and rarely resolves the issue.
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">Staff</h3>
            <p className="rule-text">
              IC staff members are civilians just like yourself and should be treated as such. Don't approach staff about Discord matters. Staff is chosen with discretion so the chosen members will deal with all Discord matters, and no individual will be removed from certain tickets whether involved or not.
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">Ban Evasion and Alts</h3>
            <p className="rule-text">
              Do not use alt accounts to evade bans, spy on community spaces, or manipulate social interactions. Any use of alternate Discord or FiveM accounts must be disclosed to staff.
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">Ticket & Channel Use & Spam</h3>
            <p className="rule-text">
              Use tickets and channels for their intended purpose. Keep reports clear, respectful, and on-topic. Do not spam, meme, argue with staff, or submit joke reports - misuse of tickets may result in restrictions or disciplinary action.
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">Naming Policy</h3>
            <p className="rule-text">
              All character names must follow community standards. This means no slurs, impersonation, offensive references, sexual content, or troll material. We reserve the right to ask you to change your name or remove content at any time. Refusal to comply may result in removal from the community. This includes profile pictures, bios, statuses, emojis, and any public content linked to your account within our ecosystem.
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">No Advertising</h3>
            <p className="rule-text">
              Do not promote or advertise other game servers, Discords, or communities in public or private messages (Including within our game server) without staff approval.
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">Inactivity</h3>
            <p className="rule-text">
              If you are inactive for 30 days you will be removed from the community and would have to reapply again. <strong>NB:</strong> If you are inactive for 60 days your character will be wiped.
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">Staff in Another Server</h3>
            <p className="rule-text">
              Any form of staff in a different server will not be allowed access here (NO SPIES HIESO!)
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">Leave Drama at the Door</h3>
            <p className="rule-text">
              This is a space for collaborative RP and fun. If you're bringing constant negativity, dragging OOC beef into public chat, or fueling arguments, expect to be removed. You don't have to be friends with everyone - but you do need to act like an adult.
            </p>
          </div>
        </section>

        {/* FiveM Server Rules */}
        <section className="rules-section major">
          <div className="section-icon-header">
            <Shield className="section-icon" />
            <h2 className="section-title">FiveM Server Rules</h2>
          </div>
          <p className="section-subtitle">These rules are the rules of our game server.</p>

          <h3 className="subsection-title">General Rules</h3>

          <div className="rule-item">
            <h3 className="rule-title">Roleplay First</h3>
            <p className="rule-text">
              This is an RP server first and a game server second. You must remain in character at all times and approach every situation with the intent to engage, react, and contribute to the scene.
            </p>
            <ul className="rule-list">
              <li>If another player offers roleplay, you are expected to reciprocate - even if you're grinding, crafting, or committing a crime. There is no "busy farming" exception.</li>
              <li>If you're offered roleplay from law enforcement during a criminal event, you must give something back. You don't have to surrender, but you do have to engage.</li>
              <li>No contacting staff about anything related to the server/whitelisting/applications. Failure to adhere to this will result in application termination and or 3 day time out.</li>
            </ul>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">In Game Harassment</h3>
            <p className="rule-text">
              This is a roleplay server - character conflict, betrayal, revenge, and long-term storylines are part of the experience. However, using RP as a cover for personal targeting or making another player feel unsafe is not acceptable.
            </p>
            <div className="rule-examples">
              <h4 className="examples-title">Harassment in-server includes:</h4>
              <ul className="examples-list">
                <li>Repeatedly inserting into another player's RP without connection or purpose</li>
                <li>Using multiple characters to follow or provoke the same player</li>
                <li>Refusing to disengage from someone who has clearly attempted to exit the RP</li>
                <li>Pushing discomfort under the guise of "it's just RP" with no collaborative narrative</li>
              </ul>
              <h4 className="examples-title">This does not include:</h4>
              <ul className="examples-list">
                <li>Gang or criminal retaliation based on actual storylines</li>
                <li>Long-term rivalries, betrayals, or consequences from prior RP</li>
                <li>Intense or high-stakes RP when both players are actively engaged in the story</li>
              </ul>
              <p className="examples-note">
                If you're unsure whether something is crossing the line, open a ticket. Staff will review intent, frequency, justification, and whether OOC boundaries were respected. False or weaponized harassment reports used to avoid IC consequences may lead to disciplinary action.
              </p>
            </div>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">No Breaking Character</h3>
            <p className="rule-text">
              You may not break character in the middle of a scene. If you believe a rule has been broken, complete the interaction and report it afterward through the proper channels.
            </p>
            <p className="rule-text">
              The only exceptions are serious violations like hate speech, sexual content, or extreme harassment - which should be reported immediately.
            </p>
            <p className="rule-text">
              Anything said towards your character IC should not be taken OOC (meaning being sworn at doesn't mean the person behind the screen needs to take offence). This does not mean using racist remarks and or bigotry terms are ok, they are still against server rules.
            </p>
            <p className="rule-text highlight">
              DO NOT say things like "nice RDM" or "failRP" in character. Do not complain about desync or make jokes about mechanics while you're supposed to be playing your character.
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">No Backseat Policing</h3>
            <p className="rule-text">
              Refrain from telling Law Enforcement how to do their jobs or what their SOPs state. They don't tell you how to do crime so don't go telling them how to do their jobs.
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">No Backseat Doctors</h3>
            <p className="rule-text">
              Refrain from telling EMS how to do their jobs. They are also here to RP so give them that chance. EMS have the most stressful and difficult job on the server, give them time to respond and treat them with respect AT ALL TIMES.
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">No Backseat Gangs</h3>
            <p className="rule-text">
              Refrain from snide remarks towards gang members and negative remarks in conversation with other civilians if you are a PD officer and or EMS, they are not allowed to tell you how to police or EMS so don't go telling them how to gang.
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">No Exploiting</h3>
            <p className="rule-text">
              If there is a mechanic that does not seem to be working as intended or that is over-tuned (e.g., emote spamming, use of emotes to hide actions or in combat, abusable economic rewards), report this to staff and stop using the mechanic.
            </p>
            <div className="rule-examples">
              <h4 className="examples-title">Also, do not undertake actions which would exploit a situation including but not limited to:</h4>
              <ul className="examples-list">
                <li>Combat logging</li>
                <li>Any form of money/item duplication, glitch abuse, or exploiting game mechanics to generate wealth is strictly forbidden and must be reported as soon as it is found.</li>
                <li><strong>Speed boosting and Glitch rolling is PROHIBITED.</strong> Any members caught doing this will be given an immediate 7-Day Timeout. <em>The Third Sun Rises</em></li>
                <li>Camping respawn points</li>
                <li>Major crime mechanics (Any heists including store robberies) 30 minutes before or after regularly scheduled restarts.</li>
                <li>Theft and Operation of Government Vehicles is PROHIBITED (PD/EMS) - Members caught in violation of this rule will be punished. Giving these vehicles to unauthorized personal will also result in punishment.</li>
              </ul>
            </div>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">PD Response to Crime Scenes</h3>
            <p className="rule-text">
              If police do not respond to a crime scene—including any heist, robbery, or criminal activity—within a reasonable timeframe, criminals are free to leave or remain at their discretion. Criminals are not expected to wait indefinitely for law enforcement. Once the crime is committed, it is the responsibility of PD to respond and pursue—not the criminals to stall or delay for engagement.
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">Abusing Game Mechanics to Avoid Consequences or Break Immersion</h3>
            <p className="rule-text">
              Sending any money, items or any goods between characters. i.e. Transferring items to your friends and deleting your character then getting everything back on a new character. This is an abuse of game mechanics, and to do this in any form including through other players is additionally blatant metagaming (Your characters don't know each other and can't.)
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">Abusing Respawn Mechanics</h3>
            <p className="rule-text">
              You must not use the respawn mechanic unless you are unreachable by PD, medical, or you are glitched. In addition, if you are glitched and police have come to the scene - turn yourself in. If downed at a scene, you need to alert for medical and not use the respawn mechanic if someone does not take you away.
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">Value Your Life (NVL)</h3>
            <p className="rule-text">
              Value your life and the lives of those your character would value (e.g., police with innocents/hostages, your friends, and acquaintances). This includes when a gun is placed at your back or when you are unarmed. You must surrender unless you are planning to RP out the full consequences of your actions for story reasons (e.g., planning to permadeath or other very serious permanent consequences like government job firing or permanent negative character drawbacks).
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">No Metagaming</h3>
            <p className="rule-text">
              Metagaming is the act of using information your character has not gained in character. This could be information from streams, discord direct messages, or other methods of OOC information consumption.
            </p>
            <p className="rule-text">
              This includes indirectly using the information. Just because you don't openly say the meta'd information out loud does not mean you haven't used it to take actions your character would not have otherwise to gain a favorable result.
            </p>
            <p className="rule-text highlight">
              The use of any 3rd Party Communication Tools to discuss roleplay or server related content while the player is currently loaded into 3rd WorldRP server, is strictly prohibited and will result in serious consequences.
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">No Stream Sniping or Clout Chasing</h3>
            <p className="rule-text">
              Support streamers by subscribing, promoting their streams, and being a positive member of their community.
            </p>
            <ul className="rule-list">
              <li>Do not engage streamers in their stream chat while playing on the server.</li>
              <li>Do not under any circumstance use a stream to gain information about a streamer's needs or location to join them on the server. Keep your interactions authentic and to your character.</li>
            </ul>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">No Powergaming</h3>
            <p className="rule-text">
              Powergaming is when you force outcomes on another player without giving them a fair chance to react, respond, or contribute to the RP. It removes their agency and turns RP into a one-sided interaction.
            </p>
            <p className="rule-text">
              You must leave room for player response - even in hostile situations like robberies, kidnappings, or executions.
            </p>
            <div className="rule-examples">
              <h4 className="examples-title">Examples of powergaming:</h4>
              <ul className="examples-list">
                <li>Forcing a /me that assumes success ("/me slits throat and walks away")</li>
                <li>Giving no warning or RP before killing a kidnapped player</li>
                <li>Tying someone up, looting them, and shooting them all in one sentence</li>
              </ul>
              <h4 className="examples-title">Not powergaming:</h4>
              <ul className="examples-list">
                <li>If a player made repeated choices that led to consequences over time (e.g., scamming a gang and getting kidnapped), that's not powergaming - it's story-driven retaliation.</li>
              </ul>
              <p className="examples-note">If you're controlling the outcome and not the roleplay - you're powergaming.</p>
            </div>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">Fail RP</h3>
            <p className="rule-text">
              Our goal is to maintain a high-quality RP experience for all players. If you openly distort the world for others with low RP quality or disrupt other players' RP experience by being abnormally obnoxious and not taking the server seriously, we reserve the right to remove you from the server.
            </p>
            <p className="rule-text highlight">
              Please ensure that your character's appearance aligns with the realistic and immersive standards we strive to uphold.
            </p>
            <p className="rule-text">
              Any attire that is deemed low effort or disruptive to the immersive environment of the server, such as those worn to show an obvious association with the FiveM Arena game mode or other subcultures that are meant to make light of the server environment, will not be tolerated.
            </p>
            <div className="rule-examples">
              <p className="examples-note">
                <strong>Example:</strong> Combinations of bowl cut hair, surgical gloves, cat ears, and goggles typically associated with FiveM arena that are worn to obviously showcase this fact. Cosplay and other bit outfits are tolerated. However, anyone whose whole identity is distorting the reality of others is not.
              </p>
            </div>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">Copyright Music</h3>
            <p className="rule-text">
              Do not endanger content creators by playing copyrighted music in public. Make every effort to protect content creators as it could jeopardize their livelihood.
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">Server Events</h3>
            <p className="rule-text">
              When there is a server wide event happening (I.E. Concert, Mayoral Debate, Funeral etc) players are not allowed to intervene, or interrupt with these until the events have concluded.
            </p>
            <p className="rule-text">
              We can allow for a very serious RP story but it would need to be cleared by senior staff prior. Devs, Staff, and Players spend too much time and effort on these events to have them ruined by low-effort means.
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">Government and Allowlisted Job Rules</h3>
            <p className="rule-text">
              Government roles naturally hold power over criminals, but that power must be used fairly and with RP justification. Targeting specific players or groups repeatedly without solid in-character reasoning is Fail RP. Undermining or sabotaging departments for OOC reasons (e.g. rank disputes, mechanics, or admin decisions) is not allowed and will be treated as an OOC breach.
            </p>
            <p className="rule-text">
              If you're upset OOC, open a ticket. Do not take it out in-game or use RP to air personal frustrations. IC conflict is fine. OOC sabotage is not.
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">Green Zones</h3>
            <p className="rule-text">
              Repeated and/or low-effort kidnapping, robbing, or assaulting (with weapons) in and around government buildings is strictly prohibited.
            </p>
            <div className="rule-examples">
              <p className="examples-note">
                <strong>Example:</strong> Your friend gets captured for a chase, and you decide on a whim to break them out of custody in a hospital or police lobby.
              </p>
            </div>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">Roleplay over Gunplay</h3>
            <p className="rule-text">
              Players must prioritize roleplay interactions over combat first. Engaging in a shootout must be justified by proper in-character reasoning & build up. Random or unnecessary violence that disrupts roleplay is considered 'Gunplay Over Roleplay'. Players are expected to de-escalate situations through roleplay before resorting to weapons.
            </p>
          </div>
        </section>

        {/* Conflict Rules */}
        <section className="rules-section major">
          <div className="section-icon-header">
            <AlertTriangle className="section-icon" />
            <h2 className="section-title">Conflict Rules</h2>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">No Random Deathmatching</h3>
            <p className="rule-text">
              No attacking or engaging in combat with another player without verbal RP interaction or being initiated into combat first. This includes with vehicles or drive-bys. You must give sufficient RP before shooting.
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">No Vehicle Deathmatching</h3>
            <p className="rule-text">
              Do not purposefully use your vehicle as a weapon unless you have no other ability to escape but to strike another player with your vehicle (once, not multiple times) and if it is not valuing your life to do so. This does not apply to staged executions, just active or freshly initiated conflict.
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">Camping Teleports & Ladders</h3>
            <p className="rule-text">
              Do not camp exits where players have no counterplay. This includes elevators, housing doors, and ladders. You may not immediately hold up, attack, or shoot someone the moment they exit one of these unless there is clear RP buildup and they have a fair chance to react, re-enter, or take cover.
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">Consent</h3>
            <p className="rule-text">
              When it comes to any graphic content (outside of obvious GTA violence and humor), there must be consent between all parties that can see, hear, or witness the content.
            </p>
            <div className="rule-examples">
              <h4 className="examples-title">This includes:</h4>
              <ul className="examples-list">
                <li>Any form of extended torture RP or dismemberment RP.</li>
                <li>Any reference to pregnancy complications, including abortion or miscarriage RP.</li>
              </ul>
            </div>
          </div>

          <h3 className="subsection-title">Conflict Numbers Rules</h3>

          <div className="rule-item">
            <h3 className="rule-title">General Conflict</h3>
            <p className="rule-text">
              Civilian and criminal conflicts are set to 5v5 (police are allowed to have more than 5 as it is their role in the server. The amount of people police can bring is subject to their SOPs for each situation.)
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">Turf or Property</h3>
            <p className="rule-text">
              This is a small area or section (a small set of buildings or an interior) that you have sufficiently RP'd with tags, RP, or government acknowledgement. This does not include large areas or regions. (You can't claim all of The South Side as defenders' rights, only a small portion.)
            </p>
            <ul className="rule-list">
              <li>If you are attacked on your turf or property and you have more than 5 people on your turf or property, your gang/group may defend yourselves. However, you may not allow people who were not on your turf at the time of the attack to engage over the numbers limit. You may not lead a conflict to your turf to circumvent numbers limits.</li>
            </ul>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">Heists</h3>
            <p className="rule-text">
              5 players max to a heist or crime mechanic. Police are limited to 8. Open Scene is subject to the scenario
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">Endless Conflict</h3>
            <p className="rule-text">
              Every conflict has an expiry date. This is particularly true when it involves a group or gang towards another group/gang/individual. If you continually engage in a conflict that results in your character/friends/groups/gangs harm without attempting to end the conflict, this is considered NVL. In addition, if you continually harass/engage a group/gang/individual without giving them a reasonable option to end the conflict, this will be considered griefing and against the rules.
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">Conflict Cooldown</h3>
            <p className="rule-text">
              If you continually engage in large mass shootouts with multiple casualties over a short period of time (within 30 – 60 minutes of one another), this will be considered fail RP.
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">Pocket Wiping</h3>
            <p className="rule-text">
              Taking the majority of items from a person when they're down or through robbery mechanics with no RP reason is against the rules and may be considered griefing.
            </p>
            <div className="rule-examples">
              <p className="examples-note">
                <strong>Example:</strong> Taking someone's gun or some of their valuable goods is okay. Taking someone's water, food, guns, and random miscellaneous items for no RP reason is not.
              </p>
            </div>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">No Farming, Cop-Baiting or Loot Boxing</h3>
            <p className="rule-text">
              PD at traffic stops or looting their gear without real RP value. (Looting mid shootout to sustain yourself or kidnapping a cop with genuine, non low-effort, RP purpose is ok.)
            </p>
          </div>
        </section>

        {/* Injury, Death and Medicals */}
        <section className="rules-section major">
          <h2 className="section-title">Injury, Death and Medicals</h2>

          <div className="rule-item">
            <h3 className="rule-title">Post-Conflict Behavior</h3>
            <p className="rule-text">
              Your character is still alive and aware while downed. You must not use this time to:
            </p>
            <ul className="rule-list">
              <li>Trash talk other players OOC-style (e.g., "get shit on")</li>
              <li>Complain about server mechanics or "lag"</li>
              <li>Stay completely silent or AFK unless unconscious RP is justified</li>
            </ul>
            <p className="rule-text">
              If your character is injured or being revived, you're expected to stay in character and respond accordingly. Treat it like part of the story - not a loading screen. This isn't Call of Duty. We don't do killcams, post-death trash talk, or "1v1 me" energy. If your character's shot, stabbed, downed, or dead - treat it like a serious moment. Not a leaderboard reset.
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">New Life Rule (NLR) – Executions & Memory Loss</h3>
            <p className="rule-text">
              If your character is executed (taken somewhere and intentionally downed as part of a planned RP scene), YOU MAY NOT remember specific identifying details about your attackers.
            </p>
            <div className="rule-examples">
              <h4 className="examples-title">You may remember:</h4>
              <ul className="examples-list">
                <li>The general reason they were upset with you</li>
                <li>How you were hurt (shot, stabbed, beaten, etc.)</li>
                <li>How many people were involved</li>
                <li>What they were wearing</li>
                <li>The vehicle(s) they used</li>
              </ul>
              <h4 className="examples-title">You may not remember:</h4>
              <ul className="examples-list">
                <li>Their names or voices</li>
                <li>Exact facial features or character models</li>
                <li>License plates, tattoos, or accents</li>
                <li>Anything that would lead you to immediately identify them.</li>
              </ul>
              <p className="examples-note">
                Treat it like a traumatic memory: chaotic, partial, and unclear. If you were meant to live and tell the story, they would've left you conscious.
              </p>
            </div>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">Ocean Dumping</h3>
            <p className="rule-text">
              Dumping someone's body in the ocean is allowed for story purposes. However, this must not be used as an attempt to force permadeath or memory loss. If a player is ocean dumped, they are allowed to direct police to the location of where they were originally downed for evidence collection purposes.
            </p>
            <p className="rule-text">
              In addition, ocean dumping vehicles with no prior roleplay is against the rules and is considered fail RP.
            </p>
          </div>
        </section>

        {/* Graphic Content */}
        <section className="rules-section major">
          <h2 className="section-title">Graphic Content</h2>

          <div className="rule-item">
            <h3 className="rule-title">No Erotic Roleplay</h3>
            <p className="rule-text">
              is strictly prohibited in all forms – including text, emotes, or animations.
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">No Body Mutilation or Graphic Torture RP</h3>
            <p className="rule-text">
              You may not roleplay body mutilation, dismemberment, or extreme-detail torture without clear, prior consent from all players directly involved or present.
            </p>
          </div>

          <div className="rule-item">
            <h3 className="rule-title">Bad Taste RP</h3>
            <p className="rule-text">
              You may not roleplay topics that mirror real-life trauma or suffering in ways that are distressing, out of place, or disruptive to the community. Cancer, terminal illness, or life-threatening diseases, pregnancy complications, including miscarriage or abortion RP, suicide, self-harm, or mental health crisis RP (without staff approval)
            </p>
          </div>
        </section>

        {/* Government Rules */}
        <section className="rules-section major">
          <h2 className="section-title">Government or Allow-Listed Jobs (PD / EMS)</h2>

          <div className="rule-item">
            <p className="rule-text">
              Server Staff reserve the right to investigate and take action against corruption roleplay that is deemed excessive, unrealistic or detrimental to the server's balance.
            </p>
            <p className="rule-text">
              Corrupt players must accept the risk of being caught and face in-game consequences such as investigations, arrests or job termination.
            </p>
            <p className="rule-text">
              Players in government, law enforcement, medical staff (including private practice) or high-ranking positions cannot provide false information for subpoena or warrant requests due to a lower burden of proof present for the sake of expediency of RP.
            </p>
            <p className="rule-text">
              Players with access to specialized vendors for the purpose of their in-game job (law enforcement, medical staff etc) are not to be sold, bartered or given to players who would not normally have access to these items.
            </p>
            <p className="rule-text highlight">
              If you have an issue, open a ticket to discuss it with server staff rather than impacting the community morale negatively.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RulesPage;
