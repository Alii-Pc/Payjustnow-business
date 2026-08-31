'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MarketingStoreDirectorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const stackInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const inner = stackInnerRef.current;
    if (!section || !inner) return;

    const ctx = gsap.context(() => {
      // 1. Right content entrance
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { x: 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
            },
          }
        );
      }

      // 2. Concentric stack scrubbed depth parallax (exact logic from 583.js)
      const images = Array.from(inner.querySelectorAll<HTMLImageElement>('img'));
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
    <section ref={sectionRef} className="section section-store-directory section-image-stack">
      <div className="container">
        <div className="s-inner">
          <div className="image-stack">
            <div ref={stackInnerRef} className="image-stack-inner">
              <div className="image-stack-item image-stack-item-0">
                <figure className="media-wrapper image-wrapper responsive">
                  <span className="media-inner image-inner">
                    <img
                      width={1254}
                      height={941}
                      className="media image will-change-transform"
                      alt=""
                      src="https://payjustnow.com/wp-content/uploads/2025/01/GettyImages-1328131499_480139_pkxf3b-6-1.jpg"
                    />
                  </span>
                </figure>
              </div>
              <div className="image-stack-item image-stack-item-1">
                <figure className="media-wrapper image-wrapper responsive">
                  <span className="media-inner image-inner">
                    <img
                      width={1254}
                      height={941}
                      className="media image will-change-transform"
                      alt=""
                      src="https://payjustnow.com/wp-content/uploads/2025/01/GettyImages-1328131499_480139_pkxf3b-6-1.jpg"
                    />
                  </span>
                </figure>
              </div>
              <div className="image-stack-item image-stack-item-2">
                <figure className="media-wrapper image-wrapper responsive">
                  <span className="media-inner image-inner">
                    <img
                      width={1254}
                      height={941}
                      className="media image will-change-transform"
                      alt=""
                      src="https://payjustnow.com/wp-content/uploads/2025/01/GettyImages-1328131499_480139_pkxf3b-6-1.jpg"
                    />
                  </span>
                </figure>
              </div>
            </div>
          </div>
          <div ref={contentRef} className="s-content">
            <h2 className="s-title">
              Feature in our store directory
            </h2>
            <p className="s-text">
              More brands are joining PayJustNow to increase accessibility and drive sales. Get listed in our directory and stay top-of-mind for PayJustNow shoppers.
            </p>
            <Link
              href="https://app.payjustnow.com/stores"
              className="btn btn-outline-light btn-md"
              target="_blank"
            >
              <span className="btn-fill"></span>
              <span className="btn-text">Visit Store Directory</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
