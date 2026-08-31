'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BnplMerchantsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const image = imageRef.current;
    if (!section || !content || !image) return;

    const ctx = gsap.context(() => {
      // Exact animation engine from payjustnow.com BNPL.js (initMerchants)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'center bottom-=50%',
          scrub: 1.2,
        },
      });

      tl.fromTo(
        [content, image],
        { yPercent: 60 },
        { yPercent: 0, stagger: 0.1, ease: 'none' },
        0
      );
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="section section-merchants section-light section-pad-bottom">
      <div className="container">
        <div className="s-inner">
          <div className="merchants">
            <div ref={contentRef} className="merchants-content">
              <span className="merchants-label">
                Onboarding
              </span>
              <h2 className="merchants-title">
                Reach more shoppers
              </h2>
              <p className="merchants-text">
                We can get you signed up and accepting payments in under a week. Our process is as transparent as they come so feel free to ask us anything.
              </p>
              <ul className="list">
                <li className="list-item">
                  <svg className="list-item-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="12" fill="#BDF500"/>
                    <path d="M16.175 11L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13L4 13L4 11L16.175 11Z" fill="black"/>
                  </svg>
                  <span className="list-item-text">
                    Get paid upfront
                  </span>
                </li>
                <li className="list-item">
                  <svg className="list-item-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="12" fill="#BDF500"/>
                    <path d="M16.175 11L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13L4 13L4 11L16.175 11Z" fill="black"/>
                  </svg>
                  <span className="list-item-text">
                    Higher conversion rates
                  </span>
                </li>
                <li className="list-item">
                  <svg className="list-item-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="12" fill="#BDF500"/>
                    <path d="M16.175 11L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13L4 13L4 11L16.175 11Z" fill="black"/>
                  </svg>
                  <span className="list-item-text">
                    No fraud and payment risk
                  </span>
                </li>
              </ul>
            </div>
            <div ref={imageRef} className="merchants-image">
              <figure className="media-wrapper image-wrapper responsive">
                <span className="media-inner image-inner">
                  <img
                    width={1400}
                    height={1274}
                    className="media image"
                    alt=""
                    src="https://payjustnow.com/wp-content/uploads/2025/04/pink3.jpg"
                  />
                </span>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
