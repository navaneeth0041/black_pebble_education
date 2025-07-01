import Footer from '@/components/footer';
import Header from '@/components/Header.jsx';
import FinanciallyConfidentKidsHero from '@/components/FinanciallyConfidentKidsHero.jsx';
import MissionMethodModeSection from '@/components/MissionMethodModeSection.jsx';
import WhyChooseUsSection from '@/components/WhyChooseUsSection.jsx';
import MeetTheFounderSection from '@/components/MeetTheFounderSection.jsx';
import PreFooter from '@/components/prefooter.jsx'

export const metadata = {
  title: "About Us ",
  description: "Our mission is to cultivate a generation that is financially savvy and confident by breaking down complex money concepts into simple, relatable ideas for children.",
};

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main>
        <FinanciallyConfidentKidsHero />
        <MissionMethodModeSection />
        <WhyChooseUsSection />
        <MeetTheFounderSection />
        <PreFooter
          mainTitle="From the Founder’s Desk"
          subText1="Join our mission to make finance fun and fearless for kids."
          button1Text="Book a Counseling Session"
          button2Text="Be our Brand Amabassador"
        />
      </main>
      <Footer />
    </>
  );
}