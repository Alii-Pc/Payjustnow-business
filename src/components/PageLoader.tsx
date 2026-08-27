'use client';

import { useState, useEffect } from 'react';

export default function PageLoader() {
  const [loaded, setLoaded] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
      document.documentElement.classList.add('site-loaded');
    }, 1200);

    const removeTimer = setTimeout(() => {
      setRemoved(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div 
      className={`page-loader ${loaded ? 'page-loader-exit' : ''}`}
      style={{
        transition: 'opacity 0.6s cubic-bezier(0.19, 1, 0.22, 1), transform 0.8s cubic-bezier(0.19, 1, 0.22, 1)',
        opacity: loaded ? 0 : 1,
        transform: loaded ? 'translateY(-100%)' : 'none',
        pointerEvents: loaded ? 'none' : 'all',
      }}
    >
      <div className="page-loader-bg">
        <div className="page-loader-bg-top">
          <div className="rounded"></div>
        </div>
        <div className="page-loader-bg-bottom">
          <div className="rounded"></div>
        </div>
      </div>
      <div className="page-loader-bg page-loader-bg-alt">
        <div className="page-loader-bg-top">
          <div className="rounded"></div>
        </div>
        <div className="page-loader-bg-bottom">
          <div className="rounded"></div>
        </div>
      </div>
      <div className="page-loader-logo">
        <svg className="letter" width="428" height="425" viewBox="0 0 428 425" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="shape" d="M244.814 273.632L304.437 392.041C312.07 407.2 300.991 425 283.894 425H214.022H106.989H22.9418C10.2933 425 0 414.779 0 402.219V318.761V212.478V106.239V22.781C0 10.1778 10.2496 0 22.9418 0H106.989H214.022H321.011H405.058C417.707 0 428 10.1778 428 22.781V106.239V212.478V281.861C428 298.795 410.03 309.796 394.809 302.216L275.563 243.012C255.893 233.267 234.957 254.056 244.814 273.632Z" fill="white"/>
          <path className="rect" d="M0 20.1422C0 9.01797 8.95431 0 20 0H408C419.046 0 428 9.01796 428 20.1422V404.858C428 415.982 419.046 425 408 425H20C8.9543 425 0 415.982 0 404.858V20.1422Z" fill="white" style={{ opacity: 0.1 }}/>
        </svg>
        <svg className="letter" width="428" height="425" viewBox="0 0 428 425" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="shape" d="M183.229 151.368L123.607 32.9588C115.974 17.8004 127.052 0 144.106 0H213.978H321.011H405.058C417.707 0 428 10.1778 428 22.781V106.239V212.522V318.761V402.219C428 414.822 417.707 425 405.058 425H321.011H213.978H106.989H22.9417C10.2496 425 0 414.822 0 402.219V318.761V212.522V143.096C0 126.162 17.926 115.161 33.1914 122.74L152.437 181.945C172.151 191.733 193.086 170.944 183.229 151.368Z" fill="white"/>
          <path className="rect" d="M0 20.1422C0 9.01797 8.95431 0 20 0H408C419.046 0 428 9.01796 428 20.1422V404.858C428 415.982 419.046 425 408 425H20C8.9543 425 0 415.982 0 404.858V20.1422Z" fill="white" style={{ opacity: 0.1 }}/>
        </svg>
        <svg className="letter" width="428" height="425" viewBox="0 0 428 425" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="shape" d="M385.998 413.784L339.896 339.169C334.881 331.07 325.329 326.653 315.995 328.732C311.852 329.641 307.926 331.677 304.742 334.881L220.695 418.331C216.377 422.618 210.533 425 204.47 425H106.989H22.9417C10.2932 425 0 414.823 0 402.221V318.728V212.5V106.228V22.9086C0 15.7199 3.0967 9.78698 7.76357 5.75957C18.3622 -3.37789 34.8053 -0.433058 42.1327 11.4326L88.1034 85.7882C93.1192 93.8863 102.671 98.3034 112.005 96.2247C116.148 95.3153 120.074 93.28 123.258 90.0754L207.261 6.66902C211.579 2.38177 217.424 0 223.486 0H321.011H405.058C417.707 0 428 10.1768 428 22.7787V106.228V212.5V350.991V402.135C428 411.445 422.81 418.634 415.744 422.315C405.233 427.772 392.192 423.831 385.998 413.784Z" fill="white"/>
          <path className="rect" d="M0 20.1422C0 9.01797 8.95431 0 20 0H408C419.046 0 428 9.01796 428 20.1422V404.858C428 415.982 419.046 425 408 425H20C8.9543 425 0 415.982 0 404.858V20.1422Z" fill="white" style={{ opacity: 0.1 }}/>
        </svg>
      </div>
    </div>
  );
}
