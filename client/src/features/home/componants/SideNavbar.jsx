import { NavLink } from "react-router";
import { IoFitnessOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
const SideNavbar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className={`absolute w-full h-screen top-0 right-0 ${isMenuOpen ? "translate-x-0" : "translate-x-full"} center bg-[#fd5a48]/10 backdrop-blur-sm flex-col gap-10 text-2xl font-body font-medium  transition-transform duration-300 justify-between! z-60 py-40`}
    >
      <div className="w-fit flex items-center gap-2 font-heading">
        <IoFitnessOutline className="text-2xl text-[#fd5a48]" />
        <h1 className="font-heading font-semibold text-xl">
          fit<span className="text-[#fd5a48]"> togethr</span>
        </h1>
      </div>
      <div className="flex flex-col justify-center gap-5">
        <div className="flex flex-col  text-white font-body capitalize gap-5 justify-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#fd5a48] font-medium text-center"
                : "text-[#333] font-medium text-center"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/explore"
            className={({ isActive }) =>
              isActive
                ? "text-[#fd5a48] font-medium text-center"
                : "text-[#333] font-medium text-center"
            }
          >
            Explore
          </NavLink>
          <NavLink
            to="/workouts"
            className={({ isActive }) =>
              isActive
                ? "text-[#fd5a48] font-medium text-center"
                : "text-[#333] font-medium text-center"
            }
          >
            Workouts
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive
                ? "text-[#fd5a48] font-medium text-center"
                : "text-[#333] font-medium text-center"
            }
          >
            blogs
          </NavLink>
        </div>
        <button className="px-5 py-2 text-white bg-linear-to-br to-[#FD5A48] from-[#ff8e6e] rounded-lg font-medium hover:to-[#fd5a48]/90 hover:from-[#ff8e6e]/90 transition font-body cursor-pointer text-xs uppercase mt-10">
          Sign In
        </button>
      </div>
      <RxCross2
        onClick={() => setIsMenuOpen(false)}
        className="text-3xl text-[#FD5A48] cursor-pointer"
      />
    </div>
  );
};

export default SideNavbar;
