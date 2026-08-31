'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BnplHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Entrance animation on load
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(
        contentRef.current?.querySelector('.s-label') || [],
        { scale: 0.7, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' }
      )
        .fromTo(
          contentRef.current?.querySelector('.s-title') || [],
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          contentRef.current?.querySelector('.s-text') || [],
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          contentRef.current?.querySelector('.s-buttons') || [],
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          mediaRef.current?.querySelector('.media-wrapper') || [],
          { scale: 0.88, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.1, ease: 'power3.out' },
          '-=0.8'
        );

      // 2. Parallax scroll effect on hero media
      if (imgRef.current) {
        gsap.fromTo(
          imgRef.current,
          { yPercent: 0, scale: 1 },
          {
            yPercent: 12,
            scale: 1.08,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
            },
          }
        );
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
              BNPL
            </span>
            <h1 className="s-title">
              Good things come in 3
            </h1>
            <p className="s-text">
              When you add us as a payment method, shoppers get to split their purchase in 3 interest-free payments. This gives them a handle on finances and boosts quality of life.
            </p>
            <div className="s-buttons">
              <Link href="/business-application" className="btn btn-dark btn-md">
                <span className="btn-fill"></span>
                <span className="btn-text">Apply Now</span>
              </Link>
            </div>
          </div>
          <div ref={mediaRef} className="s-media">
            <div className="hero-mask">
              <svg className="hero-mask-svg" width="1" height="1" viewBox="0 0 1 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <clipPath id="hero-mask-path-bnpl" clipPathUnits="objectBoundingBox" transform="scale(0.0015923566878981,0.0015923566878981)">
                  <path className="shape" d="M428.188 479.807L493.206 595.727C495.113 599.128 496.012 602.907 495.819 606.705C495.626 610.503 494.347 614.194 492.104 617.428C489.861 620.661 486.728 623.33 483.002 625.18C479.276 627.031 475.082 628.001 470.817 628H25.0195C21.7243 628 18.4616 627.42 15.4186 626.292C12.3756 625.165 9.61246 623.513 7.2877 621.431C4.96293 619.35 3.12238 616.879 1.87178 614.161C0.621186 611.443 -0.0147994 608.532 0.000261359 605.595L0.000312352 22.3033C0.000312869 16.3881 2.63624 10.7151 7.3283 6.53242C12.0203 2.34974 18.384 -5.80099e-07 25.0196 0L602.981 5.0527e-05C606.266 5.08142e-05 609.52 0.576931 612.555 1.69778C615.591 2.81862 618.349 4.46142 620.672 6.53247C622.995 8.60353 624.838 11.0623 626.096 13.7682C627.353 16.4742 628 19.3744 628 22.3033V487.901C627.998 491.701 626.906 495.438 624.829 498.756C622.751 502.075 619.757 504.865 616.131 506.862C612.504 508.86 608.365 509.998 604.106 510.169C599.848 510.34 595.611 509.538 591.797 507.839L461.738 449.879C457.041 447.79 451.726 447.071 446.545 447.823C441.365 448.576 436.581 450.762 432.87 454.071C429.16 457.381 426.712 461.647 425.871 466.266C425.031 470.885 425.841 475.622 428.188 479.807Z" fill="black"/>
                </clipPath>
              </svg>
              <figure
                className="media-wrapper image-wrapper responsive"
                style={{
                  clipPath: 'url(#hero-mask-path-bnpl)',
                  WebkitClipPath: 'url(#hero-mask-path-bnpl)',
                }}
              >
                <div className="media-inner image-inner">
                  <img
                    ref={imgRef}
                    width={1800}
                    height={1800}
                    src="https://payjustnow.com/wp-content/uploads/2025/04/366fc473e32c58ced988a86f4667884d-1.jpg"
                    className="media image will-change-transform"
                    alt=""
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
