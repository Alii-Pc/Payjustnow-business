'use client';

import Link from 'next/link';

export default function SolutionsSection() {
  return (
    <section className="section section-solutions">
      <div className="container">
        <div className="s-inner">
          <div className="s-content">
            <h2 className="s-title">
              More ways to get paid
            </h2>
            <p className="s-text">
              Expect more orders as shoppers pay later while you get paid upfront. We created these straight and split payment services to help South Africans boost buying power.
            </p>
          </div>
          <div className="solutions">
            <div className="solution">
              <div className="solution-image">
                <figure className="media-wrapper image-wrapper responsive">
                  <span className="media-inner image-inner">
                    <img 
                      width="1400" 
                      height="1274" 
                      className="media image" 
                      alt="Retail Credit" 
                      decoding="async" 
                      src="https://payjustnow.com/wp-content/uploads/2025/04/pink3.jpg" 
                    />
                  </span>
                </figure>
              </div>
              <div className="solution-content">
                <span className="solution-label label">
                  Retail Credit
                </span>
                <h3 className="solution-title">
                  Pay in 12
                </h3>
                <p className="solution-text">
                  For some shoppers, even paying in 3 places your product out of reach. That's why we've introduced an extra flexible retail credit option, Pay in 12. It makes bigger-ticket items more attainable with smaller payments spread over 12 months.
                </p>
                <Link href="/retail-credit" className="btn btn-light btn-md">
                  <span className="btn-fill"></span>
                  <span className="btn-text">Learn more</span>
                </Link>
              </div>
            </div>
            <div className="solution">
              <div className="solution-image">
                <figure className="media-wrapper image-wrapper responsive">
                  <span className="media-inner image-inner">
                    <img 
                      width="1400" 
                      height="1264" 
                      className="media image" 
                      alt="BNPL" 
                      decoding="async" 
                      src="https://payjustnow.com/wp-content/uploads/2025/04/three.jpg" 
                    />
                  </span>
                </figure>
              </div>
              <div className="solution-content">
                <span className="solution-label label">
                  BNPL
                </span>
                <h3 className="solution-title">
                  Pay in 3
                </h3>
                <p className="solution-text">
                  Convert more browsers into buyers by making your products affordable; shoppers who PayJustNow can split their purchases into 3 interest-free payments and ease the pressure on their budget. Think bigger basket sizes and less abandoned carts.
                </p>
                <Link href="/bnpl" className="btn btn-light btn-md">
                  <span className="btn-fill"></span>
                  <span className="btn-text">Learn more</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
