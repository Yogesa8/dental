import React, { useState } from "react";
import den_foot from "../assets/hero-image.png"

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="relative z-50 flex w-full items-center justify-between p-4 md:px-8 md:py-4 lg:px-16 xl:px-24 2xl:px-32">
      <a href="https://prebuiltui.com" className="flex items-center text-white">
        <img src={den_foot} alt="" className="w-15" />
        DENTALCARE
      </a>
      <div
        id="menu"
        className={`${mobileOpen ? "max-md:w-full" : "max-md:w-0"} flex items-center gap-4 text-sm max-md:fixed max-md:top-0 max-md:left-0 max-md:z-50 max-md:h-dvh max-md:flex-col max-md:justify-center max-md:overflow-hidden max-md:bg-neutral-950/95 max-md:transition-all max-md:duration-300 lg:gap-8`}
      >
        <a
          href="#"
          onClick={() => setMobileOpen(false)}
          className="hover:text-gray-300"
        >
          Products
        </a>
        <a
          href="#"
          onClick={() => setMobileOpen(false)}
          className="hover:text-gray-300"
        >
          Solutions
        </a>
        <a
          href="#"
          onClick={() => setMobileOpen(false)}
          className="hover:text-gray-300"
        >
          Pricing
        </a>
        <a
          href="#"
          onClick={() => setMobileOpen(false)}
          className="hover:text-gray-300"
        >
          Docs
        </a>

        <button
          id="close-menu"
          onClick={() => setMobileOpen(false)}
          className="md:hidden bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-md aspect-square font-medium transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
      <button className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-full text-sm transition cursor-pointer">
        Contact us
      </button>

      <button
        id="open-menu"
        onClick={() => setMobileOpen(true)}
        aria-label="Open menu"
        aria-expanded={mobileOpen}
        className="md:hidden bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-md aspect-square font-medium transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 12h16" />
          <path d="M4 18h16" />
          <path d="M4 6h16" />
        </svg>
      </button>
    </nav>
  );
};

export default Header;
