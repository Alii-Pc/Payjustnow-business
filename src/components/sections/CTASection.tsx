'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cta = ctaRef.current;
    const bg = bgRef.current;
    const title = titleRef.current;
    const btn = btnRef.current;
    if (!section || !cta || !bg || !title || !btn) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
        },
      });

      // 1. Green background expands / slides from left to right
      tl.fromTo(
        bg,
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 1.2, ease: 'power4.inOut' }
      );

      // 2. Title reveals from left
      tl.fromTo(
        title,
        { autoAlpha: 0, x: -30 },
        { autoAlpha: 1, x: 0, duration: 0.9, ease: 'power3.out' },
        '>-0.5'
      );

      // 3. Button reveals with clip-path from left to right
      tl.fromTo(
        btn,
        { clipPath: 'inset(0% 100% 0% 0%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.1, ease: 'power4.inOut' },
        '>-0.3'
      );
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="section section-cta py-[4rem] lg:py-[6rem] bg-black overflow-hidden">
      <div className="container">
        <div
          ref={ctaRef}
          className="cta relative w-full h-auto min-h-[7.2rem] lg:h-[7.2rem] px-[2rem] sm:px-[3.2rem] lg:px-[4.8rem] py-[1.6rem] lg:py-0 rounded-[0.8rem] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[1.6rem] sm:gap-0 overflow-hidden"
        >
          {/* Neon lime background that slides from left to right */}
          <div
            ref={bgRef}
            className="cta-bg absolute inset-0 bg-[#BDF500] rounded-[0.8rem] pointer-events-none will-change-transform"
          />

          {/* Title */}
          <h5
            ref={titleRef}
            className="cta-title relative z-10 font-sans font-medium text-[1.6rem] sm:text-[1.8rem] lg:text-[2rem] uppercase tracking-tight text-black"
          >
            JOIN THE PAYJUSTNOW BUSINESS NETWORK
          </h5>

          {/* Action Button */}
          <Link
            ref={btnRef}
            href="/business-application"
            className="btn btn-dark btn-md relative z-10 flex-shrink-0 h-[4.4rem] lg:h-[4.8rem] px-[2.4rem] rounded-[0.4rem] bg-black text-white font-sans text-[1.4rem] font-medium inline-flex items-center justify-center overflow-hidden cursor-pointer group"
          >
            <span className="btn-fill absolute w-[120%] pb-[120%] rounded-full bg-[#BDF500] top-1/2 left-1/2 -translate-x-full -translate-y-1/4 scale-[0.2] transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] group-hover:scale-100 pointer-events-none" />
            <span className="btn-text relative z-10 text-white transition-colors duration-300 group-hover:text-white">
              Send request
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
