'use client';

export default function CTASection() {
  return (
    <section className="section section-cta">
      <div className="container">
        <div className="cta">
          <div className="cta-bg"></div>
          <h5 className="cta-title">
            Join the PayJustNow Business Network
          </h5>
          <a 
            href="#" 
            onClick={(e) => e.preventDefault()}
            className="btn btn-dark btn-md" 
          >
            <span className="btn-fill"></span>
            <span className="btn-text">Send request</span>
          </a>
        </div>
      </div>
    </section>
  );
}
