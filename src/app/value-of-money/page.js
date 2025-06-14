import Footer from '@/components/footer';
import Header from '@/components/Header.jsx';
import ValueOfMoneyHero from '../../components/ValueOfMoneyHero.jsx';
import CourseCurriculum from '../../components/CourseCurriculum.jsx'
import CourseSnapshot from '../../components/CourseSnapshot.jsx';
import PreFooter from '../../components/prefooter.jsx';
import TestimonialCard from '@/components/kidslovedit.jsx';


export default function HomePage() {
    return (
      <>
        <Header />
        <ValueOfMoneyHero />
        <CourseCurriculum />
        <CourseSnapshot />
        <TestimonialCard />
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
  