import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import MarketingHeroSection from '@/components/sections/marketing/MarketingHeroSection';
import MarketingBrandsCarousel from '@/components/sections/marketing/MarketingBrandsCarousel';
import MarketingPromoteSection from '@/components/sections/marketing/MarketingPromoteSection';
import MarketingStatisticsSection from '@/components/sections/marketing/MarketingStatisticsSection';
import MarketingDealsSection from '@/components/sections/marketing/MarketingDealsSection';
import MarketingStoreDirectorySection from '@/components/sections/marketing/MarketingStoreDirectorySection';
import CTASection from '@/components/sections/CTASection';

export const metadata = {
  title: 'Marketing Solutions - PayJustNow',
  description: 'Reach high-intent shoppers directly with PayJustNow performance marketing. Promote deals, drive traffic to your store, and boost conversion.',
};

export default function MarketingSolutionsPage() {
  return (
    <main id="marketing" className="site" data-barba="container" data-barba-namespace="marketing">
      <Header />
      <MarketingHeroSection />
      <MarketingBrandsCarousel />
      <MarketingPromoteSection />
      <MarketingStatisticsSection />
      <MarketingDealsSection />
      <MarketingStoreDirectorySection />
      <CTASection />
      <Footer />
    </main>
  );
}
