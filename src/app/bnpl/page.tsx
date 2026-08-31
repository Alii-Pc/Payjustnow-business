import PageLoader from '@/components/PageLoader';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import BnplHeroSection from '@/components/sections/bnpl/BnplHeroSection';
import BnplBrandCarousel from '@/components/sections/bnpl/BnplBrandCarousel';
import BnplMerchantsSection from '@/components/sections/bnpl/BnplMerchantsSection';
import BnplHowSection from '@/components/sections/bnpl/BnplHowSection';
import BnplIntegrationSection from '@/components/sections/bnpl/BnplIntegrationSection';
import BnplIntegrationsCarousel from '@/components/sections/bnpl/BnplIntegrationsCarousel';
import BnplInStoreSection from '@/components/sections/bnpl/BnplInStoreSection';
import BnplOnlineSection from '@/components/sections/bnpl/BnplOnlineSection';
import BnplSolutionsSection from '@/components/sections/bnpl/BnplSolutionsSection';
import CTASection from '@/components/sections/CTASection';

export const metadata = {
  title: 'BNPL - PayJustNow',
  description: 'Split your purchases into 3 interest-free payments. PayJustNow BNPL makes products affordable for every shopper.',
};

export default function BNPLPage() {
  return (
    <>
      <PageLoader />
      <main id="bnpl" className="site" data-barba="container" data-barba-namespace="bnpl">
        <Header />
        <BnplHeroSection />
        <BnplBrandCarousel />
        <BnplMerchantsSection />
        <BnplHowSection />
        <BnplIntegrationSection />
        <BnplIntegrationsCarousel />
        <BnplInStoreSection />
        <BnplOnlineSection />
        <BnplSolutionsSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
