import Footer from '@/components/footer';
import Header from '@/components/Header.jsx';
import FinanciallyConfidentKidsHero from '@/components/FinanciallyConfidentKidsHero.jsx';
import MissionMethodModeSection from '@/components/MissionMethodModeSection.jsx';
import WhyChooseUsSection from '@/components/WhyChooseUsSection.jsx';
import MeetTheFounderSection from '@/components/MeetTheFounderSection.jsx';
import PreFooter from '@/components/prefooter.jsx'

export default function About(){
	return(
		<>	
      	<Header />
      	<FinanciallyConfidentKidsHero />
      	<MissionMethodModeSection />
      	<WhyChooseUsSection />
      	<MeetTheFounderSection />
		<PreFooter
        mainTitle="Join Our mission to make finance fun and fearless for kids"
        buttonText="Book a Counseling Session"
      	/>
        <Footer />
		</>
		);
}