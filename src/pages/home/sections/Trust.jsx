import { CalendarClock, Sparkles, Stethoscope } from "lucide-react";

const Trust = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="relative isolate flex w-full flex-col items-center justify-center gap-5 overflow-hidden bg-[#FFFFFF] px-4 py-16 sm:gap-6 sm:px-6 sm:py-20 lg:px-10 xl:px-16"
    >
      <div className="relative grid w-full max-w-6xl grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="pointer-events-none absolute top-0 left-1/2 -z-10 size-80 -translate-x-1/2 rounded-full bg-[#FBFFE1]/70 blur-[180px] sm:size-130 sm:blur-[300px]"></div>
        <div className="flex w-full max-w-80 flex-col items-center justify-center">
          <div className="p-6 aspect-square bg-violet-100 rounded-full">
            <Stethoscope />
          </div>
          <div className="mt-5 space-y-2 text-center">
            <h3 className="text-base font-semibold text-slate-700">
              Experienced Dentists
            </h3>
            <p className="text-sm text-slate-600">
              Trusted care from qualified professionals focused on your comfort and oral health.
            </p>
          </div>
        </div>
        <div className="flex w-full max-w-80 flex-col items-center justify-center">
          <div className="p-6 aspect-square bg-green-100 rounded-full">
            <Sparkles />
          </div>
          <div className="mt-5 space-y-2 text-center">
            <h3 className="text-base font-semibold text-slate-700">
              Advanced Technology
            </h3>
            <p className="text-sm text-slate-600">
              Modern equipment and precise treatment methods for better, faster dental care.
            </p>
          </div>
        </div>
        <div className="flex w-full max-w-80 flex-col items-center justify-center md:col-span-2 lg:col-span-1">
          <div className="p-6 aspect-square bg-orange-100 rounded-full">
            <CalendarClock />
          </div>
          <div className="mt-5 space-y-2 text-center">
            <h3 className="text-base font-semibold text-slate-700">
              Easy Appointments
            </h3>
            <p className="text-sm text-slate-600">
              Simple booking, convenient timings, and a hassle-free experience from start to finish.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trust
