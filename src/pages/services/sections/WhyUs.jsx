import React from "react";
import why_us from "../../../assets/services/why-us.png";
import { MonitorCheck, Stethoscope, ToothbrushSparkles } from "lucide-react";

const WhyUs = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="bg-[#FFFFFF] relative flex min-h-screen w-full flex-col items-center justify-center gap-6 overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-10 xl:px-16"
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
        Why Choose Us
      </button>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center">
        Trusted Dental Care You Can Rely On
      </h2>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
        Experienced dentists, modern technology, and personalized care focused
        on making every visit comfortable and effective.
      </p>

      <div className="max-w-auto flex flex-col md:flex-row gap-8 items-center">
        <img className="max-w-xl w-full rounded-2xl" src={why_us} alt="Dental care" />

        <div className="space-y-10 px-4 md:px-0">
          {/* Experienced Dentists */}
          <div className="flex items-center justify-center gap-6 max-w-md">
            <div className="p-6 aspect-square bg-violet-100 rounded-full">
              <ToothbrushSparkles color="#886dfc"/>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-semibold text-slate-700">
                Experienced Dentists
              </h3>

              <p className="text-sm text-slate-600">
                Professional dental care tailored to your individual needs.
              </p>
            </div>
          </div>

          {/* Modern Technology */}
          <div className="flex items-center justify-center gap-6 max-w-md">
            <div className="p-6 aspect-square bg-green-100 rounded-full">
              <MonitorCheck color="#57f791"/>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-semibold text-slate-700">
                Modern Technology
              </h3>

              <p className="text-sm text-slate-600">
                Advanced dental equipment for accurate diagnosis and treatment.
              </p>
            </div>
          </div>

          {/* Comfortable Treatment */}
          <div className="flex items-center justify-center gap-6 max-w-md">
            <div className="p-6 aspect-square bg-orange-100 rounded-full">
              <Stethoscope color="#ffc370" />
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-semibold text-slate-700">
                Comfortable Treatment
              </h3>

              <p className="text-sm text-slate-600">
                Gentle, patient-friendly care focused on your comfort.
              </p>
            </div>
          </div>

          {/* Complete Dental Care */}
          <div className="flex items-center justify-center gap-6 max-w-md">
            <div className="p-6 aspect-square bg-blue-100 rounded-full">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 4.5c-3 0-4.5 2.5-4.5 5 0 3 1.5 5 2.5 7.5 1 2.5 1.5 6.5 3.5 6.5 2.5 0 2-5 4.5-5s2 5 4.5 5c2 0 2.5-4 3.5-6.5 1-2.5 2.5-4.5 2.5-7.5 0-2.5-1.5-5-4.5-5-2 0-3.5 1.5-6 1.5S10 4.5 8 4.5Z"
                  stroke="#2563EB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="m11 12 2 2 4-4"
                  stroke="#2563EB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-semibold text-slate-700">
                Complete Dental Care
              </h3>

              <p className="text-sm text-slate-600">
                Preventive, cosmetic and restorative treatments in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>    
  );
};

export default WhyUs;
