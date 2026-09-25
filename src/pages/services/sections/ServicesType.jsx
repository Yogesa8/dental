import React from "react";
import { ArrowUpRight } from "lucide-react";
import dental_impl from "../../../assets/services/dental_implants.png";
import teeth_whitening from "../../../assets/services/teeth_whitening.png";
import root_canal from "../../../assets/services/root_canal.png";
import braces_aligners from "../../../assets/services/braces_aligners.png";
import dentures from "../../../assets/services/dentures.png";
import tooth_extraction from "../../../assets/services/tooth_extraction.png";
import kids_dentistry from "../../../assets/services/kids_dentistry.png";
import gum_treatment from "../../../assets/services/gum_treatment.png";

const services = [
  {
    title: "Dental Implants",
    subtitle: "Restore Missing Teeth",
    description: "Natural-looking and durable replacement for missing teeth.",
    image: dental_impl,
  },
  {
    title: "Teeth Whitening",
    subtitle: "Brighter Smile",
    description: "Safe and effective whitening for a naturally brighter smile.",
    image: teeth_whitening,
  },
  {
    title: "Root Canal",
    subtitle: "Pain Relief",
    description: "Save your natural tooth with precise and comfortable care.",
    image: root_canal,
  },
  {
    title: "Braces & Aligners",
    subtitle: "Straighten Your Smile",
    description: "Customized orthodontic treatment for better alignment.",
    image: braces_aligners,
  },
  {
    title: "Complete Dentures",
    subtitle: "Restore Your Smile",
    description: "Comfortable dentures designed for a natural appearance.",
    image: dentures,
  },
  {
    title: "Tooth Extraction",
    subtitle: "Safe Removal",
    description: "Gentle and professional removal of damaged teeth.",
    image: tooth_extraction,
  },
  {
    title: "Kids Dentistry",
    subtitle: "Gentle Dental Care",
    description: "Comfortable and friendly dental treatment for children.",
    image: kids_dentistry,
  },
  {
    title: "Gum Treatment",
    subtitle: "Healthy Gums",
    description: "Professional treatment to protect gums and oral health.",
    image: gum_treatment,
  },
];

const ServicesType = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="bg-[#F8F6FF] relative flex min-h-screen w-full flex-col items-center justify-center gap-6 overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-10 xl:px-16"
    >
      <button className="flex items-center gap-2 text-indigo-600 text-sm px-6 py-3 rounded-full bg-indigo-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-zap-icon lucide-zap"
        >
          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
        </svg>
        Comprehensive Dental Services
      </button>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center">
        Everything your smile needs, under one roof.
      </h2>
      <div className="mx-auto w-full max-w-375 px-2 sm:px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative aspect-4/5 w-full overflow-hidden rounded-[14px] bg-gray-100 sm:aspect-3/4"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 h-full w-full rounded-[14px] object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] sm:mix-blend-multiply"
              />

              {/* Bottom glass card */}
              <div className="absolute right-3 bottom-3 left-3 min-h-36 rounded-[14px] border border-white/50 bg-slate-900/45 p-4 text-white shadow-sm backdrop-blur-xl sm:right-4 sm:bottom-4 sm:left-4 sm:min-h-0 sm:bg-white/30 sm:p-5 sm:text-black">
                {/* Title + Arrow */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xl leading-tight font-semibold sm:text-lg lg:text-xl">
                    {service.title}
                  </h3>

                  <ArrowUpRight
                    className="h-6 w-6 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    strokeWidth={2}
                  />
                </div>

                {/* Subtitle */}
                <p className="mt-3 text-sm leading-tight font-semibold sm:text-sm lg:text-base">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="mt-1 line-clamp-2 text-sm leading-[1.4] sm:text-sm lg:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesType;
