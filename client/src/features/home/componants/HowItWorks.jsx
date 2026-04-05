import React from "react";
import { IoFitnessOutline } from "react-icons/io5";
import { howItWorksData } from "../../../utils";
const HowItWorks = () => {
  return (
    <section className="w-full min-h-screen relative z-1 px-5 lg:px-40 lg:py-20 bg-linear-to-tr to-[#FBF5F1] from-[#f89d6f]/30 overflow-hidden py-10">
      <div className="flex items-center gap-3 pr-6 bg-white/50 w-fit mx-auto rounded-full overflow-hidden shadow-lg ">
        <p className="px-3 bg-primary/30 text-primary text-sm lg:text-xl py-2 center rounded-full ">
          <IoFitnessOutline />
        </p>
        <p className="how-it-works-top">simple</p>
        <p className="mb-[1px] text-primary">&#8226;</p>
        <p className="how-it-works-top">effective</p>
        <p className="mb-[1px] text-primary">&#8226;</p>
        <p className="how-it-works-top">together</p>
      </div>
      <h1 className="text-[8vw] lg:text-5xl font-heading text-[#222] text-center mt-5 lg:mt-10 font-bold">
        How it <span className="text-primary">works</span>
      </h1>
      <div className="w-30 lg:w-40 h-1 lg:mt-4 bg-primary/70 rounded-full mx-auto"></div>
      <p className="text-[3.8vw] px-6 lg:px-0 lg:text-base text-[#333] font-body text-center mt-4 w-full lg:w-100 mx-auto tracking-wider">
        Get started in minutes, stay on track, and build lasting habits with a
        community that supports you.
      </p>
      <div className="w-full flex gap-5 mt-10 flex-wrap lg:flex-nowrap">
        {howItWorksData.map((item, index) => (
          <div
            className="w-[47%] lg:w-1/4 py-5 lg:py-10 bg-white/70 rounded-xl lg:rounded-[42px] shadow-xl shadow-primary/10 relative z-5 "
            key={index}
          >
            <div className="size-9 lg:size-14 absolute rounded-full border-2 border-primary/50 center text-primary font-heading text-sm lg:text-xl font-semibold shadow shadow-primary/50 top-0 -translate-y-1/2 bg-white/80 left-0 translate-x-[180%] lg:translate-x-[210%]">
              0{index + 1}
            </div>
            <img
              src={item.img}
              className="w-7/10 lg:w-8/10 h-auto mx-auto"
              alt={item.heading}
            />
            <h1 className="text-[4vw] lg:text-lg  font-semibold font-secondary capitalize text-center mt-4 px-6 lg:px-18 leading-[140%] text-[#222]">
              {item.heading}
            </h1>
            <div className="w-25 mx-auto h-1 bg-primary/80 rounded-full my-2 lg:my-4"></div>
            <p className="text-[3.5vw] lg:text-base text-[#333] font-body text-center mt-2 px-4 lg:px-10">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full lg:w-180 py-3 px-5 lg:px-10 mx-auto bg-white/70 rounded-[42px] shadow-xl shadow-primary/10 relative z-5 h-auto flex flex-col lg:h-16 mt-10 lg:block">
        <div className="flex relative w-full">
          <img src="./home-page/how-it-works/profile1.jpg" className="profileIconCls absolute top-0 left-0 z-5 -translate-y-8/10 lg:translate-y-0 translate-x-[200%] lg:translate-x-0 " alt="" />
          <img src="./home-page/how-it-works/profile2.jpg" className="profileIconCls absolute top-0 left-0 translate-x-[270%] lg:translate-x-7/10 z-5 -translate-y-8/10 lg:translate-y-0" alt="" />
          <img src="./home-page/how-it-works/profile3.jpg" className="profileIconCls absolute top-0 left-0 translate-x-[340%] lg:translate-x-[140%] z-5 -translate-y-8/10 lg:translate-y-0" alt="" />
          <img src="./home-page/how-it-works/profile4.jpg" className="profileIconCls absolute top-0 left-0 translate-x-[410%] lg:translate-x-[210%] z-5 -translate-y-8/10 lg:translate-y-0" alt="" />
          <div className="size-10 absolute rounded-full border-2 border-white center text-[#222] font-body text-base font-semibold top-0 bg-[#FBC9B0] left-0 translate-x-[480%] 
          lg:translate-x-[280%] z-5 -translate-y-8/10 lg:translate-y-0">
            1k+
          </div>
        </div>
        <div className="float-right flex items-center gap-5 lg:mt-[2px] lg:border-l  border-[#333]/50 lg:pl-5 w-full lg:w-fit">
          <p className="font-body text-[3.5vw] lg:text-base">Ready to start your fitness journey?</p>
          <button className="btn bg-primary hover:bg-primary/80 text-white py-2 px-4 rounded-full text-[3.5vw] lg:text-sm font-body">
            Get Started <span className="hidden lg:inline-block ">for Free</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
