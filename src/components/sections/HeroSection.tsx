'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="section section-hero">
      <div className="container">
        <div className="s-inner">
          <div className="s-content">
            <h1 className="s-title">
              Increase revenue with our retail solutions
            </h1>
            <p className="s-text">
              Let’s get you paid! Increase your sales with split payment options and performance marketing.
            </p>
            <div className="s-buttons">
              <Link 
                href="/business-application" 
                className="btn btn-primary btn-md" 
              >
                <span className="btn-fill"></span>
                <span className="btn-text">Apply Now</span>
              </Link>
            </div>
            <div className="hero-statistics">
              <div className="hero-statistic">
                <span className="hero-statistic-figure">
                  R7.5B
                </span>
                <span className="hero-statistic-text">
                  Total transactions
                </span>
              </div>
              <div className="hero-statistic">
                <span className="hero-statistic-figure">
                  2.6M
                </span>
                <span className="hero-statistic-text">
                  Customers
                </span>
              </div>
              <div className="hero-statistic">
                <span className="hero-statistic-figure">
                  R7.8B
                </span>
                <span className="hero-statistic-text">
                  Available to spend
                </span>
              </div>
            </div>
          </div>
          <div className="s-media">
            <div className="hero-mask">
              <svg className="hero-mask-svg" width="1" height="1" viewBox="0 0 1 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <clipPath id="hero-mask-path-home" clipPathUnits="objectBoundingBox" transform="scale(0.0015923566878981,0.0015923566878981)">
                  <path className="shape" d="M428.188 479.807L493.206 595.727C495.113 599.128 496.012 602.907 495.819 606.705C495.626 610.503 494.347 614.194 492.104 617.428C489.861 620.661 486.728 623.33 483.002 625.18C479.276 627.031 475.082 628.001 470.817 628H25.0195C21.7243 628 18.4616 627.42 15.4186 626.292C12.3756 625.165 9.61246 623.513 7.2877 621.431C4.96293 619.35 3.12238 616.879 1.87178 614.161C0.621186 611.443 -0.0147994 608.532 0.000261359 605.595L0.000312352 22.3033C0.000312869 16.3881 2.63624 10.7151 7.3283 6.53242C12.0203 2.34974 18.384 -5.80099e-07 25.0196 0L602.981 5.0527e-05C606.266 5.08142e-05 609.52 0.576931 612.555 1.69778C615.591 2.81862 618.349 4.46142 620.672 6.53247C622.995 8.60353 624.838 11.0623 626.096 13.7682C627.353 16.4742 628 19.3744 628 22.3033V487.901C627.998 491.701 626.906 495.438 624.829 498.756C622.751 502.075 619.757 504.865 616.131 506.862C612.504 508.86 608.365 509.998 604.106 510.169C599.848 510.34 595.611 509.538 591.797 507.839L461.738 449.879C457.041 447.79 451.726 447.071 446.545 447.823C441.365 448.576 436.581 450.762 432.87 454.071C429.16 457.381 426.712 461.647 425.871 466.266C425.031 470.885 425.841 475.622 428.188 479.807Z" fill="black"/>
                </clipPath>
              </svg>
              <div 
                className="media-wrapper video-wrapper" 
                style={{
                  clipPath: 'url(#hero-mask-path-home)',
                  WebkitClipPath: 'url(#hero-mask-path-home)',
                }}
              >
                <div className="media-inner video-inner">
                  <video className="media video" autoPlay loop muted playsInline>
                    <source src="https://payjustnow.com/wp-content/uploads/2023/12/home.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
