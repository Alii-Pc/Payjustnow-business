'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MarketingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const inner = innerRef.current;
    if (!section || !inner) return;

    const ctx = gsap.context(() => {
      const images = Array.from(inner.querySelectorAll<HTMLImageElement>('img'));

      // Scrubbed zoom in animation on scroll matching PayJustNow engine
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      tl.fromTo(
        inner,
        { yPercent: 6 },
        { yPercent: -6, ease: 'none' },
        0
      );

      images.forEach((img, index) => {
        const offset = (3 * images.length) / (index + 1);
        tl.fromTo(
          img,
          { scale: 1, yPercent: -offset },
          { scale: 1.18, yPercent: 0, ease: 'none' },
          0
        );
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section section-marketing section-image-stack py-[8rem] lg:py-[12rem] bg-black text-white overflow-hidden"
    >
      <div className="container">
        <div className="s-inner flex flex-col lg:flex-row items-center justify-between gap-[4.8rem] lg:gap-[8rem]">
          
          {/* Left: Image Stack with 3 Concentric Border Layers */}
          <div ref={stackRef} className="image-stack w-full lg:w-[58%] max-w-[65.2rem]">
            <div
              ref={innerRef}
              className="image-stack-inner relative w-full h-0 pb-[75%] rounded-[3.2rem] lg:rounded-[4.8rem] overflow-hidden"
            >
              
              {/* Layer 0: Outermost Box */}
              <div className="image-stack-item image-stack-item-0 absolute inset-0 flex items-center justify-center">
                <div className="image-wrapper w-full h-full rounded-[3.2rem] sm:rounded-[4rem] lg:rounded-[4.8rem] border-[1.5px] border-black overflow-hidden relative bg-neutral-900">
                  <div className="image-inner absolute inset-0 w-full h-full">
                    <img
                      width="1800"
                      height="1324"
                      className="w-full h-full object-cover transform-gpu will-change-transform"
                      alt="Marketing Solutions"
                      src="/images/bath3.jpg"
                    />
                  </div>
                </div>
              </div>

              {/* Layer 1: Middle Concentric Box */}
              <div className="image-stack-item image-stack-item-1 absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="image-wrapper w-[91%] h-[89%] rounded-[2.4rem] sm:rounded-[3rem] lg:rounded-[3.6rem] border-[1.5px] border-black overflow-hidden relative">
                  <div className="image-inner absolute inset-0 w-full h-full">
                    <img
                      width="1800"
                      height="1324"
                      className="w-full h-full object-cover transform-gpu will-change-transform"
                      alt="Marketing Solutions"
                      src="/images/bath3.jpg"
                    />
                  </div>
                </div>
              </div>

              {/* Layer 2: Innermost Concentric Box */}
              <div className="image-stack-item image-stack-item-2 absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="image-wrapper w-[82%] h-[78%] rounded-[1.6rem] sm:rounded-[2.2rem] lg:rounded-[2.6rem] border-[1.5px] border-black overflow-hidden relative">
                  <div className="image-inner absolute inset-0 w-full h-full">
                    <img
                      width="1800"
                      height="1324"
                      className="w-full h-full object-cover transform-gpu will-change-transform"
                      alt="Marketing Solutions"
                      src="/images/bath3.jpg"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Content */}
          <div className="s-content flex flex-col items-start w-full lg:w-[42%] max-w-[48rem]">
            <span className="s-label inline-flex items-center h-[2.8rem] px-[1.2rem] rounded-full bg-[#273500] text-[#BDF500] font-sans text-[1.2rem] font-medium tracking-wide mb-[1.6rem]">
              Grow your business
            </span>
            <h2 className="s-title font-display font-black text-[4.8rem] sm:text-[6.4rem] lg:text-[7.6rem] xl:text-[8.3rem] leading-[0.82] uppercase text-white tracking-tight mb-[2rem] lg:mb-[2.4rem]">
              MARKETING<br />SOLUTIONS
            </h2>
            <p className="s-text font-sans text-[1.5rem] sm:text-[1.6rem] lg:text-[1.8rem] text-white/85 leading-[1.5] font-normal mb-[2.8rem] lg:mb-[3.6rem]">
              Get your business noticed by our community of 2.6 million shoppers and turn interested browsers into new customers.
            </p>
            <Link
              href="/marketing-solutions"
              className="btn btn-primary btn-md relative h-[4.4rem] lg:h-[4.8rem] px-[2.8rem] rounded-[0.4rem] bg-[#BDF500] text-black font-sans text-[1.4rem] font-semibold inline-flex items-center justify-center overflow-hidden cursor-pointer group"
            >
              <span className="btn-fill absolute w-[120%] pb-[120%] rounded-full bg-white top-1/2 left-1/2 -translate-x-full -translate-y-1/4 scale-[0.2] transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] group-hover:scale-100 pointer-events-none" />
              <span className="btn-text relative z-10 text-black transition-colors duration-300">
                Learn More
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
