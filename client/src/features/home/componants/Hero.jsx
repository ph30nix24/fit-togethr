import React from "react";

const Hero = ({ isMobile }) => {

  return (
    <div className="z-20 w-full h-screen relative">
      <img
        src={isMobile ? "./home-images/mobileBg.jpg" : "./home-images/bg-4.jpg"}
        className="size-full absolute top-0 right-0 object-cover z-1"
        alt=""
      />
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-r from-black to-black/40  opacity-70 z-2"></div>
      <div className="w-full h-screen relative z-3 py-30 pt-60 lg:pt-40 px-10 lg:px-52 ">
        <h1 className="text-[8vw] lg:text-[4vw] leading-[100%] lg:leading-[90%] font-heading font-bold text-white">
          Don’t <br/> Just Train. <br/> Train Together.
        </h1>
        <p className="w-full pr-10 lg:w-120 text-[#b5b5b5] lg:text-white pt-10 font-body text-[3.5vw] lg:text-lg ">Build custom routines, track your progress, and share your wins with a community that keeps you moving.</p>
        <button className="bg-linear-to-r from-green-400/90 to-green-500/80 text-white px-6 py-3 hover:bg-green-600 btn mt-50 ">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
