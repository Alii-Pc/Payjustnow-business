'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function ArrowSvg() {
  return (
    <span className="arrow">
      <span className="arrow-fill"></span>
      <svg className="arrow-svg" width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.3295 0.262359C13.3295 0.47764 13.6051 2.63482 13.7217 3.33187C14.1183 5.70262 14.764 7.74473 15.7179 9.64502C16.7415 11.6842 18.0346 13.3759 19.6726 14.8192C19.684 14.8292 15.2956 14.828 9.92082 14.8167L0.148437 14.796L0.158899 19.1502L0.169403 23.5043L9.9277 23.4886L19.6859 23.4729L19.3807 23.7517C17.55 25.424 16.0418 27.6484 15.0455 30.1457C14.2435 32.1561 13.771 34.1659 13.4539 36.9152C13.3854 37.5086 13.3295 38.0185 13.3295 38.0484C13.3295 38.0933 14.1141 38.1027 17.851 38.1027H22.3725L22.4669 37.1965C22.6831 35.1227 23.051 33.5484 23.6951 31.9395C24.4472 30.0608 25.4386 28.4977 26.7048 27.1946C28.9606 24.8729 31.8656 23.5833 35.4276 23.3223C35.7448 23.2991 36.4631 23.2799 37.0237 23.2799L38.0432 23.2797L38.0432 19.161L38.0432 15.0423L36.7148 15.0183C35.3785 14.9942 34.8459 14.9504 33.8624 14.7838C31.6805 14.4141 29.6116 13.5136 27.9428 12.2074C27.4652 11.8336 26.3659 10.7573 25.9888 10.2942C24.2994 8.22009 23.149 5.57077 22.6632 2.63531C22.6072 2.29712 22.5189 1.61264 22.4669 1.11421L22.3725 0.208008L17.851 0.208008C14.1141 0.208008 13.3295 0.21744 13.3295 0.262359ZM21.0076 1.85161C21.019 1.92458 21.0582 2.20483 21.0947 2.47434C21.6786 6.78356 23.6842 10.6423 26.6131 13.0916C29.1446 15.2087 32.2164 16.3378 35.9528 16.5246L36.5192 16.553L36.5192 19.1609L36.5192 21.7688L36.2411 21.7689C35.9006 21.769 34.9816 21.8342 34.4803 21.8937C29.7445 22.4562 25.9549 24.8507 23.5322 28.8113C22.3101 30.8092 21.4336 33.3352 21.0947 35.8364C21.0582 36.1059 21.019 36.3862 21.0076 36.4591L20.987 36.5919H18.0052H15.0234L15.0409 36.4591C15.2048 35.2145 15.3912 34.2329 15.6552 33.223C17.0579 27.8589 20.1334 24.0767 24.5742 22.2545C24.8843 22.1272 25.0529 22.0359 25.0623 21.9903C25.0759 21.9246 24.8353 21.9219 21.0464 21.9462C18.8296 21.9603 13.5684 21.9767 9.35467 21.9826L1.69342 21.9934L1.69342 19.1554L1.69342 16.3174L11.5995 16.3378C25.5804 16.3666 25.0479 16.3679 25.0479 16.3046C25.0479 16.2748 24.8376 16.1644 24.5742 16.0559C21.5774 14.8215 19.2324 12.7342 17.5275 9.78378C16.992 8.85716 16.3745 7.44717 16.0074 6.31282C15.6338 5.15866 15.2313 3.3692 15.1026 2.29059C15.0771 2.07722 15.0474 1.86133 15.0365 1.81078L15.0167 1.7189L18.0018 1.7189L20.987 1.7189L21.0076 1.85161Z"
          fill="white"
        />
      </svg>
    </span>
  );
}

export default function PayUpCTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;
    if (!section || !grid) return;

    const ctx = gsap.context(() => {
      const topWords = grid.querySelectorAll('.ag-top .word, .ag-top .arrow');
      const bottomContent = grid.querySelector('.cg-left-bottom');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: grid,
          start: 'top 80%',
        },
      });

      tl.fromTo(
        topWords,
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
        }
      ).fromTo(
        bottomContent,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.3'
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section section-light section-padding-top section-cta">
      <div className="container">
        <div className="s-inner">
          <div ref={gridRef} className="cta-grid arrow-grid">
            <div className="cg-left">
              <div className="cg-left-top ag-top">
                <div className="word word-1">
                  <span className="word-text">
                    Make Your
                  </span>
                </div>
                <div className="word word-2">
                  <span className="word-text">
                    Money
                  </span>
                </div>
                <ArrowSvg />
                <ArrowSvg />
                <ArrowSvg />
                <ArrowSvg />
                <div className="word word-3-desktop desktop-only">
                  <span className="word-text">
                    Go Further
                  </span>
                </div>
              </div>
              <div className="cg-left-bottom">
                <div className="cg-content">
                  <div className="cg-content-left">
                    <h5 className="cg-title">
                      Use PayJustNow in person
                    </h5>
                    <p className="cg-text">
                      Chat to our business development team about activating PayJustNow for in-store payments.
                    </p>
                  </div>
                  <div className="cg-content-right">
                    <Link href="/business-application" className="btn btn-primary btn-md">
                      <span className="btn-fill"></span>
                      <span className="btn-text">Request a Demo</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="cg-right mobile-only">
              <ArrowSvg />
              <ArrowSvg />
              <ArrowSvg />
              <ArrowSvg />
              <div className="word word-3">
                <span className="word-text">
                  Go Further
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
