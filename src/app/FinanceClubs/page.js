import ClubDetailsSection from '@/components/ClubDetailsSection';
import ClubHighlightsSection from '@/components/clubHighlightsSection';
import FinanceHeroSection from '@/components/FinanceHeroSection';
import Footer from '@/components/footer';
import Header from '@/components/Header.jsx';
import PreFooter from '@/components/prefooter.jsx';
import ThemesOfDiscussion from '@/components/ThemesOfDiscussion';
import WhyJoinClub from '@/components/whyjoinclubs';

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
        mainTitle="Not sure if your child is ready for our courses?"
        subText1="We've got you covered. Our Counselor will help you."
        subText2="We'll arrange a call with our Counselor to assess your child's readiness and recommend courses that suit them. Let's get started!"
        buttonText="Book a Counseling Session"
      />
      <Footer />
    </>
  );
}
