import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'Integrations - PayJustNow',
  description: 'Add PayJustNow as a payment method on your website using our pre-built plugins or custom APIs.',
};

export default function IntegrationsPage() {
  return (
    <main id="home" className="site">
      <Header />
      <section className="section section-hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container" style={{ textAlign: 'center', paddingTop: '8rem', paddingBottom: '8rem' }}>
          <h1 className="s-title" style={{ marginBottom: '3rem' }}>
            Integrations
          </h1>
          <p className="s-text" style={{ marginBottom: '4rem', maxWidth: '50rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Add us as a payment method on your website by using our pre-built plugins or custom APIs.
          </p>
          <Link href="/business" className="btn btn-primary btn-md">
            <span className="btn-fill"></span>
            <span className="btn-text">Back to Home</span>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
