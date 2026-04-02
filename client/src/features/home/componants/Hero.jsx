import React from "react";

const Hero = ({ isMobile }) => {
  return (
    <section className="w-full h-screen relative z-1 px-40 py-20 bg-[#FBF5F1]">
      <div className="w-full h-full relative z-2 mt-15">
        <h1 className="font-heading text-[42px] capitalize font-medium leading-[105%] text-[#333]">
          Share & discover <br /> workout routines
        </h1>
        <p className="font-body text-[#444]/80 tracking-wider w-100 text-lg mt-5 mb-10">
          Create, share, and follow personalized workout routines. Get inspired
          and stay fit together.
        </p>
        <div className="mt-30">
          <button className="px-6 py-3 text-white bg-[#fd5a48]  rounded-lg font-medium hover:bg-[#fd5a48]/90 transition font-body cursor-pointer">
            Get Started
          </button>
          <button className="px-6 py-3 bg-[#333] text-white rounded-lg font-medium hover:bg-[#555] transition ml-5 cursor-pointer font-body ">
            Explore Workouts
          </button>
        </div>
        <div>
          <div className="w-80 h-25 mt-5 rounded-t-4xl rounded-br-4xl bg-[#E4D3CA] absolute top-0 -translate-y-[60%] right-0"></div>
          <div className="w-80 h-110 rounded-b-[64px] rounded-tr-xl bg-[#E4D3CA] absolute right-0 top-35 -translate-y-[11%]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
