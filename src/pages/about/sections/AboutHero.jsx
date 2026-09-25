import { ArrowUpRight } from "lucide-react";
import aboutHero from "../../../assets/about/about_hero_transparent.png";

const AboutHero = () => {
  return (
    <section className="relative min-h-svh overflow-hidden bg-linear-to-b from-[#D9D9FF] to-[#F8F3F9] px-4 pt-28 pb-14 text-slate-950 sm:px-6 sm:pt-32 lg:px-10 lg:pt-36 xl:px-16">
      <div className="relative mx-auto flex w-full max-w-7xl flex-col">
        <div className="flex items-center justify-between gap-5">
          <span className="rounded-full border border-violet-200 bg-white/60 px-5 py-2 text-sm font-medium text-violet-700 backdrop-blur-sm">
            About Mex Dental Care
          </span>
          <span className="hidden text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase sm:block">
            Care · Comfort · Confidence
          </span>
        </div>

        <div className="mt-8 grid items-center gap-8 lg:min-h-152.5 lg:grid-cols-[0.85fr_1.25fr_0.95fr] lg:gap-0">
          <div className="relative z-30 order-3 lg:order-1 lg:self-end lg:pb-16">
            <p className="max-w-sm text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              We combine experienced dentists, modern technology, and genuinely
              personal care to make every visit comfortable and every smile
              healthier.
            </p>

            <a
              href="#our-story"
              className="group mt-6 inline-flex items-center gap-2 border-b border-slate-900 pb-1 text-sm font-semibold text-slate-900"
            >
              Discover our story
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div className="relative z-20 order-2 mx-auto h-92.5 w-full max-w-117.5 sm:h-120 lg:-mx-24 lg:h-152.5 lg:w-[calc(100%+12rem)] lg:max-w-none">
            <div className="absolute top-1/2 left-1/2 aspect-square w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F6C000] shadow-[0_30px_100px_rgba(246,192,0,0.16)] sm:w-[72%] lg:w-[66%]" />
            <div className="absolute top-[18%] left-[4%] size-16 rounded-full border border-violet-300/70 sm:size-24" />
            <div className="absolute right-[5%] bottom-[17%] size-10 rounded-full bg-violet-500/15 sm:size-16" />

            <img
              src={aboutHero}
              alt="Detailed model of a healthy tooth"
              className="absolute inset-0 z-20 h-full w-full scale-110 object-contain drop-shadow-[0_28px_28px_rgba(0,0,0,0.34)] sm:scale-105 lg:scale-125"
            />
          </div>

          <div className="relative z-10 order-1 lg:order-3">
            <p className="text-center text-[clamp(3.35rem,13vw,6rem)] leading-[0.84] font-bold tracking-[-0.065em] text-slate-950 lg:text-left lg:text-[clamp(5.5rem,8vw,8.5rem)]">
              Your smile
              <span className="block">is our</span>
              <span className="block text-violet-600">story.</span>
            </p>

            <div className="mt-8 hidden justify-end lg:flex">
              <p className="max-w-44 text-right text-sm leading-5 text-slate-500">
                Trusted dental care for every stage of life.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-30 mt-8 grid grid-cols-3 divide-x divide-violet-200 border-t border-violet-200 pt-6 sm:mt-2 lg:max-w-md">
          <div className="pr-4">
            <strong className="block text-xl font-semibold sm:text-2xl">
              B.D.S.
            </strong>
            <span className="mt-1 block text-[11px] text-slate-500 sm:text-xs">
              Dental Surgeon
            </span>
          </div>
          <div className="px-4">
            <strong className="block text-xl font-semibold sm:text-2xl">
              M.D.S.
            </strong>
            <span className="mt-1 block text-[11px] text-slate-500 sm:text-xs">
              Dental Specialist
            </span>
          </div>
          <div className="pl-4">
            <strong className="block text-xl font-semibold sm:text-2xl">
              012068
            </strong>
            <span className="mt-1 block text-[11px] text-slate-500 sm:text-xs">
              Registration No.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
