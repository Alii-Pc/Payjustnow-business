import PageLoader from '@/components/PageLoader';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import MarketingHeroSection from '@/components/sections/marketing/MarketingHeroSection';
import MarketingStatisticsSection from '@/components/sections/marketing/MarketingStatisticsSection';
import MarketingPromoteSection from '@/components/sections/marketing/MarketingPromoteSection';
import MarketingDealsSection from '@/components/sections/marketing/MarketingDealsSection';
import MarketingStoreDirectorySection from '@/components/sections/marketing/MarketingStoreDirectorySection';
import MarketingBrandsCarousel from '@/components/sections/marketing/MarketingBrandsCarousel';
import CTASection from '@/components/sections/CTASection';

export const metadata = {
  title: 'Marketing Solutions - PayJustNow',
  description: 'Get noticed with PayJustNow. Increase your reach, drive traffic, and boost sales across 2.6 million shoppers.',
};

export default function MarketingSolutionsPage() {
  return (
    <>
      <PageLoader />
      <main id="marketing" className="site" data-barba="container" data-barba-namespace="marketing">
        <Header />
        <MarketingHeroSection />
        <MarketingStatisticsSection />
        <MarketingPromoteSection />
        <MarketingDealsSection />
        <MarketingStoreDirectorySection />
        <MarketingBrandsCarousel />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
