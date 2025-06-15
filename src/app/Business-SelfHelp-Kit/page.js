import SelfHelpKits from '../../components/SelfKit.jsx';
import Header from '../../components/Header.jsx';
import Footer from '../../components/footer.jsx';
import PreFooter from '../../components/prefooter.jsx';

export default function SelfHelpPage() {
  // Define your business concepts here
  const businessConcepts = {
    description:"Engage with an informative & creative self-help kit to explore business concepts - anytime, anywhere.",
    conceptsCount: 7,
    title: "Business Concepts Made Simple",
    backgroundImage: "/self_help_kit/4/Circle_thread.svg",
    concepts: [
      { id: 1, title: "The Big Idea", icon: "/self_help_kit/4/coin1.svg" },
      { id: 2, title: "Competition Analysis", icon: "/self_help_kit/4/coin2.svg" },
      { id: 3, title: "Business Financing", icon: "/self_help_kit/4/coin3.svg" },
      { id: 4, title: "Sustainable Growth", icon: "/self_help_kit/4/coin4.svg" },
      { id: 5, title: "Maximizing Customer Benefits", icon: "/self_help_kit/4/coin5.svg" },
      { id: 6, title: "Learning from Failure", icon: "/self_help_kit/4/coin6.svg" },
      { id: 7, title: "Business Ethics", icon: "/self_help_kit/4/coin7.svg" }
    ],
    showPricing: true,
    pricingData: {
      originalPrice: "₹2499",
      currentPrice: "₹1799",
      description: "Invest in your child's entrepreneurial growth with 49+ guided resources-"
    }
  };

  return (
    <>
      <Header />
      <SelfHelpKits smartMoneyConcepts={businessConcepts} />
      <PreFooter
        mainTitle="Why Business Self-Help Kits?"
        subText1="Most kids don't learn about business until it's too late. This kit empowers kids to explore, understand, and own their entrepreneurial journey!"
        buttonText="Call Us to Order Your Business Kit"
      />
      <Footer />
    </>
  );
}