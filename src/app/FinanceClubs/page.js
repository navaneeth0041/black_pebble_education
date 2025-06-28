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

export default function FinanceClubsPage() {
  return (
    <>
      <Header />
      <main>
        <FinanceHeroSection/>
        <WhyJoinClub/>
        <ClubHighlightsSection/>
        <ThemesOfDiscussion/>
        <ClubDetailsSection/>
        <PreFooter
          mainTitle="Every child can be financially savvy — we teach them how to be one."
          buttonText="Book a Counseling Session"
        />
      </main>
    </>
  );
}
