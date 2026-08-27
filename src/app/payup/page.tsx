import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'PayUp App - PayJustNow',
  description: 'Complete offline payments from anywhere using the PayUp merchant app.',
};

export default function PayUpPage() {
  return (
    <main id="home" className="site">
      <Header />
      <section className="section section-hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container" style={{ textAlign: 'center', paddingTop: '8rem', paddingBottom: '8rem' }}>
          <h1 className="s-title" style={{ marginBottom: '3rem' }}>
            PayUp App
          </h1>
          <p className="s-text" style={{ marginBottom: '4rem', maxWidth: '50rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Want a loadshedding-proof transaction process? Complete offline payments from anywhere using the PayUp merchant app.
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
