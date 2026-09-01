'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SupportHeroSection() {
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
          contentRef.current?.querySelector('.s-title') || [],
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
        )
        .fromTo(
          contentRef.current?.querySelector('.s-text') || [],
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
          '-=0.4'
        );

      // 2. Info cards scale entrance from chunk 3097.js
      const items = gridRef.current?.querySelectorAll('.cg-row > .cg-item');
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { scale: 0.92, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            ease: 'power3.out',
            duration: 0.9,
            stagger: 0.15,
            delay: 0.3,
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section section-light section-pad-bottom section-hero">
      <div className="container">
        <div className="s-inner">
          <div ref={contentRef} className="s-content">
            <h1 className="s-title">
              Hi! How can we help?
            </h1>
            <p className="s-text">
              Chat to us about becoming a PayJustNow Merchant or how you can increase your income using our tools and services. We&apos;d love to hear from you.
            </p>
          </div>
          <div ref={gridRef} className="content-grid content-grid-light content-grid-one">
            <div className="cg-row">
              {/* Box 1: Business hours */}
              <div className="cg-item cg-item-content">
                <div className="cg-icon">
                  <figure className="media-wrapper image-wrapper">
                    <span className="media-inner image-inner">
                      <img
                        width={42}
                        height={50}
                        className="media image"
                        alt=""
                        src="https://payjustnow.com/wp-content/uploads/2023/11/Vector-17.svg"
                      />
                    </span>
                  </figure>
                </div>
                <h3 className="cg-title">
                  Business hours
                </h3>
                <div className="cg-row">
                  <div className="cg-item cg-item-content">
                    <span className="cg-title">
                      On Weekends
                    </span>
                    <div className="cg-text">
                      <p>
                        Contact us via our webchat for<br />
                        additional support<br />
                        Saturday: 08h30 – 17h00<br />
                        Sunday: 10h30 – 17h00
                      </p>
                    </div>
                  </div>
                  <div className="cg-item cg-item-content">
                    <span className="cg-title">
                      Email and Webchat
                    </span>
                    <div className="cg-text">
                      <p>Monday to Friday: 07h30 – 17h00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 2: Contact Us */}
              <div className="cg-item cg-item-content">
                <div className="cg-icon">
                  <figure className="media-wrapper image-wrapper">
                    <span className="media-inner image-inner">
                      <img
                        width={42}
                        height={50}
                        className="media image"
                        alt=""
                        src="https://payjustnow.com/wp-content/uploads/2023/11/Vector-18.svg"
                      />
                    </span>
                  </figure>
                </div>
                <h3 className="cg-title">
                  Contact Us
                </h3>
                <div className="cg-row">
                  <div className="cg-item cg-item-content">
                    <span className="cg-title">
                      Get speedy replies / Let’s Chat
                    </span>
                    <div className="cg-text">
                      We respond quite quickly via WeChat. For replies within 2 - 5 mins, chat to us online, otherwise send us an email to
                    </div>
                    <a
                      className="cg-link"
                      href="mailto:merchantsupport@payjustnow.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      merchantsupport@payjustnow.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
