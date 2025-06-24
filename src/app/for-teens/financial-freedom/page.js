import Footer from '@/components/footer';
import Header from '@/components/Header.jsx';
import ValueOfMoneyHero from '@/components/ValueOfMoneyHero.jsx';
import CourseCurriculum from '@/components/CourseCurriculum.jsx'
import CourseSnapshot from '@/components/CourseSnapshot.jsx';
import PreFooter from '@/components/prefooter.jsx';
import Testimonials from '@/components/Testimonials.jsx';

export const metadata = {
  title: "Financial Freedom Course for Teens | Black Pebble Education",
  description: "This 3-hour session guides teens early on the ingredients of financial freedom to enjoy financial security sooner.",
};

export default function BankingEssentials() {
    return (
      <>
        <Header />
        <ValueOfMoneyHero 
          title="Financial Freedom"
          subtitle="Give your child the recipe for financial freedom - Soon!"
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
            title: "Life Goals",
            description: "Understanding and determining life goals.",
            bgColor: "bg-[#F7C342]",
            icon: "/Course_Design/1/Cash.svg"
          },
          {
            id: 2,
            title: "Saving", 
            description: "Understanding saving as a first step to financial freedom.",
            bgColor: "bg-[#39BB9C]",
            icon: "/Course_Design/1/coin_bulb.svg" 
          },
          {
            id: 3,
            title: "Investing",
            description: "Understanding investing as a means for financial growth.",
            bgColor: "bg-[#4598CA]",
            icon: "/Course_Design/1/Calender.svg" 
          },
          {
            id: 4,
            title: "Expense Tracking",
            description: "Tracking expenses to stay within spending limits.",
            bgColor: "bg-[#4598CA]",
            icon: "/Course_Design/1/Tossing_coing.svg"
          }
        ]}
      />
        <CourseSnapshot
            title="Course Delivery"
            originalPrice="₹2999"
            offerPrice="₹2499"
            courseFormatTitle="What's Included"
            courseFeatures={[
                'Videos & Conversations',
                'Real-life Examples',
                'Quizzes',
                'Team Project & Role-play',
                'Infographic Takeaway Notes',
                'Certificate of Participation'
            ]}
            locationTitle="Venue"
            locationValue="Online | Offline (Ahmedabad)"
            durationTitle="Session Duration"
            durationValue="3 Hours"
            offerPriceTitle="Special Price"
            />
        {/* <Testimonials
            title1="Kids Loved It."
            title2="Parents Approved."
            titleIcon="/home_page_assets/5/Group.svg"
            testimonials={[
              {
                quote: "I couldn't believe how quickly my 11-year-old started talking about budgeting and saving after just a few sessions. She even helped plan our family grocery list to stay under budget! The program made finance fun and relatable — she's now thinking like a mini-CEO.",
                author: "Riya Malhotra, Parent of a 6th Grader",
                image: "/home_page_assets/5/iphone.svg",
              },
              {
                quote: "My son never liked math, but now he's calculating expenses on his own. This program sparked something amazing in him! He's become so confident with numbers and even started his own little savings jar.",
                author: "Carlos R., Parent of a 5th Grader",
                image: "/home_page_assets/5/iphone.svg",
              },
            ]}
            backgroundColor="#FBDD9C"
            commentBackgroundColor="#EF746C"
            titleColor="#F15B52"
            transitionImage="/effects/yellow.png"
          /> */}
      <PreFooter
        mainTitle="Why Learn Financial Freedom So Early?"
        subText1="Thinking about financial freedom in one's retirement is a tad too late. Most of us want to enjoy the benefits of financial security as soon as possible. Teach your child to do so early! "
        subText2="This 3-hour session gives them an understanding of all the ingredients of financial freedom."
        buttonText="Book a Counselling Session"
      />
      <Footer /> 
      </>

    );
  }
  