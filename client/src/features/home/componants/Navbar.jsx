import React, { useState } from "react";
import { NavLink } from "react-router";
import { IoFitnessOutline } from "react-icons/io5";
import { TiUser } from "react-icons/ti";
import { IoMenuOutline } from "react-icons/io5";
import SideNavbar from "./SideNavbar";
const Navbar = ({ isMobile }) => {
  const [isSignedIn, setisSignedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="w-full fixed z-50 top-0 left-0 px-0 lg:px-35 lg:py-3">
      <div className="w-full px-5 py-3 bg-white/50 backdrop-blur-sm lg:rounded-full flex items-center justify-between shadow">
        <div className="w-fit flex items-center gap-2">
          <IoFitnessOutline className="text-2xl text-[#fd5a48]" />
          <h1 className="font-heading font-semibold text-xl">
            fit<span className="text-[#fd5a48]"> togethr</span>
          </h1>
        </div>
        <div className="w-fit flex gap-5 items-center font-body uppercase text-sm ">
          <div className="hidden lg:block">
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
                  ? "text-primary font-medium ml-5"
                  : "text-[#333] font-medium ml-5"
              }
            >
              Workouts
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-medium ml-5"
                  : "text-[#333] font-medium ml-5"
              }
            >
              blogs
            </NavLink>
          </div>
          {isSignedIn ? (
            <div className="flex items-center gap-2">
              <NavLink to="/profile">
                <TiUser className="text-2xl lg:text-3xl text-primary pb-1" />
              </NavLink>
              <button className="text-2xl block lg:hidden text-primary cursor-pointer" onClick={() => setIsMenuOpen(true)}>
                <IoMenuOutline />
              </button>
            </div>
          ) : (
            <button className="px-5 py-2 text-white bg-linear-to-br to-primary from-secondary rounded-lg font-medium hover:to-primary/90 hover:from-secondary/90 transition font-body cursor-pointer text-xs uppercase">
              Sign In
            </button>
          )}
        </div>
      </div>
      {isMobile && <SideNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
    </nav>
  );
};

export default Navbar;
