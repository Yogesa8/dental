import React from "react";

const CalltoAction = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="flex w-full flex-col items-center justify-center gap-6 px-4 py-16 sm:px-6 sm:py-20 lg:px-10 xl:px-16 bg-[#F5F3FF]"
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
        Visit Our Clinic
      </button>
      <div className="flex w-full max-w-5xl flex-col items-center justify-around rounded-2xl border border-gray-200 bg-white px-5 py-14 sm:px-8 sm:py-20">
        <h2 className="bg-linear-to-r from-pink-500 to-yellow-500 bg-clip-text text-center text-2xl font-bold text-transparent md:text-4xl/14">
          Your Smile Is Just One Visit Away
        </h2>
        <p className="mt-4 max-w-xl text-center text-sm leading-6 text-slate-500 sm:text-base">
          Visit our clinic or connect with us on WhatsApp to book your
          appointment or ask any questions.
        </p>
        <div className="mt-6 flex w-full max-w-sm flex-col items-stretch gap-3 text-sm sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:gap-4">
          <button
            type="button"
            className="w-full cursor-pointer rounded-full bg-indigo-500 px-6 py-3 font-medium text-white transition-all hover:bg-indigo-600 active:scale-95 sm:w-auto sm:px-8"
          >
            Get Directions
          </button>
          <button
            type="button"
            className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-gray-200 px-6 py-3 font-medium text-gray-600 transition hover:bg-gray-100 active:scale-95 sm:w-auto sm:px-8"
          >
            Chat on WhatsApp
            <svg
              className="mt-1 group-hover:translate-x-1 transition-all"
              width="15"
              height="11"
              viewBox="0 0 15 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5.5h13.092M8.949 1l5.143 4.5L8.949 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CalltoAction;
