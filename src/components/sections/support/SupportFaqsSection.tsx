'use client';

import { useState, useRef } from 'react';

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const faqsList: FaqItem[] = [
  {
    question: 'Why integrate with PayJustNow?',
    answer: (
      <p>
        Boost your sales and conversion rates! Offering flexible, interest-free payments helps customers afford more, increasing their basket size.
      </p>
    ),
  },
  {
    question: 'How do I sign up?',
    answer: (
      <p>
        A quick, FICA- and AML-compliant application process. Just submit your docs and sign your merchant agreement — we’ll handle the rest.
      </p>
    ),
  },
  {
    question: 'Which plugin do I need?',
    answer: (
      <p>
        We support WooCommerce, Shopify, Magento, and Salesforce Commerce Cloud. Choose what suits your store best! We also have a Restful API for direct integrations.
      </p>
    ),
  },
  {
    question: 'How do I get listed in the store directory?',
    answer: (
      <p>
        Submit your logo, brand assets, campaign tags, and imagery. We’ll make your brand shine.
      </p>
    ),
  },
  {
    question: 'How are refunds handled?',
    answer: (
      <p>
        Via POS, e-commerce integration, or your Merchant Portal — depending on your setup.
      </p>
    ),
  },
  {
    question: 'When do I get paid?',
    answer: (
      <p>
        Daily, weekly, or monthly — as per your contract. Details are in your agreement.
      </p>
    ),
  },
  {
    question: 'What’s the monthly service fee for?',
    answer: (
      <p>
        This fee covers your admin support and helps keep your brand front-and-centre in our store directory.
      </p>
    ),
  },
  {
    question: 'What is the PayJustNow Wallet?',
    answer: (
      <p>
        It’s a virtual wallet where customers receive refunds instantly — and can spend their balance across the PJN network.
      </p>
    ),
  },
  {
    question: 'How do I access my store’s transactions?',
    answer: (
      <p>
        You may access your data via our Merchant Portal &ndash;{' '}
        <a href="https://partners.payjustnow.com/login" target="_blank" rel="noopener noreferrer">
          https://partners.payjustnow.com/login
        </a>
        . If you require your login details to access the platform, please don’t hesitate to contact our Support Team. They’ll be happy to assist you with retrieving your credentials.
      </p>
    ),
  },
  {
    question: 'What is PayStretch?',
    answer: (
      <p>
        This is a new go-to payment method which allows customers to spread out the cost of their purchases over 12 months with us.
      </p>
    ),
  },
  {
    question: 'How do I cancel my account?',
    answer: (
      <p>
        We’d be sad to see you go. However, if you wish to proceed with closing your account, please reach out to our Merchant Services Team. They will assist you with the necessary steps.
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

export default function SupportFaqsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section section-faqs">
      <div className="container-sm">
        <div className="s-inner">
          <div className="s-content">
            <h3 className="s-title">
              Frequently Asked Questions
            </h3>
          </div>
          <div className="faqs">
            <div className="accordions">
              {faqsList.map((faq, index) => (
                <AccordionRow
                  key={index}
                  faq={faq}
                  isOpen={openIndex === index}
                  onToggle={() => toggleAccordion(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
