import React from "react";
const formatDateTimeLocal = (date) => {
  const pad = (value) => String(value).padStart(2, "0");

  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate(),
  )}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
};

const Contact = () => {
  const now = new Date();

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);

  return (
      <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="flex min-h-screen w-full flex-col items-center justify-center gap-6 px-4 py-16 sm:px-6 sm:py-20 lg:px-10 xl:px-16">
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
          Contact Us
        </button>

        <div className="flex w-full max-w-275 flex-col gap-6 lg:flex-row lg:gap-10">
          {/* Left Card */}
          <div className="relative flex min-w-0 w-full flex-col overflow-hidden rounded-[20px] bg-violet-600 p-6 sm:p-8 lg:w-1/2 xl:p-12">
            <div className="relative z-10 flex-col flex h-full">
              <h1 className="mt-3 text-3xl font-medium text-white sm:text-[42px] lg:text-4xl xl:text-[42px]">
                Have Something in Mind? Let’s Talk
              </h1>
              <p className="text-base text-white mt-3">
                Have a question or need assistance? Our team is here to help you
                every step of the way.
              </p>

              <div className="flex flex-col gap-4 mt-8 sm:mt-12">
                <div className="flex items-center gap-2">
                  <div className="size-9 bg-violet-500 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.667 4.664 8.673 8.482a1.33 1.33 0 0 1-1.34 0l-6-3.818"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.333 2.664H2.667c-.737 0-1.334.597-1.334 1.333v8c0 .737.597 1.334 1.334 1.334h10.666c.737 0 1.334-.597 1.334-1.334v-8c0-.736-.597-1.333-1.334-1.333"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-white text-sm">
                    contact@prebuiltui.com
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-9 bg-violet-500 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.874 12.926a.75.75 0 0 0 .91-.227l.266-.349a1.5 1.5 0 0 1 1.2-.6h2.25a1.5 1.5 0 0 1 1.5 1.5v2.25a1.5 1.5 0 0 1-1.5 1.5A13.5 13.5 0 0 1 4 3.5 1.5 1.5 0 0 1 5.5 2h2.25a1.5 1.5 0 0 1 1.5 1.5v2.25a1.5 1.5 0 0 1-.6 1.2l-.351.263a.75.75 0 0 0-.219.925 10.5 10.5 0 0 0 4.794 4.788"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-white text-sm">+91-9341555-010</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-9 bg-violet-500 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.6667 8.33073C16.6667 12.4916 12.0508 16.8249 10.5008 18.1632C10.3564 18.2718 10.1807 18.3305 9.99999 18.3305C9.81933 18.3305 9.64356 18.2718 9.49916 18.1632C7.94916 16.8249 3.33333 12.4916 3.33333 8.33073C3.33333 6.56262 4.03571 4.86693 5.28595 3.61668C6.53619 2.36644 8.23188 1.66406 9.99999 1.66406C11.7681 1.66406 13.4638 2.36644 14.714 3.61668C15.9643 4.86693 16.6667 6.56262 16.6667 8.33073Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 10.8359C11.3807 10.8359 12.5 9.71665 12.5 8.33594C12.5 6.95523 11.3807 5.83594 10 5.83594C8.61929 5.83594 7.5 6.95523 7.5 8.33594C7.5 9.71665 8.61929 10.8359 10 10.8359Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-white text-sm">
                    2425 HSR Layout, Bangalore
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-6 right-12 font-semibold text-[128px] text-violet-500 leading-none select-none pointer-events-none">
              talk
            </div>
          </div>

          {/* Right Card Form */}
          <div className="w-full min-w-0 rounded-[20px] border border-zinc-200 bg-white p-6 shadow-[0_4px_16px_rgba(0,0,0,0.06)] sm:p-8 lg:w-1/2">
            <h2 className="mb-6 text-2xl font-medium text-zinc-800 md:text-[28px]">
              Book an Appointment
            </h2>

            <form>
              {/* Name */}
              <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-sm text-zinc-700">
                    First name
                  </label>

                  <input
                    id="firstName"
                    type="text"
                    placeholder="First name"
                    required
                    className="w-full min-w-0 rounded-lg border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-sm text-zinc-700">
                    Last name
                  </label>

                  <input
                    id="lastName"
                    type="text"
                    placeholder="Last name"
                    required
                    className="w-full min-w-0 rounded-lg border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="mb-5 flex flex-col gap-2 md:mb-6">
                <label htmlFor="phone" className="text-sm text-zinc-700">
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                  className="w-full min-w-0 rounded-lg border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                />
              </div>

              {/* Service + Date */}
              <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {/* Service */}
                <div className="relative min-w-0">
                  <label
                    htmlFor="service"
                    className="text-sm font-medium text-zinc-700"
                  >
                    Service Type
                  </label>

                  <div className="relative mt-2">
                    <select
                      id="service"
                      required
                      defaultValue=""
                      className="w-full appearance-none rounded-lg border border-zinc-200 bg-white p-3 pr-10 text-sm text-zinc-900 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      <option value="Dental Implants">Dental Implants</option>

                      <option value="Teeth Whitening">Teeth Whitening</option>

                      <option value="Root Canal Treatment">
                        Root Canal Treatment
                      </option>

                      <option value="Braces & Aligners">
                        Braces & Aligners
                      </option>

                      <option value="Complete Dentures">
                        Complete Dentures
                      </option>

                      <option value="Tooth Extraction">Tooth Extraction</option>
                    </select>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>

                {/* Date */}
                <div className="min-w-0">
                  <label
                    htmlFor="date"
                    className="text-sm font-medium text-zinc-700"
                  >
                    Date & Time
                  </label>

                  <input
                    id="date"
                    name="date"
                    type="datetime-local"
                    min={formatDateTimeLocal(now)}
                    max={formatDateTimeLocal(maxDate)}
                    required
                    className="mt-2 w-full min-w-0 rounded-lg border border-zinc-200 bg-white p-3 text-sm text-zinc-900 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                  />
                </div>
              </div>

              {/* Terms */}
              <div className="mb-8 flex items-center gap-2">
                <input
                  id="terms"
                  type="checkbox"
                  required
                  className="size-4 cursor-pointer accent-violet-600"
                />

                <label htmlFor="terms" className="text-xs text-zinc-900">
                  I agree with{" "}
                  <a
                    href="#"
                    className="text-zinc-700 underline underline-offset-2 hover:text-zinc-900"
                  >
                    the terms and conditions
                  </a>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full cursor-pointer rounded-full bg-zinc-950 py-3.5 text-sm text-white transition-colors hover:bg-zinc-800"
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
