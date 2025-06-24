import Footer from '@/components/footer';
import Header from '@/components/Header.jsx';
import ValueOfMoneyHero from '../../../components/ValueOfMoneyHero.jsx';
import CourseCurriculum from '../../../components/CourseCurriculum.jsx'
import CourseSnapshot from '../../../components/CourseSnapshot.jsx';
import PreFooter from '../../../components/prefooter.jsx';
import Testimonials from '@/components/Testimonials.jsx';


export default function HomePage() {
    return (
      <>
        <Header />
        <ValueOfMoneyHero 
          title="Value of Money"
          subtitle="Introduce your child to the right money mindset - Respect for money!"
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
            title: "Value of Money",
            description: "Understanding how money is earned, saved and spent - and why it matters.",
            bgColor: "bg-[#F7C342]",
            icon: "/Course_Design/1/Cash.svg"
          },
          {
            id: 2,
            title: "Relationship with Money", 
            description: "Developing a healthy attitude towards money.",
            bgColor: "bg-[#39BB9C]",
            icon: "/Course_Design/1/coin_bulb.svg" 
          },
          {
            id: 3,
            title: "Budgeting",
            description: "Allocating money for needs and wants - and also saving.",
            bgColor: "bg-[#4598CA]",
            icon: "/Course_Design/1/Calender.svg" 
          },
          {
            id: 4,
            title: "Peer Pressure",
            description: "Developing resilience against peer demands - being financially strong.",
            bgColor: "bg-[#4598CA]",
            icon: "/Course_Design/1/Tossing_coing.svg"
          }
        ]}
      />
<CourseSnapshot
            title="Course Delivery"
            originalPrice="₹1499"
            offerPrice="₹999"
            courseFormatTitle="What's Included"
            courseFeatures={[
                'Interactions',
                'Examples',
                'Quizzes',
                'Illustrations',
                'Infographic Takeaway Notes',
                'Certificate of Participation'
            ]}
            locationTitle="Venue"
            locationValue="Online | Offline (Ahmedabad)"
            durationTitle="Session Duration"
            durationValue="2 Hours"
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
        mainTitle="Why Learn the Value of Money So Early?"
        subText1="Some kids grow up without the concept of pocket money.They believe money is an infinite resource.This can result in indulgence or unchecked expenses,causing financial mishaps."
        subText2="This 2-hour session gives them a relatable and practical understanding of money's worth"
        buttonText="Book a Counselling Session"
      />
      <Footer /> 
      </>

    );
  }
  