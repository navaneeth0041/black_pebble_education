import ClubDetailsSection from '@/components/ClubDetailsSection';
import ClubHighlightsSection from '@/components/clubHighlightsSection';
import FinanceHeroSection from '@/components/FinanceHeroSection';
import Footer from '@/components/footer';
import Header from '@/components/Header.jsx';
import PreFooter from '@/components/prefooter.jsx';
import ThemesOfDiscussion from '@/components/ThemesOfDiscussion';
import WhyJoinClub from '@/components/whyjoinclubs';

export const metadata = {
  title: "Online Finance Club for Teens | Black Pebble Education",
  description: "Every teen can blossom into a financial expert — we nourish them to be one.",
};

export default function FinanceClubsTeensPage() {
  return (
    <>
      <Header />
      <main>
        <FinanceHeroSection 
          ageRange="12-17 years"
          mindType="Growing"
          subtitle="An interactive environment to learn important financial concepts"
        />
        <WhyJoinClub imageSrc="./images/teen.png" />
        <ClubHighlightsSection/>
        <ThemesOfDiscussion/>
        <ClubDetailsSection 
          targetAudience="teens"
          frequency="Last Saturday of Every Month | 6 PM - 7 PM IST"
          description="Patient introduction to financial concepts"
          curiosityText="Fuelling financial curiosity in teens"
        />
        <PreFooter
          mainTitle="Every teen can blossom into a financial expert — we nourish them to be one."
          buttonText="Book a Counseling Session"
        />
      </main>
      <Footer />
    </>
  );
}
