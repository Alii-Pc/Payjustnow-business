import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import SupportHeroSection from '@/components/sections/support/SupportHeroSection';
import SupportFaqsSection from '@/components/sections/support/SupportFaqsSection';
import SupportContactSection from '@/components/sections/support/SupportContactSection';
import CTASection from '@/components/sections/CTASection';

export const metadata = {
  title: 'Business Support - PayJustNow',
  description: 'Chat to us about becoming a PayJustNow Merchant or how you can increase your income using our tools and services. We\'d love to hear from you.',
};

export default function BusinessSupportPage() {
  return (
    <main id="support" className="site" data-barba="container" data-barba-namespace="support">
      <Header />
      <SupportHeroSection />
      <SupportFaqsSection />
      <SupportContactSection />
      <CTASection />
      <Footer />
    </main>
  );
}
