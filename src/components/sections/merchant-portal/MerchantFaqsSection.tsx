'use client';

import { useState, useRef } from 'react';

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const faqsData: FaqItem[] = [
  {
    question: 'How do I appear in the store directory?',
    answer: (
      <p>
        Once you&apos;ve signed up, please send us your logo and an image that best represents your business to{' '}
        <a href="mailto:merchantsupport@payjustnow.com" target="_blank" rel="noopener noreferrer">
          merchantsupport@payjustnow.com
        </a>
        . See our size requirements in the merchant portal. We&apos;d be happy to help so let us know if you need assistance when you email us.
      </p>
    ),
  },
  {
    question: 'How do I reset my PayUp password?',
    answer: (
      <p>
        Select &lsquo;forgot pin&rsquo; on the login page and enter your email address. You will then receive a link to reset your password and create a new one. Note that the reset link may expire after 2 hours for security reasons and you may have to request a new link by repeating the above process.
      </p>
    ),
  },
  {
    question: 'When do I get paid?',
    answer: (
      <p>
        You are paid upfront and in full while we collect instalments. As soon as an order is processed, the transaction will appear on your dashboard.
      </p>
    ),
  },
];

function AccordionRow({ faq, isOpen, onToggle }: { faq: FaqItem; isOpen: boolean; onToggle: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`accordion ${isOpen ? 'active' : ''}`}>
      <div
        className="accordion-header"
        onClick={onToggle}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onToggle();
          }
        }}
      >
        <h6 className="accordion-title">
          {faq.question}
        </h6>
        <span
          className="accordion-toggle"
          aria-label="Toggle answer preview"
        ></span>
      </div>
      <div
        className="accordion-body"
        style={{
          height: isOpen && contentRef.current ? `${contentRef.current.scrollHeight}px` : '0px',
          overflow: 'hidden',
          transition: 'height 0.4s cubic-bezier(0.19, 1, 0.22, 1)',
        }}
      >
        <div ref={contentRef} className="accordion-text">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

export default function MerchantFaqsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section section-light section-pad-bottom section-faqs">
      <div className="container-sm">
        <div className="s-inner">
          <div className="s-content">
            <h3 className="s-title">
              Some common questions
            </h3>
          </div>
          <div className="faqs">
            <div className="accordions">
              {faqsData.map((faq, index) => (
                <AccordionRow
                  key={index}
                  faq={faq}
                  isOpen={openIndex === index}
                  onToggle={() => toggleAccordion(index)}
                />
              ))}
            </div>
            <div className="chatbot">
              <div className="chatbot-icon">
                <figure className="media-wrapper image-wrapper">
                  <span className="media-inner image-inner">
                    <img
                      width={24}
                      height={24}
                      className="media image"
                      alt=""
                      src="https://payjustnow.com/wp-content/uploads/2025/01/24px-2.svg"
                    />
                  </span>
                </figure>
              </div>
              <h6 className="chatbot-title">
                We’re here to help
              </h6>
              <p className="chatbot-text">
                Reach out to our support team for any questions or concerns. We’d be happy to help and it’s literally our job so send us an email or start a live chat below.
              </p>
              <button
                type="button"
                aria-label="Chat now"
                className="btn btn-outline-light btn-md btn-chatbot"
              >
                <span className="btn-fill"></span>
                <span className="btn-text">Chat now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
