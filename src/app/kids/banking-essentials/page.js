import Footer from '@/components/footer';
import Header from '@/components/Header.jsx';
import ValueOfMoneyHero from '../../../components/ValueOfMoneyHero.jsx';
import CourseCurriculum from '../../../components/CourseCurriculum.jsx'
import CourseSnapshot from '../../../components/CourseSnapshot.jsx';
import PreFooter from '../../../components/prefooter.jsx';
import Testimonials from '@/components/Testimonials.jsx';


export default function Banking() {
    return (
      <>
        <Header />
        <ValueOfMoneyHero 
          title="Banking Essentials"
          subtitle="Introduce your child to the heartbeat of finance - Banks!"
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
            title: "Bank",
            description: "The Concept: Understanding the purpose of banks.",
            bgColor: "bg-[#F7C342]",
            icon: "/Course_Design/1/Cash.svg"
          },
          {
            id: 2,
            title: "Bank Accounts", 
            description: "Understanding the need and types of bank accounts.",
            bgColor: "bg-[#39BB9C]",
            icon: "/Course_Design/1/coin_bulb.svg" 
          },
        ]}
      />
        <CourseSnapshot
            title="Course Delivery"
            originalPrice="₹1299"
            offerPrice="₹1799"
            courseFormatTitle="What's Included"
            courseFeatures={[
                'Interactions',
                'Example',
                'Quizzes',
                'Illustrations',
                'Infographic Takeaway Notes',
                'Certificate of Participation'
            ]}
            locationTitle="Venue"
            locationValue="Online | Offline (Ahmedabad)"
            durationTitle="Session Duration"
            durationValue="2.5 Hours"
            offerPriceTitle="Special Price"
            />
        {/* <Testimonials
            title1="Kids Loved It."
            title2="Parents Approved."
            titleIcon="/home_page_assets/5/Group.svg"
            testimonials={[
              {
                quote: "I couldn't believe how quickly my 11-year-old started talking about budgeting and saving after just a few sessions. She even helped plan our family grocery list to stay under budget! The program made finance fun and relatable — she's now thinking like a mini-CEO.",
                author: "Riya Malhotra, Parent of a 6th Grader",
                image: "/home_page_assets/5/iphone.svg",
              },
              {
                quote: "My son never liked math, but now he's calculating expenses on his own. This program sparked something amazing in him! He's become so confident with numbers and even started his own little savings jar.",
                author: "Carlos R., Parent of a 5th Grader",
                image: "/home_page_assets/5/iphone.svg",
              },
            ]}
            backgroundColor="#FBDD9C"
            commentBackgroundColor="#EF746C"
            titleColor="#F15B52"
            transitionImage="/effects/yellow.png"
          /> */}
      <PreFooter
        mainTitle="Why Learn Banking So Early?"
        subText1="Today’s kids have a minimal to negligible experience in branch banking. This lack of interaction keeps them from learning about the functioning and importance of banks."
        subText2="This 2.5-hour session provides them with a relatable and practical understanding of banking."
        buttonText="Book a Counselling Session"
      />
      <Footer /> 
      </>

    );
  }
  