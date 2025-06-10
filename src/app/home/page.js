import FinancialLiteracyPage from '@/components/FinancialLiteracyPgae';
import Footer from '@/components/footer';
import Header from '@/components/Header.jsx';
import Home from '../../components/Home.jsx';
import MakingFinanceWonderful from '../../components/MakingFinanceWonderful.jsx';
import WhoWeArePage from '../../components/WhoWeArePage.jsx';
import MethodicalApproach from '@/components/Medothical.jsx';

export default function HomePage() {
  return (
    <>
      <Header />
      <Home />
      <WhoWeArePage/>
      <MakingFinanceWonderful/>
      <FinancialLiteracyPage/>
      <MethodicalApproach />
      <Footer />
    </>
  );
}
