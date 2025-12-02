import About from "./(home5)/about";
import Hero from "./(home5)/hero";
import Blog from "./(home5)/blog";
import CallBack from "./(home5)/callback";
import CallTo from "./(home5)/callto";
import Counter from "./(home5)/counter";
import Markets from "./(home5)/markets";
import Pricing from "./(home5)/pricing";
import Project from "./(home5)/project";
import Service from "./(home5)/service";
import Skill from "./(home5)/skill";
import Testimonial from "./(home5)/testimonial";
import TeamMember from "./(home5)/team-member";
import WorkWithUs from "./(home5)/work-with-us";
import WorldMapPage4 from "./(home5)/world-map";
import ReportCard from "./(home5)/report-card";
import HeroPremium from "./(home5)/hero-premium";
import ServicesGrid from "./(home5)/services-grid";

export default function Home() {
  return (
    <>
            {/* <Hero /> */}
            <HeroPremium />
      <Counter />
      <ServicesGrid />
      {/* <About /> */}
      <ReportCard />
      <Project />
      <Testimonial />
      <WorldMapPage4/>

      
      <WorkWithUs />
      {/* <Service /> */}
      {/* <Markets /> */}
      {/* <Skill /> */}
      {/* <TeamMember /> */}
      {/* <CallTo /> */}
      {/* <Testimonial /> */}

      {/* <Pricing /> */}
      {/* <CallBack /> */}
      {/* <Blog /> */}
    </>
  );
}
