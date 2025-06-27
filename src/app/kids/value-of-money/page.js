import Footer from '@/components/footer';
import Header from '@/components/Header.jsx';
import ValueOfMoneyHero from '../../../components/ValueOfMoneyHero.jsx';
import CourseCurriculum from '../../../components/CourseCurriculum.jsx'
import CourseSnapshot from '../../../components/CourseSnapshot.jsx';
import PreFooter from '../../../components/prefooter.jsx';
import Testimonials from '@/components/Testimonials.jsx';

export const metadata = {
  title: "Value of Money Course for Kids | Black Pebble Education",
  description: "This 2-hour session teaches kids the practical worth of money, helping avoid indulgence and unchecked expenses.",
};

export default function HomePage() {
    return (
      <>
        <Header />
        <ValueOfMoneyHero 
          title="Value of Money"
          subtitle="Introduce your child to the right money mindset - Respect for money!"
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
            title: "What is Money?",
            description: "Understanding the nature of money.",
            bgColor: "bg-[#39BB9C]",
            icon: "/Course_Design/1/coin_bulb.svg" 
          },
          {
            id: 2,
            title: "Value of Money",
            description: " Understanding the worth of money for everyday things.",
            bgColor: "bg-[#F7C342]",
            icon: "/Course_Design/1/Cash.svg"
          },
        ]}
      />
<CourseSnapshot
            title="Course Delivery"
            originalPrice="₹1499"
            offerPrice="₹999"
            courseFormatTitle="Course Inclusions"
            courseFeatures={[
                'Interactions',
                'Examples',
                'Quizzes',
                'Illustrations',
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
                quote: "After just a couple of lessons on 'Value of Money’, my 8-year-old started asking thoughtful questions about why we pay for things. She now checks price tags and compares options before asking for a toy—something I never expected so soon!",
                author: "Priya Rao, Parent of an 8-Year-Old",
              },
              {
                quote: "My daughter came home saying, ‘Mom, I understand why money is special!’ She used her pocket money more carefully, saving up for something she really wanted. This course made abstract ideas real—and fun.",
                author: "Amit Desai, Parent of a 4th Grader",
              },
            ]}
            backgroundColor="#FBDD9C"
            commentBackgroundColor="#EF746C"
            titleColor="#F15B52"
            transitionImage="/effects/yellow.png"
          />
      <PreFooter
        mainTitle="Why Learn the Value of Money So Early?"
        subText1="Some kids grow up without the concept of pocket money.They believe money is an infinite resource.This can result in indulgence or unchecked expenses, causing financial mishaps."
        subText2="This 2-hour session gives them a relatable and practical understanding of money's worth."
        buttonText="Book a Counseling Session"
      />
      <Footer /> 
      </>

    );
  }
  