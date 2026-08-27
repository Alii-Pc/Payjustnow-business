'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface StatisticItem {
  title: string;
  iconUrl: string;
  iconWidth: number;
  iconHeight: number;
  text: string;
  figure: string;
}

const statisticsData: StatisticItem[] = [
  {
    title: 'Our Google Rating',
    iconUrl: 'https://payjustnow.com/wp-content/uploads/2023/11/Vector-3.svg',
    iconWidth: 34,
    iconHeight: 34,
    text: "We're committed to providing the best interest-free payment solution but don't just take our word for it. Read over 5378 reviews written by shoppers.",
    figure: '4.7/5',
  },
  {
    title: 'Transactions every 9 seconds',
    iconUrl: 'https://payjustnow.com/wp-content/uploads/2023/11/Vector-19.svg',
    iconWidth: 34,
    iconHeight: 28,
    text: 'Our customers collectively have over 7.8 billion spend-facility available. Using our platform for buy now, pay later and retail credit payments puts you on their radar.',
    figure: '9 secs',
  },
  {
    title: '11270 daily transactions',
    iconUrl: 'https://payjustnow.com/wp-content/uploads/2023/11/Vector-5.svg',
    iconWidth: 25,
    iconHeight: 28,
    text: 'Think of the PayJustNow community as your potential customers. As our database grows, so does your reach and income opportunities.',
    figure: '11k+',
  },
  {
    title: '10 000+ points of presence',
    iconUrl: 'https://payjustnow.com/wp-content/uploads/2023/11/Vector-7-1.svg',
    iconWidth: 33,
    iconHeight: 33,
    text: 'When customers PayJustNow, they gain access to items and services without pinching their pockets. Start offering this responsible alternative to credit now.',
    figure: '10k+',
  },
];

export default function StatisticsScroller() {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!section || !wrapper || !inner) return;

    const cards = Array.from(wrapper.querySelectorAll<HTMLElement>('.statistic'));
    const isMobile = window.innerWidth < 1100;
    const offset = 4; // 4rem offset matching original PayJustNow engine
    const numCards = cards.length;

    const ctx = gsap.context(() => {
      // Pinned viewport scroll trigger
      ScrollTrigger.create({
        trigger: wrapper,
        start: 'center center',
        end: () => `+=${window.innerHeight * (numCards - (isMobile ? 1.5 : 1.65))}`,
        pin: wrapper,
        pinType: 'fixed',
        anticipatePin: 1,
      });

      // Scrubbed timeline controlling the deck stack animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top bottom-=5%',
          end: () => `+=${window.innerHeight * (numCards - 1)}`,
          scrub: 1,
        },
      });

      cards.forEach((card, i) => {
        const cardInner = card.querySelector<HTMLElement>('.statistic-inner');
        const title = card.querySelector<HTMLElement>('.statistic-title');
        const icon = card.querySelector<HTMLElement>('.statistic-icon');

        if (!cardInner) return;

        gsap.set(icon, { transformOrigin: 'top top' });
        gsap.set(card, { transformOrigin: 'top' });
        gsap.set(cardInner, { scale: 1.2, transformOrigin: 'top' });

        tl.to(cardInner, { scale: 1 }, i);

        if (i > 0) {
          gsap.set(card, { marginTop: `${offset * i}rem` });
          gsap.set(cardInner, { y: window.innerHeight });

          // Card slides in from bottom
          tl.to(cardInner, { y: 0, ease: 'none', duration: 1, rotate: '0.0001deg' }, i);

          // All previous cards stay aligned
          cards.forEach((prevCard, n) => {
            if (n < i) {
              const prevInner = prevCard.querySelector<HTMLElement>('.statistic-inner');
              if (prevInner) {
                tl.to(prevInner, { y: 0, ease: 'none', duration: 1, rotate: '0.0001deg' }, i);
              }
            }
          });

          // Inner container translates slightly up for stacking effect
          tl.to(
            inner,
            {
              y: `-=${offset / Math.max(1, numCards - 2)}rem`,
              ease: 'none',
              duration: 1,
              rotate: '0.0001deg',
            },
            i
          );

          // Previous card title shrinks to tab header and moves up
          const prevCard = cards[i - 1];
          const prevTitle = prevCard.querySelector<HTMLElement>('.statistic-title');
          const prevIcon = prevCard.querySelector<HTMLElement>('.statistic-icon');

          if (prevTitle) {
            tl.to(
              prevTitle,
              {
                y: isMobile ? '-6.8rem' : '-4.8rem',
                fontSize: isMobile ? '1.6rem' : '1.8rem',
                ease: 'none',
                duration: 0.5,
                rotate: '0.0001deg',
              },
              i + 0.5
            );
          }

          if (prevIcon) {
            tl.to(
              prevIcon,
              {
                scale: 0.5,
                autoAlpha: 0,
                ease: 'none',
                duration: isMobile ? 0.3 : 0.5,
              },
              i + 0.5
            );
          }
        } else {
          gsap.set([title, icon], { autoAlpha: 0 });
          tl.to([title, icon], { autoAlpha: 1, ease: 'none' }, i + 0.2);
        }
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="section section-statistics-scroller">
      <div className="s-inner">
        <div ref={wrapperRef} className="statistics-scroller">
          <div ref={innerRef} className="statistics-scroller-inner">
            {statisticsData.map((item, index) => (
              <div key={index} className="statistic" data-index={index}>
                <div className="statistic-inner">
                  <div className="statistic-top">
                    <h2 className="statistic-title">
                      {item.title}
                    </h2>
                    <div className="statistic-icon">
                      <figure className="media-wrapper image-wrapper">
                        <span className="media-inner image-inner">
                          <img
                            width={item.iconWidth}
                            height={item.iconHeight}
                            className="media image lazyload"
                            alt=""
                            data-lazyload="1"
                            decoding="async"
                            src={item.iconUrl}
                          />
                        </span>
                      </figure>
                    </div>
                  </div>
                  <div className="statistic-bottom">
                    <p className="statistic-text">
                      {item.text}
                    </p>
                    <span className="statistic-figure">
                      {item.figure}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
