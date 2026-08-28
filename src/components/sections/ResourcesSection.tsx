'use client';

import Link from 'next/link';

interface ResourceItem {
  title: string;
  text: string;
  btnText: string;
  href: string;
  imageSrc: string;
}

const resourcesData: ResourceItem[] = [
  {
    title: 'Merchant portal',
    text: 'See the latest business updates, marketing opportunities, onboarding information and more.',
    btnText: 'Read more',
    href: '/merchant-portal',
    imageSrc: '/images/resource-1.jpg',
  },
  {
    title: 'Payup app',
    text: 'Want a loadshedding-proof transaction process? Complete offline payments from anywhere using the PayUp App.',
    btnText: 'Learn more',
    href: '/payup',
    imageSrc: '/images/resource-2.jpg',
  },
  {
    title: 'Integrations',
    text: "Add us as a payment method on your website by using our pre-built plugins or custom API's.",
    btnText: 'Learn more',
    href: '/integrations',
    imageSrc: '/images/resource-3.jpg',
  },
];

export default function ResourcesSection() {
  return (
    <section className="section section-resources py-[8rem] lg:py-[12rem] bg-black text-white overflow-hidden">
      <div className="container">
        <div className="s-inner flex flex-col gap-[4.8rem] lg:gap-[6.4rem]">
          
          {/* Header */}
          <div className="s-content">
            <h2 className="s-title s-title-alt font-display font-black text-[4.8rem] sm:text-[6.4rem] lg:text-[7.6rem] xl:text-[8.3rem] uppercase leading-[0.85] text-white tracking-tight">
              Get started with these resources
            </h2>
          </div>

          {/* Resources Grid */}
          <div className="resources grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2.4rem] lg:gap-[3.2rem]">
            {resourcesData.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="resource group relative flex flex-col cursor-pointer"
              >
                <div className="resource-inner flex flex-col w-full">
                  
                  {/* Top Image Card */}
                  <div className="resource-image w-full aspect-[4/3] rounded-[3.2rem] lg:rounded-[4rem] overflow-hidden bg-neutral-900 border border-white/10 mb-[1.6rem]">
                    <div className="w-full h-full overflow-hidden">
                      <img
                        width="1595"
                        height="1195"
                        className="w-full h-full object-cover transform-gpu transition-transform duration-700 ease-[cubic-bezier(0,0.55,0.45,1)] group-hover:scale-110"
                        alt={item.title}
                        src={item.imageSrc}
                      />
                    </div>
                  </div>

                  {/* Middle Title Pill */}
                  <div className="resource-title-wrapper relative h-[7.2rem] sm:h-[8rem] lg:h-[9.6rem] px-[2.4rem] rounded-[9.6rem] border border-white bg-black text-white flex items-center justify-center overflow-hidden transition-colors duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black">
                    <h3 className="resource-title font-display font-black text-[2.8rem] sm:text-[3.2rem] lg:text-[4rem] uppercase tracking-tight text-white transition-colors duration-500 group-hover:text-black whitespace-nowrap">
                      {item.title}
                    </h3>
                  </div>

                  {/* Bottom Content Card */}
                  <div className="resource-content relative -mt-[1px] p-[2.4rem] lg:p-[3.2rem] rounded-[2.4rem] lg:rounded-[3.2rem] border border-white bg-black text-white flex flex-col justify-between flex-grow min-h-[22rem] transition-colors duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black">
                    <p className="resource-text font-sans text-[1.4rem] sm:text-[1.5rem] lg:text-[1.6rem] leading-[1.5] text-center text-white/80 transition-colors duration-500 group-hover:text-black font-normal mb-[2.4rem]">
                      {item.text}
                    </p>

                    {/* Action Button: Text always crystal-clear white on black background */}
                    <div className="btn relative w-full h-[4.8rem] lg:h-[5.2rem] rounded-[0.4rem] border border-white text-white bg-transparent flex items-center justify-center font-sans text-[1.4rem] font-medium tracking-wide transition-all duration-500 overflow-hidden group-hover:border-black group-hover:bg-black group-hover:text-white">
                      <span className="relative z-10 text-white font-medium">
                        {item.btnText}
                      </span>
                    </div>
                  </div>

                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
