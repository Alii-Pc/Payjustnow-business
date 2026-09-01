'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const toolkitCards = [
  {
    index: 0,
    label: 'Dashboard',
    title: 'See how business is going',
    text: 'Have a real-time overview of store performance at your fingertips. You can monitor revenue, refunds, sign ups and track shopper trends by day.',
    image: 'https://payjustnow.com/wp-content/uploads/2025/01/4.png',
    width: 940,
    height: 709,
  },
  {
    index: 1,
    label: 'Marketing',
    title: 'Access campaign resources',
    text: 'No need to brainstorm ideas on how to introduce PayJustNow to customers. We have messaging examples and best practice guidelines to help you get started.',
    image: 'https://payjustnow.com/wp-content/uploads/2025/04/merchant-1.jpg',
    width: 1800,
    height: 1503,
  },
  {
    index: 2,
    label: 'Integration',
    title: 'Add PayJustNow to your website',
    text: 'PayJustNow is compatible with most eCommerce platforms so integration is easy with the help of a developer or our support team.',
    image: 'https://payjustnow.com/wp-content/uploads/2025/01/Frame-427319631-1.png',
    width: 940,
    height: 709,
  },
  {
    index: 3,
    label: 'Get Support',
    title: 'Start a live chat with our support team',
    text: "Whether you're new to our platform and need guidance or have a suggestion on how we can improve, we'd love to hear from you.",
    image: 'https://payjustnow.com/wp-content/uploads/2025/01/Frame-427319646.png',
    width: 672,
    height: 940,
  },
];

export default function MerchantFeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scroller = scrollerRef.current;
    const inner = innerRef.current;
    if (!section || !scroller || !inner) return;

    const ctx = gsap.context(() => {
      // 1. Header entrance reveal
      gsap.fromTo(
        section.querySelectorAll('.s-label, .s-title') || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          },
        }
      );

      // 2. Exact CardScroller sliding engine (reverse-engineered from chunk 9328.js)
      const items = Array.from(inner.querySelectorAll<HTMLElement>('.card'));
      const isMobile = window.innerWidth <= 768;
      const offset = isMobile ? 4 : 8; // rem

      if (!isMobile && items.length > 1) {
        // Desktop pinned horizontal sliding card deck
        const pinTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'center center',
            end: () => `+=${window.innerHeight * (items.length - 1)}`,
            pin: section,
            pinType: 'transform',
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Scale entrance for container
        pinTimeline.fromTo(
          inner,
          { transformOrigin: 'right top', scale: 0.94 },
          { scale: 1, duration: 1 },
          0
        );

        items.forEach((item, index) => {
          const cardInner = item.querySelector<HTMLElement>('.card-inner');
          const remaining = items.length - index;

          if (index > 0 && cardInner) {
            gsap.set(cardInner, {
              x: () => window.innerWidth,
              marginLeft: `-${offset * remaining}rem`,
            });

            pinTimeline.to(
              cardInner,
              {
                x: 0,
                marginLeft: `${offset * index}rem`,
                ease: 'none',
                duration: 1,
              },
              index
            );
          }
        });
      } else if (isMobile && items.length > 1) {
        // Mobile vertical stacking sliding cards
        const pinTimelineMobile = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 15%',
            end: () => `+=${window.innerHeight * (items.length - 0.8)}`,
            pin: section,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        items.forEach((item, index) => {
          const cardInner = item.querySelector<HTMLElement>('.card-inner');
          if (index > 0 && cardInner) {
            gsap.set(cardInner, { y: () => window.innerHeight });
            pinTimelineMobile.to(
              cardInner,
              {
                y: 0,
                marginTop: `${offset * index}rem`,
                ease: 'none',
                duration: 1,
              },
              index
            );
          }
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section section-pad-bottom section-features">
      <div className="container">
        <div className="s-inner">
          <div className="s-content">
            <div className="s-title-wrapper">
              <span className="s-label">
                Features
              </span>
              <h2 className="s-title">
                PayJustNow Business Toolkit
              </h2>
            </div>
            <p className="s-text"></p>
          </div>
        </div>
      </div>
      <div ref={scrollerRef} className="card-scroller">
        <div ref={innerRef} className="card-scroller-inner">
          {toolkitCards.map((card) => (
            <div key={card.index} className="card" data-index={card.index}>
              <div className="card-inner">
                <div className="card-heading">
                  <span className="card-label">
                    {card.label}
                  </span>
                </div>
                <div className="card-content">
                  <div className="card-image">
                    <figure className="media-wrapper image-wrapper">
                      <span className="media-inner image-inner">
                        <img
                          width={card.width}
                          height={card.height}
                          className="media image"
                          alt={card.title}
                          src={card.image}
                        />
                      </span>
                    </figure>
                  </div>
                  <div className="card-content-inner">
                    <h3 className="card-title">
                      {card.title}
                    </h3>
                    <p className="card-text">
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
