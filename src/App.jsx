import React, { useEffect } from "react";
import Banner from "./component/Banner";
import Hero from "./component/Hero";
import Footer from "./common/Footer";
import Feature from "./component/Feature";
import Team from "./component/Team";
import Services from "./component/Services";
import Contact from "./component/Contact";
import Testimonial from "./component/Testimonial";
import CalltoAction from "./component/CalltoAction";
import ReactLenis from "lenis/react";
import Aos from "aos";
import "aos/dist/aos.css";
import DentalImg from "./component/DentalImg";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <ReactLenis
        root
        options={{
          lerp: 0.08,
        }}
      />
      <Banner />
      <Hero />
      <Feature />
      <Team />
      <Services />
      <Testimonial />
      <Contact />
      <DentalImg />
      <CalltoAction />
      <Footer />
    </>
  );
};

export default App;
