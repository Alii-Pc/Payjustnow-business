'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BnplOnlineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const mediaImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Staggered reveal for rows
      const rows = gridRef.current?.querySelectorAll('.cg-row');
      rows?.forEach((row) => {
        gsap.fromTo(
          row.children,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 85%',
            },
          }
        );
      });

      // 2. Parallax zoom on media image
      if (mediaImgRef.current) {
        gsap.fromTo(
          mediaImgRef.current,
          { scale: 1, yPercent: -4 },
          {
            scale: 1.12,
            yPercent: 4,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section section-light section-pad-top section-online">
      <div className="container-sm">
        <div className="s-inner">
          <div ref={gridRef} className="content-grid content-grid-light content-grid-one">
            <div className="cg-row">
              <div className="cg-item cg-item-featured">
                <h2 className="cg-title">
                  Receive Online Payments
                </h2>
                <p className="cg-text">
                  Welcome smooth sales with a secure payment platform that’s easy to use and easy to integrate. Learn more about the online payment process in our business centre.
                </p>
                <Link href="/business-application" className="btn btn-primary btn-md">
                  <span className="btn-fill"></span>
                  <span className="btn-text">Take me there</span>
                </Link>
              </div>
              <div className="cg-item cg-item-media">
                <figure className="media-wrapper image-wrapper responsive">
                  <span className="media-inner image-inner">
                    <img
                      ref={mediaImgRef}
                      width={1543}
                      height={975}
                      className="media image will-change-transform"
                      alt=""
                      src="https://payjustnow.com/wp-content/uploads/2025/04/GettyImages-1170646718_480171_boliei-18-1.jpg"
                    />
                  </span>
                </figure>
              </div>
            </div>
            <div className="cg-row">
              <div className="cg-item cg-item-content">
                <div className="cg-icon">
                  <figure className="media-wrapper image-wrapper">
                    <span className="media-inner image-inner">
                      <img
                        width={33}
                        height={32}
                        className="media image"
                        alt=""
                        src="https://payjustnow.com/wp-content/uploads/2025/02/24px-15.svg"
                      />
                    </span>
                  </figure>
                </div>
                <h6 className="cg-title">
                  Confirm payment on the app
                </h6>
                <p className="cg-text">
                  The payment must then be verified from the shopper’s app to complete the transaction.
                </p>
              </div>
              <div className="cg-item cg-item-content">
                <div className="cg-icon">
                  <figure className="media-wrapper image-wrapper">
                    <span className="media-inner image-inner">
                      <img
                        width={19}
                        height={28}
                        className="media image"
                        alt=""
                        src="https://payjustnow.com/wp-content/uploads/2023/11/Layer_1-1.svg"
                      />
                    </span>
                  </figure>
                </div>
                <h6 className="cg-title">
                  Transaction reflects on your dashboard
                </h6>
                <p className="cg-text">
                  Once the sale has gone through, the transaction details will reflect on your PayUp dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
