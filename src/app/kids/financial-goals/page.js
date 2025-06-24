import Footer from '@/components/footer';
import Header from '@/components/Header.jsx';
import ValueOfMoneyHero from '../../../components/ValueOfMoneyHero.jsx';
import CourseCurriculum from '../../../components/CourseCurriculum.jsx'
import CourseSnapshot from '../../../components/CourseSnapshot.jsx';
import PreFooter from '../../../components/prefooter.jsx';
import Testimonials from '@/components/Testimonials.jsx';


export default function financial() {
    return (
      <>
        <Header />
        <ValueOfMoneyHero 
          title="Financial Goals"
          subtitle="Give your child something to aspire - financially!"
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
            description: "Understanding the importance of saving for financial freedom.",
            bgColor: "bg-[#39BB9C]",
            icon: "/Course_Design/1/coin_bulb.svg" 
          },
        ]}
      />
        <CourseSnapshot
            title="Course Delivery"
            originalPrice="₹1499"
            offerPrice="₹999"
            courseFormatTitle="What's Included"
            courseFeatures={[
                'Videos & Conversations',
                'Real-life Examples',
                'Quizzes',
                'Team Project & Role-play',
                'Infographic Takeaway Notes',
                'Certificate of Participation'
            ]}
            locationTitle="Venue"
            locationValue="Online | Offline (Ahmedabad)"
            durationTitle="Session Duration"
            durationValue="2 Hours"
            offerPriceTitle="Special Price"
            />
        <Testimonials
            title1="Kids Loved It."
            title2="Parents Approved."
            titleIcon="/home_page_assets/5/Group.svg"
            testimonials={[
              {
                quote: "Setting Financial Goals was a game-changer. My 8-year-old drew a vision board for ‘saving up for a bike’ and actually tracked progress week by week. It taught her that goals aren’t just dreams—they’re plans with steps.",
                author: "Meera Kulkarni, Parent of a 3rd Grader",
                image: "/home_page_assets/5/iphone.svg",
              },
              {
                quote: "After Financial Goals, our daughter now sets short-term saving targets (like buying a book) and even writes them down in her journal. She’s learning discipline and patience—more than any toy could teach her.",
                author: "Dev Singh, Parent of a 4th Grader",
                image: "/home_page_assets/5/iphone.svg",
              },
            ]}
            backgroundColor="#FBDD9C"
            commentBackgroundColor="#EF746C"
            titleColor="#F15B52"
            transitionImage="/effects/yellow.png"
          />
      <PreFooter
        mainTitle="Why Learn About Financial Goals So Early?"
        subText1="Most kids don’t realize that their life goals come with financial obligations. Make your child understand the importance of savings to attain their goals without financial burden."
        subText2="This 2-hour session allows your child to pursue their dreams without financial hurdles."
        buttonText="Book a Counselling Session"
      />
      <Footer /> 
      </>

    );
  }
  