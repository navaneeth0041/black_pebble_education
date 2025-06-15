import SelfHelpKits from '../../components/SelfKit.jsx';
import Header from '../../components/Header.jsx';
import Footer from '../../components/footer.jsx';
import PreFooter from '../../components/prefooter.jsx';

export default function SelfHelpPage() {
  // Define your business concepts here  };

  return (
    <>
      <Header />
      <SelfHelpKits/>
      <PreFooter
        mainTitle="Why Business Self-Help Kits?"
        subText1="Most kids don't learn about business until it's too late. This kit empowers kids to explore, understand, and own their entrepreneurial journey!"
        buttonText="Call Us to Order Your Business Kit"
      />
      <Footer />
    </>
  );
}