import { Plus } from "lucide-react";

const ServiceFAQ = () => {
  const faqs = [
    {
      question: "How do I know which dental treatment I need?",
      answer:
        "Our dentist will examine your oral health, understand your concerns, and recommend the most suitable treatment for you.",
    },
    {
      question: "Are dental treatments painful?",
      answer:
        "Most treatments are performed with techniques designed to keep you comfortable. Local anesthesia may be used when required.",
    },
    {
      question: "How often should I visit the dentist?",
      answer:
        "A routine dental checkup every six months is generally recommended, but your dentist may suggest a different schedule based on your oral health.",
    },
    {
      question: "Do you provide dental care for children and seniors?",
      answer:
        "Yes. We provide dental care for children, adults, and senior citizens with treatments suited to each age group.",
    },
    {
      question: "Can I book an appointment online?",
      answer:
        "Yes. You can book an appointment through our website or contact the clinic directly.",
    },
    {
      question: "How long does a dental treatment take?",
      answer:
        "Treatment time depends on the procedure. Some treatments can be completed in one visit, while others may require multiple appointments.",
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
        Frequently Asked Questions
      </button>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center">
        Questions About Your Dental Care?
      </h2>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
        Find quick answers to common questions about treatments, appointments,
        recovery, and dental care.
      </p>

      {/* main question section */}
      <div className="mt-8 w-full max-w-3xl space-y-5 sm:space-y-6">
        {faqs.map((faq) => (
          <div key={faq.question} className="w-full">
            <div className="flex items-center gap-3">
              <h3 className="w-fit rounded-xl bg-slate-900 px-4 py-2.5 text-sm leading-6 font-semibold text-white shadow-sm sm:px-5 sm:text-base">
                {faq.question}
              </h3>
              <Plus
                aria-hidden="true"
                className="size-5 shrink-0 text-slate-500"
                strokeWidth={2}
              />
            </div>

            <p className="mt-1.5 ml-8 max-w-[calc(100%-2rem)] rounded-[18px] bg-white px-4 py-3 text-sm leading-6 text-slate-700 shadow-sm ring-1 ring-slate-200/70 sm:ml-16 sm:max-w-[80%] sm:px-5 sm:py-3.5 sm:text-base">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceFAQ;
