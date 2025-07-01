import Footer from '@/components/footer';
import Header from '@/components/Header.jsx';
import ValueOfMoneyHero from '../../../components/ValueOfMoneyHero.jsx';
import CourseCurriculum from '../../../components/CourseCurriculum.jsx'
import CourseSnapshot from '../../../components/CourseSnapshot.jsx';
import PreFooter from '../../../components/prefooter.jsx';
import Testimonials from '@/components/Testimonials.jsx';

export const metadata = {
  title: "Everyday Banking Course for Kids ",
  description: "This 2.5-hour session teaches kids essential day-to-day banking concepts with professional guidance.",
};

export default function KidsEverydayBankingPage() {
  return (
    <>
      <Header />
      <main>
        <ValueOfMoneyHero 
          title="Everyday Banking"
          subtitle="Introduce your child to the nuances of banking - in a fun way!"
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
            title: "Good Loans & Bad Loans",
            description: "Differentiating between a healthy loan and a debt trap.",
            bgColor: "bg-[#F7C342]",
            icon: "/Course_Design/1/Cash.svg"
          },
          {
            id: 2,
            title: "Debit Card, KYC & ATM", 
            description: "Learning everyday banking concepts.",
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
                'Interactions',
                'Examples',
                'Quzzes',
                'Illustrations',
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
                        quote: "The Everyday Banking module changed everything! My 10-year-old now knows how to deposit cash, read statements, and even asks about fees. He’s proud to show off his “banking know-how” to relatives.",
                        author: "Smita Verma, Parent of a 5th Grader",
                      },
                      {
                        quote: "Everyday Banking made practical skills click for our daughter. She now helps us tally our small business sales on weekends—something she was motivated to do after taking the course.",
                        author: "Rahul Chopra, Parent of a 5th Grader",
                      },
                    ]}
                    backgroundColor="#FBDD9C"
                    commentBackgroundColor="#EF746C"
                    titleColor="#F15B52"
                    transitionImage="/effects/yellow.png"
                  />
      <PreFooter
        mainTitle="Why Learn Everyday Banking So Early?"
        subText1="Learning the concepts of everyday banking is non-negotiable. This knowledge can be attained only through professional coaching and mentoring."
        subText2="This 2.5-hour session gives your child a complete understanding of day-to-day banking."
        buttonText="Book a Counseling Session"
      />
      <Footer /> 
      </main>
    </>
  );
}
