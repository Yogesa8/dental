import { Pin, Zap } from "lucide-react";

const treatmentSteps = [
  {
    number: "01",
    title: "Book Appointment",
    description: "Choose a convenient time for your dental visit.",
    accent: "#ff7a00",
    panel: "#321f13",
    border: "rgba(255, 122, 0, 0.42)",
    position: "lg:left-[14%] lg:top-4",
    rotation: "-rotate-3 lg:rotate-6",
  },
  {
    number: "02",
    title: "Dental Consultation",
    description: "We examine your oral health and understand your concerns.",
    accent: "#4699ff",
    panel: "#172437",
    border: "rgba(70, 153, 255, 0.42)",
    position: "lg:right-[10%] lg:top-[19%]",
    rotation: "rotate-3 lg:-rotate-6",
  },
  {
    number: "03",
    title: "Personalized Treatment",
    description: "Get a treatment plan designed around your dental needs.",
    accent: "#bd64ff",
    panel: "#2d1b38",
    border: "rgba(189, 100, 255, 0.42)",
    position: "lg:left-[14%] lg:top-[51%]",
    rotation: "-rotate-3 lg:rotate-6",
  },
  {
    number: "04",
    title: "Follow-Up Care",
    description: "We guide you after treatment to keep your smile healthy.",
    accent: "#ff7a00",
    panel: "#321f13",
    border: "rgba(255, 122, 0, 0.42)",
    position: "lg:right-[5%] lg:top-[64%]",
    rotation: "rotate-3 lg:-rotate-6",
  },
];

const TreatmentProcess = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      aria-labelledby="treatment-process-title"
      className="relative w-full overflow-hidden bg-[#F8F6FF] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 xl:px-16"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <span className="flex items-center gap-2 rounded-full bg-indigo-50 px-6 py-3 text-sm text-indigo-600">
          <Zap aria-hidden="true" className="size-5" />
          Simple Process
        </span>

        <h2
          id="treatment-process-title"
          className="mt-6 text-center text-3xl font-bold text-slate-800 sm:text-4xl"
        >
          Your Smile Journey, Made Simple
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-sm leading-6 text-slate-500 sm:text-base">
          From your first consultation to ongoing care, we make every step
          simple, comfortable, and transparent.
        </p>

        <div
          className="relative mt-12 w-full max-w-6xl rounded-[28px] border border-white/10 px-5 py-12 sm:px-10 sm:py-16 lg:h-240 lg:px-0 lg:py-0"
          // style={{
          //   backgroundImage:
          //     "repeating-linear-gradient(to bottom, transparent 0, transparent 47px, rgba(255,255,255,0.055) 48px)",
          // }}
        >
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            viewBox="0 0 1200 960"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M465 196 C600 206 650 270 765 318"
              stroke="rgba(255,255,255,0.28)"
              strokeWidth="2"
              strokeDasharray="9 8"
            />
            <path
              d="M770 377 C650 420 570 470 455 530"
              stroke="rgba(255,255,255,0.28)"
              strokeWidth="2"
              strokeDasharray="9 8"
            />
            <path
              d="M465 620 C610 680 670 720 790 745"
              stroke="rgba(255,255,255,0.28)"
              strokeWidth="2"
              strokeDasharray="9 8"
            />
          </svg>

          <div className="relative z-10 flex flex-col items-center gap-14 lg:block lg:h-full">
            {treatmentSteps.map((step) => (
              <article
                key={step.number}
                className={`group relative w-full max-w-90 rounded-[26px] border border-white/10 p-3 pt-5 shadow-[0_20px_45px_rgba(0,0,0,0.38)] transition-transform duration-300 hover:rotate-0 hover:scale-[1.02] sm:max-w-97.5 sm:p-4 sm:pt-6 lg:absolute lg:w-77.5 xl:w-82.5 ${step.position} ${step.rotation}`}
              >
                <Pin
                  aria-hidden="true"
                  className="mx-auto mb-4 size-7 fill-current"
                  style={{ color: step.accent }}
                  strokeWidth={2.25}
                />

                <div
                  className="min-h-45 rounded-[19px] border p-5 sm:min-h-47.5 sm:p-6"
                  style={{
                    backgroundColor: step.panel,
                    borderColor: step.border,
                  }}
                >
                  <span
                    className="block text-4xl font-medium leading-none tracking-tight sm:text-[42px]"
                    style={{ color: step.accent }}
                  >
                    {step.number}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold leading-tight text-white sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-5 text-slate-300 sm:text-[15px] sm:leading-6">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentProcess;
