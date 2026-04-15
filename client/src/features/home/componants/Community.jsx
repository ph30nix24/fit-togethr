import React from "react";
import { FaArrowRight, FaComment } from "react-icons/fa6";
import { IoFitnessOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { routines } from "../../../utils";
import { CgGym } from "react-icons/cg";


const Community = () => {
  return (
    <section className="w-full h-[110vh] relative z-1 px-5 lg:px-40 lg:py-10 bg-linear-to-tr to-[#FBF5F1] from-[#f89d6f]/30  overflow-hidden">
      <div className="flex items-center gap-3 bg-white/50 w-fit mx-auto rounded-full overflow-hidden shadow-lg">
        <p className="px-6 gap-2 bg-primary/20 border border-primary/50 text-primary text-sm lg:text-xl py-1 center rounded-full items-center flex ">
          <IoFitnessOutline />
          <p className="mb-[3px] text-primary">&#8226;</p>
          <p className="font-body uppercase text-[2.5vw] lg:text-xs">
            Community
          </p>
          <p className="mb-[3px] text-primary">&#8226;</p>
        </p>
      </div>
      <div className="w-full h-full flex gap-5 mb-1">
        <div className="w-7/10 h-full">
          <h1 className="text-[8vw] lg:text-3xl font-secondary text-[#222] text-start mt-5 lg:mt-8 font-semibold hidden lg:block">
            Track, Discover & Share{" "}
            <span className="text-primary">Workouts</span>
          </h1>
          <p className="text-[3.8vw] px-6 lg:px-0 lg:text-base text-[#333] font-body text-start mt-4 w-full mx-auto tracking-wider">
            Join a community of fitness enthusiasts. Create custom workout
            plans, track your fitness progress, and connect with others to stay
            motivated.
          </p>
          <div className="flex gap-3 ">
            <button className="btn bg-primary hover:bg-primary/80 text-white shadow-md justify-center py-2 px-6 text-[3.5vw] lg:text-sm! font-body flex items-center gap-2 mt-5 capitalize">
              Get started Free <FaArrowRight />
            </button>
            <button className="btn bg-white/80 hover:bg-primary text-[#222] shadow-md justify-center py-2 px-6 text-[3.5vw] lg:text-sm! font-body flex items-center gap-2 mt-5 capitalize hover:text-white">
              Explore Workouts <MdKeyboardArrowRight className="text-xl" />
            </button>
          </div>
          <div className="flex relative w-full mt-5">
            <img
              src="./home-page/how-it-works/profile1.jpg"
              className="profileIconCls absolute top-0 left-0 z-5 -translate-y-8/10 lg:translate-y-0 translate-x-[200%] lg:translate-x-0 "
              alt=""
            />
            <img
              src="./home-page/how-it-works/profile2.jpg"
              className="profileIconCls absolute top-0 left-0 translate-x-[270%] lg:translate-x-7/10 z-5 -translate-y-8/10 lg:translate-y-0"
              alt=""
            />
            <img
              src="./home-page/how-it-works/profile3.jpg"
              className="profileIconCls absolute top-0 left-0 translate-x-[340%] lg:translate-x-[140%] z-5 -translate-y-8/10 lg:translate-y-0"
              alt=""
            />
            <img
              src="./home-page/how-it-works/profile4.jpg"
              className="profileIconCls absolute top-0 left-0 translate-x-[410%] lg:translate-x-[210%] z-5 -translate-y-8/10 lg:translate-y-0"
              alt=""
            />
            <div
              className="w-fit h-10 absolute rounded-full border-2 border-white center text-[#222] font-body text-xs font-semibold top-0 bg-white/70 left-0 translate-x-[480%] 
          lg:translate-x-[85%] px-5 z-4 -translate-y-8/10 lg:translate-y-0"
            >
              +100 Members
            </div>
          </div>
          <div className="w-full h-6/10 rounded-3xl shadow-xl shadow-primary/20 bg-white/50 mt-18 px-5 py-2">
            <div className="w-full flex gap-3 items-center justify-between h-[6%]">
              <h1 className="text-lg font-medium font-secondary">
                Your Fitness Feed
              </h1>
              <div className="flex border border-gray-300 rounded-full px-2 w-fit justify-between">
                <p className="communityTags">Top</p>
                <p className="communityTags border-l border-gray-300">Latest</p>
                <p className="communityTags border-l border-gray-300 ">
                  Following
                </p>
              </div>
              <div className="flex border border-gray-300 rounded-full px-2 w-fit justify-between">
                <p className="communityTags">All Time</p>
                <p className="communityTags border-l border-gray-300">
                  This Month
                </p>
                <p className="communityTags border-l border-gray-300 center text-xs!">
                  <FaChevronDown />
                </p>
              </div>
            </div>
            <div className="w-full h-[94%] flex flex-wrap gap-3 py-3 justify-center">
              {routines.map((routine) => (
                <div
                  key={routine.id}
                  className="w-[32%] h-[48%] shrink-0 border border-gray-300 rounded-lg p-2 bg-white/70 shadow-md"
                >
                  <div className="flex justify-between gap-2">
                    <img
                      src={routine.user.avatar}
                      alt={routine.user.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="w-full">
                      <div className="flex items-center justify-between ">
                        <h1 className="text-sm font-body">
                          {routine.user.name}
                        </h1>
                        <p className="text-xs text-gray-500 font-medium font-body self-start">
                          &#8226; {routine.time_ago}
                        </p>
                      </div>
                      <div className="text-xs font-body font">{routine.routine_name}</div>
                    </div>
                  </div>
                  <div className="w-full py-1 px-2 border border-black/20 rounded-lg mt-2 font-body text-[#333] bg-white/80">
                    <div className="flex items-center justify-between">
                      <p className="text-sm">{routine.category}</p>
                      <CgGym className="text-lg" />
                    </div>
                    <hr className="border-black/20" />
                    <div>
                      {routine.exercises.map((exercise, index) => (
                        <div
                          key={index}
                          className="text-sm font-body font flex w-full gap-1 justify-between mt-1"
                        >
                          <p>{exercise.name}</p>
                          <div className="flex items-center text-xs ">
                            <p className="mr-[2px]">&#8226;</p>
                            <p>{exercise.sets} sets</p>
                            <p>x {exercise.reps} {exercise.unit}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-between mt-2 font-body text-[#333]">
                    <div className="flex items-center gap-2 ">
                      <button className="text-sm font-body font flex items-center gap-1 px-3 py-1 border border-black/10 shadow bg-white/80 rounded-full pointer">
                        <FcLike />
                        <span className="text-xs">{routine.likes}</span>
                      </button>
                      <button className="text-sm font-body font flex items-center gap-1 px-3 py-1 border border-gray-600 rounded-full pointer hover:bg-white/80">
                        <FaComment className="size-3" />
                        <span className="text-xs">{routine.comments}</span>
                      </button>
                    </div>
                    <button className="text-xs font-body font flex items-center gap-1 px-3 py-1.5 border border-black/10 shadow bg-white/80 rounded-full pointer">
                      {routine.action_label}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* rightside */}
        <div className="w-3/10 h-full"></div>
      </div>
    </section>
  );
};

export default Community;
