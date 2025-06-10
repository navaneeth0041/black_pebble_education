import Footer from '@/components/footer';
import Header from '@/components/Header.jsx';
import Home from '@/components/Home.jsx';
import MakingFinanceWonderful from '@/components/MakingFinanceWonderful';
import WhoWeArePage from '@/components/WhoWeArePage';
import MethodicalApproach from './medothical';

export default function HomePage() {
  return (
    <>
      <Header />
      <Home />
      <WhoWeArePage/>
      <MakingFinanceWonderful/>
      <MethodicalApproach />
      <Footer />
    </>
  );
}
