import React from "react";
import a1 from "../assets/about/a1.png";
import a2 from "../assets/about/a2.png";
import a3 from "../assets/about/a3.png";
import a4 from "../assets/about/a4.png";
import a5 from "../assets/about/a5.png";
import a6 from "../assets/about/a6.png";

const Services = () => {
  return (
      <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="relative flex min-h-screen w-full flex-col items-center justify-center gap-6 overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-10 xl:px-16">
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
          About our apps
        </button>
        <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
          A visual collection of our most recent works - each piece crafted with
          intention, emotion and style.
        </p>
        <div className="relative mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 pt-8 sm:grid-cols-2 sm:gap-12 sm:pt-12 lg:grid-cols-3 lg:gap-16">
          <div className="pointer-events-none absolute -top-80 left-1/2 -z-10 size-130 -translate-x-1/2 rounded-full bg-[#FBFFE1] blur-[300px]"></div>
          <div className="flex min-w-0 items-start gap-4 sm:block">
            <div className="size-20 shrink-0 overflow-hidden rounded border border-indigo-200 bg-indigo-50">
              <img src={a1} alt="" className="size-full object-contain" />
            </div>
            <div className="min-w-0 space-y-1 sm:mt-5 sm:space-y-2">
              <h3 className="text-bold font-medium text-slate-600">
                Dental Implants
              </h3>
              <p className="text-sm text-slate-500">
                Restore missing teeth with natural-looking, durable implants.
              </p>
            </div>
          </div>
          <div className="flex min-w-0 items-start gap-4 sm:block">
            <div className="size-20 shrink-0 overflow-hidden rounded border border-indigo-200 bg-indigo-50">
              <img src={a2} alt="" className="size-full object-contain" />
            </div>
            <div className="min-w-0 space-y-1 sm:mt-5 sm:space-y-2">
              <h3 className="text-base font-medium text-slate-600">
                Teeth Whitening
              </h3>
              <p className="text-sm text-slate-500">
                Brighten your smile with safe, effective whitening treatments.
              </p>
            </div>
          </div>
          <div className="flex min-w-0 items-start gap-4 sm:block">
            <div className="size-20 shrink-0 overflow-hidden rounded border border-indigo-200 bg-indigo-50">
              <img src={a3} alt="" className="size-full object-contain" />
            </div>
            <div className="min-w-0 space-y-1 sm:mt-5 sm:space-y-2">
              <h3 className="text-base font-medium text-slate-600">
                Root Canal Treatment
              </h3>
              <p className="text-sm text-slate-500">
                Relieve pain and restore your tooth’s function with precision
                care.
              </p>
            </div>
          </div>
          <div className="flex min-w-0 items-start gap-4 sm:block">
            <div className="size-20 shrink-0 overflow-hidden rounded border border-indigo-200 bg-indigo-50">
              <img src={a4} alt="" className="size-full object-contain" />
            </div>
            <div className="min-w-0 space-y-1 sm:mt-5 sm:space-y-2">
              <h3 className="text-base font-medium text-slate-600">
                Braces & Aligners
              </h3>
              <p className="text-sm text-slate-500">
                Straighten and align your teeth with customized orthodontic
                care.
              </p>
            </div>
          </div>
          <div className="flex min-w-0 items-start gap-4 sm:block">
            <div className="size-20 shrink-0 overflow-hidden rounded border border-indigo-200 bg-indigo-50">
              <img src={a5} alt="" className="size-full object-contain" />
            </div>
            <div className="min-w-0 space-y-1 sm:mt-5 sm:space-y-2">
              <h3 className="text-base font-medium text-slate-600">
                Complete Dentures
              </h3>
              <p className="text-sm text-slate-500">
                Comfortable, full-mouth dentures for a natural look and fit.
              </p>
            </div>
          </div>
          <div className="flex min-w-0 items-start gap-4 sm:block">
            <div className="size-20 shrink-0 overflow-hidden rounded border border-indigo-200 bg-indigo-50">
              <img src={a6} alt="" className="size-full object-contain" />
            </div>
            <div className="min-w-0 space-y-1 sm:mt-5 sm:space-y-2">
              <h3 className="text-base font-medium text-slate-600">
                Tooth Extraction
              </h3>
              <p className="text-sm text-slate-500">
                Safe, pain-free removal of damaged or problematic teeth.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Services;
