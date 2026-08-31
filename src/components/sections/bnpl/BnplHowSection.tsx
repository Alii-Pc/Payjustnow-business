'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BnplHowSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const howRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const howWrapper = howRef.current;
    if (!section || !howWrapper) return;

    const ctx = gsap.context(() => {
      const rows = howWrapper.querySelectorAll<HTMLElement>('.how-row');

      // Exact animation engine from payjustnow.com BNPL.js
      rows.forEach((row) => {
        const firstChild = row.querySelector(':scope > *:first-child');
        const lastChild = row.querySelector(':scope > *:last-child');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: 'top bottom',
            end: 'bottom bottom-=20%',
            scrub: 1.2,
          },
        });

        if (firstChild) {
          tl.fromTo(
            firstChild,
            { xPercent: 50 },
            { xPercent: 0, ease: 'none' },
            0
          );
        }

        if (lastChild) {
          tl.fromTo(
            lastChild,
            { xPercent: -50 },
            { xPercent: 0, ease: 'none' },
            0
          );
        }
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="section section-how section-pad-top">
      <div className="container">
        <div className="s-inner">
          <div className="s-content">
            <h2 className="s-title">
              How to Pay in 3
            </h2>
            <Link href="/business-application" className="btn btn-primary btn-md">
              <span className="btn-fill"></span>
              <span className="btn-text">Request a demo</span>
            </Link>
          </div>
          <div ref={howRef} className="how">
            <div className="how-row how-row-1">
              <div className="how-item how-item-1">
                <h4 className="how-title">
                  Sign up
                </h4>
                <p className="how-text">
                  Create a PayJustNow account online in 2 minutes and get instant approval. Protect your app with a security selfie and start shopping on the same day you sign up.
                </p>
              </div>
              <div className="how-image how-image-1">
                <figure className="media-wrapper image-wrapper responsive">
                  <span className="media-inner image-inner">
                    <img
                      width={927}
                      height={694}
                      className="media image"
                      alt=""
                      src="https://payjustnow.com/wp-content/uploads/2025/01/Rectangle-4028-1.jpg"
                    />
                  </span>
                </figure>
              </div>
            </div>
            <div className="how-row how-row-2">
              <div className="how-image how-image-2">
                <figure className="media-wrapper image-wrapper responsive">
                  <span className="media-inner image-inner">
                    <img
                      width={927}
                      height={694}
                      className="media image"
                      alt=""
                      src="https://payjustnow.com/wp-content/uploads/2025/01/Rectangle-4036-1.jpg"
                    />
                  </span>
                </figure>
              </div>
              <div className="how-item how-item-2">
                <h4 className="how-title">
                  Shop online or in-store
                </h4>
                <p className="how-text">
                  Head to your favourite store and keep an eye out for the PayJustNow logo at the checkout point or on their website.
                </p>
              </div>
            </div>
            <div className="how-row how-row-3">
              <div className="how-item how-item-3">
                <h4 className="how-title">
                  Select PayJustNow at Checkout
                </h4>
                <p className="how-text">
                  Once you’ve added your items to cart, choose PayJustnow as your payment method and only pay a third of the transaction cost.
                </p>
              </div>
              <div className="how-item how-item-4">
                <h4 className="how-title">
                  Enjoy your purchase
                </h4>
                <p className="how-text">
                  Use your item straight away and settle the rest of the transaction cost with no interest by the next pay day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
