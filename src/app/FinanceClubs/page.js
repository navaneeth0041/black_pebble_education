import ClubDetailsSection from '@/components/ClubDetailsSection';
import ClubHighlightsSection from '@/components/clubHighlightsSection';
import FinanceHeroSection from '@/components/FinanceHeroSection';
import Footer from '@/components/footer';
import Header from '@/components/Header.jsx';
import PreFooter from '@/components/prefooter.jsx';
import ThemesOfDiscussion from '@/components/ThemesOfDiscussion';
import WhyJoinClub from '@/components/whyjoinclubs';

export const metadata = {
  title: "Online Finance Club for Kids | Black Pebble Education",
  description: "Every child can be financially savvy — we teach them how to be one.",
};

export default function FinanceClubs() {
  return (
    <>
      <Header />
      <FinanceHeroSection/>
      <WhyJoinClub/>
      <ClubHighlightsSection/>
      <ThemesOfDiscussion/>
      <ClubDetailsSection/>
      <PreFooter
        mainTitle="Every child can be financially savvy — we teach them how to be one."
        // subText1="We've got you covered. Our Counselor will help you."
        subText2="We'll arrange a call with our Counselor to assess your child's readiness and recommend courses that suit them. Let's get started!"
        buttonText="Book a Counseling Session"
      />
      <Footer />
    </>
  );
}
