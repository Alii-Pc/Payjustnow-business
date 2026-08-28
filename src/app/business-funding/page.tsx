'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '@/components/Header/Header';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/Footer/Footer';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BusinessFundingPage() {
  const mediaRef = useRef<HTMLDivElement>(null);
  const topCardRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  const goalsRow1Ref = useRef<HTMLDivElement>(null);
  const goalsRow2Ref = useRef<HTMLDivElement>(null);
  const howLongRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Easy Cash Advance (ContentGridThree - Module 9427)
      if (mediaRef.current) {
        gsap.fromTo(
          mediaRef.current,
          { scale: 0.82 },
          {
            scale: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: mediaRef.current,
              start: 'top bottom',
              end: '+=50%',
              scrub: 1.2,
            },
          }
        );
      }

      if (topCardRef.current) {
        gsap.fromTo(
          topCardRef.current,
          { scale: 0.82 },
          {
            scale: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: topCardRef.current,
              start: 'top bottom',
              end: '+=50%',
              scrub: 1.2,
            },
          }
        );
      }

      if (bottomRowRef.current) {
        const smallCards = bottomRowRef.current.querySelectorAll('.cg-item-content');
        gsap.fromTo(
          smallCards,
          { scale: 0.82 },
          {
            scale: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bottomRowRef.current,
              start: 'top bottom',
              end: '+=50%',
              scrub: 1.2,
            },
          }
        );
      }

      // 2. Goals Section (Smooth scale scrub matching PayJustNow)
      if (goalsRow1Ref.current) {
        const row1Items = goalsRow1Ref.current.querySelectorAll('.cg-item');
        gsap.fromTo(
          row1Items,
          { scale: 0.82 },
          {
            scale: 1,
            ease: 'power3.out',
            stagger: 0.08,
            scrollTrigger: {
              trigger: goalsRow1Ref.current,
              start: 'top bottom',
              end: '+=60%',
              scrub: 1.2,
            },
          }
        );
      }

      if (goalsRow2Ref.current) {
        const row2Cards = goalsRow2Ref.current.querySelectorAll('.cg-item-content');
        gsap.fromTo(
          row2Cards,
          { scale: 0.85, opacity: 0.9 },
          {
            scale: 1,
            opacity: 1,
            ease: 'power3.out',
            stagger: 0.06,
            scrollTrigger: {
              trigger: goalsRow2Ref.current,
              start: 'top bottom',
              end: '+=50%',
              scrub: 1.2,
            },
          }
        );
      }

      // 3. How Long Section
      if (howLongRowRef.current) {
        const howLongItems = howLongRowRef.current.querySelectorAll('.cg-item');
        gsap.fromTo(
          howLongItems,
          { scale: 0.82 },
          {
            scale: 1,
            ease: 'power3.out',
            stagger: 0.08,
            scrollTrigger: {
              trigger: howLongRowRef.current,
              start: 'top bottom',
              end: '+=60%',
              scrub: 1.2,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const goals = [
    {
      title: 'Market your brand',
      text: 'Create awareness for your brand or business venture and increase your sales turnover.',
      icon: '/images/funding-icon-goal-1.svg',
    },
    {
      title: 'Buy stock or equipment',
      text: 'Maybe you need some new machinery or want to buy inventory in bulk.',
      icon: '/images/funding-icon-goal-2.svg',
    },
    {
      title: 'Expand or grow In any way',
      text: 'Open a new branch or sector or expand into new markets.',
      icon: '/images/funding-icon-goal-3.svg',
    },
    {
      title: 'Start selling with PJN',
      text: 'Use funding when your cash flow is low and you need to pay the bills.',
      icon: '/images/funding-icon-goal-4.svg',
    },
  ];

  const benefits = [
    {
      title: 'No collateral required',
      text: 'No need to put up your assets as collateral and in some cases get your spouse to sign off and take responsibility for a loan from a bank or credit unions.',
    },
    {
      title: 'No need to get friends and family involved',
      text: 'If you lend money from friends and family, you could end up with a sour relationship if they do not get back what they have invested in your business.',
    },
    {
      title: 'No crowd funding required',
      text: 'No need to prepare a business proposal in order to convince the group of people to invest / borrow you the money.',
    },
    {
      title: 'Get instant cash',
      text: 'Business funding gives you immediate access to a lump sum of money that can be used to operate or grow your business in whichever way you see fit.',
    },
    {
      title: 'No investors / partnerships',
      text: 'No need to give away your equity or partner with someone that could influence your ways of operating and managing your business.',
    },
  ];

  const qualifications = [
    {
      title: 'R50k Turnover',
      text: 'I have R50,000+ monthly turnover',
      icon: '/images/funding-icon-qual-1.svg',
    },
    {
      title: 'SA Citizen',
      text: 'I am an South African citizen or have a guarantor',
      icon: '/images/funding-icon-qual-2.svg',
    },
    {
      title: 'Bank Statement',
      text: "I can provide 6 months' bank statement",
      icon: '/images/funding-icon-qual-3.svg',
    },
    {
      title: 'Business Trade',
      text: 'I own a business that has traded for 12+ months',
      icon: '/images/funding-icon-qual-4.svg',
    },
  ];

  return (
    <main id="business_funding" className="site text-white bg-black selection:bg-[#BDF500] selection:text-black font-sans">
      <Header />

      {/* 1. Hero Section */}
      <section className="section section-light section-hero pt-[12rem] lg:pt-[16rem] pb-[8rem] lg:pb-[12rem] bg-[#f9f9fa] text-black overflow-hidden">
        <div className="container max-w-[132.8rem] mx-auto px-[1.6rem] lg:px-[3.2rem]">
          <div className="s-inner flex flex-col lg:flex-row items-center justify-between gap-[4.8rem] lg:gap-[6.4rem]">
            
            {/* Left Content */}
            <div className="s-content flex-1 max-w-[62rem]">
              <span className="s-label inline-block px-[1.6rem] py-[0.6rem] bg-black/5 rounded-full text-[1.3rem] font-sans font-semibold uppercase tracking-[0.15rem] text-neutral-800 mb-[2rem]">
                Get Cash Advance
              </span>
              <h1 className="s-title font-display font-black text-[5.2rem] sm:text-[6.8rem] lg:text-[7.8rem] xl:text-[8.5rem] uppercase leading-[0.85] text-black tracking-tight mb-[2.4rem]">
                Apply for business funding
              </h1>
              <div className="s-text font-sans text-[1.6rem] sm:text-[1.8rem] leading-[1.5] text-neutral-700 font-normal space-y-[1.2rem] mb-[3.6rem] max-w-[54rem]">
                <p>Introducing the Cash Advance: expand your services, buy more stock or new equipment, and boost your bottom line.</p>
                <p>The Cash Advance is simpler and faster than traditional business funding, with fixed, affordable repayments.</p>
              </div>
              <div className="s-buttons">
                <Link
                  href="/business-application"
                  className="btn btn-dark btn-md inline-flex items-center justify-center px-[3.6rem] h-[5.2rem] rounded-[0.4rem] bg-black text-white font-sans text-[1.5rem] font-bold tracking-wide transition-all hover:bg-[#BDF500] hover:text-black cursor-pointer shadow-lg active:scale-95"
                >
                  <span className="btn-text">Apply Now</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image with Custom Geometric Mask */}
            <div className="s-media flex-1 w-full max-w-[56rem] aspect-square relative flex items-center justify-center">
              <svg className="absolute w-0 h-0" width="1" height="1" viewBox="0 0 1 1" fill="none">
                <clipPath id="hero-mask-path-business_funding" clipPathUnits="objectBoundingBox" transform="scale(0.0015923566878981,0.0015923566878981)">
                  <path d="M428.188 479.807L493.206 595.727C495.113 599.128 496.012 602.907 495.819 606.705C495.626 610.503 494.347 614.194 492.104 617.428C489.861 620.661 486.728 623.33 483.002 625.18C479.276 627.031 475.082 628.001 470.817 628H25.0195C21.7243 628 18.4616 627.42 15.4186 626.292C12.3756 625.165 9.61246 623.513 7.2877 621.431C4.96293 619.35 3.12238 616.879 1.87178 614.161C0.621186 611.443 -0.0147994 608.532 0.000261359 605.595L0.000312352 22.3033C0.000312869 16.3881 2.63624 10.7151 7.3283 6.53242C12.0203 2.34974 18.384 -5.80099e-07 25.0196 0L602.981 5.0527e-05C606.266 5.08142e-05 609.52 0.576931 612.555 1.69778C615.591 2.81862 618.349 4.46142 620.672 6.53247C622.995 8.60353 624.838 11.0623 626.096 13.7682C627.353 16.4742 628 19.3744 628 22.3033V487.901C627.998 491.701 626.906 495.438 624.829 498.756C622.751 502.075 619.757 504.865 616.131 506.862C612.504 508.86 608.365 509.998 604.106 510.169C599.848 510.34 595.611 509.538 591.797 507.839L461.738 449.879C457.041 447.79 451.726 447.071 446.545 447.823C441.365 448.576 436.581 450.762 432.87 454.071C429.16 457.381 426.712 461.647 425.871 466.266C425.031 470.885 425.841 475.622 428.188 479.807Z" fill="black"/>
                </clipPath>
              </svg>
              <div 
                className="w-full h-full rounded-[4.8rem] overflow-hidden shadow-2xl"
                style={{ clipPath: 'url(#hero-mask-path-business_funding)' }}
              >
                <img
                  src="/images/funding-hero.jpg"
                  alt="Business Funding Cash Advance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Easy cash advance for your business */}
      <section className="section section-light section-features py-[10rem] lg:py-[14rem] bg-[#f9f9fa] text-black overflow-hidden border-t border-black/5">
        <div className="container-sm max-w-[110.2rem] mx-auto px-[1.6rem]">
          <div className="s-inner">
            
            {/* Title */}
            <div className="s-content max-w-[65.4rem] mb-[4rem]">
              <h2 className="s-title font-display font-black text-[4.4rem] sm:text-[5.4rem] lg:text-[6.4rem] uppercase leading-[0.88] text-black tracking-tight">
                Easy cash advance for your business
              </h2>
            </div>

            {/* content-grid-three content-grid-light layout */}
            <div className="content-grid content-grid-three content-grid-light flex flex-col lg:flex-row items-stretch justify-center w-full">
              
              {/* Left Column: Media Box */}
              <div
                ref={mediaRef}
                className="cg-item-media w-full lg:w-[43.6rem] flex-shrink-0 mb-[2.4rem] lg:mb-0 will-change-transform"
              >
                <div className="media-wrapper w-full h-full min-h-[36rem] lg:min-h-[54rem] rounded-[4rem] border border-black overflow-hidden relative shadow-sm" style={{ borderColor: '#000000' }}>
                  <img
                    src="/images/funding-features.jpg"
                    alt="Easy Cash Advance"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Column: 3 Connected White Cards */}
              <div className="cg-col flex-1 flex flex-col justify-between lg:-ml-[1px]">
                
                {/* Top Card: Fast Application */}
                <div
                  ref={topCardRef}
                  className="cg-item-content !bg-white !text-black p-[4rem] lg:p-[4.4rem] rounded-[3.2rem] border border-black flex flex-col justify-between mb-[2.4rem] lg:mb-0 lg:min-h-[25.5rem] shadow-sm will-change-transform"
                  style={{ backgroundColor: '#ffffff', color: '#000000', borderColor: '#000000' }}
                >
                  <div className="cg-icon w-[5.6rem] h-[5.6rem] mb-[4rem] flex items-center">
                    <img
                      src="/images/funding-icon-fast.svg"
                      alt="Fast Application"
                      className="w-[4rem] h-[4rem] object-contain"
                    />
                  </div>
                  <div>
                    <h6 className="cg-title font-sans font-bold text-[2.4rem] text-black mb-[1.2rem] tracking-tight">
                      Fast Application
                    </h6>
                    <p className="cg-text font-sans text-[1.6rem] leading-[1.5] text-neutral-800 font-medium">
                      Simple application process. Apply in minutes, not days.
                    </p>
                  </div>
                </div>

                {/* Bottom Row: Fixed Costs (Left) + Quick Approval (Right) */}
                <div
                  ref={bottomRowRef}
                  className="cg-row flex flex-col sm:flex-row lg:-mt-[1px] gap-[2.4rem] sm:gap-0"
                >
                  
                  {/* Bottom Left Card: Fixed Costs */}
                  <div
                    className="cg-item-content flex-1 !bg-white !text-black p-[4rem] lg:p-[4.4rem] lg:pb-[6.8rem] rounded-[3.2rem] border border-black flex flex-col justify-between sm:min-h-[28.5rem] shadow-sm will-change-transform"
                    style={{ backgroundColor: '#ffffff', color: '#000000', borderColor: '#000000' }}
                  >
                    <div className="cg-icon w-[5.6rem] h-[5.6rem] mb-[4rem] flex items-center">
                      <img
                        src="/images/funding-icon-fixed.svg"
                        alt="Fixed Costs"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h6 className="cg-title font-sans font-bold text-[2.4rem] text-black mb-[1.2rem] tracking-tight">
                        Fixed Costs
                      </h6>
                      <p className="cg-text font-sans text-[1.6rem] leading-[1.5] text-neutral-800 font-medium">
                        Set cost not linked to interest rate fluctuations.
                      </p>
                    </div>
                  </div>

                  {/* Bottom Right Card: Quick Approval */}
                  <div
                    className="cg-item-content flex-1 !bg-white !text-black p-[4rem] lg:p-[4.4rem] lg:pb-[6.8rem] rounded-[3.2rem] border border-black sm:-ml-[1px] flex flex-col justify-between sm:min-h-[28.5rem] shadow-sm will-change-transform"
                    style={{ backgroundColor: '#ffffff', color: '#000000', borderColor: '#000000' }}
                  >
                    <div className="cg-icon w-[5.6rem] h-[5.6rem] mb-[4rem] flex items-center">
                      <img
                        src="/images/funding-icon-quick.svg"
                        alt="Quick Approval"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h6 className="cg-title font-sans font-bold text-[2.4rem] text-black mb-[1.2rem] tracking-tight">
                        Quick Approval
                      </h6>
                      <p className="cg-text font-sans text-[1.6rem] leading-[1.5] text-neutral-800 font-medium">
                        Get an obligation-free offer in 24 hours. Access funds faster.
                      </p>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Goals Section (Spacious Left Card, Compact Right Photo, Seamless Negative Margin Grid) */}
      <section className="section section-pad-top section-pad-bottom section-goals py-[10rem] lg:py-[14rem] bg-black text-white overflow-hidden">
        <div className="container-sm max-w-[110.2rem] mx-auto px-[1.6rem]">
          <div className="s-inner">
            <div className="content-grid content-grid-one flex flex-col w-full">
              
              {/* Row 1: Featured Left Box (Spacious) + Media Right Box (Compact Stadium) */}
              <div
                ref={goalsRow1Ref}
                className="cg-row flex flex-col lg:flex-row items-stretch justify-between w-full z-[1]"
              >
                {/* Featured Left Card with generous space */}
                <div
                  className="cg-item cg-item-featured flex-1 p-[4.8rem] lg:p-[5.6rem] rounded-[4rem] border border-white bg-black flex flex-col justify-between mb-[2.4rem] lg:mb-0 shadow-lg will-change-transform"
                  style={{ borderColor: '#ffffff', borderWidth: '1px' }}
                >
                  <div className="max-w-[58rem]">
                    <h2 className="cg-title font-display font-black text-[4.2rem] sm:text-[5.4rem] lg:text-[6.2rem] uppercase leading-[0.82] text-white tracking-tight mb-[1.6rem]">
                      Do you have ambitious goals for your business and need flexible finance to achieve them?
                    </h2>
                    <p className="cg-text font-sans text-[1.6rem] sm:text-[1.8rem] leading-[1.5] text-white/80 font-normal mb-[3.6rem]">
                      Get affordable working capital for small and medium businesses in South Africa.
                    </p>
                  </div>
                  <div className="cg-buttons">
                    <Link
                      href="/business-application"
                      className="btn btn-primary btn-md inline-flex items-center justify-center min-w-[14.8rem] px-[3.6rem] h-[5.2rem] rounded-[0.4rem] bg-[#BDF500] text-black font-sans text-[1.5rem] font-bold tracking-wide transition-all hover:bg-white cursor-pointer shadow-lg active:scale-95"
                    >
                      <span className="btn-text">Apply Now</span>
                    </Link>
                  </div>
                </div>

                {/* Media Right Card (Compact stadium photo: width 29rem) */}
                <div
                  className="cg-item cg-item-media w-full lg:w-[29rem] flex-shrink-0 lg:-ml-[1px] rounded-[8rem] border border-white overflow-hidden relative shadow-lg will-change-transform min-h-[30rem] lg:min-h-[auto]"
                  style={{ borderColor: '#ffffff', borderWidth: '1px' }}
                >
                  <img
                    src="/images/funding-goals.jpg"
                    alt="Ambitious Business Goals"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Row 2: 4 Connected Cards locked with contiguous -1px borders */}
              <div
                ref={goalsRow2Ref}
                className="cg-row flex flex-col sm:flex-row flex-wrap lg:flex-nowrap lg:-mt-[1px] z-[1]"
              >
                {goals.map((g, idx) => (
                  <div
                    key={idx}
                    className="cg-item cg-item-content flex-1 p-[3.6rem_2.8rem_4rem] bg-black rounded-[3.2rem] border border-white flex flex-col justify-between min-h-[25rem] shadow-lg will-change-transform -mt-[1px] sm:mt-0 sm:-ml-[1px] first:ml-0"
                    style={{ borderColor: '#ffffff', borderWidth: '1px' }}
                  >
                    <div className="cg-icon w-[3.2rem] h-[3.2rem] mb-[2.8rem] flex items-center">
                      <img src={g.icon} alt={g.title} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h5 className="cg-title font-sans font-medium text-[2.1rem] text-white mb-[0.8rem] tracking-tight min-h-[4.8rem]">
                        {g.title}
                      </h5>
                      <p className="cg-text font-sans text-[1.4rem] leading-[1.45] text-white/70 font-medium">
                        {g.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. Benefits Section (Strict Left Sticky + Natural Flow Right Cards) */}
      <section className="section section-pad-top section-pad-bottom section-light section-benefits !overflow-visible py-[12rem] lg:py-[18rem] bg-[#f9f9fa] text-black border-t border-black/5">
        <div className="container-sm max-w-[110.2rem] mx-auto px-[1.6rem] !overflow-visible">
          <div
            className="s-inner flex flex-col lg:flex-row items-start justify-between relative !overflow-visible"
            style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}
          >
            
            {/* Left Side Sticky Behavior */}
            <div
              className="s-content w-full lg:w-[42.6rem] lg:min-w-[42.6rem] lg:mr-[3.6rem] mb-[4rem] lg:mb-0 lg:sticky lg:top-[12rem] lg:self-start m-0 p-0"
              style={{ position: 'sticky', top: '12rem', alignSelf: 'flex-start' }}
            >
              <h2 className="s-title font-display font-black text-[4.4rem] sm:text-[5.4rem] lg:text-[5.8rem] uppercase leading-[0.82] text-black tracking-tight m-0 p-0">
                Benefits of getting capital via cash advance to fund your business needs
              </h2>
            </div>

            {/* Right Side Natural Scroll Flow */}
            <div className="benefits flex-1 w-full flex flex-col gap-[1.6rem] m-0 p-0" style={{ flexGrow: 1 }}>
              {benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="benefit p-[4rem] bg-white rounded-[3.2rem] border border-black/10 shadow-sm flex flex-col justify-between"
                  style={{ backgroundColor: '#ffffff', color: '#000000', borderRadius: '3.2rem' }}
                >
                  <h5 className="benefit-title font-serif font-bold text-[2.4rem] sm:text-[2.6rem] text-black mb-[1.6rem] tracking-tight leading-[1.2]">
                    {b.title}
                  </h5>
                  <p className="benefit-text font-sans text-[1.6rem] leading-[1.55] text-neutral-800 font-normal">
                    {b.text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 5. Qualify Section (Light) */}
      <section className="section section-pad-top section-pad-bottom section-light section-qualify py-[10rem] lg:py-[14rem] bg-[#ffffff] text-black overflow-hidden border-t border-black/5">
        <div className="container-sm max-w-[110.2rem] mx-auto px-[1.6rem]">
          
          {/* Top Row: height 34.8rem */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[4.8rem] items-center mb-[6.4rem]">
            <div className="lg:col-span-6 h-auto lg:h-[34.8rem] flex flex-col items-start justify-center">
              <h2 className="font-display font-black text-[4.4rem] sm:text-[5.8rem] lg:text-[6.8rem] uppercase leading-[0.88] text-black tracking-tight mb-[2.4rem]">
                How Do I Qualify for a Cash Advance?
              </h2>
              <Link
                href="/business-application"
                className="btn btn-primary btn-md inline-flex items-center justify-center px-[3.6rem] h-[5.2rem] rounded-[0.4rem] bg-black text-[#BDF500] font-sans text-[1.5rem] font-bold tracking-wide transition-all hover:bg-[#BDF500] hover:text-black cursor-pointer shadow-lg active:scale-95"
              >
                <span className="btn-text">Apply Now</span>
              </Link>
            </div>
            <div className="lg:col-span-6 w-full h-[28rem] lg:h-[34.8rem] rounded-[4rem] overflow-hidden border border-black/10 shadow-xl">
              <img
                src="/images/funding-qualify.jpg"
                alt="How Do I Qualify"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bottom 4 Qualification Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2.4rem]">
            {qualifications.map((q, idx) => (
              <div
                key={idx}
                className="p-[3.2rem] bg-[#f9f9fa] rounded-[2.8rem] border border-black/10 flex flex-col justify-between min-h-[22rem] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="w-[4rem] h-[4rem] mb-[2rem]">
                  <img src={q.icon} alt={q.title} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-[2rem] text-black mb-[0.6rem] tracking-tight">
                    {q.title}
                  </h3>
                  <p className="font-sans text-[1.45rem] leading-[1.5] text-neutral-600 font-medium">
                    {q.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. How Long Does It Take Section (Spacious Left Card, Compact Right Photo) */}
      <section className="section section-pad-top section-pad-bottom section-how-long py-[10rem] lg:py-[14rem] bg-black text-white overflow-hidden">
        <div className="container-sm max-w-[110.2rem] mx-auto px-[1.6rem]">
          <div className="s-inner">
            <div
              ref={howLongRowRef}
              className="content-grid content-grid-one flex flex-col lg:flex-row items-stretch justify-between w-full"
            >
              
              {/* Left Content Card (Spacious) */}
              <div
                className="cg-item cg-item-content flex-1 p-[4.8rem] lg:p-[5.6rem] rounded-[4rem] border border-white bg-black flex flex-col justify-between mb-[2.4rem] lg:mb-0 shadow-lg will-change-transform"
                style={{ borderColor: '#ffffff', borderWidth: '1px' }}
              >
                <div className="max-w-[58rem]">
                  <h2 className="cg-title font-display font-black text-[4.2rem] sm:text-[5.4rem] lg:text-[6.2rem] uppercase leading-[0.82] text-white tracking-tight mb-[2rem]">
                    How Long Does It Take to Get Business Funding?
                  </h2>
                  <p className="cg-text font-sans text-[1.6rem] sm:text-[1.7rem] leading-[1.6] text-white/80 font-normal mb-[3.6rem]">
                    As a business owner, securing the necessary funds to grow your enterprise is crucial. One of the most common questions we receive is: “How long does it take to get business funding?” The answer depends on various factors, but with the right partner, the process can be streamlined significantly.
                  </p>
                </div>
                <div className="cg-buttons">
                  <Link
                    href="/business-application"
                    className="btn btn-primary btn-md inline-flex items-center justify-center min-w-[14.8rem] px-[3.6rem] h-[5.2rem] rounded-[0.4rem] bg-[#BDF500] text-black font-sans text-[1.5rem] font-bold tracking-wide transition-all hover:bg-white cursor-pointer shadow-lg active:scale-95"
                  >
                    <span className="btn-text">Read More</span>
                  </Link>
                </div>
              </div>

              {/* Right Media Card (Compact stadium photo: width 29rem) */}
              <div
                className="cg-item cg-item-media w-full lg:w-[29rem] flex-shrink-0 lg:-ml-[1px] rounded-[8rem] border border-white overflow-hidden relative shadow-lg will-change-transform min-h-[30rem] lg:min-h-[auto]"
                style={{ borderColor: '#ffffff', borderWidth: '1px' }}
              >
                <img
                  src="/images/funding-how-long.jpg"
                  alt="Funding timeline"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <CTASection />

      {/* 8. Footer */}
      <Footer />
    </main>
  );
}
