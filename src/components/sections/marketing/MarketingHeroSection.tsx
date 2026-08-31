'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const arrowSvg = (
  <svg className="arrow-svg" width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M13.3295 0.262359C13.3295 0.47764 13.6051 2.63482 13.7217 3.33187C14.1183 5.70262 14.764 7.74473 15.7179 9.64502C16.7415 11.6842 18.0346 13.3759 19.6726 14.8192C19.684 14.8292 15.2956 14.828 9.92082 14.8167L0.148437 14.796L0.158899 19.1502L0.169403 23.5043L9.9277 23.4886L19.6859 23.4729L19.3807 23.7517C17.55 25.424 16.0418 27.6484 15.0455 30.1457C14.2435 32.1561 13.771 34.1659 13.4539 36.9152C13.3854 37.5086 13.3295 38.0185 13.3295 38.0484C13.3295 38.0933 14.1141 38.1027 17.851 38.1027H22.3725L22.4669 37.1965C22.6831 35.1227 23.051 33.5484 23.6951 31.9395C24.4472 30.0608 25.4386 28.4977 26.7048 27.1946C28.9606 24.8729 31.8656 23.5833 35.4276 23.3223C35.7448 23.2991 36.4631 23.2799 37.0237 23.2799L38.0432 23.2797L38.0432 19.161L38.0432 15.0423L36.7148 15.0183C35.3785 14.9942 34.8459 14.9504 33.8624 14.7838C31.6805 14.4141 29.6116 13.5136 27.9428 12.2074C27.4652 11.8336 26.3659 10.7573 25.9888 10.2942C24.2994 8.22009 23.149 5.57077 22.6632 2.63531C22.6072 2.29712 22.5189 1.61264 22.4669 1.11421L22.3725 0.208008L17.851 0.208008C14.1141 0.208008 13.3295 0.21744 13.3295 0.262359ZM21.0076 1.85161C21.019 1.92458 21.0582 2.20483 21.0947 2.47434C21.6786 6.78356 23.6842 10.6423 26.6131 13.0916C29.1446 15.2087 32.2164 16.3378 35.9528 16.5246L36.5192 16.553L36.5192 19.1609L36.5192 21.7688L36.2411 21.7689C35.9006 21.769 34.9816 21.8342 34.4803 21.8937C29.7445 22.4562 25.9549 24.8507 23.5322 28.8113C22.3101 30.8092 21.4336 33.3352 21.0947 35.8364C21.0582 36.1059 21.019 36.3862 21.0076 36.4591L20.987 36.5919H18.0052H15.0234L15.0409 36.4591C15.2048 35.2145 15.3912 34.2329 15.6552 33.223C17.0579 27.8589 20.1334 24.0767 24.5742 22.2545C24.8843 22.1272 25.0529 22.0359 25.0623 21.9903C25.0759 21.9246 24.8353 21.9219 21.0464 21.9462C18.8296 21.9603 13.5684 21.9767 9.35467 21.9826L1.69342 21.9934L1.69342 19.1554L1.69342 16.3174L11.5995 16.3378C25.5804 16.3666 25.0479 16.3679 25.0479 16.3046C25.0479 16.2748 24.8376 16.1644 24.5742 16.0559C21.5774 14.8215 19.2324 12.7342 17.5275 9.78378C16.992 8.85716 16.3745 7.44717 16.0074 6.31282C15.6338 5.15866 15.2313 3.3692 15.1026 2.29059C15.0771 2.07722 15.0474 1.86133 15.0365 1.81078L15.0167 1.7189L18.0018 1.7189L20.987 1.7189L21.0076 1.85161Z" fill="black" />
  </svg>
);

