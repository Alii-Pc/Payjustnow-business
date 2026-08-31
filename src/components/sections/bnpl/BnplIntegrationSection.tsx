'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BnplIntegrationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const stackInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const inner = stackInnerRef.current;
    if (!section || !inner) return;

    const ctx = gsap.context(() => {
      // 1. Left content entrance
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { x: -30, opacity: 0 },
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

      // 2. Concentric stack scrubbed zoom & depth parallax (matching PayJustNow animation engine)
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
    <section ref={sectionRef} className="section section-integration section-image-stack">
      <div className="container">
        <div className="s-inner">
          <div ref={contentRef} className="s-content">
            <span className="s-label">
              PayJustNow for developers
            </span>
            <h2 className="s-title">
              Effortless integration
            </h2>
            <p className="s-text">
              Go from beginner to pro with all the tips and tools you need to effortlessly adopt our payment system as your own.
            </p>
            <Link href="/business-application" className="btn btn-light btn-md">
              <span className="btn-fill"></span>
              <span className="btn-text">Get started</span>
            </Link>
          </div>
          <div className="image-stack">
            <div ref={stackInnerRef} className="image-stack-inner">
              <div className="image-stack-item image-stack-item-0">
                <figure className="media-wrapper image-wrapper responsive">
                  <span className="media-inner image-inner">
                    <img
                      width={1950}
                      height={1404}
                      className="media image will-change-transform"
                      alt=""
                      src="https://payjustnow.com/wp-content/uploads/2025/04/integration-1.jpg"
                    />
                  </span>
                </figure>
              </div>
              <div className="image-stack-item image-stack-item-1">
                <figure className="media-wrapper image-wrapper responsive">
                  <span className="media-inner image-inner">
                    <img
                      width={1950}
                      height={1404}
                      className="media image will-change-transform"
                      alt=""
                      src="https://payjustnow.com/wp-content/uploads/2025/04/integration-1.jpg"
                    />
                  </span>
                </figure>
              </div>
              <div className="image-stack-item image-stack-item-2">
                <figure className="media-wrapper image-wrapper responsive">
                  <span className="media-inner image-inner">
                    <img
                      width={1950}
                      height={1404}
                      className="media image will-change-transform"
                      alt=""
                      src="https://payjustnow.com/wp-content/uploads/2025/04/integration-1.jpg"
                    />
                  </span>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
