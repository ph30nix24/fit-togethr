import React from "react";
import { IoFitnessOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
const SideNavbar = ({ menuClicked, setMenuClicked }) => {
  return (
    <div
      className={`absolute w-full h-screen top-0 right-0 ${menuClicked ? "translate-x-0" : "translate-x-full"} center bg-black/20 backdrop-blur-sm flex-col gap-10 text-white text-2xl font-body font-medium capitalize transition-transform duration-300 justify-between! py-40`}
    >
      <div className="flex gap-2 items-center">
        <IoFitnessOutline className="text-2xl text-green-500" />
        <h1 className="text-xl lg:text-2xl text-white font-heading">
          fit <span className="text-green-500 capitalize">togethr</span>
        </h1>
      </div>
      <div className="flex flex-col justify-center gap-5">
        <ul className="flex flex-col  text-white font-body capitalize gap-5 justify-center">
          <a href="/">
            <li className="text-green-500 links border-b-2 border-green-500 text-center">
              home
            </li>
          </a>
          <a href="/explore">
            <li className="links text-center">explore</li>
          </a>
          <a href="/workouts">
            <li className="links text-center">workouts</li>
          </a>
          <a href="/blogs">
            <li className="links text-center">blogs</li>
          </a>
        </ul>
        <button className="bg-white/40 text-white px-6 py-2 hover:bg-white/80 btn tracking-wider hover:text-green-500 mt-10">
          login
        </button>
      </div>
      <RxCross2
        onClick={() => setMenuClicked(false)}
        className="text-3xl text-green-500 "
      />
    </div>
  );
};

export default SideNavbar;
