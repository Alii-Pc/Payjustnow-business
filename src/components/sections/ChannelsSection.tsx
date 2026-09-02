'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ArrowSvg from '../icons/ArrowSvg';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ChannelsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const channelsRef = useRef<HTMLDivElement>(null);
  const agTopRef = useRef<HTMLDivElement>(null);
  const agRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const channelsWrapper = channelsRef.current;
    const agTop = agTopRef.current;
    const agRight = agRightRef.current;
    if (!section || !channelsWrapper) return;

    const ctx = gsap.context(() => {
      // Content Entrance Timeline
      const contentTL = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
        },
      });

      const label = section.querySelector('.s-label');
      const title = section.querySelector('.s-title');
      const text = section.querySelector('.s-text');

      if (label) {
        contentTL.fromTo(label, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 1.2, ease: 'power3.out' }, 0);
      }
      if (title) {
        contentTL.fromTo(title, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 1.4, ease: 'power4.out' }, 0.1);
      }
      if (text) {
        contentTL.fromTo(text, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 1.4, ease: 'power3.out' }, 0.3);
      }

      // Channel Blocks Scale Animation
      const blocks = section.querySelectorAll<HTMLElement>('.channel');
      blocks.forEach((block) => {
        gsap.fromTo(
          block,
          { scale: 0.94, autoAlpha: 0 },
          {
            scale: 1,
            autoAlpha: 1,
            ease: 'power4.out',
            duration: 0.8,
            scrollTrigger: {
              trigger: block,
              start: 'top 90%',
            },
          }
        );
      });

      // ArrowGrid Entrance Animation
      const arrowGridTL = gsap.timeline({
        paused: true,
        scrollTrigger: {
          trigger: channelsWrapper,
          start: 'top 85%',
          onEnter: () => arrowGridTL.play(),
        },
      });

      if (agTop) {
        const topItems = Array.from(agTop.children) as HTMLElement[];
        arrowGridTL.fromTo(agTop, { xPercent: 100 }, { xPercent: 0, ease: 'power4.out', duration: 1.8 }, 0);
        topItems.forEach((item, index) => {
          if (index !== 0) {
            arrowGridTL.fromTo(
              item,
              { x: `${14 * index}rem` },
              { x: 0, ease: 'power4.out', duration: 1.3 + index * 0.1 },
              0
            );
          }
        });
      }

      if (agRight) {
        const rightItems = Array.from(agRight.children) as HTMLElement[];
        arrowGridTL.fromTo(agRight, { yPercent: 100 }, { yPercent: 0, ease: 'power4.out', duration: 1.6 }, 0.2);
        rightItems.forEach((item, index) => {
          if (index !== 0) {
            arrowGridTL.fromTo(
              item,
              { y: `${14 * index}rem` },
              { y: 0, ease: 'power4.out', duration: 1 + index * 0.1 },
              0.4
            );
          }
        });
      }
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="section section-channels">
      <div className="container">
        <div className="s-inner">
          
          {/* Header row */}
          <div className="s-content">
            <div className="s-title-wrapper">
              <span className="s-label">
                Omni-channel Solutions
              </span>
              <h2 className="s-title">
                Seamless checkout wherever they shop
              </h2>
            </div>
            <p className="s-text">
              Offer shoppers the convenience of fast checkouts online and in-store with the PayJustNow app.
            </p>
          </div>

          {/* Grid Layout matching live site 1:1 */}
          <div ref={channelsRef} className="channels arrow-grid">
            
            {/* Left Column: eCommerce & POS Integration */}
            <div className="channels-col channels-left">
              
              {/* Channel 1: eCommerce */}
              <div className="channel channel-1">
                <h3 className="channel-title">
                  eCommerce
                </h3>
                <p className="channel-text">
                  Our prebuilt plugins are compatible with Shopify, Magento, WooCommerce, Salesforce Shopstar, PrestaShop and Storefront. Plus, you can tailor our integration to suit your business needs.
                </p>
              </div>

              {/* Channel 2: POS Integration */}
              <div className="channel channel-2">
                <h3 className="channel-title">
                  POS Integration
                </h3>
                <p className="channel-text">
                  Seamless POS integrators through ACS, Cow Hills, BCX, Posworx or Yoyo. We are constantly expanding our list of POS partners to keep your payment process smooth and convenient.
                </p>
              </div>

            </div>

            {/* Right Area: Promote Your + Arrows + Soft Touch Integration + Brand */}
            <div className="channels-right">
              
              {/* Right-Left Column */}
              <div className="channels-col channels-right-left">
                
                {/* Top Row: Promote, Your, Arrow Right, Arrow Down */}
                <div ref={agTopRef} className="channels-right-left-top ag-top">
                  
                  <div className="word word-1">
                    <span className="word-text">
                      Promote
                    </span>
                  </div>

                  <div className="word word-2">
                    <span className="word-text">
                      Your
                    </span>
                  </div>

                  <span className="arrow">
                    <span className="arrow-fill"></span>
                    <ArrowSvg direction="right" className="arrow-svg" />
                  </span>

                  <span className="arrow">
                    <span className="arrow-fill"></span>
                    <span style={{ transform: 'rotate(90deg)', display: 'inline-flex' }}>
                      <ArrowSvg direction="right" className="arrow-svg" />
                    </span>
                  </span>

                </div>

                {/* Bottom Card: Soft Touch Integration */}
                <div className="channels-right-left-bottom">
                  <div className="channel channel-3">
                    <h3 className="channel-title">
                      Soft Touch Integration
                    </h3>
                    <p className="channel-text">
                      Use our PayUp merchant app or static QR codes to get up and running in minutes. Cashless payments speed up the checkout process, reduce queues, and keep shoppers coming back for your service and convenience.
                    </p>
                  </div>
                </div>

              </div>

              {/* Right-Right Column: Two Down Arrows & Brand Vertical Pill */}
              <div ref={agRightRef} className="channels-col channels-right-right ag-right">
                
                <span className="arrow">
                  <span className="arrow-fill"></span>
                  <span style={{ transform: 'rotate(90deg)', display: 'inline-flex' }}>
                    <ArrowSvg direction="right" className="arrow-svg" />
                  </span>
                </span>

                <span className="arrow">
                  <span className="arrow-fill"></span>
                  <span style={{ transform: 'rotate(90deg)', display: 'inline-flex' }}>
                    <ArrowSvg direction="right" className="arrow-svg" />
                  </span>
                </span>

                <div className="word word-3">
                  <span className="word-text">
                    Brand
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
