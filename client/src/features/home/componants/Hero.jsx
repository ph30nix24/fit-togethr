import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-screen relative z-1 px-5 lg:px-40 lg:py-20 bg-linear-to-br to-[#FBF5F1] from-[#f89d6f]/30  overflow-hidden">
      <div className="w-full h-full relative z-4 mt-15 flex gap-5">
        <div className="w-full lg:w-1/2 h-full relative z-1">
          <h1 className="font-heading text-[7vw] lg:text-[42px] capitalize font-bold leading-[115%] lg:leading-[105%] text-[#1a1a1a] mt-10">
            Share & discover <br /> workout routines
          </h1>
          <p className="font-body text-[#444]/80 tracking-wide lg:tracking-wider w-8/10 lg:w-100 text-[4vw] lg:text-lg mt-5 mb-10">
            Create, share, and follow personalized workout routines. Get
            inspired and stay fit together.
          </p>
          <div className="mt-10 lg:mt-30">
            <button className="px-6 py-3 text-white bg-linear-to-tl to-[#FD5A48] from-[#ff8e6e] text-xs lg:text-base rounded-lg font-medium hover:to-[#fd5a48]/90 hover:from-[#ff8e6e]/90 transition shadow-lg font-body cursor-pointer block lg:inline-block">
              Get Started
            </button>
            <button className="px-6 py-3 bg-linear-to-tl to-[#333] from-[#555] text-white rounded-lg font-medium hover:to-[#333]/90 hover:from-[#555]/90 transition lg:ml-5 cursor-pointer font-body shadow-lg text-xs lg:text-base mt-3 lg:mt-0 block lg:inline-block ">
              Explore Workouts
            </button>
          </div>
        </div>
        <div className="w-1/2 h-full relative z-1 gap-5 hidden lg:flex">
          <div className="relative overflow-visible pt-10 ">
            <div className="w-50 h-20 bg-[#f89d6f]/30 rounded-t-xl float-right  relative ">
              <img
                src="./home-page/illustrations/yoga.svg"
                className="size-20 absolute top-0 right-0 -translate-y-full"
                alt=""
              />
            </div>
            <div className="w-70 rounded-4xl h-100 bg-[#f89d6f]/30 rounded-br-xl mb-5 float-right rounded-tr-none overflow-hidden relative shadow-lg shadow-[#f89d6f]/30">
              <div className="size-60 rounded-full bg-[#f89d6f]/30 absolute bottom-0 right-0 translate-x-2/10 translate-y-1/2"></div>
              <div className="size-10 rounded-full bg-[#f89d6f]/30 absolute top-10 left-0 translate-x-3/10 translate-y-1/2"></div>
              <div className="size-30 rounded-full bg-[#f89d6f]/20 absolute top-0 right-0 translate-x-3/10 translate-y-1/2"></div>
            </div>
          </div>
          <div className="relative overflow-visible float-right">
            <div className="w-[320px] rounded-t-4xl h-30 bg-[#f89d6f]/30 rounded-br-xl mb-5 relative overflow-hidden ">
              <img
                src="./home-page/illustrations/bike.svg"
                className="size-20 absolute bottom-0 -translate-x-2 translate-y-2 right-0 opacity-60"
                alt=""
              />
              <div className="size-30 rounded-full bg-[#f89d6f]/10 absolute top-0 left-0 -translate-x-3/10 translate-y-1/2"></div>
            </div>
            <div className="w-72 h-110 bg-[#f89d6f]/30 rounded-b-[78px] rounded-tr-xl overflow-hidden relative shadow-lg shadow-[#f89d6f]/30">
              <div className="size-30 rounded-full bg-[#f89d6f]/10 absolute top-0 left-0 -translate-x-3/10 -translate-y-7/10"></div>
              <div className="size-30 rounded-full bg-[#f89d6f]/10 absolute bottom-0 left-0 -translate-x-3/10 -translate-y-0/10"></div>
            </div>
          </div>
          <img
            src="./home-page/hero/hero2.png"
            alt=""
            className="w-[380px] h-150 object-fill absolute top-0 right-0 translate-x-[22%] -translate-y-[4%] z-10"
          />
          <img
            src="./home-page/hero/hero1.png"
            alt=""
            className="w-auto h-140 absolute top-0 left-0 -translate-x-[8%] -translate-y-[7.5%] z-10 object-contain drop-shadow-xl"
          />
        </div>
      </div>
      <div className="absolute z-3 w-40 h-60 bg-[#f89d6f]/30 rounded-b-4xl bottom-0 left-0 translate-x-[45%] -translate-y-[65%] rounded-tl-xl block lg:hidden"></div>
      <img
        src="./home-page/hero/mobile-hero-1.png"
        className="w-41 h-auto absolute bottom-0 left-0 translate-x-[42%] -translate-y-[53%] z-4 block lg:hidden"
        alt=""
      />
      <div className="absolute z-3 w-40 h-90 bg-[#f89d6f]/30 rounded-br-4xl top-1/2 right-0  -translate-y-[40%] rounded-tl-xl block lg:hidden"></div>
      <img
        src="./home-page/hero/mobile-hero-2.png"
        className="w-41 h-auto absolute top-1/2 right-0 translate-x-[3%] -translate-y-[49%] z-4 block lg:hidden"
        alt=""
      />
      <img
        src="./home-page/illustrations/athletes.svg"
        className="absolute z-1 bottom-0 left-0 translate-y-[25%] size-60 lg:size-100"
        alt=""
      />
      <img
        src="./home-page/illustrations/activity.svg"
        className="absolute z-1 bottom-0 right-0 translate-y-[25%] size-25 lg:size-50"
        alt=""
      />
    </section>
  );
};

export default Hero;
