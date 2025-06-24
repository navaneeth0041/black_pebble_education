import Footer from '@/components/footer';
import Header from '@/components/Header.jsx';
import ValueOfMoneyHero from '@/components/ValueOfMoneyHero.jsx';
import CourseCurriculum from '@/components/CourseCurriculum.jsx'
import CourseSnapshot from '@/components/CourseSnapshot.jsx';
import PreFooter from '@/components/prefooter.jsx';
import Testimonials from '@/components/Testimonials.jsx';


export const metadata = {
  title: 'Value of Money Course for Teens',
  description: `Some kids grow up without the concept of pocket money. They believe money is an infinite resource. This can lead to indulgence or unchecked expenses, resulting in financial mishaps.
This 2-hour session provides them with a relatable and practical understanding of the value of money.`,
  
  openGraph: {
    title: 'Value of Money Course for Teens',
    description: 'Practical understanding of value of money for teens.',
    url: 'https://yourdomain.com/for-teens/value-of-money',
  },
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
        <CourseSnapshot />
        <Testimonials
                    title1="Kids Loved It."
                    title2="Parents Approved."
                    titleIcon="/home_page_assets/5/Group.svg"
                    testimonials={[
                      {
                        quote: "My 14-year-old used to think money was just 'something adults worry about’. After this module, she saved up for her first laptop—tracking spending and prioritizing what mattered most.",
                        author: "Nisha Verma, Parent of a 9th Grader",
                      },
                      {
                        quote: "The Value of Money course gave my son a fresh perspective. He now donates a portion of his savings to charity and explains to us why generosity is part of true financial value.",
                        author: "Arjun Mehta, Parent of a 9th Grader",
                      },
                    ]}
                    backgroundColor="#FBDD9C"
                    commentBackgroundColor="#EF746C"
                    titleColor="#F15B52"
                    transitionImage="/effects/yellow.png"
                  />
      <PreFooter
        mainTitle="Why Learn the Value of Money So Early?"
        subText1="Some kids grow up without the concept of pocket money. They believe money is an infinite resource. This can result in indulgence or unchecked expenses, causing financial mishaps."
        subText2="This 2-hour session gives them a relatable and practical understanding of money's worth"
        buttonText="Book a Counselling Session"
      />
      <Footer /> 
      </>

    );
  }
  