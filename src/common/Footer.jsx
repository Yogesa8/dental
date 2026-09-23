import React from "react";
import den_foot from "../assets/hero-image.png"

const Footer = () => {
  return (
    <footer data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="flex w-full flex-col justify-end overflow-hidden bg-black px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4 lg:grid-cols-[2fr_1fr_1fr_1.5fr] lg:gap-x-8">
          <div className="col-span-2 flex min-w-0 flex-col items-start text-left md:col-span-2 lg:col-span-1">
            <a href="https://prebuiltui.com" className="flex items-center text-white">
              <img src={den_foot} alt="" className="w-15"/>DENTALCARE
            </a>
            <div className="w-full max-w-52 h-0.5 mt-8 bg-linear-to-r from-[#24212D] to-[#24212D]/0"></div>
            <p className="text-sm text-white/60 mt-6 max-w-87.5 leading-relaxed">
              Modern dental care focused on comfort, precision and healthy,
              confident smiles.
            </p>
          </div>

          <div className="flex min-w-0 flex-col items-start text-left">
            <h3 className="text-sm text-white font-medium">Important Links</h3>
            <div className="flex flex-col gap-2 mt-6">
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Doctors
              </a>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="flex min-w-0 flex-col items-start text-left">
            <h3 className="text-sm text-white font-medium">Social Links</h3>
            <div className="flex flex-col gap-2 mt-6">
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Youtube
              </a>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Linkedin
              </a>
            </div>
          </div>

          <div className="col-span-2 flex min-w-0 flex-col items-start text-left md:col-span-2 lg:col-span-1">
            <h3 className="text-sm text-white font-medium">
              Subscribe for news
            </h3>
            <div className="mt-4 flex h-13 w-full max-w-80 items-center gap-2 overflow-hidden rounded-full border border-white/20">
              <input
                type="email"
                placeholder="Enter your email.."
                className="h-full min-w-0 flex-1 bg-transparent pl-4 text-sm text-white outline-none placeholder:text-xs placeholder-white/60 sm:pl-6"
                required
              />
              <button
                type="submit"
                className="mr-1.5 h-10 shrink-0 cursor-pointer rounded-full bg-linear-to-b from-[#5623D8] to-[#7B53E2] px-4 text-xs text-white transition hover:opacity-90 active:scale-95 focus:outline-none sm:px-5 sm:text-sm"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="w-full h-0.5 mt-16 mb-4 bg-linear-to-r from-[#24212D]/0 via-[#24212D] to-[#24212D]/0"></div>

        <div className="relative z-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs text-white/60">© 2026 DentalCare</p>
          <div className="flex flex-wrap items-center gap-3 text-left sm:gap-6 sm:text-right">
            <a
              href="#"
              className="text-xs text-white/60 hover:text-white transition-colors"
            >
              Terms & Conditions
            </a>
            <div className="w-px h-4 bg-white/20"></div>
            <a
              href="#"
              className="text-xs text-white/60 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="w-full flex justify-center mt-6 md:mt-12 md:mb-[-0.5%]">
          <h1 className="pointer-events-none select-none text-center text-[clamp(2.5rem,13vw,11rem)] leading-[0.85] font-extrabold tracking-tighter text-zinc-900">
            DentalCare
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
