'use client';

import React from 'react';

const brands = [
  {
    type: 'long',
    width: 161,
    height: 30,
    src: 'https://payjustnow.com/wp-content/uploads/2023/11/Logo-1.png',
  },
  {
    type: 'normal',
    width: 98,
    height: 66,
    src: 'https://payjustnow.com/wp-content/uploads/2023/11/Vector.svg',
  },
  {
    type: 'long',
    width: 161,
    height: 52,
    src: 'https://payjustnow.com/wp-content/uploads/2023/11/Mask-group.png',
  },
  {
    type: 'long',
    width: 800,
    height: 168,
    src: 'https://payjustnow.com/wp-content/uploads/2025/04/makro-dark-1.png',
  },
  {
    type: 'long',
    width: 617,
    height: 75,
    src: 'https://payjustnow.com/wp-content/uploads/2025/04/Frame-2.svg',
  },
];

export default function BnplBrandCarousel() {
  return (
    <section className="section section-carousel section-brands section-light">
      <div className="carousel carousel-logos carousel-light">
        <div className="carousel-track">
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
