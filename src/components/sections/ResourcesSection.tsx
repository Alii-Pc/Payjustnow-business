'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ResourceItem {
  title: string;
  text: string;
  btnText: string;
  href: string;
  imageSrc: string;
  width: number;
  height: number;
}

const resourcesData: ResourceItem[] = [
  {
    title: 'Merchant portal',
    text: 'See the latest business updates, marketing opportunities, onboarding information and more.',
    btnText: 'Read more',
    href: '/merchant-portal',
    imageSrc: 'https://payjustnow.com/wp-content/uploads/2025/01/image-1.jpg',
    width: 1595,
    height: 1195,
  },
  {
    title: 'Payup app',
    text: 'Want a loadshedding-proof transaction process? Complete offline payments from anywhere using the PayUp App.',
    btnText: 'Learn more',
    href: '/payup',
    imageSrc: 'https://payjustnow.com/wp-content/uploads/2025/01/Rectangle-4094-1.jpg',
    width: 1694,
    height: 1269,
  },
  {
    title: 'Integrations',
    text: "Add us as a payment method on your website by using our pre-built plugins or custom API's.",
    btnText: 'Learn more',
    href: '/integrations',
    imageSrc: 'https://payjustnow.com/wp-content/uploads/2025/01/Rectangle-4071-2-1.jpg',
    width: 1547,
    height: 1158,
  },
];

export default function ResourcesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const resources = resourcesRef.current;
    if (!section || !resources) return;

    const ctx = gsap.context(() => {
      // 1. Header reveal
      gsap.fromTo(
        section.querySelector('.s-title') || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          },
        }
      );

      // 2. Resource cards staggered entrance
      const cards = resources.querySelectorAll<HTMLElement>('.resource');
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: resources,
              start: 'top 80%',
            },
          }
        );
      }

      // 3. Scrubbed image parallax
      cards.forEach((card) => {
        const img = card.querySelector<HTMLElement>('.image-inner img');
        if (img) {
          gsap.fromTo(
            img,
            { yPercent: -5 },
            {
              yPercent: 5,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.2,
              },
            }
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section section-resources">
      <div className="container">
        <div className="s-inner">
          <div className="s-content">
            <h2 className="s-title s-title-alt">
              Get started with these resources
            </h2>
          </div>
          <div ref={resourcesRef} className="resources">
            {resourcesData.map((item, index) => (
              <div key={index} className="resource">
                <Link
                  className="resource-link"
                  href={item.href}
                  aria-label={item.title}
                />
                <div className="resource-inner">
                  {/* Top Image Box with smooth pill morph & zoom on hover */}
                  <div className="resource-image">
                    <figure className="media-wrapper image-wrapper responsive">
                      <span className="media-inner image-inner">
                        <img
                          width={item.width}
                          height={item.height}
                          className="media image"
                          alt={item.title}
                          src={item.imageSrc}
                        />
                      </span>
                    </figure>
                  </div>

                  {/* Middle Title Pill with expanding circle-fill on hover */}
                  <div className="resource-title-wrapper">
                    <div className="circle-fill"></div>
                    <h3 className="resource-title">
                      <span className="resource-title-text split-line">
                        {item.title}
                      </span>
                    </h3>
                  </div>

                  {/* Bottom Content Card with expanding circle-fill and button on hover */}
                  <div className="resource-content">
                    <div className="circle-fill"></div>
                    <p className="resource-text">
                      {item.text}
                    </p>
                    <Link
                      href={item.href}
                      className="btn btn-outline-light btn-md"
                      target="_self"
                    >
                      <span className="btn-fill"></span>
                      <span className="btn-text">{item.btnText}</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
