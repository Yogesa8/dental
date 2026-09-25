import { CalendarCheck, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const services = [
  "Orthodontic Treatment",
  "Smile Design",
  "Dental Implants",
  "Crown & Bridge",
  "Complete Denture",
  "Flexible Denture",
  "Root Canal Treatment",
  "Bleaching / Teeth Whitening",
  "Scaling",
  "Impaction",
  "Trauma Care",
  "Dental Surgery",
  "Tooth Jewellery",
  "Extraction",
  "Full Mouth Rehabilitation",
  "Depigmentation",
  "Invisible Braces",
];

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
];

const formatDate = (date) => {
  const pad = (value) => String(value).padStart(2, "0");

  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate(),
  )}`;
};

const getPatientType = (age) => {
  const numericAge = Number(age);

  if (!age || Number.isNaN(numericAge) || numericAge < 1) return "";
  if (numericAge <= 18) return "Child";
  if (numericAge <= 59) return "Adult";
  return "Senior";
};

const fieldClassName =
  "w-full min-w-0 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-100";

const Contact = () => {
  const [age, setAge] = useState("");
  const [patientType, setPatientType] = useState("");

  const today = new Date();
  const lastBookingDate = new Date();
  lastBookingDate.setDate(lastBookingDate.getDate() + 60);

  const handleAgeChange = (event) => {
    const nextAge = event.target.value;
    setAge(nextAge);
    setPatientType(getPatientType(nextAge));
  };

  return (
    <section
      id="contact"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="w-full bg-[#F7F7FF] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 xl:px-16"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="flex flex-col lg:pt-4">
          <span className="w-fit rounded-full border border-zinc-200 bg-white px-5 py-2 text-sm text-zinc-700">
            Book a Visit
          </span>

          <h1 className="mt-6 max-w-lg text-4xl leading-tight font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            Ready for a Healthier Smile?
          </h1>
          <p className="mt-4 max-w-md text-sm leading-6 text-zinc-600 sm:text-base sm:leading-7">
            Choose a convenient date and time. Our dental team will review your
            details and confirm your appointment.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href="mailto:vikram.panwar1274@gmail.com"
              className="flex items-center gap-3 text-sm text-zinc-700 transition-colors hover:text-violet-700"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-500">
                <Mail aria-hidden="true" className="size-5" />
              </span>
              vikram.panwar1274@gmail.com
            </a>

            <a
              href="tel:+919466816448"
              className="flex items-center gap-3 text-sm text-zinc-700 transition-colors hover:text-violet-700"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-500">
                <Phone aria-hidden="true" className="size-5" />
              </span>
              +91 94668 16448
            </a>

            <div className="flex items-center gap-3 text-sm text-zinc-700">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-500">
                <MapPin aria-hidden="true" className="size-5" />
              </span>
              Shop No. 72, Sector 5, Opp. BMG Mall, Rewari, Haryana 123401
            </div>

            <div className="flex items-center gap-3 text-sm text-zinc-700">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-500">
                <CalendarCheck aria-hidden="true" className="size-5" />
              </span>
              9:00 AM–2:00 PM & 4:00 PM–7:00 PM · Sunday by appointment
            </div>
          </div>
        </div>

        <div className="rounded-[22px] border border-zinc-200 bg-white p-5 shadow-[0_16px_50px_rgba(15,23,42,0.06)] sm:p-8">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Book an Appointment
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-500">
            Fill in your details and select your preferred visit time.
          </p>

          <form className="mt-7 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="text-sm text-zinc-700">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  placeholder="Enter first name"
                  required
                  className={`mt-2 ${fieldClassName}`}
                />
              </div>

              <div>
                <label htmlFor="lastName" className="text-sm text-zinc-700">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  placeholder="Enter last name"
                  required
                  className={`mt-2 ${fieldClassName}`}
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="text-sm text-zinc-700">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="Enter phone number"
                  required
                  className={`mt-2 ${fieldClassName}`}
                />
              </div>

              <div>
                <label htmlFor="age" className="text-sm text-zinc-700">
                  Age
                </label>
                <input
                  id="age"
                  name="age"
                  type="number"
                  min="1"
                  max="120"
                  inputMode="numeric"
                  placeholder="Enter age"
                  value={age}
                  onChange={handleAgeChange}
                  required
                  className={`mt-2 ${fieldClassName}`}
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="patientType"
                  className="text-sm text-zinc-700"
                >
                  Patient Type
                </label>
                <select
                  id="patientType"
                  name="patientType"
                  value={patientType}
                  onChange={(event) => setPatientType(event.target.value)}
                  required
                  className={`mt-2 ${fieldClassName}`}
                >
                  <option value="" disabled>
                    Select patient type
                  </option>
                  <option value="Child">Child (1–18)</option>
                  <option value="Adult">Adult (19–59)</option>
                  <option value="Senior">Senior (60+)</option>
                </select>
                <p className="mt-1.5 text-xs text-zinc-400">
                  Automatically selected according to age.
                </p>
              </div>

              <div>
                <label htmlFor="service" className="text-sm text-zinc-700">
                  Service / Treatment
                </label>
                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  required
                  className={`mt-2 ${fieldClassName}`}
                >
                  <option value="" disabled>
                    Select a treatment
                  </option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="appointmentDate" className="text-sm text-zinc-700">
                  Appointment Date
                </label>
                <input
                  id="appointmentDate"
                  name="appointmentDate"
                  type="date"
                  min={formatDate(today)}
                  max={formatDate(lastBookingDate)}
                  required
                  className={`mt-2 ${fieldClassName}`}
                />
              </div>

              <div>
                <label htmlFor="timeSlot" className="text-sm text-zinc-700">
                  Available Time Slot
                </label>
                <select
                  id="timeSlot"
                  name="timeSlot"
                  defaultValue=""
                  required
                  className={`mt-2 ${fieldClassName}`}
                >
                  <option value="" disabled>
                    Select a time slot
                  </option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="text-sm text-zinc-700">
                Problem Description
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Briefly describe your dental concern or symptoms"
                required
                className={`mt-2 resize-none ${fieldClassName}`}
              />
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:ring-offset-2"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
