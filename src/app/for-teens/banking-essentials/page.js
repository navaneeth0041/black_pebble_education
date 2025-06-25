import Footer from '@/components/footer';
import Header from '@/components/Header.jsx';
import ValueOfMoneyHero from '@/components/ValueOfMoneyHero.jsx';
import CourseCurriculum from '@/components/CourseCurriculum.jsx'
import CourseSnapshot from '@/components/CourseSnapshot.jsx';
import PreFooter from '@/components/prefooter.jsx';
import Testimonials from '@/components/Testimonials.jsx';

export const metadata = {
  title: "Banking Essentials Course for Teens | Black Pebble Education",
  description: "Minimal experience in branch banking makes this 2-hour session crucial for teens to understand banking functions and importance practically and relatable.",
};


export default function BankingEssentials() {
    return (
      <>
        <Header />
        <ValueOfMoneyHero 
          title="Banking Essentials"
          subtitle="Introduce your child to the heartbeat of finance - Banks!"
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
            title: "Bank - The Concept",
            description: "Understanding what a bank is and why it is important.",
            bgColor: "bg-[#F7C342]",
            icon: "/Course_Design/1/Cash.svg"
          },
          {
            id: 2,
            title: "Bank Accounts", 
            description: "Understanding the purpose and types of bank accounts.",
            bgColor: "bg-[#39BB9C]",
            icon: "/Course_Design/1/coin_bulb.svg" 
          },
          {
            id: 3,
            title: "Good Loans & Bad Loans",
            description: "Not all loans are bad - understand the difference.",
            bgColor: "bg-[#4598CA]",
            icon: "/Course_Design/1/Calender.svg" 
          },
          {
            id: 4,
            title: "KYC, ATMs & Debit Cards",
            description: "Understanding the essentials of everyday banking.",
            bgColor: "bg-[#EF746C]",
            icon: "/Course_Design/1/Tossing_coing.svg"
          }
        ]}
      />
        <CourseSnapshot
            title="Course Delivery"
            originalPrice="₹2499"
            offerPrice="₹1799"
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
            durationValue="2 Hours"
            offerPriceTitle="Special Price"
            />
        <Testimonials
                    title1="Kids Loved It."
                    title2="Parents Approved."
                    titleIcon="/home_page_assets/5/Group.svg"
                    testimonials={[
                      {
                        quote: "Instead of handing over cash, my 15-year-old now confidently manages a teen savings account online. Thanks to the course, she knows how to set up auto-savings and avoid ATM fees.",
                        author: "Kavita Rao, Parent of a 10th Grader",
                      },
                      {
                        quote: "Banking Essentials made my son comfortable with online banking—he even helped his uncle set up net-banking. I never imagined a 15-year-old explaining loans to his elders!",
                        author: "Suresh Patel, Parent of a 10th Grader",
                      },
                    ]}
                    backgroundColor="#FBDD9C"
                    commentBackgroundColor="#EF746C"
                    titleColor="#F15B52"
                    transitionImage="/effects/yellow.png"
                  />
      <PreFooter
        mainTitle="Why Learn Banking So Early?"
        subText1="Today's kids have a minimal to negligible experience in branch banking. This lack of interaction keeps them from learning about the functioning and importance of banks."
        subText2="This 2-hour session provides them with a relatable and practical understanding of banking."
        buttonText="Book a Counselling Session"
      />
      <Footer /> 
      </>

    );
  }
  