'use client';

export default function IntegrationsCarousel() {
  const items = [
    {
      id: 'magento-1',
      type: 'long',
      shape: 'rounded-full',
      src: '/images/integ-magento.svg',
      alt: 'Magento',
      imgClass: 'h-[6.4rem] sm:h-[7.6rem] w-auto max-w-[22rem]',
    },
    {
      id: 'xero-1',
      type: 'circle',
      shape: 'rounded-full',
      src: '/images/integ-xero.svg',
      alt: 'Xero',
      imgClass: 'w-[9rem] h-[9rem] sm:w-[11.5rem] sm:h-[11.5rem]',
    },
    {
      id: 'shopify-1',
      type: 'long',
      shape: 'rounded-full',
      src: '/images/integ-shopify.svg',
      alt: 'Shopify',
      imgClass: 'h-[6.2rem] sm:h-[7.4rem] w-auto max-w-[22rem]',
    },
    {
      id: 'woocommerce-1',
      type: 'long-flat-left',
      shape: 'rounded-r-full rounded-l-none',
      src: '/images/integ-woocommerce.svg',
      alt: 'WooCommerce',
      imgClass: 'h-[5.4rem] sm:h-[6.4rem] w-auto max-w-[24rem]',
    },
  ];

  // Repeat for continuous seamless infinite looping
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <section className="section section-carousel section-integrations bg-black pt-0 pb-[8rem] lg:pb-[12rem] overflow-hidden">
      <div className="w-full relative overflow-hidden">
        
        {/* Infinite Marquee Track */}
        <div className="flex items-center gap-[1.2rem] w-max animate-carousel-infinite">
          {repeatedItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className={`flex items-center justify-center bg-[#181818] border border-white/5 flex-shrink-0 transition-all duration-300 hover:bg-[#222222] ${
                item.shape
              } ${
                item.type === 'circle'
                  ? 'w-[18rem] h-[18rem] sm:w-[22rem] sm:h-[22rem] px-[2rem]'
                  : 'h-[18rem] sm:h-[22rem] px-[5.6rem] sm:px-[7.2rem] min-w-[32rem] sm:min-w-[38rem]'
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className={`${item.imgClass} object-contain filter brightness-100 transition-transform duration-300 hover:scale-105`}
              />
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        @keyframes carouselScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-carousel-infinite {
          animation: carouselScroll 26s linear infinite;
        }
        .animate-carousel-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
