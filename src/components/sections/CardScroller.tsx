'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface CardScrollerItem {
  label: string;
  title: string;
  text: string;
  image: string;
  bgColor: string;
  textColor: string;
  isCoverImage?: boolean;
  maskImage?: string;
}

interface CardScrollerProps {
  title: string;
  cards: CardScrollerItem[];
  sectionId?: string;
  className?: string;
}

export default function CardScroller({
  title,
  cards,
  sectionId,
  className = '',
}: CardScrollerProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;
    if (!section || !trigger) return;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 1024;
      const tabWidthRem = 8; // 8rem per exposed card tab on desktop
      const tabWidthPx = 80;

      if (!isMobile) {
        // Desktop GSAP Pin & Scrubbed Slide Timeline matching PayJustNow Module 9328
        const totalCards = cards.length;
        const scrollDistance = window.innerHeight * (totalCards - 0.8);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: `+=${scrollDistance}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        // Set initial positions for all cards after the first one
        cardRefs.current.forEach((card, i) => {
          if (!card) return;
          if (i > 0) {
            gsap.set(card, {
              xPercent: 120,
              marginLeft: `${i * tabWidthRem}rem`,
            });
          } else {
            gsap.set(card, {
              xPercent: 0,
              marginLeft: '0rem',
            });
          }
        });

        // Animate each card sliding in one by one
        cards.forEach((_, i) => {
          if (i === 0) return;
          const card = cardRefs.current[i];
          if (!card) return;

          tl.to(
            card,
            {
              xPercent: 0,
              ease: 'none',
              duration: 1,
            },
            (i - 1) * 1.1
          );
        });
      }
    }, section);

    return () => {
      ctx.revert();
    };
  }, [cards]);

  return (
    <section
      ref={sectionRef}
      id={sectionId}
      className={`section section-light section-card-transactions py-[8rem] lg:py-[10rem] bg-[#f9f9fa] text-black overflow-hidden relative ${className}`}
    >
      <div className="container mb-[4rem] lg:mb-[6rem]">
        <div className="s-inner">
          <h2 className="font-display font-black text-[4.8rem] sm:text-[6.4rem] lg:text-[7.6rem] xl:text-[8.3rem] uppercase leading-[0.85] text-black tracking-tight">
            {title}
          </h2>
        </div>
      </div>

      {/* Card Scroller Container */}
      <div
        ref={triggerRef}
        className="w-full relative px-[2rem] sm:px-[3.2rem] lg:px-0 lg:pl-[calc((100vw-120rem)/2)] xl:pl-[calc((100vw-132rem)/2)] overflow-hidden lg:overflow-visible"
      >
        {/* Desktop Stacked Track */}
        <div className="hidden lg:block relative w-full h-[54.4rem]">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="card absolute top-0 left-0 w-[calc(100vw-20rem)] max-w-[110rem] h-[54.4rem] rounded-l-[3.6rem] overflow-hidden shadow-2xl flex items-stretch select-none border-l border-y border-black/10"
              style={{
                backgroundColor: card.bgColor,
                color: card.textColor,
                zIndex: index + 10,
              }}
            >
              {/* Left Tab Heading with -90deg rotated text */}
              <div className="w-[8rem] flex-shrink-0 relative border-r border-black/10 flex items-end justify-center pb-[3.2rem]">
                <span
                  className="font-sans text-[1.5rem] font-bold uppercase tracking-wider whitespace-nowrap"
                  style={{
                    transform: 'rotate(-90deg)',
                    transformOrigin: 'left bottom',
                    position: 'absolute',
                    bottom: '2.4rem',
                    left: '4.8rem',
                  }}
                >
                  {card.label}
                </span>
              </div>

              {/* Card Content (Image on Left, Text on Right) */}
              <div className="flex-1 flex items-center justify-start px-[4rem] gap-[4.8rem] h-full overflow-hidden">
                
                {/* Illustration / Device Image */}
                <div className="w-[42rem] h-[40rem] flex-shrink-0 flex items-center justify-center relative">
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={
                      card.maskImage
                        ? {
                            WebkitMaskImage: `url(${card.maskImage})`,
                            maskImage: `url(${card.maskImage})`,
                            WebkitMaskSize: 'contain',
                            maskSize: 'contain',
                            WebkitMaskRepeat: 'no-repeat',
                            maskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center',
                            maskPosition: 'center',
                          }
                        : undefined
                    }
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className={`max-h-full max-w-full ${
                        card.isCoverImage && !card.maskImage ? 'w-full h-full object-cover rounded-[2.4rem]' : 'w-full h-full object-cover'
                      }`}
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 max-w-[42rem] flex flex-col justify-center">
                  <h3 className="font-sans font-bold text-[3rem] xl:text-[3.4rem] leading-[1.12] mb-[2rem] tracking-tight">
                    {card.title}
                  </h3>
                  <p className="font-sans text-[1.6rem] xl:text-[1.7rem] leading-[1.55] opacity-85 font-normal">
                    {card.text}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet Responsive Fallback (Stacked List) */}
        <div className="lg:hidden flex flex-col gap-[2.4rem] w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full rounded-[3.2rem] p-[3.2rem] flex flex-col justify-between min-h-[48rem] shadow-lg border border-black/10"
              style={{
                backgroundColor: card.bgColor,
                color: card.textColor,
              }}
            >
              <span className="text-[1.3rem] font-sans font-bold uppercase tracking-wider opacity-75 mb-[2rem] block">
                {card.label}
              </span>

              <div 
                className="w-full h-[24rem] flex items-center justify-center my-[1.6rem] overflow-hidden rounded-[2rem]"
                style={
                  card.maskImage
                    ? {
                        WebkitMaskImage: `url(${card.maskImage})`,
                        maskImage: `url(${card.maskImage})`,
                        WebkitMaskSize: 'contain',
                        maskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center',
                        maskPosition: 'center',
                      }
                    : undefined
                }
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-auto">
                <h3 className="font-sans font-bold text-[2.4rem] leading-[1.15] mb-[1.2rem] tracking-tight">
                  {card.title}
                </h3>
                <p className="font-sans text-[1.45rem] leading-[1.5] opacity-85 font-normal">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
