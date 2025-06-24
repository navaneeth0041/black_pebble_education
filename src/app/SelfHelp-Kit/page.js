import SelfHelpKits from '../../components/SelfKit.jsx';
import Header from '../../components/Header.jsx';
import Footer from '../../components/footer.jsx';
import PreFooter from '../../components/prefooter.jsx';
// ...existing code...
export default function SelfHelpPage() {
  const financialConcepts = {
    description: "Engage with an informative & creative self-help kit to explore financial concepts – anytime, anywhere.",
    conceptsCount: 7,
    title: "Smart Money Concepts Made Simple",
    backgroundImage: "/self_help_kit/4/Circle_thread.svg",
    concepts: [
      { id: 1, title: "What is an Asset?", icon: "/self_help_kit/4/coin1.svg" },
      { id: 2, title: "What is net worth?", icon: "/self_help_kit/4/coin2.svg" },
      { id: 3, title: "Difference between income & wealth", icon: "/self_help_kit/4/coin3.svg" },
      { id: 4, title: "Interest & Compound Interest", icon: "/self_help_kit/4/coin4.svg" },
      { id: 5, title: "Power of Compounding", icon: "/self_help_kit/4/coin5.svg" },
      { id: 6, title: "Investments & Returns", icon: "/self_help_kit/4/coin6.svg" },
      { id: 7, title: "Why do people use debt?", icon: "/self_help_kit/4/coin7.svg" }
    ],
    showPricing: true,
    pricingData: {
      originalPrice: "₹2499",
      currentPrice: "₹1799",
      description: "Invest in your child's growth with 49+ guided resources-"
    }
  };

  return (
    <>
      <Header />
      <SelfHelpKits smartMoneyConcepts={financialConcepts}/>
      <PreFooter
        mainTitle="Why Self-Help Kits?"
        subText1="Most kids don’t learn about money until it’s too late. This kit empowers kids to explore, understand, and own their money journey!"
        buttonText="Call Us to Order Your Kit"
      />
      <Footer />
    </>
  );
}
// ...existing code...