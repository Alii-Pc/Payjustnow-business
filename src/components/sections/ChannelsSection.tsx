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
          { scale: 0.9, autoAlpha: 0 },
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
    <section ref={sectionRef} className="section section-channels py-[8rem] lg:py-[12rem] bg-black text-white overflow-hidden">
      <div className="container">
        <div className="s-inner">
          
          {/* Header row */}
          <div className="s-content flex flex-col lg:flex-row items-start lg:items-end justify-between gap-[2.4rem] lg:gap-[4.8rem] mb-[4rem] lg:mb-[6.4rem]">
            <div className="s-title-wrapper w-full lg:max-w-[55%]">
              <span className="label s-label mb-[1.6rem] inline-flex items-center text-[1.2rem] font-mackinac font-normal px-[1.2rem] h-[2.8rem] rounded-full bg-[#BDF500] text-black">
                Omni-channel Solutions
              </span>
              <h2 className="s-title font-display font-black text-[4.8rem] sm:text-[6.4rem] lg:text-[7.6rem] xl:text-[8.3rem] leading-[0.82] uppercase text-white tracking-tight">
                Seamless checkout<br />wherever they shop
              </h2>
            </div>
            <p className="s-text font-sans text-[1.5rem] sm:text-[1.6rem] lg:text-[1.8rem] text-white/85 max-w-[54rem] leading-[1.5] font-normal pb-[0.8rem]">
              Offer shoppers the convenience of fast checkouts online and in-store with the PayJustNow app.
            </p>
          </div>

          {/* Grid Layout matching screenshot */}
          <div ref={channelsRef} className="channels arrow-grid flex flex-col lg:flex-row items-stretch gap-0 w-full">
            
            {/* Left Column: ECOMMERCE & POS INTEGRATION */}
            <div className="channels-col channels-left flex flex-col flex-1 w-full lg:w-1/2">
              
              {/* Channel 1: ECOMMERCE */}
              <div className="channel channel-1 flex flex-col justify-center p-[3.2rem] sm:p-[4.4rem] lg:p-[5.6rem] border border-white rounded-[3.6rem] sm:rounded-[4.8rem] lg:rounded-[6.4rem] bg-black text-white min-h-[26rem] lg:min-h-[32rem]">
                <h3 className="channel-title font-sans text-[2.6rem] sm:text-[3rem] lg:text-[3.4rem] font-medium uppercase text-white tracking-tight mb-[1.6rem] lg:mb-[2rem] leading-[1.1]">
                  ECOMMERCE
                </h3>
                <p className="channel-text font-sans text-[1.4rem] sm:text-[1.5rem] lg:text-[1.6rem] text-white/90 leading-[1.55] max-w-[46rem] font-normal">
                  Our prebuilt plugins are compatible with Shopify, Magento, WooCommerce, Salesforce Shopstar, PrestaShop and Storefront. Plus, you can tailor our integration to suit your business needs.
                </p>
              </div>

              {/* Channel 2: POS INTEGRATION */}
              <div className="channel channel-2 flex flex-col justify-center p-[3.2rem] sm:p-[4.4rem] lg:p-[5.6rem] border border-white rounded-[3.6rem] sm:rounded-[4.8rem] lg:rounded-[6.4rem] bg-black text-white -mt-[1px] min-h-[26rem] lg:min-h-[32rem]">
                <h3 className="channel-title font-sans text-[2.6rem] sm:text-[3rem] lg:text-[3.4rem] font-medium uppercase text-white tracking-tight mb-[1.6rem] lg:mb-[2rem] leading-[1.1]">
                  POS INTEGRATION
                </h3>
                <p className="channel-text font-sans text-[1.4rem] sm:text-[1.5rem] lg:text-[1.6rem] text-white/90 leading-[1.55] max-w-[46rem] font-normal">
                  Seamless POS integrators through ACS, Cow Hills, BCX, Posworx or Yoyo. We are constantly expanding our list of POS partners to keep your payment process smooth and convenient.
                </p>
              </div>

            </div>

            {/* Right Area */}
            <div className="channels-right flex flex-1 w-full lg:w-1/2 lg:-ml-[1px] mt-[2.4rem] lg:mt-0 items-stretch">
              
              {/* Right-Left: Top Arrow Row & SOFT TOUCH INTEGRATION */}
              <div className="channels-col channels-right-left flex flex-col flex-1 min-w-0">
                
                {/* Top Row: Promote, Your, Arrow Right, Arrow Down */}
                <div ref={agTopRef} className="channels-right-left-top ag-top flex items-center w-full">
                  
                  {/* Word 1: Promote */}
                  <div className="word word-1 flex-1 h-[6.4rem] sm:h-[7.6rem] lg:h-[9rem] px-[2rem] sm:px-[3.2rem] lg:px-[4.8rem] rounded-l-[9rem] rounded-r-0 border border-white bg-black text-white flex items-center justify-center font-sans text-[1.8rem] sm:text-[2rem] lg:text-[2.3rem] font-medium">
                    <span className="word-text whitespace-nowrap text-white">
                      Promote
                    </span>
                  </div>

                  {/* Word 2: Your */}
                  <div className="word word-2 flex-1 h-[6.4rem] sm:h-[7.6rem] lg:h-[9rem] px-[2rem] sm:px-[3.2rem] lg:px-[4.8rem] rounded-[9rem] border border-white bg-black text-white flex items-center justify-center font-sans text-[1.8rem] sm:text-[2rem] lg:text-[2.3rem] font-medium -ml-[1px]">
                    <span className="word-text whitespace-nowrap text-white">
                      Your
                    </span>
                  </div>

                  {/* Arrow 1: Right */}
                  <div className="arrow w-[6.4rem] h-[6.4rem] sm:w-[7.6rem] sm:h-[7.6rem] lg:w-[9rem] lg:h-[9rem] rounded-full border border-white bg-black flex-shrink-0 flex items-center justify-center -ml-[1px]">
                    <ArrowSvg direction="right" className="w-[3rem] h-[3rem] sm:w-[3.4rem] sm:h-[3.4rem] text-white" />
                  </div>

                  {/* Arrow 2: Down */}
                  <div className="arrow w-[6.4rem] h-[6.4rem] sm:w-[7.6rem] sm:h-[7.6rem] lg:w-[9rem] lg:h-[9rem] rounded-full border border-white bg-black flex-shrink-0 flex items-center justify-center -ml-[1px]">
                    <span className="rotate-90 flex items-center justify-center">
                      <ArrowSvg direction="right" className="w-[3rem] h-[3rem] sm:w-[3.4rem] sm:h-[3.4rem] text-white" />
                    </span>
                  </div>

                </div>

                {/* Bottom Card: SOFT TOUCH INTEGRATION */}
                <div className="channels-right-left-bottom flex flex-col flex-grow -mt-[1px]">
                  <div className="channel channel-3 flex flex-col justify-center flex-grow p-[3.2rem] sm:p-[4.4rem] lg:p-[5.6rem] border border-white rounded-[3.6rem] sm:rounded-[4.8rem] lg:rounded-[6.4rem] bg-black text-white min-h-[30rem] lg:min-h-[55rem]">
                    <h3 className="channel-title font-sans text-[2.6rem] sm:text-[3rem] lg:text-[3.4rem] font-medium uppercase text-white tracking-tight mb-[1.6rem] lg:mb-[2rem] leading-[1.1]">
                      SOFT TOUCH INTEGRATION
                    </h3>
                    <p className="channel-text font-sans text-[1.4rem] sm:text-[1.5rem] lg:text-[1.6rem] text-white/90 leading-[1.55] max-w-[46rem] font-normal">
                      Use our PayUp merchant app or static QR codes to get up and running in minutes. Cashless payments speed up the checkout process, reduce queues, and keep shoppers coming back for your service and convenience.
                    </p>
                  </div>
                </div>

              </div>

              {/* Right-Right Column: Two Down Arrows & Brand Vertical Pill */}
              <div ref={agRightRef} className="channels-col channels-right-right ag-right flex flex-col -ml-[1px] w-[6.4rem] sm:w-[7.6rem] lg:w-[9rem] flex-shrink-0 items-center">
                
                {/* Arrow Down 1 */}
                <div className="arrow w-[6.4rem] h-[6.4rem] sm:w-[7.6rem] sm:h-[7.6rem] lg:w-[9rem] lg:h-[9rem] rounded-full border border-white bg-black flex-shrink-0 flex items-center justify-center">
                  <span className="rotate-90 flex items-center justify-center">
                    <ArrowSvg direction="right" className="w-[3rem] h-[3rem] sm:w-[3.4rem] sm:h-[3.4rem] text-white" />
                  </span>
                </div>

                {/* Arrow Down 2 */}
                <div className="arrow w-[6.4rem] h-[6.4rem] sm:w-[7.6rem] sm:h-[7.6rem] lg:w-[9rem] lg:h-[9rem] rounded-full border border-white bg-black flex-shrink-0 flex items-center justify-center -mt-[1px]">
                  <span className="rotate-90 flex items-center justify-center">
                    <ArrowSvg direction="right" className="w-[3rem] h-[3rem] sm:w-[3.4rem] sm:h-[3.4rem] text-white" />
                  </span>
                </div>

                {/* Word 3: Brand (Vertical Pill) */}
                <div className="word word-3 w-[6.4rem] sm:w-[7.6rem] lg:w-[9rem] flex-grow rounded-b-[9rem] rounded-t-0 border border-white bg-black text-white flex items-center justify-center font-sans text-[1.8rem] sm:text-[2rem] lg:text-[2.3rem] font-medium -mt-[1px] py-[3.2rem] lg:py-[5.6rem]">
                  <span className="word-text rotate-90 whitespace-nowrap text-white">
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
