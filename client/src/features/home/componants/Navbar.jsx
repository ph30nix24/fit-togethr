import React from "react";
import { NavLink } from "react-router";
import { IoFitnessOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <nav className="w-full fixed z-50 top-0 left-0 px-35 py-3">
      <div className="w-full px-5 py-3 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-between">
        <div className="w-fit flex items-center gap-2">
          <IoFitnessOutline className="text-2xl text-[#fd5a48]" />
          <h1 className="font-heading font-semibold text-xl">
            fit<span className="text-[#fd5a48]"> togethr</span>
          </h1>
        </div>
        <div className="w-fit flex gap-5 items-center font-body uppercase text-sm ">
          <div>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#fd5a48] font-medium"
                  : "text-[#333] font-medium"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/explore"
              className={({ isActive }) =>
                isActive
                  ? "text-[#fd5a48] font-medium ml-5"
                  : "text-[#333] font-medium ml-5"
              }
            >
              Explore
            </NavLink>
            <NavLink
              to="/workouts"
              className={({ isActive }) =>
                isActive
                  ? "text-[#fd5a48] font-medium ml-5"
                  : "text-[#333] font-medium ml-5"
              }
            >
                Workouts
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "text-[#fd5a48] font-medium ml-5"
                  : "text-[#333] font-medium ml-5"
              }
            >
                blogs
            </NavLink>
          </div>
            <button className="px-5 py-2 text-white bg-linear-to-br to-[#FD5A48] from-[#ff8e6e] rounded-lg font-medium hover:to-[#fd5a48]/90 hover:from-[#ff8e6e]/90 transition font-body cursor-pointer text-xs uppercase">
                Sign In
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
