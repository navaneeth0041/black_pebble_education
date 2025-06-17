import FinancialLiteracyPage from '@/components/FinancialLiteracyPgae';
import Footer from '@/components/footer';
import Header from '@/components/Header.jsx';
import Home from '../../components/Home.jsx';
import MakingFinanceWonderful from '../../components/MakingFinanceWonderful.jsx';
import WhoWeArePage from '../../components/WhoWeArePage.jsx';
import MethodicalApproach from '@/components/Medothical.jsx';
import UniquePedagogy from './UniquePedagogy.jsx';
import MoneyClassComparison from '@/components/MoneyClassComparison.jsx';
import FinancialEducationHero from '@/components/FinancialEducationHero.jsx';
import Testimonials from '@/components/Testimonials.jsx'
import ImpactPage from '@/components/ImapctStarts.jsx';
import PreFooter from '@/components/prefooter.jsx';

export default function HomePage() {
  return (
    <>
      <Header />
      <Home />
      <WhoWeArePage/>
      <MakingFinanceWonderful/>
      <UniquePedagogy/>      
      <FinancialLiteracyPage/>
      <FinancialEducationHero/>
      <MoneyClassComparison/>
      <Testimonials/>
      <ImpactPage />
      <MethodicalApproach />
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
