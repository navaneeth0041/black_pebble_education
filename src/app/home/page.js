import FinancialLiteracyPage from '@/components/FinancialLiteracyPgae';
import Header from '@/components/Header.jsx';
import Home from '@/components/Home.jsx';
import MakingFinanceWonderful from '@/components/MakingFinanceWonderful';
import WhoWeArePage from '@/components/WhoWeArePage';

export default function BrandAmbassadorPage() {
  return (
    <>
      <Header />
      <Home />
      <WhoWeArePage/>
      <MakingFinanceWonderful/>
      <FinancialLiteracyPage/>

    </>
  );
}
