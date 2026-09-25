import { ArrowUpRight, Zap } from "lucide-react";
import vikramPhoto from "../../../assets/about/doctors/dr-vikram-panwar.png";

const doctors = [
  {
    name: "Dr. Vikram Panwar",
    qualification: "B.D.S., M.D.S.",
    experience: "Reg. No. 012068",
    specialization: "Periodontist & Implantologist",
    intro:
      "Formerly at Hari Om Hospital, Rewari, Dr. Vikram Panwar provides focused periodontal, implant, and comprehensive dental care.",
    photo: vikramPhoto,
    accent: "bg-violet-100 text-violet-700",
  },
];

const scrollToAppointment = (event) => {
  const appointmentSection = document.getElementById("contact");

  if (!appointmentSection) return;

  event.preventDefault();
  appointmentSection.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", "#contact");
};

const MeetDentist = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      aria-labelledby="meet-dentists-title"
      className="w-full bg-[#F8F6FF] px-4 py-16 sm:px-6 sm:py-20 lg:px-10"
    >
      {/* Heading */}
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <span className="flex items-center gap-2 rounded-full bg-indigo-50 px-6 py-3 text-sm text-indigo-600">
          <Zap className="size-5" />
          Meet Your Dentist
        </span>

        <h2
          id="meet-dentists-title"
          className="mt-6 text-center text-3xl font-bold text-slate-800 sm:text-4xl"
        >
          Care You Can Feel Confident About
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-6 text-slate-500 sm:text-base">
          Meet Dr. Vikram Panwar, the specialist behind Mex Dental Care,
          focused on comfortable, personalized, and reliable treatment.
        </p>
      </div>

      {/* Doctor profile */}
      <div className="mx-auto mt-12 grid w-full max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor) => (
          <article
            key={doctor.name}
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-[0_18px_50px_rgba(76,29,149,0.08)] transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="relative aspect-4/5 overflow-hidden bg-violet-50">
              <img
                src={doctor.photo}
                alt={`${doctor.name}, dentist at Mex Dental Care`}
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]"
              />
              <span className="absolute right-4 bottom-4 rounded-full border border-white/70 bg-white/85 px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur-md">
                {doctor.experience}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
                {doctor.name}
              </h3>
              <p className="mt-2 text-sm leading-6 font-medium text-violet-700">
                {doctor.qualification}
              </p>

              <div className="mt-5">
                <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                  Specialization
                </span>
                <p
                  className={`mt-2 w-fit rounded-full px-3 py-1.5 text-xs font-medium ${doctor.accent}`}
                >
                  {doctor.specialization}
                </p>
              </div>

              <p className="mt-5 flex-1 text-sm leading-6 text-slate-600">
                {doctor.intro}
              </p>

              <a
                href="#contact"
                onClick={scrollToAppointment}
                className="group/button mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-700"
              >
                Book Appointment
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default MeetDentist
