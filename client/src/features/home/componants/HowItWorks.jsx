import React from "react";
import { howItWorksData } from "../../../utils";
const HowItWorks = () => {
  return (
    <div className="w-full h-fit px-5 lg:px-30 py-20 bg-linear-to-br from-[#111] to-[#222] text-white relative">
        <img src="./home-images/howItWorks/howItWorks-bg.jpg" className="absolute w-full h-full object-cover top-0 left-0 z-1" alt="" />
        <div className="absolute w-full h-full bg-[#111]/80 top-0 left-0 z-2"></div>
      <div className="relative z-3">
        <h1 className="text-[7.5vw] lg:text-[3.4vw] text-center font-heading t-10">
          How it Works
        </h1>
        <div className="w-35 lg:w-60 mx-auto h-1 bg-linear-to-r from-transparent via-green-500 to-transparent opacity-40 rounded-full"></div>
        <div className="w-full gap-5 flex mt-20 pb-5 flex-wrap lg:flex-nowrap justify-center">
          {howItWorksData.map((item, index) => (
            <div
              className="w-[45%] lg:w-1/4 px-5 py-5 bg-[#222]/60 backdrop-blur-xs rounded-lg border-1 border-slate-200/40 shadow-sm"
              key={index}
            >
              <div className="size-30 lg:size-40 mx-auto">
                <img src={item.img} alt="" />
              </div>
              <h2 className="text-[4vw] lg:text-3xl text-center font-body capitalize px-3 lg:px-10">
                {item.heading}
              </h2>
              <hr className="bg-[#555] border-[#555] my-2 lg:my-5" />
              <p className="text-gray-400 mt-2 font-body px-0 lg:px-5 text-center text-sm lg:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
