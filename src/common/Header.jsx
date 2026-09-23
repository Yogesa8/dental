import { useEffect, useState } from "react";
import dentalLogo from "../assets/hero-image.png";
import { Link } from "react-router-dom";

const navItems = [
  ["Services", "/services"],
  ["Doctors", "#doctors"],
  ["About", "#about"],
  ["Contact Us", "#contact"],
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const closeMenu = () => setMobileOpen(false);

  useEffect(() => {
    const hero = document.getElementById("hero");

    if (!hero) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeaderVisible(entry.isIntersecting);

        if (!entry.isIntersecting) {
          setMobileOpen(false);
        }
      },
      { threshold: 0 },
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-4 z-50 px-4 transition-all duration-300 ease-out sm:px-6 md:top-6 ${
        headerVisible
          ? "visible translate-y-0 opacity-100"
          : "pointer-events-none invisible -translate-y-24 opacity-0"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-4xl items-center justify-between gap-4 rounded-full border border-white/90 bg-white/60 px-3 py-2 shadow-sm backdrop-blur-xl sm:px-4 md:gap-6">
        <a
          href="#"
          className="flex shrink-0 items-center gap-1.5 font-medium text-slate-800"
          aria-label="DentalCare home"
        >
          <img
            src={dentalLogo}
            alt=""
            className="size-9 object-contain sm:size-10"
          />
          <span className="text-xs sm:text-sm">DENTALCARE</span>
        </a>

        {/* <div className="hidden h-8 w-px shrink-0 bg-white md:block" /> */}

        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          {navItems.map(([label, href]) => (
            <Link to={href} key={label} className="text-sm text-gray-600 transition-colors hover:text-indigo-700">
              {label}
            </Link>            
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-violet-600 px-5 py-2.5 text-xs font-medium text-white transition-colors hover:bg-violet-700 md:inline-flex lg:px-6 lg:py-3 lg:text-sm"
          >
            Book Appointment
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            className="rounded-full p-2 text-gray-700 transition-colors hover:bg-white/70 md:hidden"
          >
            <svg
              aria-hidden="true"
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
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 flex h-dvh flex-col items-center justify-center gap-8 bg-white/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          mobileOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        {navItems.map(([label, href]) => (
          <Link to={href}
            key={label}
            onClick={closeMenu}
            className="text-lg text-gray-700 transition-colors hover:text-indigo-700"
          >
            {label}
          </Link>
        ))}

        <a
          href="#contact"
          onClick={closeMenu}
          className="mt-2 rounded-full bg-violet-600 px-8 py-3 text-sm font-medium text-white"
        >
          Book Appointment
        </a>

        <button
          type="button"
          onClick={closeMenu}
          aria-label="Close menu"
          className="absolute top-5 right-5 rounded-full bg-violet-600 p-2 text-white transition-colors hover:bg-violet-700"
        >
          <svg
            aria-hidden="true"
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
    </header>
  );
};

export default Header;
