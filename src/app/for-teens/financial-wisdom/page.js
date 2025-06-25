import Footer from '@/components/footer';
import Header from '@/components/Header.jsx';
import ValueOfMoneyHero from '@/components/ValueOfMoneyHero.jsx';
import CourseCurriculum from '@/components/CourseCurriculum.jsx'
import CourseSnapshot from '@/components/CourseSnapshot.jsx';
import PreFooter from '@/components/prefooter.jsx';
import Testimonials from '@/components/Testimonials.jsx';

export const metadata = {
  title: "Financial Wisdom Course for Teens | Black Pebble Education",
  description: "Explore Japanese money habits adapted for India in this 3-hour session to help teens develop ethical financial wisdom.",
};

export default function BankingEssentials() {
    return (
      <>
        <Header />
        <ValueOfMoneyHero 
          title="Financial Wisdom"
          subtitle="Be financially wise - The Japanese Way!"
          iconSrc="/Course_Design/Clip path group.svg"
          iconAlt="Piggy Bank"
          primaryButtonText="Book a Counselling Session"
          secondaryButtonText="Be our Brand Ambassador"
        />
        <CourseCurriculum 
        badgeText="Course Curriculum"
        mainTitle="What Your Child Will Learn"
        modules={[
          {
            id: 1,
            title: "Japanese Money Habits",
            description: "Learning everyday practices of money management.",
            bgColor: "bg-[#F7C342]",
            icon: "/Course_Design/1/Cash.svg"
          },
          {
            id: 2,
            title: "East-Asian Wealth Practices", 
            description: "Learning financial growth methods - the East-Asian way.",
            bgColor: "bg-[#39BB9C]",
            icon: "/Course_Design/1/coin_bulb.svg" 
          },
          {
            id: 3,
            title: "Golden Rules of Wealth",
            description: " Understanding timeless rules of amassing wealth.",
            bgColor: "bg-[#4598CA]",
            icon: "/Course_Design/1/Calender.svg" 
          },
          {
            id: 4,
            title: "Gratitude for Money",
            description: "Understanding the importance of thanking and respecting money.",
            bgColor: "bg-[#EF746C]",
            icon: "/Course_Design/1/Tossing_coing.svg"
          }
        ]}
      />
        <CourseSnapshot
            title="Course Delivery"
            originalPrice="₹3999"
            offerPrice="₹2999"
            courseFormatTitle="What's Included"
            courseFeatures={[
                'Budgeting',
                'Smart Frugality',
                'Smart Allocation',
                'Silent Wealth',
                'Investing',
                'Money Traps'
            ]}
            locationTitle="Venue"
            locationValue="Online | Offline (Ahmedabad)"
            durationTitle="Session Duration"
            durationValue="3 Hours"
            offerPriceTitle="Special Price"
            />
        <Testimonials
                    title1="Kids Loved It."
                    title2="Parents Approved."
                    titleIcon="/home_page_assets/5/Group.svg"
                    testimonials={[
                      {
                        quote: "My 16-year-old synthesized years of lessons into a digital 'money guide' for her friends. She’s mentoring younger cousins now—truly embodying financial wisdom at an early age.",
                        author: "Meena Chopra, Parent of an 11th Grader",
                      },
                      {
                        quote: "Financial Wisdom encouraged my son to create a budget app prototype for teens. His passion for spreading knowledge to peers shows just how impactful this course can be!",
                        author: "Sunil Gupta, Parent of an 11th Grader",
                      },
                    ]}
                    backgroundColor="#FBDD9C"
                    commentBackgroundColor="#EF746C"
                    titleColor="#F15B52"
                    transitionImage="/effects/yellow.png"
                  />
      <PreFooter
        mainTitle="Why Learn Financial Wisdom So Early?"
        subText1="Financial wisdom is an aspirational benchmark for kids. Learning about the Japanese habits allows kids to pursue them consciously and follow the path of ethical wealth generation."
        subText2="This 3-hour session gives them a peek into blending Japanese money habits in an Indian context."
        buttonText="Book a Counselling Session"
      />
      <Footer /> 
      </>

    );
  }
  