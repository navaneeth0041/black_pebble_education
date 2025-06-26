import Footer from '@/components/footer';
import Header from '@/components/Header.jsx';
import ValueOfMoneyHero from '@/components/ValueOfMoneyHero.jsx';
import CourseCurriculum from '@/components/CourseCurriculum.jsx'
import CourseSnapshot from '@/components/CourseSnapshot.jsx';
import PreFooter from '@/components/prefooter.jsx';
import Testimonials from '@/components/Testimonials.jsx';

export const metadata = {
  title: "Risks & Insurance Course for Teens | Black Pebble Education",
  description: "Dynamic and uncertain economies make risk awareness vital. This 2-hour session introduces teens to risks and insurance basics.",
};

export default function BankingEssentials() {
    return (
      <>
        <Header />
        <ValueOfMoneyHero 
          title="Risks & Insurance"
          subtitle="Let your child learn to navigate risks - the smart way!"
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
            title: "Risks & Insurance - The Concept",
            description: "Understanding the concepts of risks and insurance.",
            bgColor: "bg-[#F7C342]",
            icon: "/Course_Design/1/Cash.svg"
          },
          {
            id: 2,
            title: "Types of Risks", 
            description: "Understanding the nature and types of possible risks.",
            bgColor: "bg-[#39BB9C]",
            icon: "/Course_Design/1/coin_bulb.svg" 
          },
          {
            id: 3,
            title: "Types of Insurance",
            description: "Understanding the nature and types of available insurance",
            bgColor: "bg-[#4598CA]",
            icon: "/Course_Design/1/Calender.svg" 
          },
          {
            id: 4,
            title: "Terms & Terminologies",
            description: "Learning the terms and terminologies of insurance industry.",
            bgColor: "bg-[#EF746C]",
            icon: "/Course_Design/1/Tossing_coing.svg"
          }
        ]}
      />
        <CourseSnapshot
            title="Course Delivery"
            originalPrice="₹2999"
            offerPrice="₹2499"
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
                        quote: "Risks & Insurance taught my 14-year-old about protecting savings and the importance of insurance. She now talks about risk mitigation like a mini-actuary—completely changed how she views financial safety.",
                        author: "Neha Kulkarni, Parent of a 9th Grader",
                      },
                      {
                        quote: "Our son learned the difference between term insurance and health insurance at 13. He helped us compare policies and found better coverage for our family—far beyond my expectations!",
                        author: "Rajeev Agarwal, Parent of a 9th Grader",
                      },
                    ]}
                    backgroundColor="#FBDD9C"
                    commentBackgroundColor="#EF746C"
                    titleColor="#F15B52"
                    transitionImage="/effects/yellow.png"
                  />
      <PreFooter
        mainTitle="Why Learn About Risks & Insurance So Early?"
        subText1="The world and economies are becoming extremely dynamic and uncertain. Risks reside at every turn and in every corner. Being aware of risk mitigation has never been so important."
        subText2="This 2-hour session gives your child a peek into possible risks and available insurance."
        buttonText="Book a Counseling Session"
      />
      <Footer /> 
      </>

    );
  }
  