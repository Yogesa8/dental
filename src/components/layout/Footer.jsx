import React from "react";
import den_foot from "../../assets/common/dental-logo.png";

const Footer = () => {
  return (
    <footer className="bg-white w-full mx-auto text-black pt-8 lg:pt-12 px-4 sm:px-8 md:px-16 lg:px-28 rounded-tl-3xl rounded-tr-3xl overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-8 md:gap-12">
        <div className="lg:col-span-3 space-y-6">
          <a href="/" className="flex items-center ">
            <img src={den_foot} alt="" className="w-15" />
            <p className="text-black font-bold">MEX DENTAL CARE</p>
          </a>
          <p className="text-sm/6 text-neutral-600 max-w-96">
            Modern dental care focused on comfort, precision and healthy,
            confident smiles
          </p>
        </div>

        <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-2 gap-8 md:gap-12 lg:gap-18 items-start">
          {/* Resources */}
          <div>
            <h3 className="font-medium text-sm mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-neutral-800">
              <li>
                <a href="#" className="hover:text-neutral-700">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-700">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-700">
                  Doctors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-700">
                  Patient Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-700">
                  Book Appointment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-700">
                  Clinic Location
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-medium text-sm mb-4">Our Services</h3>
            <ul className="space-y-3 text-sm text-neutral-800">
              <li>
                <a href="#" className="hover:text-neutral-700">
                  Dental Implants
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-700">
                  Teeth Whitening
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-700">
                  Root Canal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-700">
                  Braces & Aligners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-700">
                  Complete Dentures
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-700">
                  Tooth Extraction
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-4 border-t border-neutral-300 flex justify-between items-center">
        <p className="text-neutral-600 text-sm">
          © 2026 Mex Dental Care. All rights reserved.
        </p>
        <p className="text-sm text-neutral-600">Rewari, Haryana</p>
      </div>
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-3xl h-full max-h-64 bg-slate-100 rounded-full blur-[100px] pointer-events-none" />
        <h1 className=" text-center font-extrabold leading-[0.7] text-transparent text-[clamp(3rem,15vw,15rem)] [-webkit-text-stroke:1px_#D4D4D4] mt-6">
          MEX DENTAL
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