export default function MarketingHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Text entrance animation
      const contentTl = gsap.timeline({ delay: 0.1 });
      contentTl
        .fromTo(
          contentRef.current?.querySelector('.s-label') || [],
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' }
        )
        .fromTo(
          contentRef.current?.querySelector('.s-title') || [],
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          contentRef.current?.querySelector('.s-text') || [],
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          contentRef.current?.querySelector('.s-buttons') || [],
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
          '-=0.5'
        );

      // 2. ArrowGrid exact animation engine from payjustnow.com (7175.js)
      if (gridRef.current) {
        const topEl = gridRef.current.querySelector<HTMLElement>('.ag-top');
        const rightEl = gridRef.current.querySelector<HTMLElement>('.ag-right');
        const mediaEl = gridRef.current.querySelector<HTMLElement>('.hg-media');

        const gridTl = gsap.timeline({ delay: 0.2 });

        if (topEl) {
          const topItems = topEl.querySelectorAll<HTMLElement>(':scope > *');
          gridTl.fromTo(
            topEl,
            { xPercent: 120 },
            { xPercent: 0, ease: 'power4.out', duration: 2.2 },
            0
          );
          topItems.forEach((item, index) => {
            if (index !== 0) {
              gridTl.fromTo(
                item,
                { x: `${20 * index}rem` },
                { x: 0, ease: 'power4.out', duration: 1.6 + index / 10 },
                0
              );
            }
          });
        }

        if (rightEl) {
          const rightItems = rightEl.querySelectorAll<HTMLElement>(':scope > *');
          gridTl.fromTo(
            rightEl,
            { yPercent: 120 },
            { yPercent: 0, ease: 'power4.out', duration: 2 },
            0.2
          );
          rightItems.forEach((item, index) => {
            if (index !== 0) {
              gridTl.fromTo(
                item,
                { y: `${20 * index}rem` },
                { y: 0, ease: 'power4.out', duration: 1 + index / 10 },
                0.6
              );
            }
          });
        }

        if (mediaEl) {
          gridTl.fromTo(
            mediaEl,
            { scale: 0.9, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out' },
            0.4
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section section-light section-hero">
      <div className="container">
        <div className="s-inner">
          <div ref={contentRef} className="s-content">
            <span className="s-label label-light">
              Marketing Solutions
            </span>
            <h1 className="s-title">
              Get noticed with PayJustNow
            </h1>
            <p className="s-text">
              Think of us as your cheerleader in business because it benefits us when you do well. We are proud of all our partner stores and love to spread the word about who is onboard. Let&apos;s chat when you&apos;re ready to increase your reach and boost sales.
            </p>
            <div className="s-buttons">
              <Link href="/business-application" className="btn btn-dark btn-md">
                <span className="btn-fill"></span>
                <span className="btn-text">Get in touch</span>
              </Link>
            </div>
          </div>
          <div ref={gridRef} className="hero-grid arrow-grid">
            <div className="hg-col hg-left">
              <div className="hg-left-top ag-top">
                <div className="word word-1">
                  <span className="word-text">
                    Your
                  </span>
                </div>
                <div className="word word-2">
                  <span className="word-text">
                    Money
                  </span>
                </div>
                <span className="arrow">
                  <span className="arrow-fill"></span>
                  {arrowSvg}
                </span>
                <span className="arrow">
                  <span className="arrow-fill"></span>
                  {arrowSvg}
                </span>
                <span className="arrow">
                  <span className="arrow-fill"></span>
                  {arrowSvg}
                </span>
              </div>
              <div className="hg-media">
                <figure className="media-wrapper image-wrapper responsive">
                  <span className="media-inner image-inner">
                    <img
                      width={1800}
                      height={1324}
                      className="media image"
                      alt="Get noticed with PayJustNow"
                      src="/images/bath3.jpg"
                    />
                  </span>
                </figure>
              </div>
            </div>
            <div className="hg-col hg-right ag-right">
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} className="arrow">
                  <span className="arrow-fill"></span>
                  {arrowSvg}
                </span>
              ))}
              <div className="word word-3">
                <span className="word-text">
                  Your Control
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
