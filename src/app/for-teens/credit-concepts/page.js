import Footer from '@/components/footer';
import Header from '@/components/Header.jsx';
import ValueOfMoneyHero from '@/components/ValueOfMoneyHero.jsx';
import CourseCurriculum from '@/components/CourseCurriculum.jsx'
import CourseSnapshot from '@/components/CourseSnapshot.jsx';
import PreFooter from '@/components/prefooter.jsx';
import Testimonials from '@/components/Testimonials.jsx';

export const metadata = {
  title: "Credit Concepts Course for Teens | Black Pebble Education",
  description: "Teach teens the principles of credit in this 2-hour session to avoid irresponsible credit use and debt traps.",
};

export default function CreditConceptsPage() {
  return (
    <>
      <Header />
      <main>
        <ValueOfMoneyHero 
          title="Credit Concepts"
          subtitle="Introduce your child to the often-misused concept - Credit!"
          iconSrc="/Course_Design/Clip path group.svg"
          iconAlt="Piggy Bank"
          primaryButtonText="Book a Counseling Session"
          secondaryButtonText="Be our Brand Ambassador"
        />
        <CourseCurriculum 
        badgeText="Course Curriculum"
        mainTitle="What Your Child Will Learn"
        modules={[
          {
            id: 1,
            title: "Credit - The Concept",
            description: "Understanding what credit is and why it is needed.",
            bgColor: "bg-[#F7C342]",
            icon: "/Course_Design/1/Cash.svg"
          },
          {
            id: 2,
            title: "Credit Cards", 
            description: "Understanding the purpose and use of credit cards.",
            bgColor: "bg-[#39BB9C]",
            icon: "/Course_Design/1/coin_bulb.svg" 
          },
          {
            id: 3,
            title: "Credit Score",
            description: "Understanding the need and importance of a credit score.",
            bgColor: "bg-[#4598CA]",
            icon: "/Course_Design/1/Calender.svg" 
          },
          {
            id: 4,
            title: "Credit Bureaus",
            description: "Understanding the purpose of credit bureaus.",
            bgColor: "bg-[#EF746C]",
            icon: "/Course_Design/1/Tossing_coing.svg"
          }
        ]}
      />
        <CourseSnapshot
            title="Course Delivery"
            originalPrice="₹2499"
            offerPrice="₹1799"
            courseFormatTitle="Course Inclusions"
            courseFeatures={[
                'Videos & Conversations',
                'Real-life Examples',
                'Quizzes',
                'Team Project & Role-play',
                'Infographic Takeaway Notes',
                'Certificate of Participation'
            ]}
            locationValue="Online | Offline (Ahmedabad)"
            durationTitle="Session Duration"
            durationValue="2 Hours"
            />
        <Testimonials
                    title1="Kids Loved It."
                    title2="Parents Approved."
                    titleIcon="/home_page_assets/5/Group.svg"
                    testimonials={[
                      {
                        quote: "Credit Concepts demystified credit for my 13-year-old. He now understands interest rates and the importance of a credit score. He’s already planning for his college fund—and knows what to avoid!",
                        author: "Priyanka Sharma, Parent of an 8th Grader",
                      },
                      {
                        quote: "My daughter’s attitude toward borrowing completely changed. After completing this module, she knows how to read a credit card statement and warns her friends about the dangers of overspending. Proud parent moment!",
                        author: "Rohit Kapoor, Parent of an 8th Grader",
                      },
                    ]}
                    backgroundColor="#FBDD9C"
                    commentBackgroundColor="#EF746C"
                    titleColor="#F15B52"
                    transitionImage="/effects/yellow.png"
                  />
      <PreFooter
        mainTitle="Why Learn About Credit So Early?"
        subText1="Today's kids wholeheartedly use credit cards without fully understanding the underlying principle of credit. You don’t want them to handle credit irresponsibly or get into a debt trap."
        subText2="This 2-hour session provides them with a relatable and practical understanding of credit."
        buttonText="Book a Counseling Session"
      />
      <Footer /> 
      </main>
    </>
  );
}
