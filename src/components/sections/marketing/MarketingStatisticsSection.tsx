'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const statsData = [
  {
    targetNum: 3.9,
    suffix: 'M',
    decimals: 1,
    text: 'Payments processed',
    // P-shaped letter geometric silhouette
    shapePath:
      'M244.814 273.632L304.437 392.041C312.07 407.2 300.991 425 283.894 425H214.022H106.989H22.9418C10.2933 425 0 414.779 0 402.219V318.761V212.478V106.239V22.781C0 10.1778 10.2496 0 22.9418 0H106.989H214.022H321.011H405.058C417.707 0 428 10.1778 428 22.781V106.239V212.478V281.861C428 298.795 410.03 309.796 394.809 302.216L275.563 243.012C255.893 233.267 234.957 254.056 244.814 273.632Z',
  },
  {
    targetNum: 24.7,
    suffix: 'M',
    decimals: 1,
    text: 'Lead referrals',
    // J-shaped letter geometric silhouette
    shapePath:
      'M183.229 151.368L123.607 32.9588C115.974 17.8004 127.052 0 144.106 0H213.978H321.011H405.058C417.707 0 428 10.1778 428 22.781V106.239V212.522V318.761V402.219C428 414.822 417.707 425 405.058 425H321.011H213.978H106.989H22.9417C10.2496 425 0 414.822 0 402.219V318.761V212.522V143.096C0 126.162 17.926 115.161 33.1914 122.74L152.437 181.945C172.151 191.733 193.086 170.944 183.229 151.368Z',
  },
  {
    targetNum: 10,
    suffix: 'K',
    decimals: 0,
    text: 'Points of presence',
    // N-shaped letter geometric silhouette
    shapePath:
      'M385.998 413.784L339.896 339.169C334.881 331.07 325.329 326.653 315.995 328.732C311.852 329.641 307.926 331.677 304.742 334.881L220.695 418.331C216.377 422.618 210.533 425 204.47 425H106.989H22.9417C10.2932 425 0 414.823 0 402.221V318.728V212.5V106.228V22.9086C0 15.7199 3.0967 9.78698 7.76357 5.75957C18.3622 -3.37789 34.8053 -0.433058 42.1327 11.4326L88.1034 85.7882C93.1192 93.8863 102.671 98.3034 112.005 96.2247C116.148 95.3153 120.074 93.28 123.258 90.0754L207.261 6.66902C211.579 2.38177 217.424 0 223.486 0H321.011H405.058C417.707 0 428 10.1768 428 22.7787V106.228V212.5V350.991V402.135C428 411.445 422.81 418.634 415.744 422.315C405.233 427.772 392.192 423.831 385.998 413.784Z',
  },
];

export default function MarketingStatisticsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsWrapperRef = useRef<HTMLDivElement>(null);
  const [displayedFigures, setDisplayedFigures] = useState<string[]>(['0.0M', '0.0M', '0K']);

  useEffect(() => {
    const section = sectionRef.current;
    const statsWrapper = statsWrapperRef.current;
    if (!section || !statsWrapper) return;

    const ctx = gsap.context(() => {
      const items = statsWrapper.querySelectorAll<HTMLElement>('.statistic');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: statsWrapper,
          start: 'top+=2% bottom',
        },
      });

      items.forEach((item, index) => {
        const shape = item.querySelector('.shape');
        const text = item.querySelector('.statistic-text');
        const data = statsData[index];

        // 1. Card scale in with smooth power4.inOut easing (from 8455.js)
        tl.fromTo(
          item,
          { scale: 0.88, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.4, ease: 'power4.inOut' },
          index / 5
        );

        // 2. Letter shape entrance
        if (shape) {
          tl.fromTo(
            shape,
            { scale: 0.94, transformOrigin: 'center center' },
            { scale: 1, duration: 1.4, ease: 'power4.inOut' },
            index / 5
          );
        }

        // 3. CountUp animation for number figures (duration: 1.6s)
        const counterObj = { val: 0 };
        tl.to(
          counterObj,
          {
            val: data.targetNum,
            duration: 1.6,
            ease: 'power3.out',
            onUpdate: () => {
              setDisplayedFigures((prev) => {
                const next = [...prev];
                next[index] = `${counterObj.val.toFixed(data.decimals)}${data.suffix}`;
                return next;
              });
            },
          },
          1 + index / 5
        );

        // 4. Text reveal
        if (text) {
          tl.fromTo(
            text,
            { y: 18, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
            1.2 + index / 5
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section section-light section-statistics">
      <div className="container">
        <div className="s-inner">
          <div className="statistics">
            <div ref={statsWrapperRef} className="statistics-inner">
              {statsData.map((stat, idx) => (
                <div
                  key={idx}
                  className="statistic"
                  style={{
                    cursor: 'default',
                    transition: 'transform 0.4s cubic-bezier(0.19, 1, 0.22, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  }}
                >
                  <svg
                    className="letter"
                    width="428"
                    height="425"
                    viewBox="0 0 428 425"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="shape"
                      d={stat.shapePath}
                      fill="black"
                      style={{ visibility: 'visible' }}
                    />
                  </svg>
                  <div className="statistic-content">
                    <span className="statistic-figure">
                      {displayedFigures[idx]}
                    </span>
                    <span className="statistic-text">
                      {stat.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
