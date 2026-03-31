import React, { useState } from "react";
import { workouts } from "../../../utils";
import { TbFlameFilled } from "react-icons/tb";
import { IoMdStopwatch } from "react-icons/io";

const FeaturedWorkout = ({ isMobile }) => {
  const CARD_WIDTH = isMobile ? 288 + 16 : 240 + 16; // card width + gap
const VISIBLE = isMobile ? 1 : 4;
  const featuredWorkout = workouts.filter((workout) => workout.featured);
  const [index, setIndex] = useState(0);
  const max = Math.max(0, featuredWorkout.length - VISIBLE);

  const slide = (dir) => setIndex((i) => Math.max(0, Math.min(i + dir, max)));
  return (
    <div className="w-full h-fit lg:h-screen relative px-10  lg:px-30 py-10 ">
      <img
        src="./home-images/features/feature-workout-bg.jpg"
        className="w-full h-full object-cover object-top absolute top-0 left-0 z-1"
        alt=""
      />
      <div className="w-full h-full relative z-10 ">
        <h1 className="text-[7vw] lg:text-[3.4vw] font-heading text-white text-center">
          Featured Workout
        </h1>
        <div className="w-35 lg:w-80 mx-auto h-1 bg-linear-to-r from-transparent via-green-500 to-transparent opacity-80 rounded-full"></div>
        <div className="w-full lg:w-8/10 mx-auto lg:bg-black/10 lg:backdrop-blur-xs px-4 lg:px-10 py-10 mt-5 rounded-xl">

          {/* Track */}
          <div className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-400 ease-in-out"
              style={{ transform: `translateX(-${index * CARD_WIDTH}px)` }}
            >
              {featuredWorkout.map((workout, i) => (
                <div
                  key={i}
                  className="w-72 lg:w-60 shrink-0 text-white bg-[#222]/70 hover:bg-[#222] rounded-lg overflow-hidden backdrop-blur-xs pb-5 border border-white/20 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(74,222,128,0.15)] transition-all font-body"
                >
                  <img
                    src={workout.img}
                    className="w-full h-72 lg:h-60 object-cover"
                    alt={workout.title}
                  />
                  <div className="mt-3 px-3">
                    <h1 className="text-[5.5vw] lg:text-xl font-medium font-body">{workout.title}</h1>
                    <span className={`text-xs font-semibold font-body tracking-wider ${workout.level === "Beginner" ? " text-green-400 bg-green-400/10" : workout.level === "Intermediate" ? "bg-yellow-500/10 text-yellow-400" : workout.level === "Advanced" ? "bg-red-500/10 text-red-400" : "bg-blue-500/10 text-blue-400"} px-2 py-1 rounded-full inline-block mt-2 mb-4`}>
                      {workout.level}
                    </span>
                    <div className="flex flex-col gap-1.5 text-sm text-white/65 mb-4">
                      <div className="flex items-center gap-3 text-white/65">
                        <IoMdStopwatch className="text-[#777]" />
                        {workout.duration_weeks} weeks
                      </div>
                      <div className="flex items-center gap-3">
                        <TbFlameFilled className="text-orange-400" />
                        {workout.calories_per_session} calories
                      </div>
                    </div>
                    <button className="w-full border btn  border-white/40 text-white uppercase tracking-widest py-2 rounded-lg hover:bg-green-400 hover:text-black transition-all text-xs!">
                      Select Workout
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {Array.from({ length: max + 1 }, (_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-5 bg-green-400" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center justify-center mt-6">
            <div className="flex gap-3">
              <button
                onClick={() => slide(-1)}
                disabled={index === 0}
                className="w-9 h-9 rounded-full border border-white/20 bg-white/5 text-white flex items-center justify-center hover:bg-green-400 hover:border-green-400 hover:text-black disabled:opacity-30 transition-all"
              >
                ←
              </button>
              <button
                onClick={() => slide(1)}
                disabled={index >= max}
                className="w-9 h-9 rounded-full border border-white/20 bg-white/5 text-white flex items-center justify-center hover:bg-green-400 hover:border-green-400 hover:text-black disabled:opacity-30 transition-all"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorkout;
