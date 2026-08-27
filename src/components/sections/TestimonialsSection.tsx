'use client';

import { useState, useEffect, useRef } from 'react';
import ArrowSvg from '../icons/ArrowSvg';

interface TestimonialItem {
  image: string;
  width: number;
  height: number;
  role: string;
  name: string;
  quote: string | string[];
}

const testimonialsData: TestimonialItem[] = [
  {
    image: 'https://payjustnow.com/wp-content/uploads/2025/01/Homechoice@2x-1.png',
    width: 209,
    height: 208,
    role: 'Managing Director, Adidas',
    name: 'Paddy Muldoon',
    quote:
      'Introducing an alternative payment option to customers has enabled our Adidas retail business to extend its reach. Access to the PayJustNow team, the integration into our Adidas payment portal, and the end-use consumer experience have been nothing short of seamless. This has led to increased conversions, sales and repeat business. We are excited about future growth with the PayJustNow team.',
  },
  {
    image: 'https://payjustnow.com/wp-content/uploads/2025/01/Homechoice@2x-2.png',
    width: 208,
    height: 208,
    role: 'Business Owner, GoMaxx',
    name: 'James Taylor',
    quote:
      'Signing up with PayJustNow opened a whole new market segment for our business. We now provide customers with interest & fee-free payment terms, PayJustNow promotes our brand to new pre-approved customers within the ecosystem, and its online and in-store functionality supports our omnichannel approach.',
  },
  {
    image: 'https://payjustnow.com/wp-content/uploads/2025/01/Homechoice@2x-3.png',
    width: 208,
    height: 208,
    role: 'Retail Operations, Puma',
    name: 'Nathier Schroeder',
    quote:
      'As a leading sports brand, Puma has always been committed to providing exceptional experiences for our customers. When we partnered with PayJustNow, we were impressed by their innovative payment solution.',
  },
  {
    image: 'https://payjustnow.com/wp-content/uploads/2025/01/Homechoice@2x-4.png',
    width: 209,
    height: 208,
    role: 'Cape Union Mart',
    name: 'Marketing Team',
    quote:
      'PayJustNow gives Cape Union Mart a big advantage by offering customers a simple and adaptable payment option. Our customers stretch the cost over time and avoid interest by paying in instalments. This means more sales potential for Cape Union Mart, fewer financial obstacles for customers, and bigger purchases. It also increases customers’ happiness and loyalty by providing a practical, affordable payment alternative',
  },
  {
    image: 'https://payjustnow.com/wp-content/uploads/2025/04/Logo-2.png',
    width: 180,
    height: 180,
    role: 'Head of Financial Services, Retailability',
    name: 'Tim Maxwell',
    quote: [
      'The partnership with PayJustNow has proven to be a win-win, increasing sales and customer loyalty across all of Retainability’s retail brands and providing our customers with a fee-free, interest-free way to pay.',
      "The PJN team have been innovative in finding solutions and always willing to go the extra mile – it's a pleasure working with them.",
    ],
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1100);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = isMobile ? testimonialsData.length - 1 : testimonialsData.length - 2;

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section className="section section-testimonials py-[8rem] lg:py-[12rem] bg-black text-white overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-[3.2rem] lg:gap-[4.8rem]">
          
          {/* Left Column: Heading (2 lines) & Circular Navigation Arrow Buttons */}
          <div className="flex flex-row lg:flex-col justify-between items-end lg:items-start flex-shrink-0 w-full lg:w-[36rem] xl:w-[42rem] min-h-[auto] lg:min-h-[60rem]">
            <h2 className="font-display font-black text-[4.8rem] sm:text-[6.4rem] lg:text-[7.2rem] xl:text-[8rem] leading-[0.85] uppercase text-white tracking-tight max-w-[48rem]">
              WHY BUSINESSES LOVE<br />PAYJUSTNOW
            </h2>

            {/* Circular Navigation Buttons matching screenshot */}
            <div className="flex items-center gap-[1.8rem] lg:gap-[2.4rem] mt-auto pt-[2.4rem] lg:pt-[4rem]">
              <button
                type="button"
                aria-label="Previous Testimonial"
                className={`w-[6.4rem] h-[6.4rem] lg:w-[7.2rem] lg:h-[7.2rem] rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 ${
                  currentIndex === 0
                    ? 'opacity-35 cursor-not-allowed border-white/20'
                    : 'opacity-100 hover:border-white hover:bg-white/10 active:scale-95 cursor-pointer'
                }`}
                onClick={prevSlide}
                disabled={currentIndex === 0}
              >
                <ArrowSvg direction="left" className="w-[3rem] h-[3rem] lg:w-[3.4rem] lg:h-[3.4rem] text-white" />
              </button>

              <button
                type="button"
                aria-label="Next Testimonial"
                className={`w-[6.4rem] h-[6.4rem] lg:w-[7.2rem] lg:h-[7.2rem] rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 ${
                  currentIndex >= maxIndex
                    ? 'opacity-35 cursor-not-allowed border-white/20'
                    : 'opacity-100 hover:border-white hover:bg-white/10 active:scale-95 cursor-pointer'
                }`}
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
              >
                <ArrowSvg direction="right" className="w-[3rem] h-[3rem] lg:w-[3.4rem] lg:h-[3.4rem] text-white" />
              </button>
            </div>
          </div>

          {/* Right Column: 2-Card Slider Track */}
          <div
            className="flex-1 overflow-hidden relative w-full"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex items-stretch flex-nowrap gap-[2rem] lg:gap-[2.4rem] w-full"
              style={{
                transform: isMobile
                  ? `translateX(calc(-${currentIndex} * (100% + 2rem)))`
                  : `translateX(calc(-${currentIndex} * (50% + 1.2rem)))`,
                transition: 'transform 0.65s cubic-bezier(0.19, 1, 0.22, 1)',
              }}
            >
              {testimonialsData.map((item, index) => (
                <div
                  key={index}
                  className="w-full lg:w-[calc(50%-1.2rem)] flex-shrink-0 bg-[#eff1f1] text-black border border-black/10 rounded-[4.4rem] lg:rounded-[5.6rem] p-[3.2rem] sm:p-[4rem] lg:p-[4.8rem] flex flex-col justify-start items-start relative select-none min-h-[52rem] lg:min-h-[60rem]"
                >
                  {/* Brand Circular Logo Badge */}
                  <div className="w-[8.8rem] h-[8.8rem] lg:w-[10.4rem] lg:h-[10.4rem] rounded-full bg-white flex items-center justify-center p-[1.6rem] mb-[2.8rem] lg:mb-[3.6rem] shadow-none flex-shrink-0">
                    <img
                      width={item.width}
                      height={item.height}
                      className="max-h-[5.2rem] max-w-[7.2rem] w-auto h-auto object-contain"
                      alt={item.name}
                      decoding="async"
                      src={item.image}
                    />
                  </div>

                  {/* Role */}
                  <span className="font-sans text-[1.5rem] lg:text-[1.8rem] font-medium text-black/85 mb-[0.8rem] leading-[1.2]">
                    {item.role}
                  </span>

                  {/* Name (Title Case matching screenshot) */}
                  <h4 className="font-sans text-[2.6rem] lg:text-[3rem] font-medium normal-case text-black tracking-tight mb-[2rem] lg:mb-[2.4rem] leading-[1.1]">
                    {item.name}
                  </h4>

                  {/* Quote Paragraph */}
                  <div className="font-sans text-[1.4rem] sm:text-[1.5rem] lg:text-[1.6rem] font-normal leading-[1.55] text-black/90 space-y-[1.2rem]">
                    {Array.isArray(item.quote) ? (
                      item.quote.map((p, pIdx) => <p key={pIdx}>{p}</p>)
                    ) : (
                      <p>{item.quote}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
