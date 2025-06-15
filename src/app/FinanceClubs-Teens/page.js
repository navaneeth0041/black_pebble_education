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
      <FinanceHeroSection 
        ageRange="12-17 years"
        mindType="Growing"
        subtitle="An interactive environment to learn important financial concepts"
      />
      <WhyJoinClub/>
      <ClubHighlightsSection/>
      <ThemesOfDiscussion/>
      <ClubDetailsSection 
        targetAudience="teens"
        frequency="Last Saturday of Every Month | 6 PM - 7 PM IST"
        description="Patient introduction to financial concepts"
        curiosityText="Fuelling financial curiosity in teens"
      />
      <PreFooter
        mainTitle="Every teen can blossom into a financial expert — we nourish them to be one"
        // subText1="We've got you covered. Our Counselor will help you."
        subText2="We'll arrange a call with our Counselor to assess your child's readiness and recommend courses that suit them. Let's get started!"
        buttonText="Book a Counseling Session"
      />
      <Footer />
    </>
  );
}
