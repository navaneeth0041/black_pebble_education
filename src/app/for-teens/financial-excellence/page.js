import Footer from '@/components/footer';
import Header from '@/components/Header.jsx';
import ValueOfMoneyHero from '@/components/ValueOfMoneyHero.jsx';
import CourseCurriculum from '@/components/CourseCurriculum.jsx'
import CourseSnapshot from '@/components/CourseSnapshot.jsx';
import PreFooter from '@/components/prefooter.jsx';
import Testimonials from '@/components/Testimonials.jsx';

export const metadata = {
  title: "Financial Excellence Course for Teens | Black Pebble Education",
  description: "A 9-hour course giving curious teens a complete understanding of important financial concepts, perfect for those ahead of the curve.",
};

export default function FinancialExcellencePage() {
  return (
    <>
      <Header />
      <main>
        <ValueOfMoneyHero 
          title="Financial Excellence Program"
          subtitle="Give your child full exposure to financial literacy in 4 weeks!"
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
            title: "Value of Money",
            description: "Understanding how money is earned, saved, and spent - and why it matters.",
            bgColor: "bg-[#F7C342]",
            icon: "/Course_Design/1/Cash.svg"
          },
          {
            id: 2,
            title: "Banking Essentials", 
            description: "Understanding banking, accounts, KYC, ATM, and debit cards.",
            bgColor: "bg-[#39BB9C]",
            icon: "/Course_Design/1/coin_bulb.svg" 
          },
          {
            id: 3,
            title: "Credit Concepts",
            description: "Understanding credit, credit cards, credit score, and credit bureaus.",
            bgColor: "bg-[#4598CA]",
            icon: "/Course_Design/1/Calender.svg" 
          },
          {
            id: 4,
            title: "Financial Freedom",
            description: "Understanding life goals, saving, investing, and expense tracking.",
            bgColor: "bg-[#EF746C]",
            icon: "/Course_Design/1/Tossing_coing.svg"
          }
        ]}
      />
        <CourseSnapshot
            title="Course Delivery"
            originalPrice="₹7999"
            offerPrice="₹4999"
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
            durationValue="9 Hours (Weekly Classes)"
            />
        <Testimonials
                    title1="Kids Loved It."
                    title2="Parents Approved."
                    titleIcon="/home_page_assets/5/Group.svg"
                    testimonials={[
                      {
                        quote: "In Financial Excellence, my 15-year-old researched investment avenues and presented a mini-project to our family. His ability to analyze options blew us away—he has already started investing!",
                        author: "Lata Desai, Parent of a 10th Grader",
                      },
                      {
                        quote: "My son thinks of finance as a prerequisite to everything he does. He has made money a fundamental part of all his life decisions. Such mature behavior!",
                        author: "Anupam Singh, Parent of a 10th Grader",
                      },
                    ]}
                    backgroundColor="#FBDD9C"
                    commentBackgroundColor="#EF746C"
                    titleColor="#F15B52"
                    transitionImage="/effects/yellow.png"
                  />
      <PreFooter
        mainTitle="Why Enroll for the Financial Excellence Program?"
        subText1="Some kids are ahead of the curve. Their learning abilities and curiosity allow them to imbibe new and complex information easily than others."
        subText2="This 9-hour course gives them a complete understanding of important financial concepts."
        buttonText="Book a Counseling Session"
      />
      <Footer /> 
      </main>
    </>
  );
}
