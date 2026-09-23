import React from "react";

const Team = () => {
  return (
      <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="flex min-h-screen w-full flex-col items-center justify-center gap-6 bg-neutral-950 px-4 py-16 sm:px-6 sm:py-20 lg:px-10 xl:px-16">
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
          Our team
        </button>
        <h2 className="max-w-lg text-center text-2xl leading-snug font-semibold text-white sm:text-3xl">
          Meet the expert driving creativity and innovation
        </h2>
        <div className="mt-6 grid w-full max-w-5xl grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group relative w-full max-w-sm overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1">
            <img
              className="aspect-4/5 w-full rounded-3xl object-cover"
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/team/user-1.png"
              alt="user1"
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#951a20]/50 to-violet-500 pointer-events-none opacity-80"></div>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <h3 className="text-xl text-white">Jessica Brown</h3>
              <div className="relative h-9 w-9 overflow-hidden rounded-full bg-violet-100 text-violet-900 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute size-4.5 transition-transform duration-300 group-hover:translate-x-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {" "}
                  <path d="M5 12h14" /> <path d="m12 5 7 7-7 7" />{" "}
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute size-4.5 -translate-x-6 transition-transform duration-300 group-hover:translate-x-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {" "}
                  <path d="M5 12h14" /> <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
          <div className="group relative w-full max-w-sm overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1">
            <img
              className="aspect-4/5 w-full rounded-3xl object-cover"
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/team/user-2.png"
              alt="user2"
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#951a20]/50 to-violet-500 pointer-events-none opacity-80"></div>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <h3 className="text-xl text-white">Lillian Rivera</h3>
              <div className="relative h-9 w-9 overflow-hidden rounded-full bg-violet-100 text-violet-900 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute size-4.5 transition-transform duration-300 group-hover:translate-x-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {" "}
                  <path d="M5 12h14" /> <path d="m12 5 7 7-7 7" />{" "}
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute size-4.5 -translate-x-6 transition-transform duration-300 group-hover:translate-x-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {" "}
                  <path d="M5 12h14" /> <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
          <div className="group relative w-full max-w-sm overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1">
            <img
              className="aspect-4/5 w-full rounded-3xl object-cover"
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/team/user-3.png"
              alt="user3"
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#951a20]/50 to-violet-500 pointer-events-none opacity-80"></div>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <h3 className="text-xl text-white">Michael Brown</h3>
              <div className="relative h-9 w-9 overflow-hidden rounded-full bg-violet-100 text-violet-900 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute size-4.5 transition-transform duration-300 group-hover:translate-x-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {" "}
                  <path d="M5 12h14" /> <path d="m12 5 7 7-7 7" />{" "}
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute size-4.5 -translate-x-6 transition-transform duration-300 group-hover:translate-x-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {" "}
                  <path d="M5 12h14" /> <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Team;
