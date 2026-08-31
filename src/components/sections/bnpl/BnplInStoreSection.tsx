'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BnplInStoreSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLImageElement>(null);

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

      // 2. Parallax zoom on hero media
      if (heroImgRef.current) {
        gsap.fromTo(
          heroImgRef.current,
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
    <section ref={sectionRef} className="section section-pad-bottom section-in-store">
      <div className="container-sm">
        <div className="s-inner">
          <div ref={gridRef} className="content-grid content-grid-one">
            <div className="cg-row">
              <div className="cg-item cg-item-media">
                <figure className="media-wrapper image-wrapper responsive">
                  <span className="media-inner image-inner">
                    <img
                      ref={heroImgRef}
                      width={1853}
                      height={827}
                      className="media image will-change-transform"
                      alt=""
                      src="https://payjustnow.com/wp-content/uploads/2025/04/GettyImages-1170646718_480171_boliei-17-1.jpg"
                    />
                  </span>
                </figure>
              </div>
              <div className="cg-item cg-item-featured">
                <h2 className="cg-title">
                  Receive payments in store
                </h2>
                <p className="cg-text">
                  To shop in store, customers must download the PayJustNow app and create a profile. It takes 2 minutes to sign up.
                </p>
              </div>
            </div>
            <div className="cg-row">
              <div className="cg-item cg-item-content">
                <div className="cg-icon">
                  <figure className="media-wrapper image-wrapper">
                    <span className="media-inner image-inner">
                      <img
                        width={27}
                        height={28}
                        className="media image"
                        alt=""
                        src="https://payjustnow.com/wp-content/uploads/2025/04/Vector-4.svg"
                      />
                    </span>
                  </figure>
                </div>
                <h6 className="cg-title">
                  In-store label
                </h6>
                <p className="cg-text">
                  Each physical business has an in-store label in our directory so that customers know to visit your store.
                </p>
              </div>
              <div className="cg-item cg-item-content">
                <div className="cg-icon">
                  <figure className="media-wrapper image-wrapper">
                    <span className="media-inner image-inner">
                      <img
                        width={28}
                        height={28}
                        className="media image"
                        alt=""
                        src="https://payjustnow.com/wp-content/uploads/2023/11/Layer_1.svg"
                      />
                    </span>
                  </figure>
                </div>
                <h6 className="cg-title">
                  How to checkout
                </h6>
                <p className="cg-text">
                  Customers scan your transaction QR code, enter the amount to pay and confirm once the instalment value displays.
                </p>
              </div>
              <div className="cg-item cg-item-content">
                <div className="cg-icon">
                  <figure className="media-wrapper image-wrapper">
                    <span className="media-inner image-inner">
                      <img
                        width={25}
                        height={28}
                        className="media image"
                        alt=""
                        src="https://payjustnow.com/wp-content/uploads/2023/11/Vector-5.svg"
                      />
                    </span>
                  </figure>
                </div>
                <h6 className="cg-title">
                  Transaction dashboard
                </h6>
                <p className="cg-text">
                  Once the sale is confirmed, the transaction is saved to PayUp and reflects on your business dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
