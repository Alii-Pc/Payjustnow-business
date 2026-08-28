'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '@/components/Header/Header';
import BrandCarousel from '@/components/sections/BrandCarousel';
import CardScroller, { CardScrollerItem } from '@/components/sections/CardScroller';
import IntegrationsCarousel from '@/components/sections/IntegrationsCarousel';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/Footer/Footer';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const transactionsCards: CardScrollerItem[] = [
  {
    label: 'Even bigger basket',
    title: 'Shoppers can buy X2 as much',
    text: 'Long-term paying options and higher credit limits help shoppers fill their baskets with up to twice the value of Pay in 3 purchases.',
    image: '/images/retail-card-1.png',
    bgColor: '#000000',
    textColor: '#ffffff',
  },
  {
    label: 'More credit, more checkouts',
    title: 'One shopper, two spend facilities',
    text: 'With the option to pay in 3 plus pay in 12, shoppers have more to spend and you have more to sell.',
    image: '/images/retail-card-2.png',
    bgColor: '#ffffff',
    textColor: '#000000',
  },
  {
    label: '0% Deposit',
    title: 'No upfront payment option',
    text: 'Yes, zero deposit purchases. Think extra spending relief for trusted PayJustNow shoppers to make their first instalment at a later date.',
    image: '/images/retail-card-3.png',
    bgColor: '#444747',
    textColor: '#ffffff',
  },
  {
    label: 'Seamless integration',
    title: 'Payments are easy to capture',
    text: 'While one shopper may have multiple payment options, it’s all linked to a single profile. Transactions are still easy to complete with no extra admin on your part.',
    image: '/images/retail-card-4.png',
    bgColor: '#e1deca',
    textColor: '#000000',
  },
];

const appCards: CardScrollerItem[] = [
  {
    label: 'Sign up',
    title: 'Sign up and use our tech for free',
    text: 'There are no setup or monthly service fees. You will only pay a small transaction fee once an order is processed.',
    image: '/images/retail-app-1.jpg',
    bgColor: '#2d3131',
    textColor: '#ffffff',
    isCoverImage: true,
    maskImage: '/masks/d21aed44730eba2c15e3.svg',
  },
  {
    label: 'Process orders',
    title: 'Manage all transactions in one place',
    text: 'You can process in-store transactions, sign up new split-payment shoppers, complete retail credit payments and chat to support all on the app.',
    image: '/images/retail-app-2.jpg',
    bgColor: '#ffffff',
    textColor: '#000000',
    isCoverImage: true,
    maskImage: '/masks/4331675734289a4b6226.svg',
  },
  {
    label: 'Track sales',
    title: 'Keep an organised record of sales',
    text: 'Monitor sign ups and sales by date and spot trends to improve revenue. You can also pull up receipts by searching your transaction database.',
    image: '/images/retail-app-3.jpg',
    bgColor: '#444747',
    textColor: '#ffffff',
    isCoverImage: true,
    maskImage: '/masks/b4c0699d7cb8bc3811dc.svg',
  },
];

