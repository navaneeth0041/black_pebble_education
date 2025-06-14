import SelfHelpKits from '../../components/SelfKit.jsx';
import Header from '../../components/Header.jsx';
import Footer from '../../components/footer.jsx';
import PreFooter from '../../components/prefooter.jsx';

export default function SelfHelpPage() {
  return (
    <>
    	<Header />
    	<SelfHelpKits />
    	<PreFooter
        mainTitle="Why Self-Help Kits?"
        subText1="Most kids don’t learn about money until it’s too late. This kit empowers kids to explore, understand, and own their money journey!."
        // subText2="We'll arrange a call with our Counselor to assess your child's readiness and recommend courses that suit them. Let's get started!"
        buttonText="Call Us to Order Your Kit"
      />
    	<Footer />
    </>
  );
}
