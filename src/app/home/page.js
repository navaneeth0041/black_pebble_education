import FinancialLiteracyPage from '@/components/FinancialLiteracyPgae';
import Footer from '@/components/footer';
import Header from '@/components/Header.jsx';
import Home from './Home.jsx';
import MakingFinanceWonderful from './MakingFinanceWonderful';
import WhoWeArePage from './WhoWeArePage';
import MethodicalApproach from './medothical';

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
