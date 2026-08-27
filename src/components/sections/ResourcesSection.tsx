'use client';

import Link from 'next/link';

export default function ResourcesSection() {
  return (
    <section className="section section-resources">
      <div className="container">
        <div className="s-inner">
          <div className="s-content">
            <h2 className="s-title s-title-alt">
              Get started with these resources
            </h2>
          </div>
          <div className="resources">
            <div className="resource">
              <Link className="resource-link" href="/merchant-portal" aria-label="Merchant portal"></Link>
              <div className="resource-inner">
                <div className="resource-image">
                  <figure className="media-wrapper image-wrapper responsive">
                    <span className="media-inner image-inner">
                      <img width="1595" height="1195" className="media image" alt="" decoding="async" src="https://payjustnow.com/wp-content/uploads/2025/01/image-1.jpg" />
                    </span>
                  </figure>
                </div>
                <div className="resource-title-wrapper">
                  <div className="circle-fill"></div>
                  <h3 className="resource-title">
                    <span className="resource-title-text split-line">
                      Merchant portal
                    </span>
                  </h3>
                </div>
                <div className="resource-content">
                  <div className="circle-fill"></div>
                  <p className="resource-text">
                    See the latest business updates, marketing opportunities, onboarding information and more.
                  </p>
                  <Link href="/merchant-portal" className="btn btn-outline-light btn-md">
                    <span className="btn-fill"></span>
                    <span className="btn-text">Read more</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="resource">
              <Link className="resource-link" href="/payup" aria-label="Payup app"></Link>
              <div className="resource-inner">
                <div className="resource-image">
                  <figure className="media-wrapper image-wrapper responsive">
                    <span className="media-inner image-inner">
                      <img width="1694" height="1269" className="media image" alt="" decoding="async" src="https://payjustnow.com/wp-content/uploads/2025/01/Rectangle-4094-1.jpg" />
                    </span>
                  </figure>
                </div>
                <div className="resource-title-wrapper">
                  <div className="circle-fill"></div>
                  <h3 className="resource-title">
                    <span className="resource-title-text split-line">
                      Payup app
                    </span>
                  </h3>
                </div>
                <div className="resource-content">
                  <div className="circle-fill"></div>
                  <p className="resource-text">
                    Want a loadshedding-proof transaction process? Complete offline payments from anywhere using the PayUp App.
                  </p>
                  <Link href="/payup" className="btn btn-outline-light btn-md">
                    <span className="btn-fill"></span>
                    <span className="btn-text">Learn more</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="resource">
              <Link className="resource-link" href="/integrations" aria-label="Integrations"></Link>
              <div className="resource-inner">
                <div className="resource-image">
                  <figure className="media-wrapper image-wrapper responsive">
                    <span className="media-inner image-inner">
                      <img width="1547" height="1158" className="media image" alt="" decoding="async" src="https://payjustnow.com/wp-content/uploads/2025/01/Rectangle-4071-2-1.jpg" />
                    </span>
                  </figure>
                </div>
                <div className="resource-title-wrapper">
                  <div className="circle-fill"></div>
                  <h3 className="resource-title">
                    <span className="resource-title-text split-line">
                      Integrations
                    </span>
                  </h3>
                </div>
                <div className="resource-content">
                  <div className="circle-fill"></div>
                  <p className="resource-text">
                    Add us as a payment method on your website by using our pre-built plugins or custom API's.
                  </p>
                  <Link href="/integrations" className="btn btn-outline-light btn-md">
                    <span className="btn-fill"></span>
                    <span className="btn-text">Learn more</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
