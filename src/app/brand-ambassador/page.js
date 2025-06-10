import Header from '@/components/Header.jsx';
import PebbleBellaSection from './PebbleBellaSection.jsx';
import WhyPebbleBellaSection from './WhyPebbleBellaSection.jsx';
import PebbleBellaContactSection from './PebbleBellaContactSection.jsx';
import Footer from '@/components/footer';
import HeroSection from './HeroSection';

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
