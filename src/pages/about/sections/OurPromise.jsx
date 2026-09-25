import {
  ClipboardCheck,
  HeartHandshake,
  MessageCircleMore,
  MonitorCheck,
  ShieldCheck,
} from "lucide-react";

const promises = [
  {
    title: "Modern Treatment",
    description:
      "Modern techniques and equipment for accurate and effective dental care.",
    icon: MonitorCheck,
    iconStyle: "bg-violet-100 text-violet-700",
  },
  {
    title: "Comfortable Care",
    description:
      "A gentle approach designed to make every visit feel relaxed.",
    icon: HeartHandshake,
    iconStyle: "bg-rose-100 text-rose-700",
  },
  {
    title: "Clear Communication",
    description:
      "We explain your dental condition and treatment options in simple terms.",
    icon: MessageCircleMore,
    iconStyle: "bg-blue-100 text-blue-700",
  },
  {
    title: "Personalized Treatment",
    description:
      "Every treatment plan is created around your individual dental needs.",
    icon: ClipboardCheck,
    iconStyle: "bg-emerald-100 text-emerald-700",
  },
];

const OurPromise = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      aria-labelledby="our-promise-title"
      className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10 xl:px-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <span className="flex items-center gap-2 rounded-full bg-indigo-50 px-6 py-3 text-sm font-medium text-indigo-600">
            <ShieldCheck aria-hidden="true" className="size-5" />
            Our Promise
          </span>

          <h2
            id="our-promise-title"
            className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Dental Care Built Around You
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
            From your first consultation to your treatment, we focus on making
            dental care clear, comfortable, and personal.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-[28px] border border-violet-100 bg-violet-100 shadow-[0_22px_65px_rgba(76,29,149,0.08)] md:grid-cols-2 md:gap-px">
          {promises.map(({ title, description, icon: Icon, iconStyle }) => (
            <article
              key={title}
              className="group bg-[#FAF9FF] p-6 transition-colors duration-300 hover:bg-white sm:p-8 lg:p-10"
            >
              <div
                className={`flex size-12 items-center justify-center rounded-2xl ${iconStyle}`}
              >
                <Icon aria-hidden="true" className="size-6" strokeWidth={1.8} />
              </div>

              <div className="mt-8 flex items-start justify-between gap-5">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                    {description}
                  </p>
                </div>

                <span className="mt-1 size-2 shrink-0 rounded-full bg-violet-300 transition-transform duration-300 group-hover:scale-150" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPromise;
