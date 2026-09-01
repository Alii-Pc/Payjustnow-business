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
  description: 'Reach high-intent shoppers directly with PayJustNow performance marketing. Promote deals, drive traffic to your store, and boost conversion.',
};

export default function MarketingSolutionsPage() {
  return (
    <main id="marketing" className="site" data-barba="container" data-barba-namespace="marketing">
      <Header />
      {/* 1. Hero Section */}
      <MarketingHeroSection />

      {/* 2. Black Cards with Monogram Letters & Key Statistics */}
      <MarketingStatisticsSection />

      {/* 3. Promote & Digital Marketing 3-Card Grid */}
      <MarketingPromoteSection />

      {/* 4. Deals Grid */}
      <MarketingDealsSection />

      {/* 5. Feature in our Store Directory Image Stack */}
      <MarketingStoreDirectorySection />

      {/* 6. Brands Logo Marquee Carousel */}
      <MarketingBrandsCarousel />

      {/* 7. CTA Banner */}
      <CTASection />

      {/* 8. Footer */}
      <Footer />
    </main>
  );
}
