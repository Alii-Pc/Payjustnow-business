'use client';

import React from 'react';

const integrationLogos = [
  {
    type: 'long',
    width: 160,
    height: 45,
    src: 'https://payjustnow.com/wp-content/uploads/2023/11/Magento-1.svg',
  },
  {
    type: 'normal',
    width: 90,
    height: 90,
    src: 'https://payjustnow.com/wp-content/uploads/2023/11/Subtract-2.svg',
  },
  {
    type: 'long',
    width: 160,
    height: 47,
    src: 'https://payjustnow.com/wp-content/uploads/2023/11/Group-3.svg',
  },
  {
    type: 'long',
    width: 160,
    height: 36,
    src: 'https://payjustnow.com/wp-content/uploads/2023/11/Group-4.svg',
  },
];

export default function BnplIntegrationsCarousel() {
  return (
    <section className="section section-carousel section-integrations">
      <div className="carousel carousel-logos carousel-small">
        <div className="carousel-track">
          {[0, 1, 2].map((setIndex) => (
            <React.Fragment key={setIndex}>
              {integrationLogos.map((logo, logoIndex) => (
                <div
                  key={`${setIndex}-${logoIndex}`}
                  className={`carousel-item ${logo.type === 'long' ? 'long' : ''}`}
                >
                  <figure className="media-wrapper image-wrapper">
                    <span className="media-inner image-inner">
                      <img
                        width={logo.width}
                        height={logo.height}
                        src={logo.src}
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
