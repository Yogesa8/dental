import Hero from "./sections/Hero";
import Trust from "./sections/Trust";
import Services from "./sections/Services";
import Feature from "./sections/Feature";
import Team from "./sections/Team";
import Testimonial from "./sections/Testimonial";
import CallToAction from "../../components/shared/CallToAction";

const Home = () => {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <Feature />
      <Team />
      <Testimonial />
      <CallToAction />    
    </>
  );
};

export default Home;
