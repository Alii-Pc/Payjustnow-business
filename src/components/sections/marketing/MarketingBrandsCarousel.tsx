'use client';

import React from 'react';

const brands = [
  {
    type: 'normal',
    width: 97,
    height: 66,
    src: 'https://payjustnow.com/wp-content/uploads/2023/11/Vector-2.svg',
  },
  {
    type: 'long',
    width: 160,
    height: 52,
    src: 'https://payjustnow.com/wp-content/uploads/2023/11/Large-1.png',
  },
  {
    type: 'long',
    width: 161,
    height: 86,
    src: 'https://payjustnow.com/wp-content/uploads/2023/11/Large.png',
  },
  {
    type: 'long',
    width: 800,
    height: 168,
    src: 'https://payjustnow.com/wp-content/uploads/2025/04/makro-light-1.png',
  },
  {
    type: 'long',
    width: 617,
    height: 75,
    src: 'https://payjustnow.com/wp-content/uploads/2025/04/Layer_1.svg',
  },
];

export default function MarketingBrandsCarousel() {
  return (
    <section className="section section-carousel section-brands">
      <div className="carousel carousel-logos">
        <div className="carousel-track flex animate-[marquee_8s_linear_infinite]">
          {[0, 1, 2].map((setIndex) => (
            <React.Fragment key={setIndex}>
              {brands.map((brand, brandIndex) => (
                <div
                  key={`${setIndex}-${brandIndex}`}
                  className={`carousel-item ${brand.type === 'long' ? 'long' : ''}`}
                >
                  <figure className="media-wrapper image-wrapper">
                    <span className="media-inner image-inner">
                      <img
                        width={brand.width}
                        height={brand.height}
                        src={brand.src}
                        className="media image"
                        alt=""
                      />
                    </span>
                  </figure>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
