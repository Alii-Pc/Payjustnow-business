import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import BnplHeroSection from '@/components/sections/bnpl/BnplHeroSection';
import BnplBrandCarousel from '@/components/sections/bnpl/BnplBrandCarousel';
import BnplHowSection from '@/components/sections/bnpl/BnplHowSection';
import BnplOnlineSection from '@/components/sections/bnpl/BnplOnlineSection';
import BnplInStoreSection from '@/components/sections/bnpl/BnplInStoreSection';
import BnplSolutionsSection from '@/components/sections/bnpl/BnplSolutionsSection';
import BnplMerchantsSection from '@/components/sections/bnpl/BnplMerchantsSection';
import BnplIntegrationSection from '@/components/sections/bnpl/BnplIntegrationSection';
import BnplIntegrationsCarousel from '@/components/sections/bnpl/BnplIntegrationsCarousel';
import CTASection from '@/components/sections/CTASection';

export const metadata = {
  title: 'BNPL for Business - PayJustNow',
  description: 'Offer interest-free split payments and let customers pay in 3 easy instalments. Discover how PayJustNow BNPL helps increase conversion rates and basket sizes.',
};

export default function BNPLPage() {
  return (
    <main id="bnpl" className="site" data-barba="container" data-barba-namespace="bnpl">
      <Header />
      <BnplHeroSection />
      <BnplBrandCarousel />
      <BnplHowSection />
      <BnplOnlineSection />
      <BnplInStoreSection />
      <BnplSolutionsSection />
      <BnplMerchantsSection />
      <BnplIntegrationSection />
      <BnplIntegrationsCarousel />
      <CTASection />
      <Footer />
    </main>
  );
}
