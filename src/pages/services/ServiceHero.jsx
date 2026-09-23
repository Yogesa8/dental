import ser_hero from "../../assets/service/ser_hero.png";

const ServiceHero = () => {
  return (
    <section className="flex min-h-svh flex-col items-center overflow-hidden bg-linear-to-b from-[#D9D9FF] to-[#F8F3F9] px-4 pb-10 pt-24 text-sm text-slate-800 sm:px-6 sm:pb-12 sm:pt-28 lg:px-10 xl:px-16">
          <section className="flex flex-col items-center text-slate-700 text-sm pb-20 px-4 font-poppins">
            <p className="text-black flex items-center gap-2 border border-slate-400 rounded-full p-2 pr-3 text-sm mt-20">
              <p className="flex items-center gap-2">
                <span>Dental Services</span>
              </p>
            </p>
    
            <h1 className="text-center text-[40px] leading-12 md:text-6xl md:leading-17.5 mt-4 font-semibold max-w-3xl">
              Dental Care for Every Stage of Life.
            </h1>
    
            <p className="text-center text-base max-w-md mt-2">
              From children to adults and senior citizens, we provide personalized
              dental care designed for every age and every smile.
            </p>
    
            <div className="bg-white/10 max-w-3xl w-full rounded-xl p-4 mt-10  border-indigo-600/70 focus-within:ring-2 ring-indigo-500 transition-all">
              <img src={ser_hero} alt="Service image" className="rounded-xl" />
            </div>
    
            <div className="flex flex-wrap items-center justify-center gap-16 md:gap-20 mx-auto mt-16">
              <img
                className="max-w-28 md:max-w-32"
                src="https://saasly.prebuiltui.com/assets/companies-logo/framer.svg"
                alt=""
              />
              <img
                className="max-w-28 md:max-w-32"
                src="https://saasly.prebuiltui.com/assets/companies-logo/huawei.svg"
                alt=""
              />
              <img
                className="max-w-28 md:max-w-32"
                src="https://saasly.prebuiltui.com/assets/companies-logo/instagram.svg"
                alt=""
              />
              <img
                className="max-w-28 md:max-w-32"
                src="https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg"
                alt=""
              />
              <img
                className="max-w-28 md:max-w-32"
                src="https://saasly.prebuiltui.com/assets/companies-logo/walmart.svg"
                alt=""
              />
            </div>
          </section>
        </section>
  )
}

export default ServiceHero