import hero_img from "../assets/hero-image.png";
import Header from "../common/Header";

const Hero = () => {
  return (
    <section className="flex min-h-[calc(100svh-2.625rem)] flex-col items-center bg-linear-to-b from-black to-[#1A0033] text-white">
      <Header />

      <div className="mt-20 flex flex-wrap items-center justify-center rounded-full border border-indigo-900 p-1.5 text-xs sm:mt-28 lg:mt-32">
        <div className="flex items-center">
          <img
            className="size-7 rounded-full border border-indigo-900"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
            alt="userImage1"
          />
          <img
            className="size-7 rounded-full border border-indigo-900 -translate-x-2"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
            alt="userImage2"
          />
          <img
            className="size-7 rounded-full border border-indigo-900 -translate-x-4"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
            alt="userImage3"
          />
        </div>
        <p className="-translate-x-2 text-xs text-slate-200">
          Trusted by 10,000+ Patients{" "}
        </p>
      </div>

      <h2 className="mt-2 max-w-4xl px-4 text-center text-4xl leading-tight text-slate-50 sm:text-5xl lg:text-7xl/20">
        Where Expertise Meets Your Perfect Smile.
      </h2>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 px-4 text-center text-sm text-zinc-500 sm:mt-12 sm:gap-4 sm:text-base md:gap-8">
        <p className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-check size-5"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5"></path>
          </svg>
          <span>Pain-Free Treatments</span>
        </p>
        <p className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-check size-5"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5"></path>
          </svg>
          <span>Advanced Technology</span>
        </p>
        <p className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-check size-5"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5"></path>
          </svg>
          <span>Trusted Experts</span>
        </p>
      </div>

      <div className="mt-6 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
        <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-slate-50 text-xs md:text-base px-6 py-3 rounded-lg transition cursor-pointer">
          <span>Get started</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.166 10h11.667m0 0L9.999 4.167M15.833 10l-5.834 5.834"
              stroke="#fff"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button className="flex items-center gap-2 text-slate-50 text-xs md:text-base px-8 py-3 rounded-lg transition cursor-pointer">
          <span>Try 7 days free trial</span>
          <div className="relative flex size-3.5 items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping duration-300"></span>
            <span className="relative inline-flex size-2 rounded-full bg-green-600"></span>
          </div>
        </button>
      </div>

      <img
        className=" w-full max-w-4xl object-cover object-top px-4 md:max-h-100"
        src={hero_img}
        alt=""
      />
    </section>
  );
};

export default Hero;
