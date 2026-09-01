'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export default function PageLoader() {
  const pathname = usePathname();
  const loaderRef = useRef<HTMLDivElement>(null);
  const bg1Ref = useRef<HTMLDivElement>(null);
  const bg2Ref = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const isFirstLoad = useRef(true);
  const [isActive, setIsActive] = useState(true);

  // 1. Initial Page Load Animation
  useEffect(() => {
    if (!loaderRef.current || !bg1Ref.current || !bg2Ref.current || !logoRef.current) return;

    const letters = logoRef.current.querySelectorAll('.letter');
    const roundHeight = window.innerWidth <= 768 ? '5vh' : '10vh';

    const ctx = gsap.context(() => {
      // Set initial positions
      gsap.set(loaderRef.current, { display: 'flex', pointerEvents: 'auto' });
      gsap.set([bg1Ref.current, bg2Ref.current], { yPercent: 0 });
      gsap.set(letters, { scale: 0.5, autoAlpha: 0, yPercent: 50 });

      const tl = gsap.timeline({
        onComplete: () => {
          setIsActive(false);
          document.documentElement.classList.add('site-loaded');
        },
      });

      // Step 1: Letters animate in with stagger
      tl.to(letters, {
        scale: 1,
        autoAlpha: 1,
        yPercent: 0,
        ease: 'power4.easeInOut',
        duration: 0.8,
        stagger: 0.05,
      })
      // Step 2: Letters animate out
      .to(letters, {
        autoAlpha: 0,
        yPercent: -30,
        scale: 0.5,
        ease: 'power4.easeInOut',
        duration: 0.5,
        stagger: 0.03,
      }, '+=0.2')
      // Step 3: Layer 1 (black) wipes up
      .to(bg1Ref.current, {
        yPercent: -100,
        ease: 'power3.easeInOut',
        duration: 0.8,
      }, '-=0.3')
      // Step 4: Layer 2 (neon lime green) wipes up with slight offset
      .to(bg2Ref.current, {
        yPercent: -100,
        ease: 'power3.easeInOut',
        duration: 0.85,
      }, '-=0.75')
      .set(loaderRef.current, { display: 'none', pointerEvents: 'none' });
    });

    return () => ctx.revert();
  }, []);

  // 2. Subsequent Route Navigation Animation
  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    if (!loaderRef.current || !bg1Ref.current || !bg2Ref.current) return;

    const roundHeight = window.innerWidth <= 768 ? '5vh' : '10vh';

    const ctx = gsap.context(() => {
      const navTl = gsap.timeline();

      // Wipe curtains UP from bottom
      navTl
        .set(loaderRef.current, { display: 'flex', pointerEvents: 'auto' })
        .fromTo(
          bg2Ref.current,
          { yPercent: 100 },
          { yPercent: 0, ease: 'power4.easeInOut', duration: 0.5 }
        )
        .fromTo(
          bg1Ref.current,
          { yPercent: 100 },
          { yPercent: 0, ease: 'power4.easeInOut', duration: 0.55 },
          '-=0.45'
        )
        // Then wipe curtains UP off screen
        .to(bg1Ref.current, {
          yPercent: -100,
          ease: 'power3.easeInOut',
          duration: 0.7,
        }, '+=0.1')
        .to(bg2Ref.current, {
          yPercent: -100,
          ease: 'power3.easeInOut',
          duration: 0.75,
        }, '-=0.65')
        .set(loaderRef.current, { display: 'none', pointerEvents: 'none' });
    });

    return () => ctx.revert();
  }, [pathname]);

  return (
    <div
      ref={loaderRef}
      className="page-loader"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Neon Lime Green Layer Behind */}
      <div
        ref={bg2Ref}
        className="page-loader-bg page-loader-bg-alt"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#bdf500',
          zIndex: 1,
        }}
      >
        <div className="page-loader-bg-top">
          <div className="rounded" style={{ background: '#bdf500' }}></div>
        </div>
        <div className="page-loader-bg-bottom">
          <div className="rounded" style={{ background: '#bdf500' }}></div>
        </div>
      </div>

      {/* Black Layer on Top */}
      <div
        ref={bg1Ref}
        className="page-loader-bg"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#000000',
          zIndex: 2,
        }}
      >
        <div className="page-loader-bg-top">
          <div className="rounded" style={{ background: '#000000' }}></div>
        </div>
        <div className="page-loader-bg-bottom">
          <div className="rounded" style={{ background: '#000000' }}></div>
        </div>
      </div>

      {/* 3 Letters (P, J, N) */}
      <div
        ref={logoRef}
        className="page-loader-logo"
        style={{
          position: 'relative',
          zIndex: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Letter P */}
        <svg
          className="letter letter-1"
          width="428"
          height="425"
          viewBox="0 0 428 425"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '8vw', minWidth: '48px', maxWidth: '96px', height: 'auto', margin: '0 1vw' }}
        >
          <path
            className="shape"
            d="M244.814 273.632L304.437 392.041C312.07 407.2 300.991 425 283.894 425H214.022H106.989H22.9418C10.2933 425 0 414.779 0 402.219V318.761V212.478V106.239V22.781C0 10.1778 10.2496 0 22.9418 0H106.989H214.022H321.011H405.058C417.707 0 428 10.1778 428 22.781V106.239V212.478V281.861C428 298.795 410.03 309.796 394.809 302.216L275.563 243.012C255.893 233.267 234.957 254.056 244.814 273.632Z"
            fill="white"
          />
        </svg>

        {/* Letter J */}
        <svg
          className="letter letter-2"
          width="428"
          height="425"
          viewBox="0 0 428 425"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '8vw', minWidth: '48px', maxWidth: '96px', height: 'auto', margin: '0 1vw' }}
        >
          <path
            className="shape"
            d="M183.229 151.368L123.607 32.9588C115.974 17.8004 127.052 0 144.106 0H213.978H321.011H405.058C417.707 0 428 10.1778 428 22.781V106.239V212.522V318.761V402.219C428 414.822 417.707 425 405.058 425H321.011H213.978H106.989H22.9417C10.2496 425 0 414.822 0 402.219V318.761V212.522V143.096C0 126.162 17.926 115.161 33.1914 122.74L152.437 181.945C172.151 191.733 193.086 170.944 183.229 151.368Z"
            fill="white"
          />
        </svg>

        {/* Letter N */}
        <svg
          className="letter letter-3"
          width="428"
          height="425"
          viewBox="0 0 428 425"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '8vw', minWidth: '48px', maxWidth: '96px', height: 'auto', margin: '0 1vw' }}
        >
          <path
            className="shape"
            d="M385.998 413.784L339.896 339.169C334.881 331.07 325.329 326.653 315.995 328.732C311.852 329.641 307.926 331.677 304.742 334.881L220.695 418.331C216.377 422.618 210.533 425 204.47 425H106.989H22.9417C10.2932 425 0 414.823 0 402.221V318.728V212.5V106.228V22.9086C0 15.7199 3.0967 9.78698 7.76357 5.75957C18.3622 -3.37789 34.8053 -0.433058 42.1327 11.4326L88.1034 85.7882C93.1192 93.8863 102.671 98.3034 112.005 96.2247C116.148 95.3153 120.074 93.28 123.258 90.0754L207.261 6.66902C211.579 2.38177 217.424 0 223.486 0H321.011H405.058C417.707 0 428 10.1768 428 22.7787V106.228V212.5V350.991V402.135C428 411.445 422.81 418.634 415.744 422.315C405.233 427.772 392.192 423.831 385.998 413.784Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
