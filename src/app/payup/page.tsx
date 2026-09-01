import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import PayUpHeroSection from '@/components/sections/payup/PayUpHeroSection';
import PayUpBrandsCarousel from '@/components/sections/payup/PayUpBrandsCarousel';
import PayUpFeaturesSection from '@/components/sections/payup/PayUpFeaturesSection';
import PayUpCTASection from '@/components/sections/payup/PayUpCTASection';

export const metadata = {
  title: 'PayUp App - PayJustNow',
  description: 'Easy transactions are just a download away. Use the app to offer PayJustNow’s split and straight payment options in-store, and manage transactions from your device.',
};

export default function PayUpPage() {
  return (
    <main id="payup" className="site" data-barba="container" data-barba-namespace="payup">
      <Header />
      <PayUpHeroSection />
      <PayUpBrandsCarousel />
      <PayUpFeaturesSection />
      <PayUpCTASection />
      <Footer />
    </main>
  );
}
