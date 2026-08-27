'use client';

import Link from 'next/link';

export default function MarketingSection() {
  return (
    <section className="section section-marketing section-image-stack">
      <div className="container">
        <div className="s-inner">
          <div className="image-stack">
            <div className="image-stack-inner">
              <div className="image-stack-item image-stack-item-0">
                <figure className="media-wrapper image-wrapper responsive">
                  <span className="media-inner image-inner">
                    <img width="1800" height="1324" className="media image" alt="" decoding="async" src="https://payjustnow.com/wp-content/uploads/2025/04/bath3.jpg" />
                  </span>
                </figure>
              </div>
              <div className="image-stack-item image-stack-item-1">
                <figure className="media-wrapper image-wrapper responsive">
                  <span className="media-inner image-inner">
                    <img width="1800" height="1324" className="media image" alt="" decoding="async" src="https://payjustnow.com/wp-content/uploads/2025/04/bath3.jpg" />
                  </span>
                </figure>
              </div>
              <div className="image-stack-item image-stack-item-2">
                <figure className="media-wrapper image-wrapper responsive">
                  <span className="media-inner image-inner">
                    <img width="1800" height="1324" className="media image" alt="" decoding="async" src="https://payjustnow.com/wp-content/uploads/2025/04/bath3.jpg" />
                  </span>
                </figure>
              </div>
            </div>
          </div>
          <div className="s-content">
            <span className="s-label">
              Grow your business
            </span>
            <h2 className="s-title">
              Marketing solutions
            </h2>
            <p className="s-text">
              Get your business noticed by our community of 2.6 million shoppers and turn interested browsers into new customers.
            </p>
            <Link href="/marketing-solutions" className="btn btn-primary btn-md">
              <span className="btn-fill"></span>
              <span className="btn-text">Learn More</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
