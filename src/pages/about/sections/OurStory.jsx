import { Zap } from "lucide-react";

import personalized from "../../../assets/about/personalized.png";
import comfortable from "../../../assets/about/comfortable.png";
import modern from "../../../assets/about/modern.png";

const story = [
  {
    pic: personalized,
    bg: "bg-violet-100",
    title: "Personalized Dental Care",
    desc: "Treatment planned around your individual dental needs and comfort.",
  },
  {
    pic: comfortable,
    bg: "bg-green-100",
    title: "Comfortable Treatment Experience",
    desc: "Gentle care designed to make every visit relaxed and stress-free.",
  },
  {
    pic: modern,
    bg: "bg-orange-100",
    title: "Modern & Reliable Dentistry",
    desc: "Modern techniques and trusted dental care for safe, effective treatment.",
  },
];

const OurStory = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      aria-labelledby="care-approach-title"
      className="w-full bg-[#FFFFFF] px-4 py-16 sm:px-6 sm:py-20 lg:px-10"
    >
      {/* Heading */}
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <span className="flex items-center gap-2 rounded-full bg-indigo-50 px-6 py-3 text-sm text-indigo-600">
          <Zap className="size-5" />
          Our Care Approach
        </span>

        <h2
          id="care-approach-title"
          className="mt-6 text-center text-3xl font-bold text-slate-800 sm:text-4xl"
        >
          What Makes Our Care Different
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-6 text-slate-500 sm:text-base">
          Every part of your visit is designed around your comfort, individual
          needs, and long-term oral health.
        </p>
      </div>

      {/* Care approach cards */}
      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
        {story.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* Circular Image */}
            <div
              className={`flex h-50 w-50 items-center justify-center overflow-hidden rounded-full ${item.bg}`}
            >
              <img
                src={item.pic}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="mt-6 text-base font-semibold text-slate-800">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-2 max-w-xs text-sm leading-5 text-slate-600">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurStory;
