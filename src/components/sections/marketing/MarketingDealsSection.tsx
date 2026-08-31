'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MarketingDealsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;
    if (!section || !grid) return;

    const ctx = gsap.context(() => {
      const rows = grid.querySelectorAll<HTMLElement>('.cg-row');

      // Exact animation logic from 4911.js (ContentGridFour)
      rows.forEach((row) => {
        const items = row.querySelectorAll('.cg-item');
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: 'top+=10% bottom',
            end: '+=70%',
            scrub: 1.2,
          },
        });

        tl.fromTo(
          items,
          { scale: 0.9 },
          { scale: 1, ease: 'power3.out', stagger: 0.06 }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section section-light section-deals">
      <div className="container-sm">
        <div className="s-inner">
          <div ref={gridRef} className="content-grid content-grid-light content-grid-four">
            <div className="cg-row">
              <div className="cg-item cg-item-content">
                <h6 className="cg-title">
                  Deals
                </h6>
                <p className="cg-text">
                  Feature on our deals page to drive traffic to your website. Your deal will have a direct link to your promotion and a placement on the PayJustNow app.
                </p>
                <Link
                  href="https://app.payjustnow.com/my-deals/all"
                  className="btn btn-dark btn-md"
                  target="_blank"
                >
                  <span className="btn-fill"></span>
                  <span className="btn-text">Show me</span>
                </Link>
              </div>
              <div className="cg-item cg-item-media">
                <figure className="media-wrapper image-wrapper responsive">
                  <span className="media-inner image-inner">
                    <img
                      width={1334}
                      height={1334}
                      className="media image"
                      alt=""
                      src="https://payjustnow.com/wp-content/uploads/2025/01/Rectangle-4044-2-1.jpg"
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
