'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const promoteItems = [
  {
    icon: 'https://payjustnow.com/wp-content/uploads/2023/11/Vector-5-1.svg',
    width: 132,
    height: 125,
    title: 'Reach more customers',
    text: 'Forget spray and pray marketing. Use our partnership to reach customers who are already interested in what you offer.',
  },
  {
    icon: 'https://payjustnow.com/wp-content/uploads/2023/11/Vector-4-1.svg',
    width: 13,
    height: 11,
    title: 'Optimise campaigns',
    text: 'Keep us informed about new products and promotions so that we can help you connect with more PayJustNow customers.',
  },
  {
    icon: 'https://payjustnow.com/wp-content/uploads/2023/11/Vector-12.svg',
    width: 28,
    height: 29,
    title: 'Share deals',
    text: 'Set yourself apart by offering PayJustnow customers exclusive incentives or let us know what your current deals are and we’ll create a buzz around it.',
  },
];

export default function MarketingPromoteSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;
    if (!section || !grid) return;

    const ctx = gsap.context(() => {
      const rows = grid.querySelectorAll<HTMLElement>('.cg-row');

      // Exact animation logic from 8169.js (ContentGridTwo)
      rows.forEach((row) => {
        const items = row.querySelectorAll('.cg-item');
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: 'top bottom',
            end: '+=70%',
            scrub: 1.2,
          },
        });

        tl.fromTo(
          items,
          { yPercent: 50 },
          { yPercent: 0, ease: 'power3.out', stagger: 0.07 }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section section-light section-promote">
      <div className="container-sm">
        <div className="s-inner">
          <div className="s-content">
            <h2 className="s-title">
              Inspire action with digital marketing
            </h2>
          </div>
          <div ref={gridRef} className="content-grid content-grid-light content-grid-two">
            <div className="cg-row">
              {promoteItems.map((item, idx) => (
                <div key={idx} className="cg-item cg-item-content">
                  <div className="cg-icon">
                    <figure className="media-wrapper image-wrapper">
                      <span className="media-inner image-inner">
                        <img
                          width={item.width}
                          height={item.height}
                          className="media image"
                          alt=""
                          src={item.icon}
                        />
                      </span>
                    </figure>
                  </div>
                  <h6 className="cg-title">
                    {item.title}
                  </h6>
                  <p className="cg-text">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
