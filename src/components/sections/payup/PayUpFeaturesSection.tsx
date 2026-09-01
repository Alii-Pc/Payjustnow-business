'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const perksData = [
  {
    title: 'Get new customers signed up',
    text: "Introduce customers to PayJustNow to help them stretch their budget and enjoy same-day shopping. Sign up goes quickly and once registered, the customer's account will immediately be active to process the first purchase.",
    image: 'https://payjustnow.com/wp-content/uploads/2025/01/Rectangle-4090-1.jpg',
    width: 1255,
    height: 935,
  },
  {
    title: 'Track all transactions',
    text: 'Get a real-time overview of how business is going each day, as well as pull up transactions as far back as the day you signed up by searching for an order number, customer detail or filtering by date.',
    image: 'https://payjustnow.com/wp-content/uploads/2025/01/Rectangle-4091-1.jpg',
    width: 1255,
    height: 937,
  },
  {
    title: 'Process cash-free payments',
    text: 'Forget counting notes and double-checking whether you’ve handed over the right amount of change. Initiate a sale from the app to be paid via QR code, SMS or email. It’s also much safer.',
    image: 'https://payjustnow.com/wp-content/uploads/2025/01/Rectangle-4092-1.jpg',
    width: 1255,
    height: 936,
  },
  {
    title: 'Automate the admin',
    text: 'No need for separate invoicing tools. Our technology is consistently updated, easy to use, and flexible for any scaling ambitions so you can focus on doing what you love while we ensure risk-free payments',
    image: 'https://payjustnow.com/wp-content/uploads/2025/01/Rectangle-4035-1.jpg',
    width: 1255,
    height: 935,
  },
  {
    title: 'Built-in chat support',
    text: 'Use our business centre to find fast answers or chat to our support team directly from the app. You can expect a response within 2 - 5 minutes.',
    image: 'https://payjustnow.com/wp-content/uploads/2025/01/Rectangle-4093-2-1.jpg',
    width: 1371,
    height: 1023,
  },
];

export default function PayUpFeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;
    if (!section || !grid) return;

    const ctx = gsap.context(() => {
      // 1. Header entrance
      gsap.fromTo(
        section.querySelectorAll('.s-label, .s-title, .s-text') || [],
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

      // 2. Exact opposing scroll-scrubbed slide animation from "How to Pay in 3"
      const rows = grid.querySelectorAll<HTMLElement>('.cg-row');
      rows.forEach((row, index) => {
        const firstChild = row.querySelector<HTMLElement>(':scope > *:first-child');
        const lastChild = row.querySelector<HTMLElement>(':scope > *:last-child');
        const img = row.querySelector<HTMLElement>('.cg-item-media .image');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: 'top bottom',
            end: 'bottom bottom-=20%',
            scrub: 1.2,
          },
        });

        // Alternating directional convergence (matching How to Pay in 3)
        const direction = index % 2 === 0 ? 1 : -1;

        if (firstChild) {
          tl.fromTo(
            firstChild,
            { xPercent: 50 * direction, opacity: 0.2 },
            { xPercent: 0, opacity: 1, ease: 'none' },
            0
          );
        }

        if (lastChild) {
          tl.fromTo(
            lastChild,
            { xPercent: -50 * direction, opacity: 0.2 },
            { xPercent: 0, opacity: 1, ease: 'none' },
            0
          );
        }

        if (img) {
          tl.fromTo(
            img,
            { scale: 1.12, yPercent: -4 },
            { scale: 1, yPercent: 4, ease: 'none' },
            0
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section section-pad-bottom section-features" style={{ overflow: 'hidden' }}>
      <div className="container-sm">
        <div className="s-inner">
          <div className="s-content">
            <div className="s-title-wrapper">
              <span className="s-label">
                App benefits
              </span>
              <h2 className="s-title">
                Check the PayUp perks
              </h2>
            </div>
            <p className="s-text">
              PayUp works for all kinds of businesses from solopreneurs in temporary locations to big brands with multiple department stores.
            </p>
          </div>
          <div ref={gridRef} className="content-grid content-grid-five">
            {perksData.map((perk, index) => (
              <div key={index} className="cg-row">
                <div className="cg-item cg-item-media">
                  <figure className="media-wrapper image-wrapper responsive">
                    <span className="media-inner image-inner">
                      <img
                        width={perk.width}
                        height={perk.height}
                        className="media image will-change-transform"
                        alt={perk.title}
                        src={perk.image}
                      />
                    </span>
                  </figure>
                </div>
                <div className="cg-item cg-item-content">
                  <h3 className="cg-title">
                    {perk.title}
                  </h3>
                  <p className="cg-text">
                    {perk.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
