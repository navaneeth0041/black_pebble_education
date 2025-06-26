import Footer from '@/components/footer';
import Header from '@/components/Header.jsx';
import ValueOfMoneyHero from '../../../components/ValueOfMoneyHero.jsx';
import CourseCurriculum from '../../../components/CourseCurriculum.jsx'
import CourseSnapshot from '../../../components/CourseSnapshot.jsx';
import PreFooter from '../../../components/prefooter.jsx';
import Testimonials from '@/components/Testimonials.jsx';

export const metadata = {
  title: "Credit Concepts Course for Kids | Black Pebble Education",
  description: "Teach kids about credit principles in this 2-hour session to promote responsible credit use and avoid debt traps.",
};

export default function everyday() {
    return (
      <>
        <Header />
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
            title: "Credit",
            description: "The Concept: Understanding credit and its importance.",
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
        ]}
      />
        <CourseSnapshot
            title="Course Delivery"
            originalPrice="₹1499"
            offerPrice="₹999"
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
                        quote: "Credit Concepts used to sound too grown-up—until my 11-year-old explained the concept to me. Now she’s wary of high-interest loans and understands why borrowing responsibly matters.",
                        author: "Anjali Gupta, Parent of a 6th Grader",
                      },
                      {
                        quote: "Our son came home talking about ‘credit scores’ and ‘interest rates’ after just two modules. He’s already role-playing as a ‘credit advisor’ to his friends—never thought we’d hear that from an 11-year-old!",
                        author: "Vikram Patel, Parent of a 6th Grader",
                      },
                    ]}
                    backgroundColor="#FBDD9C"
                    commentBackgroundColor="#EF746C"
                    titleColor="#F15B52"
                    transitionImage="/effects/yellow.png"
                  />
      <PreFooter
        mainTitle="Why Learn About Credit So Early?"
        subText1="Today's kids wholeheartedly use credit cards without fully understanding the underlying principle of credit. You don’t want them to handle credit irresponsibly or get into a debt trap. "
        subText2="This 2-hour session provides them with a relatable and practical understanding of credit."
        buttonText="Book a Counseling Session"
      />
      <Footer /> 
      </>

    );
  }
  