'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MerchantAssistantSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stack = stackRef.current;
    if (!section || !stack) return;

    const ctx = gsap.context(() => {
      // 1. Text entrance animation
      gsap.fromTo(
        contentRef.current?.querySelectorAll('.s-title, .s-text') || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
        }
      );

      // 2. ImageStack depth zoom scroll engine (583.js)
      const items = stack.querySelectorAll<HTMLElement>('.image-stack-item');
      if (items.length >= 3) {
        gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        })
          .fromTo(items[0], { scale: 0.96 }, { scale: 1.04, ease: 'none' }, 0)
          .fromTo(items[1], { scale: 0.88, yPercent: 4 }, { scale: 0.94, yPercent: -4, ease: 'none' }, 0)
          .fromTo(items[2], { scale: 0.8, yPercent: 8 }, { scale: 0.86, yPercent: -8, ease: 'none' }, 0);
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section section-image-stack section-assistant">
      <div className="container-sm">
        <div className="s-inner">
          <div ref={stackRef} className="image-stack">
            <div className="image-stack-inner">
              <div className="image-stack-item image-stack-item-0">
                <figure className="media-wrapper image-wrapper responsive">
                  <span className="media-inner image-inner">
                    <img
                      width={1950}
                      height={1404}
                      className="media image"
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
                      className="media image"
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
                      className="media image"
                      alt=""
                      src="https://payjustnow.com/wp-content/uploads/2025/04/integration-1.jpg"
                    />
                  </span>
                </figure>
              </div>
            </div>
          </div>
          <div ref={contentRef} className="s-content">
            <h2 className="s-title">
              Designed for every business
            </h2>
            <p className="s-text">
              Use PayJustNow tools to get ahead in business, whether you’re a solo entrepreneur with an ambitious side hustle or leading the business development team at an established retailer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