export default function RetailCreditPage() {
  const integrationStackRef = useRef<HTMLDivElement>(null);

  // Concentric Image Stack Scroll Scrub for Integration Section
  useEffect(() => {
    const stack = integrationStackRef.current;
    if (!stack) return;

    const ctx = gsap.context(() => {
      const imgs = stack.querySelectorAll('img');
      gsap.fromTo(
        imgs,
        { scale: 1 },
        {
          scale: 1.16,
          ease: 'none',
          scrollTrigger: {
            trigger: stack,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        }
      );
    }, stack);

    return () => ctx.revert();
  }, []);

  return (
    <main id="retail_credit" className="site text-white bg-black selection:bg-[#BDF500] selection:text-black">
      <Header />

      {/* Hero Section */}
      <section className="section section-hero pt-[12rem] lg:pt-[16rem] pb-[8rem] lg:pb-[12rem] bg-black overflow-hidden">
        <div className="container">
          <div className="s-inner flex flex-col lg:flex-row items-center justify-between gap-[4.8rem] lg:gap-[6.4rem]">
            
            {/* Left Content */}
            <div className="s-content flex-1 max-w-[62rem]">
              <span className="s-subtitle inline-block text-[1.4rem] font-sans font-medium uppercase tracking-[0.2rem] text-[#BDF500] mb-[1.6rem]">
                Retail Credit
              </span>
              <h1 className="s-title font-display font-black text-[5.2rem] sm:text-[6.8rem] lg:text-[8rem] xl:text-[8.8rem] uppercase leading-[0.84] text-white tracking-tight mb-[2.4rem]">
                An extra flexible way to pay
              </h1>
              <p className="s-text font-sans text-[1.6rem] sm:text-[1.8rem] lg:text-[2rem] leading-[1.5] text-white/80 font-normal max-w-[54rem]">
                Shoppers can choose to pay for purchases over 12 months by applying for retail credit. They will still be able to Pay in 3 since it’s a separate account and all payment options are managed on the app.
              </p>
            </div>

            {/* Right Media with Custom Organic Mask */}
            <div className="s-media flex-1 w-full max-w-[56rem] aspect-square relative flex items-center justify-center">
              <svg className="absolute w-0 h-0" width="1" height="1" viewBox="0 0 1 1" fill="none">
                <clipPath id="hero-mask-path-retail_credit" clipPathUnits="objectBoundingBox" transform="scale(0.0015923566878981,0.0015923566878981)">
                  <path d="M428.188 479.807L493.206 595.727C495.113 599.128 496.012 602.907 495.819 606.705C495.626 610.503 494.347 614.194 492.104 617.428C489.861 620.661 486.728 623.33 483.002 625.18C479.276 627.031 475.082 628.001 470.817 628H25.0195C21.7243 628 18.4616 627.42 15.4186 626.292C12.3756 625.165 9.61246 623.513 7.2877 621.431C4.96293 619.35 3.12238 616.879 1.87178 614.161C0.621186 611.443 -0.0147994 608.532 0.000261359 605.595L0.000312352 22.3033C0.000312869 16.3881 2.63624 10.7151 7.3283 6.53242C12.0203 2.34974 18.384 -5.80099e-07 25.0196 0L602.981 5.0527e-05C606.266 5.08142e-05 609.52 0.576931 612.555 1.69778C615.591 2.81862 618.349 4.46142 620.672 6.53247C622.995 8.60353 624.838 11.0623 626.096 13.7682C627.353 16.4742 628 19.3744 628 22.3033V487.901C627.998 491.701 626.906 495.438 624.829 498.756C622.751 502.075 619.757 504.865 616.131 506.862C612.504 508.86 608.365 509.998 604.106 510.169C599.848 510.34 595.611 509.538 591.797 507.839L461.738 449.879C457.041 447.79 451.726 447.071 446.545 447.823C441.365 448.576 436.581 450.762 432.87 454.071C429.16 457.381 426.712 461.647 425.871 466.266C425.031 470.885 425.841 475.622 428.188 479.807Z" fill="black"/>
                </clipPath>
              </svg>
              <div 
                className="w-full h-full rounded-[4.8rem] overflow-hidden"
                style={{ clipPath: 'url(#hero-mask-path-retail_credit)' }}
              >
                <img
                  src="/images/retail-hero.jpg"
                  alt="Retail Credit Bag"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Brand Logos Carousel */}
      <BrandCarousel />

      {/* Card Transactions Section (Pinned GSAP Stack) */}
      <CardScroller
        title="Card Transactions"
        cards={transactionsCards}
        sectionId="section-card-transactions"
      />

      {/* PayJustNow App Section (Pinned GSAP Stack) */}
      <CardScroller
        title="PayJustNow"
        cards={appCards}
        sectionId="section-app"
      />

      {/* Effortless Integration Section (Concentric ImageStack) */}
      <section className="section section-integration py-[10rem] lg:py-[14rem] bg-black text-white overflow-hidden">
        <div className="container">
          <div className="s-inner flex flex-col lg:flex-row items-center justify-between gap-[4.8rem] lg:gap-[6.4rem]">
            
            {/* Left Content */}
            <div className="s-content flex-1 max-w-[54rem]">
              <span className="s-label inline-block text-[1.4rem] font-sans font-medium uppercase tracking-[0.2rem] text-[#BDF500] mb-[1.6rem]">
                PayJustNow for developers
              </span>
              <h2 className="s-title font-display font-black text-[5.2rem] sm:text-[6.8rem] lg:text-[7.6rem] xl:text-[8.3rem] uppercase leading-[0.84] text-white tracking-tight mb-[2.4rem]">
                Effortless integration
              </h2>
              <p className="s-text font-sans text-[1.6rem] sm:text-[1.8rem] leading-[1.5] text-white/80 font-normal mb-[3.6rem] max-w-[48rem]">
                Go from beginner to pro with all the tips and tools you need to effortlessly adopt our payment system as your own.
              </p>
              <Link
                href="/business-application"
                className="btn btn-light btn-md inline-flex items-center justify-center px-[3.2rem] h-[5.2rem] rounded-[0.4rem] bg-white text-black font-sans text-[1.5rem] font-medium tracking-wide transition-all hover:bg-[#BDF500] hover:text-black cursor-pointer"
              >
                <span className="btn-text">Get started</span>
              </Link>
            </div>

            {/* Right 3-Layer Concentric Image Stack */}
            <div
              ref={integrationStackRef}
              className="flex-1 w-full max-w-[58rem] aspect-[4/3] relative flex items-center justify-center"
            >
              {/* Layer 0: Outer */}
              <div className="absolute inset-0 rounded-[4.8rem] overflow-hidden border-[1.5px] border-white/20">
                <img
                  src="/images/retail-integration.jpg"
                  alt="Effortless Integration"
                  className="w-full h-full object-cover transform-gpu will-change-transform"
                />
              </div>

              {/* Layer 1: Middle */}
              <div className="absolute w-[91%] h-[89%] rounded-[3.6rem] overflow-hidden border-[1.5px] border-white/30">
                <img
                  src="/images/retail-integration.jpg"
                  alt="Effortless Integration"
                  className="w-full h-full object-cover transform-gpu will-change-transform"
                />
              </div>

              {/* Layer 2: Inner */}
              <div className="absolute w-[82%] h-[78%] rounded-[2.6rem] overflow-hidden border-[1.5px] border-white/40">
                <img
                  src="/images/retail-integration.jpg"
                  alt="Effortless Integration"
                  className="w-full h-full object-cover transform-gpu will-change-transform"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Integrations Logo Carousel matching screenshot */}
      <IntegrationsCarousel />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
