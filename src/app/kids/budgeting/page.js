import Footer from '@/components/footer';
import Header from '@/components/Header.jsx';
import ValueOfMoneyHero from '../../../components/ValueOfMoneyHero.jsx';
import CourseCurriculum from '../../../components/CourseCurriculum.jsx'
import CourseSnapshot from '../../../components/CourseSnapshot.jsx';
import PreFooter from '../../../components/prefooter.jsx';
import Testimonials from '@/components/Testimonials.jsx';

export const metadata = {
  title: "Budgeting Course for Kids | Black Pebble Education",
  description: "Help impulsive kids learn the difference between needs and wants with this 2-hour budgeting course fostering wise spending.",
};

export default function Budgeting() {
    return (
      <>
        <Header />
        <ValueOfMoneyHero 
          title="Budgeting"
          subtitle="Make your child learn to be mindful of expenses - Money discipline!"
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
            title: "Needs & Wants",
            description: "Understanding the difference between needs & wants.",
            bgColor: "bg-[#F7C342]",
            icon: "/Course_Design/1/Cash.svg"
          },
          {
            id: 2,
            title: "Keeping a Budget", 
            description: "Allocating money between needs & wants, and savings.",
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
                        quote: "I was thrilled when my 10-year-old organized a little 'family budget meeting' after learning from the Budgeting modules. She now tracks her allowance in a notebook and even created simple pie-chart drawings to decide how much to save.",
                        author: "Shivani Patel, Parent of a 5th Grader",
                      },
                      {
                        quote: "Budgeting used to be a foreign concept to my son—now he helps me plan our weekly grocery budget! He proudly says, ‘I know how much we can spend,’ and that level of responsibility blew me away.",
                        author: "Rohan Mehta, Parent of a 5th Grader",
                      },
                    ]}
                    backgroundColor="#FBDD9C"
                    commentBackgroundColor="#EF746C"
                    titleColor="#F15B52"
                    transitionImage="/effects/yellow.png"
                  />
      <PreFooter
        mainTitle="Why Learn Budgeting So Early?"
        subText1="Some kids are impulsive buyers and throw tantrums until they get what they want. Making them understand that everything costs money can positively change their attitudes."
        subText2="This 2-hour session makes them differentiate between needs & wants and spend wisely."
        buttonText="Book a Counseling Session"
      />
      <Footer /> 
      </>

    );
  }
  