import Header from '@/components/Header/Header';
import HeroSection from '@/components/sections/HeroSection';
import BrandCarousel from '@/components/sections/BrandCarousel';
import SolutionsSection from '@/components/sections/SolutionsSection';
import StatisticsScroller from '@/components/sections/StatisticsScroller';
import MarketingSection from '@/components/sections/MarketingSection';
import ResourcesSection from '@/components/sections/ResourcesSection';
import BenefitsCarousel from '@/components/sections/BenefitsCarousel';
import ChannelsSection from '@/components/sections/ChannelsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main id="home" className="site" data-barba="container" data-barba-namespace="home">
      <Header />
      <HeroSection />
      <BrandCarousel />
      <SolutionsSection />
      <StatisticsScroller />
      <MarketingSection />
      <ResourcesSection />
      <BenefitsCarousel />
      <ChannelsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
