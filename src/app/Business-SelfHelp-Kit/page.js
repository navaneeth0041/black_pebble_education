import SelfHelpKits from '../../components/SelfKit.jsx';
import Header from '../../components/Header.jsx';
import Footer from '../../components/footer.jsx';
import PreFooter from '../../components/prefooter.jsx';

export const metadata = {
  title: "Self-help Kit on Business Literacy | Black Pebble Education",
  description: "Support kids with a business mindset to nurture their entrepreneurial learning journey with this self-help kit.",
};

export default function BusinessSelfHelpKitPage() {
  // Define your business concepts here
  const businessConcepts = {
    description:"Engage with an informative & creative self-help kit to explore business concepts - anytime, anywhere.",
    conceptsCount: 7,
    title: "Business Concepts Made Simple",
    backgroundImage: "/self_help_kit/4/Circle_thread.svg",
    concepts: [
      { id: 1, title: "The Big Idea", icon: "/self_help_kit/4/bulb1.svg" },
      { id: 2, title: "Competition Analysis", icon: "/self_help_kit/4/bulb2.svg" },
      { id: 3, title: "Business Financing", icon: "/self_help_kit/4/bulb3.svg" },
      { id: 4, title: "Sustainable Growth", icon: "/self_help_kit/4/bulb4.svg" },
      { id: 5, title: "Maximizing Customer Benefits", icon: "/self_help_kit/4/bulb5.svg" },
      { id: 6, title: "Learning from Failure", icon: "/self_help_kit/4/bulb6.svg" },
      { id: 7, title: "Business Ethics", icon: "/self_help_kit/4/bulb7.svg" }
    ],
    showPricing: true,
    pricingData: {
      originalPrice: "₹2499",
      currentPrice: "₹1799",
      description: "Invest in your child's entrepreneurial growth with 49+ guided resources-"
    },
    enthusiastText: "Business Enthusiasts"
  };

  const businessBenefits = {
    title: "Why Self-Help Kits Work?",
    subtitle: {
      line1: "Benefits of using self",
      line2: "help kits"
    },
    icon: "/self_help_kit/3/money.svg",
    items: [
      "Builds business confidence",
      "Encourages independent thinking",
      "Easy-to-follow structure",
      "No screen time needed",
      "Parent-guided or self-led"
    ]
  };

  return (
    <>
      <Header />
      <main>
        <SelfHelpKits 
          smartMoneyConcepts={businessConcepts} 
          benefits={businessBenefits}
        />
        <PreFooter
          mainTitle="Why Business Self-Help Kits?"
          subText1="Some kids naturally show a tendency towards a business mindset at a young age, but they don't get an opportunity to nurture it. This kit empowers kids to explore, understand, and own their business learning journey!"
          buttonText="Call Us to Order Your Business Kit"
        />
      </main>
      <Footer />
    </>
  );
}