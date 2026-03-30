import React from "react";

const Hero = () => {
  return (
    <div className="z-20 w-full h-screen relative">
      <img
        src="./home-images/bg-4.jpg"
        className="size-full absolute top-0 right-0 object-cover z-1"
        alt=""
      />
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-l from-black to-transparent opacity-50 z-2"></div>
      <div className="w-full h-screen "></div>
    </div>
  );
};

export default Hero;
