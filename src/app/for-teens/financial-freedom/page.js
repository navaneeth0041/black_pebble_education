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
                        quote: "The Financial Freedom course inspired my 16-year-old to start a small side hustle selling handmade bookmarks. He tracks profits, expenses, and knows exactly when he’s “financially free” for his project.",
                        author: "Sunita Menon, Parent of a 11th Grader",
                      },
                      {
                        quote: "My daughter came up with a 'lean budget' to fund her summer internship. She’s learned that financial freedom is a mindset—planning, saving, and knowing when to say no.",
                        author: "Vikram Nair, Parent of a 11th Grader",
                      },
                    ]}
                    backgroundColor="#FBDD9C"
                    commentBackgroundColor="#EF746C"
                    titleColor="#F15B52"
                    transitionImage="/effects/yellow.png"
                  />
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
  