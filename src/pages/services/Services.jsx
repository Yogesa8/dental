import React from "react";
import ServiceHero from "./sections/ServiceHero";
import DentalAge from "./sections/DentalAge";
import ServicesType from "./sections/ServicesType";
import WhyUs from "./sections/WhyUs";
import TreatmentProcess from "./sections/TreatmentProcess";
import ServiceFAQ from "./sections/ServiceFAQ";

const Services = () => {
  return (
    <div>
      <ServiceHero />
      <DentalAge />
      <ServicesType />
      <WhyUs />
      <TreatmentProcess />
      <ServiceFAQ />
    </div>
  );
};

export default Services;
