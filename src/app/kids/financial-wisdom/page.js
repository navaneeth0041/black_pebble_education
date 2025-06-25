import Footer from '@/components/footer';
import Header from '@/components/Header.jsx';
import ValueOfMoneyHero from '../../../components/ValueOfMoneyHero.jsx';
import CourseCurriculum from '../../../components/CourseCurriculum.jsx'
import CourseSnapshot from '../../../components/CourseSnapshot.jsx';
import PreFooter from '../../../components/prefooter.jsx';
import Testimonials from '@/components/Testimonials.jsx';

export const metadata = {
  title: "Financial Wisdom Course for Kids | Black Pebble Education",
  description: "Shape kids’ financial habits and mindset for responsible adult behavior with this 2.5-hour session.",
};

export default function financial() {
    return (
      <>
        <Header />
        <ValueOfMoneyHero 
          title="Financial Wisdom"
          subtitle="It’s never too early to be wise - financially!"
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
            title: "Financial Habits",
            description: "Developing healthy financial habits for financial wellness.",
            bgColor: "bg-[#F7C342]",
            icon: "/Course_Design/1/Cash.svg"
          },
          {
            id: 2,
            title: "Financial Mindset", 
            description: "Cultivating a healthy financial mindset for financial growth.",
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
                        quote: "Financial Wisdom gave my 10-year-old a big-picture view: budgets, banks, goals, all tied together. He now asks, “What’s the wise thing to do with my money?” before making any decision—proof that the curriculum truly stuck.",
                        author: "Anuradha Nair, Parent of a 5th Grader",
                      },
                      {
                        quote: "After the Financial Wisdom class, our son explained to his grandparents why they shouldn’t borrow high-interest loans. It was incredible to see a 10-year-old speak so confidently about such a grown-up topic!",
                        author: "Rajesh Kumar, Parent of a 5th Grader",
                      },
                    ]}
                    backgroundColor="#FBDD9C"
                    commentBackgroundColor="#EF746C"
                    titleColor="#F15B52"
                    transitionImage="/effects/yellow.png"
                  />
      <PreFooter
        mainTitle="Why Learn About Financial Wisdom So Early?"
        subText1="Financial habits create a financial mindset that nurtures financial behavior. Cultivating the right habits at an early age is important for developing a financially responsible adult. "
        subText2="This 2.5-hour session shapes and molds your child for correct financial mannerisms."
        buttonText="Book a Counselling Session"
      />
      <Footer /> 
      </>

    );
  }
  