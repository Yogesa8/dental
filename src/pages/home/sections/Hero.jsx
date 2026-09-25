import heroTeeth from "../../../assets/home/hero-tooth.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex min-h-svh flex-col items-center overflow-hidden bg-linear-to-b from-[#D9D9FF] to-[#F8F3F9] px-4 pb-10 pt-24 text-sm text-slate-800 sm:px-6 sm:pb-12 sm:pt-28 lg:px-10 xl:px-16"
    >
      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-8 py-8 sm:py-10 md:grid-cols-2 md:gap-10 md:py-12 lg:gap-16 lg:py-14">
        <div className="flex min-w-0 flex-col items-center text-center md:items-start md:text-left">
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 p-1 pr-3 text-indigo-600 transition-colors hover:bg-indigo-100"
          >
            <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs text-white">
              Healthy Smiles
            </span>
            <span className="flex items-center gap-2 text-xs sm:text-sm">
              Brighter Tomorrow.
              <svg
                aria-hidden="true"
                width="6"
                height="9"
                viewBox="0 0 6 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m1 1 4 3.5L1 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>

          <h1 className="mt-5 max-w-2xl text-4xl leading-[1.12] font-semibold tracking-tight text-neutral-900 sm:text-5xl md:text-[42px] lg:text-5xl xl:text-[56px]">
            Expert Dental Care for Your Perfect Smile
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
            Advanced technology, compassionate care, and a team of experts
            dedicated to your oral health and confidence.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex rounded-full border border-neutral-300 p-1.5 transition-transform hover:-translate-y-0.5"
          >
            <span className="rounded-full bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700 sm:px-10">
              Book an Appointment
            </span>
          </a>

          <div className="mt-9 grid w-full max-w-md grid-cols-3 divide-x divide-indigo-200 sm:mt-10">
            <div className="min-w-0 px-2 text-center first:pl-0 md:text-left">
              <h2 className="text-2xl font-semibold text-gray-800 sm:text-3xl">
                10+
              </h2>
              <p className="mt-1 text-[11px] leading-4 text-gray-500 sm:text-xs">
                Happy Patients
              </p>
            </div>
            <div className="min-w-0 px-2 text-center sm:px-4">
              <h2 className="text-2xl font-semibold text-gray-800 sm:text-3xl">
                98%
              </h2>
              <p className="mt-1 text-[11px] leading-4 text-gray-500 sm:text-xs">
                Satisfaction Rate
              </p>
            </div>
            <div className="min-w-0 px-2 text-center last:pr-0 md:text-left sm:px-4">
              <h2 className="text-2xl font-semibold text-gray-800 sm:text-3xl">
                15+
              </h2>
              <p className="mt-1 text-[11px] leading-4 text-gray-500 sm:text-xs">
                Years of Excellence
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-130 items-center justify-center md:max-w-140">
          <img
            className="h-auto w-full object-contain"
            src={heroTeeth}
            alt="Anatomy of a healthy tooth showing enamel, dentin, pulp and cementum"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
