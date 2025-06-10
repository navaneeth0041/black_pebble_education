import FinancialLiteracyPage from '@/components/FinancialLiteracyPgae';
import Footer from '@/components/footer';
import Header from '@/components/Header.jsx';
import Home from './Home.jsx';
import MakingFinanceWonderful from './MakingFinanceWonderful';
import WhoWeArePage from './WhoWeArePage';
import MethodicalApproach from './medothical';
import UniquePedagogy from './UniquePedagogy';

export default function HomePage() {
  return (
    <>
      <Header />
      <Home />
      <WhoWeArePage/>
      <MakingFinanceWonderful/>
      <UniquePedagogy/>      
      <FinancialLiteracyPage/>
      <MethodicalApproach />

      <Footer />
    </>
  );
}
