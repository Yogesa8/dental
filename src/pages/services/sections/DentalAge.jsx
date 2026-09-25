import React from "react";

const DentalAge = () => {
  const cards = [
    {
      id: 1,
      img: "https://assets.prebuiltui.com/components/card/card-houseImage1.png",
      title: "Children",
      desc: "Gentle care for growing smiles.",
      pera: "Preventive checkups, cavity care, fluoride treatment, and friendly dental visits designed to keep children comfortable and confident.",
    },
    {
      id: 2,
      img: "https://assets.prebuiltui.com/components/card/card-houseImage2.png",
      title: "Adults",
      desc: "Complete Care for Healthy Smiles",
      pera: "From routine cleaning and fillings to root canals, whitening, implants, and aligners, we help maintain healthy and confident smiles.",
    },
    {
      id: 3,
      img: "https://assets.prebuiltui.com/components/card/card-houseImage2.png",
      title: "Senior Citizens",
      desc: "Comfortable Care for Long-Term Oral Health",
      pera: "Specialized care for dentures, missing teeth, gum health, sensitivity, and age-related dental concerns with a focus on comfort and function.",
    },
  ];

  return (
    <section
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="bg-[#FFFFFF] relative flex min-h-screen w-full flex-col items-center justify-center gap-6 overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-10 xl:px-16"
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
        Care for Every Age
      </button>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center">
        Dental Care for Every Stage of Life
      </h2>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
        Personalized dental care for children, adults, and senior citizens, with
        treatments designed around the needs of every age group.
      </p>

      <section className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-12">
          {cards.map((card) => (
            <div key={card.id} className="flex flex-col items-center">
              <img
                src={card.img}
                alt={card.title}
                className="size-30 aspect-square rounded-full"
              />
              <h3 className="text-lg font-medium text-slate-700 text-center mt-2">
                {card.title}
              </h3>
              <p className="text-sm text-indigo-600 text-center">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default DentalAge;
