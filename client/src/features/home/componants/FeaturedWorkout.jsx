import React from "react";
import { workouts } from "../../../utils";
import { IoFitnessOutline } from "react-icons/io5";
import { BiSolidMessageSquareCheck } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";

const FeaturedWorkout = () => {
  return (
    <section className="w-full min-h-screen relative z-1 px-5 lg:px-40 lg:py-10 bg-linear-to-br to-[#FBF5F1] from-[#f89d6f]/30  overflow-hidden">
      <div className="flex items-center gap-3 bg-white/50 w-fit mx-auto rounded-full overflow-hidden shadow-lg ">
        <p className="px-6 gap-2 bg-primary/20 border border-primary/50 text-primary text-sm lg:text-xl py-2 center rounded-full items-center flex ">
          <IoFitnessOutline />
          <p className="font-body uppercase text-[2.5vw] lg:text-xs">
            Featured Workouts / Templates
          </p>
        </p>
      </div>
      <h1 className="text-[8vw] lg:text-4xl font-heading text-[#222] text-center mt-5 lg:mt-8 font-bold hidden lg:block">
        Start with a Plan <span className="text-primary">That Fits You</span>
      </h1>
      <h1 className="text-[8vw] lg:text-4xl font-heading text-[#222] text-center mt-5 lg:mt-8 font-bold block lg:hidden">
        Workout <span className="text-primary">Templates</span>
      </h1>
      <div className="w-30 lg:w-50 h-1 lg:mt-4 bg-primary/70 rounded-full mx-auto"></div>
      <p className="text-[3.8vw] px-6 lg:px-0 lg:text-base text-[#333] font-body text-center mt-4 w-full lg:w-140 mx-auto tracking-wider">
        Get started with proven workout plans designed by fitness experts,
        Choose a plan and start your transformation today.
      </p>
      <div className="w-full flex gap-5 mt-10 overflow-x-auto pb-5">
        {workouts.map((item, index) => (
          <div
            className="w-[60%] lg:w-1/4 py-5 lg:py-4 bg-white/70 rounded-xl lg:rounded-2xl shadow-xl shadow-primary/10 relative z-5 shrink-0 pt-2 lg:shrink"
            key={index}
          >
            <img
              src={item.img}
              className="w-9/10 lg:w-9/10 h-50 object-cover object-top rounded-xl mx-auto"
              alt={item.title}
            />
            <h1 className="text-[4vw] lg:text-lg  font-semibold font-secondary capitalize text-center mt-4 px-6 lg:px-5 leading-[140%] text-[#222]">
              {item.title}
            </h1>
            <p className="w-fit mx-auto bg-primary/20 px-3 py-1 rounded-full mt-2 text-xs font-body font-medium text-[#222]">{item.tag}</p>
            <p className="text-[3.5vw] lg:text-sm text-[#333] font-body px-4 lg:px-10 flex items-center gap-2 font-medium mt-5">
              <BiSolidMessageSquareCheck className="text-base text-primary" /> {item.workouts_per_week}  workouts / week
            </p>
            <p className="text-[3.5vw] lg:text-sm text-[#333] font-body px-4 lg:px-10 flex items-center gap-2 font-medium mt-1">
              <BiSolidMessageSquareCheck className="text-base text-primary" /> {item.minutes_per_day}  minutes / day
            </p>
            <p className="text-[3.5vw] lg:text-sm text-[#333] font-body px-4 lg:px-10 flex items-center gap-2 font-medium mt-1">
              <BiSolidMessageSquareCheck className="text-base text-primary" /> {item.focus}
            </p>
            <button className="btn border border-primary hover:bg-primary/80 text-primary hover:text-white justify-center py-2 px-6 rounded-xl! text-[3.5vw] lg:text-sm font-body mx-auto w-8/10  flex items-center gap-2 mt-5 capitalize">
              Use this plan <FaArrowRight />
            </button>
          </div>
        ))}

      </div>
      <div className="w-full lg:w-200 py-3 px-5 lg:px-10 mx-auto bg-white/60 rounded-[42px] shadow-xl shadow-primary/10 relative z-5 h-auto flex flex-col lg:h-16 mt-10 lg:block">
        <div className="flex relative w-full">
          <img src="./home-page/how-it-works/profile1.jpg" className="profileIconCls absolute top-0 left-0 z-5 -translate-y-8/10 lg:translate-y-0 translate-x-[200%] lg:translate-x-0 " alt="" />
          <img src="./home-page/how-it-works/profile2.jpg" className="profileIconCls absolute top-0 left-0 translate-x-[270%] lg:translate-x-7/10 z-5 -translate-y-8/10 lg:translate-y-0" alt="" />
          <img src="./home-page/how-it-works/profile3.jpg" className="profileIconCls absolute top-0 left-0 translate-x-[340%] lg:translate-x-[140%] z-5 -translate-y-8/10 lg:translate-y-0" alt="" />
          <img src="./home-page/how-it-works/profile4.jpg" className="profileIconCls absolute top-0 left-0 translate-x-[410%] lg:translate-x-[210%] z-5 -translate-y-8/10 lg:translate-y-0" alt="" />
          <div className="size-10 absolute rounded-full border-2 border-white center text-[#222] font-body text-xs font-semibold top-0 bg-[#FBC9B0] left-0 translate-x-[480%] 
          lg:translate-x-[280%] z-5 -translate-y-8/10 lg:translate-y-0">
            2.4k+
          </div>
        </div>
        <div className="float-right flex items-center gap-5 lg:mt-[2px] lg:border-l  border-[#333]/50 lg:pl-5 w-full lg:w-fit">
          <p className="font-body text-[3.5vw] lg:text-base">Join <span>2.4K+</span> users already training with <span className="text-primary">fit Togethr</span></p>
          <button className="btn bg-primary hover:bg-primary/80 text-white py-2 px-4 rounded-full text-[3.5vw] lg:text-sm font-body">
            Explore All Workouts
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkout;
