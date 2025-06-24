import SelfHelpKits from '../../components/SelfKit.jsx';
import Header from '../../components/Header.jsx';
import Footer from '../../components/footer.jsx';
import PreFooter from '../../components/prefooter.jsx';

export const metadata = {
  title: "Self-help Kit on Financial Literacy | Black Pebble Education",
  description: "Empower kids to explore, understand, and own their money journey with this self-help financial literacy kit.",
};

export default function SelfHelpPage() {
  // Define your business concepts here  };

  return (
    <>
    	<Header />
    	<SelfHelpKits />
    	<PreFooter
        mainTitle="Why Self-Help Kits?"
        subText1="Most kids don’t learn about money until it’s too late. This kit empowers kids to explore, understand, and own their money journey!."
        buttonText="Call Us to Order Your Kit"
      />
      <Footer />
    </>
  );
}