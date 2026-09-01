import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import MerchantHeroSection from '@/components/sections/merchant-portal/MerchantHeroSection';
import MerchantBrandsCarousel from '@/components/sections/merchant-portal/MerchantBrandsCarousel';
import MerchantAssistantSection from '@/components/sections/merchant-portal/MerchantAssistantSection';
import MerchantFeaturesSection from '@/components/sections/merchant-portal/MerchantFeaturesSection';
import MerchantFaqsSection from '@/components/sections/merchant-portal/MerchantFaqsSection';
import CTASection from '@/components/sections/CTASection';

export const metadata = {
  title: 'Merchant Portal - PayJustNow',
  description: 'Make the most of your access to our business tools. Whether you need marketing tips or technical guidance, our merchant portal is available with chat support whenever you need it.',
};

export default function MerchantPortalPage() {
  return (
    <main id="merchant_portal" className="site" data-barba="container" data-barba-namespace="merchant_portal">
      <Header />
      <MerchantHeroSection />
      <MerchantBrandsCarousel />
      <MerchantAssistantSection />
      <MerchantFeaturesSection />
      <MerchantFaqsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
