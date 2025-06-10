import Header from '@/components/Header.jsx';
import PebbleBellaSection from '@/components/PebbleBellaSection.jsx';
import WhyPebbleBellaSection from '@/components/WhyPebbleBellaSection.jsx';
import PebbleBellaContactSection from '@/components/PebbleBellaContactSection.jsx';
import Footer from '@/components/footer';
import HeroSection from '@/components/HeroSection';

export default function BrandAmbrPage() {
  return (
    <>
      <Header />
      <HeroSection/>
      <PebbleBellaSection />
      <WhyPebbleBellaSection/>
      <PebbleBellaContactSection/>
      <Footer/>

    </>
  );
}
