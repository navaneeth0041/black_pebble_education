import Footer from '@/components/footer';
import Header from '@/components/Header.jsx';
import ValueOfMoneyHero from '../../../components/ValueOfMoneyHero.jsx';
import CourseCurriculum from '../../../components/CourseCurriculum.jsx'
import CourseSnapshot from '../../../components/CourseSnapshot.jsx';
import PreFooter from '../../../components/prefooter.jsx';
import Testimonials from '@/components/Testimonials.jsx';

export const metadata = {
  title: "Financial Growth Course for Kids | Black Pebble Education",
  description: "Equip kids to start their financial growth journey by teaching saving, investing, and expense tracking in this 2.5-hour session.",
};

export default function KidsFinancialGrowthPage() {
  return (
    <>
      <Header />
      <main>
        <ValueOfMoneyHero 
          title="Financial Growth"
          subtitle="Money looks good when it grows - not on trees!"
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
            title: "Investing",
            description: "Understanding the importance of investing for financial growth.",
            bgColor: "bg-[#F7C342]",
            icon: "/Course_Design/1/Cash.svg"
          },
          {
            id: 2,
            title: "Expense Tracking", 
            description: "Learning to track expenses to stay within budget. ",
            bgColor: "bg-[#39BB9C]",
            icon: "/Course_Design/1/coin_bulb.svg" 
          },
        ]}
      />
        <CourseSnapshot
            title="Course Delivery"
            originalPrice="₹1799"
            offerPrice="₹1299"
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
            durationValue="2.5 Hours"
            />
        <Testimonials
                    title1="Kids Loved It."
                    title2="Parents Approved."
                    titleIcon="/home_page_assets/5/Group.svg"
                    testimonials={[
                      {
                        quote: "In the Financial Growth module, my 9-year-old discovered how savings can grow over time. He opened a mock “investment jar” at home and watched his money multiply with simple interest—he was so excited to see that chart!",
                        author: "Shalini Rao, Parent of a 4th Grader",
                      },
                      {
                        quote: "Financial Growth taught our daughter about compounding in the coolest way possible. Now she’s saving part of her allowance in a “growth jar,” telling us she’s “investing for the future.” Her confidence skyrocketed",
                        author: "Pankaj Deshmukh, Parent of a 4th Grader",
                      },
                    ]}
                    backgroundColor="#FBDD9C"
                    commentBackgroundColor="#EF746C"
                    titleColor="#F15B52"
                    transitionImage="/effects/yellow.png"
                  />
      <PreFooter
        mainTitle="Why Learn About Financial Growth So Early?"
        subText1="Investing early has immeasurable benefits. To invest early, your child has to save. To save, they have to track expenses."
        subText2="This 2.5-hour session teaches these to equip your child to start their growth journey."
        buttonText="Book a Counseling Session"
      />
      <Footer /> 
      </main>
    </>
  );
}
