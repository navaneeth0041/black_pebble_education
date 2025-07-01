import Footer from '@/components/footer';
import Header from '@/components/Header.jsx';
import ValueOfMoneyHero from '@/components/ValueOfMoneyHero.jsx';
import CourseCurriculum from '@/components/CourseCurriculum.jsx'
import CourseSnapshot from '@/components/CourseSnapshot.jsx';
import PreFooter from '@/components/prefooter.jsx';
import Testimonials from '@/components/Testimonials.jsx';

export const metadata = {
  title: "Business Basics Course for Teens ",
  description: "Empower enterprising teens in this 3-hour course guiding them to start their ventures and gain professional independence.",
};

export default function BusinessBasicsPage() {
  return (
    <>
      <Header />
      <main>
        <ValueOfMoneyHero 
          title="Business Basics"
          subtitle="Let your child be an entrepreneur - Teenpreneur!"
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
            title: "Business Plan",
            description: " Understanding the purpose and nature of a business plan.",
            bgColor: "bg-[#F7C342]",
            icon: "/Course_Design/1/Cash.svg"
          },
          {
            id: 2,
            title: "Business Risk", 
            description: "Understanding potential business risks and their impact.",
            bgColor: "bg-[#39BB9C]",
            icon: "/Course_Design/1/coin_bulb.svg" 
          },
          {
            id: 3,
            title: "Business Life Cycle",
            description: "Understanding the different phases of business growth cycle.",
            bgColor: "bg-[#4598CA]",
            icon: "/Course_Design/1/Calender.svg" 
          },
          {
            id: 4,
            title: "Business Formation",
            description: "Understanding possible options of business formation.",
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
            durationValue="3 Hours"
            />
        <Testimonials
                    title1="Kids Loved It."
                    title2="Parents Approved."
                    titleIcon="/home_page_assets/5/Group.svg"
                    testimonials={[
                      {
                        quote: "After Business Basics, my 15-year-old pitched a mini-startup idea to our neighbors. He understands cost structure, revenue, and even made a simple business plan—definitely the highlight of his summer.",
                        author: "Rekha Sharma, Parent of a 10th Grader",
                      },
                      {
                        quote: "My daughter turned her baking hobby into a small business, tracking cash flow and profit margins after this module. The real-world exercises gave her confidence to manage supply, pricing, and marketing.",
                        author: "Ramesh Nair, Parent of a 10th Grader",
                      },
                    ]}
                    backgroundColor="#FBDD9C"
                    commentBackgroundColor="#EF746C"
                    titleColor="#F15B52"
                    transitionImage="/effects/yellow.png"
                  />
      <PreFooter
        mainTitle="Why Learn About Business So Early?"
        subText1="We have a generation of very enterprising young people! Kids today are confident and have the passion to start their ventures and be professionally independent."
        subText2="This 3-hour session gives them a full guide to get started on their entrepreneurial journey."
        buttonText="Book a Counseling Session"
      />
      <Footer /> 
      </main>
    </>
  );
}
