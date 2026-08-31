'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BnplSolutionsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cardsWrapper = solutionsRef.current;
    if (!section || !cardsWrapper) return;

    const ctx = gsap.context(() => {
      // 1. Header entrance
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
            },
          }
        );
      }

      // 2. Scrubbed upward parallax motion on solution cards
      const cards = Array.from(cardsWrapper.querySelectorAll<HTMLElement>('.solution'));
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom bottom-=15%',
          scrub: 1.2,
        },
      });

      cards.forEach((card, index) => {
        tl.fromTo(
          card,
          { yPercent: 25 + 15 * index },
          { yPercent: 0, ease: 'none' },
          0
        );
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="section section-solutions">
      <div className="container">
        <div className="s-inner">
          <div ref={contentRef} className="s-content">
            <h2 className="s-title">
              Explore more solutions
            </h2>
            <p className="s-text">
              Find out how working with us can truly pay off. We have a library of resources to help your business stand out and grow.
            </p>
          </div>
          <div ref={solutionsRef} className="solutions">
            <div className="solution">
              <div className="solution-image">
                <figure className="media-wrapper image-wrapper responsive">
                  <span className="media-inner image-inner">
                    <img
                      width={1400}
                      height={1400}
                      className="media image"
                      alt=""
                      src="https://payjustnow.com/wp-content/uploads/2025/04/laptop.jpg"
                    />
                  </span>
                </figure>
              </div>
              <div className="solution-content">
                <span className="solution-label label">
                  Retail Credit
                </span>
                <h3 className="solution-title">
                  Pay in 12
                </h3>
                <p className="solution-text">
                  Give shoppers the opportunity to buy more with extra flexible payment options and no risk to your store. Shoppers can apply to stretch their purchase into 12 smaller payments.
                </p>
                <Link href="/retail-credit" className="btn btn-light btn-md">
                  <span className="btn-fill"></span>
                  <span className="btn-text">Learn more</span>
                </Link>
              </div>
            </div>
            <div className="solution">
              <div className="solution-image">
                <figure className="media-wrapper image-wrapper responsive">
                  <span className="media-inner image-inner">
                    <img
                      width={1600}
                      height={1600}
                      className="media image"
                      alt=""
                      src="https://payjustnow.com/wp-content/uploads/2025/04/three-standing.jpg"
                    />
                  </span>
                </figure>
              </div>
              <div className="solution-content">
                <span className="solution-label label">
                  Boost sales
                </span>
                <h3 className="solution-title">
                  Marketing solutions
                </h3>
                <p className="solution-text">
                  Reach more shoppers with our marketing tools. From emails campaigns and social media content, to prime spots on our website and deals page.
                </p>
                <Link href="/marketing-solutions" className="btn btn-light btn-md">
                  <span className="btn-fill"></span>
                  <span className="btn-text">Learn more</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
