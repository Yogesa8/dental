import React from "react";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600",
      name: "Dr. Aisha Sharma",
      role: "BDS, MDS",
      desc: "Orthodontist",
      exp: "8+ Years Experience"
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600",
      name: "Dr. Rahul Mehta",
      role: "BDS, MDS",
      desc: "Implantologist",
      exp : "10+ Years Experience"
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600",
      name: "Dr. Neha Verma",
      role: "BDS, MDS",
      desc: "Pediatric Dentist",
      exp : "7+ Years Experience"
    },
  ];

  return (
    <section
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="flex flex-col items-center justify-center gap-6 py-20 px-6 md:px-16 lg:px-24 xl:px-32 w-full min-h-screen bg-[#F7F7FF]"
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
        Our Dentists
      </button>
      <h2 className="max-w-lg text-center text-2xl leading-snug font-semibold sm:text-3xl">
        Meet the Experts Behind Your Smile
      </h2>
      <p className="mx-auto max-w-md text-center text-sm leading-6 text-zinc-600 sm:text-base">
        Experienced dental professionals committed to providing comfortable,
        personalized care.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="relative w-full max-w-67.5 rounded-3xl overflow-hidden transform transition duration-300 hover:-translate-y-1 group cursor-default"
          >
            <img
              className={member.id === 1 ? "w-full" : "rounded-3xl w-full"}
              src={member.img}
              alt={member.name}
            />

            {/* Original Gradient Background (fades out on hover) */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#951a20]/50 to-[#03005E] pointer-events-none opacity-80 group-hover:opacity-0 transition-opacity duration-300"></div>

            {/* New Hover Gradient Background (fades in on hover) */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#000000]/70 to-[#03005E] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="absolute bottom-4 left-6 right-6 flex flex-col">
              <h3 className="text-xl text-white">{member.name}</h3>
              <p className="text-sm text-white/75">{member.role}</p>

              {/* Hover Expandable Details */}
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300">
                <div className="overflow-hidden">
                  <p className="text-sm text-white/90 pt-3">{member.desc}</p>
                  <p className="text-sm text-white/90 ">{member.exp}</p>
                  {/* <button className="mt-35 px-5 py-2 rounded-full border border-white/90 text-sm text-white w-max hover:bg-white hover:text-black transition-colors cursor-pointer">
                    See profile
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
