'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SolutionsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cardsWrapper = cardsRef.current;
    if (!section || !cardsWrapper) return;

    const ctx = gsap.context(() => {
      const cards = Array.from(cardsWrapper.querySelectorAll<HTMLElement>('.solution'));

      // Scrubbed upward parallax motion on cards as user scrolls
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
          { yPercent: 40 + 20 * index },
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
    <section
      ref={sectionRef}
      className="section section-solutions relative py-[8rem] lg:py-[12rem] bg-black text-white overflow-hidden"
    >
      <div className="container">
        <div className="s-inner flex flex-col gap-[4rem] lg:gap-[6.4rem]">
          
          {/* Sticky Header Row */}
          <div
            ref={headerRef}
            className="s-content sticky top-[8rem] z-10 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-[2.4rem] lg:gap-[4.8rem] bg-black/90 backdrop-blur-sm py-[1.6rem]"
          >
            <div className="s-title-wrapper w-full lg:max-w-[55%]">
              <h2 className="s-title font-display font-black text-[4.8rem] sm:text-[6.4rem] lg:text-[7.6rem] xl:text-[8.3rem] leading-[0.82] uppercase text-white tracking-tight">
                MORE WAYS TO GET PAID
              </h2>
            </div>
            <p className="s-text font-sans text-[1.5rem] sm:text-[1.6rem] lg:text-[1.8rem] text-white/85 max-w-[54rem] leading-[1.5] font-normal pb-[0.8rem]">
              Expect more orders as shoppers pay later while you get paid upfront. We created these straight and split payment services to help South Africans boost buying power.
            </p>
          </div>

          {/* Cards Grid that moves upward on scroll */}
          <div
            ref={cardsRef}
            className="solutions grid grid-cols-1 lg:grid-cols-2 gap-[2.4rem] lg:gap-[3.2rem] w-full"
          >
            {/* Card 1: Retail Credit / Pay in 12 */}
            <div className="solution flex flex-col sm:flex-row items-stretch p-[2rem] sm:p-[2.4rem] lg:p-[2.8rem] gap-[2.4rem] border border-white rounded-[2.4rem] sm:rounded-[3.2rem] bg-black text-white min-h-[32rem]">
              <div className="solution-image flex-shrink-0 w-full sm:w-[24rem] lg:w-[26rem] xl:w-[28rem] h-[24rem] sm:h-auto rounded-[1.6rem] sm:rounded-[2.4rem] overflow-hidden bg-neutral-900">
                <img
                  width="1400"
                  height="1274"
                  className="w-full h-full object-cover"
                  alt="Retail Credit"
                  src="/images/pink3.jpg"
                />
              </div>
              <div className="solution-content flex flex-col justify-between flex-1 py-[0.8rem]">
                <div>
                  <span className="solution-label inline-flex items-center h-[2.8rem] px-[1.2rem] rounded-full bg-[#273500] text-[#BDF500] font-sans text-[1.2rem] font-medium tracking-wide mb-[1.2rem]">
                    Retail Credit
                  </span>
                  <h3 className="solution-title font-mackinac text-[3.2rem] sm:text-[3.6rem] lg:text-[4rem] font-normal text-white leading-[1.1] mb-[1.2rem]">
                    Pay in 12
                  </h3>
                  <p className="solution-text font-sans text-[1.4rem] sm:text-[1.5rem] text-white/80 leading-[1.5] mb-[2.4rem] font-normal">
                    For some shoppers, even paying in 3 places your product out of reach. That&apos;s why we&apos;ve introduced an extra flexible retail credit option, Pay in 12. It makes bigger-ticket items more attainable with smaller payments spread over 12 months.
                  </p>
                </div>
                <div>
                  <Link
                    href="/retail-credit"
                    className="btn btn-light btn-md relative h-[4.4rem] lg:h-[4.8rem] px-[2.4rem] rounded-[0.4rem] bg-white text-black font-sans text-[1.4rem] font-medium inline-flex items-center justify-center overflow-hidden cursor-pointer group"
                  >
                    <span className="btn-fill absolute w-[120%] pb-[120%] rounded-full bg-[#BDF500] top-1/2 left-1/2 -translate-x-full -translate-y-1/4 scale-[0.2] transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] group-hover:scale-100 pointer-events-none" />
                    <span className="btn-text relative z-10 text-black transition-colors duration-300 group-hover:text-black">
                      Learn more
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: BNPL / Pay in 3 */}
            <div className="solution flex flex-col sm:flex-row items-stretch p-[2rem] sm:p-[2.4rem] lg:p-[2.8rem] gap-[2.4rem] border border-white rounded-[2.4rem] sm:rounded-[3.2rem] bg-black text-white min-h-[32rem]">
              <div className="solution-image flex-shrink-0 w-full sm:w-[24rem] lg:w-[26rem] xl:w-[28rem] h-[24rem] sm:h-auto rounded-[1.6rem] sm:rounded-[2.4rem] overflow-hidden bg-neutral-900">
                <img
                  width="1400"
                  height="1264"
                  className="w-full h-full object-cover"
                  alt="BNPL"
                  src="/images/three.jpg"
                />
              </div>
              <div className="solution-content flex flex-col justify-between flex-1 py-[0.8rem]">
                <div>
                  <span className="solution-label inline-flex items-center h-[2.8rem] px-[1.2rem] rounded-full bg-[#273500] text-[#BDF500] font-sans text-[1.2rem] font-medium tracking-wide mb-[1.2rem]">
                    BNPL
                  </span>
                  <h3 className="solution-title font-mackinac text-[3.2rem] sm:text-[3.6rem] lg:text-[4rem] font-normal text-white leading-[1.1] mb-[1.2rem]">
                    Pay in 3
                  </h3>
                  <p className="solution-text font-sans text-[1.4rem] sm:text-[1.5rem] text-white/80 leading-[1.5] mb-[2.4rem] font-normal">
                    Convert more browsers into buyers by making your products affordable; shoppers who PayJustNow can split their purchases into 3 interest-free payments and ease the pressure on their budget. Think bigger basket sizes and less abandoned carts.
                  </p>
                </div>
                <div>
                  <Link
                    href="/bnpl"
                    className="btn btn-light btn-md relative h-[4.4rem] lg:h-[4.8rem] px-[2.4rem] rounded-[0.4rem] bg-white text-black font-sans text-[1.4rem] font-medium inline-flex items-center justify-center overflow-hidden cursor-pointer group"
                  >
                    <span className="btn-fill absolute w-[120%] pb-[120%] rounded-full bg-[#BDF500] top-1/2 left-1/2 -translate-x-full -translate-y-1/4 scale-[0.2] transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] group-hover:scale-100 pointer-events-none" />
                    <span className="btn-text relative z-10 text-black transition-colors duration-300 group-hover:text-black">
                      Learn more
                    </span>
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
