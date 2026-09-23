import f1 from "../assets/feature/f1.png";
import f2 from "../assets/feature/f2.png";

const Feature = () => {
  return (
      <section data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="flex w-full min-h-screen flex-col items-center justify-center gap-5 px-4 py-16 sm:gap-6 sm:px-6 sm:py-20 lg:px-10 xl:px-16">
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
          Our team
        </button>
        <h2 className="max-w-lg text-center text-2xl leading-snug font-semibold text-gray-800 sm:text-3xl md:text-4xl">
          Meet the expert driving creativity and innovation
        </h2>

        <p className="mx-auto max-w-md text-center text-sm leading-6 text-zinc-600 sm:text-base">
          Modern dental care powered by precision, technology and seamless
          collaboration.
        </p>

        <div className="mt-4 grid w-full max-w-7xl gap-5 sm:mt-6 sm:gap-6">
          {/* Row 1 */}
          <div className="grid gap-5 xl:grid-cols-[3fr_2fr]">
            {/* Feature 1 */}
            <div className="flex min-w-0 flex-col gap-5 rounded-xl bg-white p-4 transition-shadow duration-300 hover:shadow-sm sm:p-5 md:flex-row">
              <img
                src={f1}
                alt="Digital dental workflow"
                className="h-48 w-full rounded-2xl object-cover sm:h-56 md:h-auto md:min-h-64 md:w-2/5 md:shrink-0"
              />

              <div className="flex min-w-0 flex-col md:py-2">
                <div className="size-11 bg-zinc-900 rounded-lg flex items-center justify-center mb-5">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 3H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m11 0h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m0 11h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1M9 14H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1"
                      stroke="#fafafa"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <h3 className="text-sm font-medium text-zinc-900">
                  Seamless Digital Workflow
                </h3>

                <p className="text-sm/6 text-zinc-800 mt-2.5">
                  Connect clinics and dental labs through a streamlined digital
                  workflow for faster communication, better coordination and
                  smoother treatment planning.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="min-w-0 rounded-xl bg-white p-5 transition-shadow duration-300 hover:shadow-sm sm:p-6">
              <div className="size-11 bg-zinc-900 rounded-lg flex items-center justify-center mb-5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                    stroke="#fafafa"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="m9 12 2 2 4-4"
                    stroke="#fafafa"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3 className="text-sm font-medium text-zinc-900">
                Precision You Can Trust
              </h3>

              <p className="text-sm text-zinc-800 mt-2.5 leading-6">
                Accurate digital processes help reduce errors and deliver
                consistent, reliable dental restorations designed around every
                patient's needs.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div>
            {/* Feature 3 */}
            <div className="flex min-w-0 flex-col gap-5 rounded-xl bg-white p-4 transition-shadow duration-300 hover:shadow-sm sm:p-5 md:flex-row">
              <img
                src={f2}
                alt="Dentist providing patient care"
                className="h-48 w-full rounded-2xl object-cover sm:h-56 md:h-auto md:min-h-64 md:w-2/5 md:shrink-0"
              />

              <div className="flex min-w-0 flex-col md:py-2">
                <div className="size-11 bg-zinc-900 rounded-lg flex items-center justify-center mb-5">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-2 8v4a2 2 0 0 0 2 2h4m6-4h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"
                      stroke="#fafafa"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <h3 className="text-sm font-medium text-zinc-900">
                  Better Patient Experience
                </h3>

                <p className="text-sm/6 text-zinc-800 mt-2.5">
                  Faster turnaround, accurate results and coordinated care help
                  dentists deliver a smoother experience and more confident
                  smiles for every patient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Feature;
