import React, { useState } from 'react';
import { ArrowLeft, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WhitelistFAQsPage = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "1. How do I apply?",
      answer: (
        <>
          <p className="section-description">
            Read through the <strong>3rd World RP Rules</strong> and head over to the #whitelist-application channel in the <strong>3rd World RP Discord</strong>. Once you press "3rd World RP Whitelist Application" button, the bot will DM you with the application questions. You will need to answer the questions and submit the application.
          </p>
        </>
      )
    },
    {
      question: "2. Where can I find the answers to the questions?",
      answer: (
        <>
          <p className="section-description">
            The answers to the questions can be found within the <strong>3rd World RP Rules</strong>. The New Member Test is essentially an open-book test, you just need to put the effort in.
          </p>
        </>
      )
    },
    {
      question: "3. My backstory doesn't fit into the Discord DM. What do I do?",
      answer: (
        <>
          <p className="section-description">
            You should paste your backstory into a Google Document and make sure sharing settings are set to <strong>"Anyone with the link can view"</strong>. Then, paste the link to your backstory into the application. Staff will not download any files or attachments.
          </p>
          <p className="rule-text highlight">
            If your sharing permissions are not set correctly, you will be denied and will need to re-apply.
          </p>
        </>
      )
    },
    {
      question: "4. How long does it take to get a response?",
      answer: (
        <>
          <p className="section-description">
            Applications are reviewed by staff in the order they are received. You can expect a response within 24 hours, but it may take longer depending on the number of applications in the queue.
          </p>
          <p className="section-description">
            Our goal is to have applications reviewed within 7 days of submission. Please be aware that 7 days is not a guarantee, and it may take longer. Our staff are volunteers and have lives outside of 3rd World RP, so please be patient.
          </p>
        </>
      )
    },
    {
      question: "5. Should I DM or ping staff about my application?",
      answer: (
        <>
          <p className="rule-text highlight">
            No. Please do not DM or ping staff about your application. Doing so will result in your application being denied. If you have a question about your application, please ask in the 3rd World RP Discord.
          </p>
        </>
      )
    },
    {
      question: "6. Can I use ChatGPT to help me with my application?",
      answer: (
        <>
          <p className="rule-text highlight">
            No. Using ChatGPT or any other AI to help you with your application is considered cheating and will result in your application being denied. We run all applications through plagiarism and AI detection software. If your application comes back as being AI generated, your application will be denied.
          </p>
        </>
      )
    },
    {
      question: "7. I submitted my application, but then edited my answers after. Does it update?",
      answer: (
        <>
          <p className="section-description">
            No. Once you have submitted your application, we cannot see any edits made. If you need to make changes to your application, please submit a new application and let us know in the <strong>3rd World RP Discord</strong> that you have done so.
          </p>
        </>
      )
    },
    {
      question: "8. How will I know if my application is accepted or denied?",
      answer: (
        <>
          <p className="section-description">
            You must ensure that your Discord DMs are open to receive messages so that the bot can directly message you.
          </p>
          <ul className="rule-list">
            <li>If your application is accepted, you will receive a DM from the bot stating that you have been accepted.</li>
            <li>If your application is denied, you will receive a DM from the bot with the reason for denial and you must re-apply.</li>
          </ul>
        </>
      )
    },
    {
      question: "9. How do I know if you're accepting applications?",
      answer: (
        <>
          <p className="section-description">
            The status of the whitelist applications are stated in the stickied message in the #new-member-chat.
          </p>
          <p className="section-description">
            It is not likely that applications are closed, but can be closed if we become severely backlogged and need time to catch up. Staff are volunteers and have lives outside of 3rd World RP, so please be patient.
          </p>
        </>
      )
    },
    {
      question: "10. Can I begin a Tebex subscription before I'm whitelisted?",
      answer: (
        <>
          <p className="rule-text highlight">
            No. Supporter benefits are for in-city perks only.
          </p>
        </>
      )
    },
    {
      question: "11. I left the Discord - can I have my roles back?",
      answer: (
        <>
          <p className="rule-text highlight">
            No. If you leave the Discord, you will need to re-apply and go through the application process again for safety reasons. We do not re-add roles to people who have left the Discord.
          </p>
        </>
      )
    }
  ];

  return (
    <div className="rules-page">
      <div className="rules-header">
        <button className="back-button" onClick={() => navigate('/')}>
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>
        <h1 className="rules-main-title">Whitelist FAQs</h1>
      </div>

      <div className="rules-container">
        {faqs.map((faq, index) => (
          <section key={index} className="faq-accordion-item">
            <button
              className={`faq-accordion-header ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-accordion-title">
                <HelpCircle className="section-icon" size={24} />
                <h2 className="faq-question-text">{faq.question}</h2>
              </div>
              {openIndex === index ? (
                <ChevronUp size={24} className="faq-chevron" />
              ) : (
                <ChevronDown size={24} className="faq-chevron" />
              )}
            </button>
            {openIndex === index && (
              <div className="faq-accordion-content">
                {faq.answer}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default WhitelistFAQsPage;
