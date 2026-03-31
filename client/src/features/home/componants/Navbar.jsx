import { useState } from "react";
import { IoFitnessOutline } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import SideNavbar from "./SideNavbar";
const Navbar = ({ isMobile }) => {
    const [menuClicked, setMenuClicked] = useState(false);
  return (
    <nav className='w-full fixed top-0 left-0 z-50 px-5 lg:px-45 py-3'>
        <div className='w-full px-5 lg:px-7 py-2 flex items-center'>
            <div className='flex gap-2 items-center'>
                <IoFitnessOutline className='text-2xl text-green-500' />
                <h1 className='text-xl lg:text-2xl text-white font-heading'>fit <span className='text-green-500 capitalize'>togethr</span></h1>
            </div>
            <div className='ml-auto hidden lg:flex gap-5'>
                <ul className="flex items-center text-white font-body capitalize gap-5">
                    <a href="/"><li className="text-green-500 links border-b-2 border-green-500">home</li></a>
                    <a href="/explore"><li className="links">explore</li></a>
                    <a href="/workouts"><li className="links">workouts</li></a>
                    <a href="/blogs"><li className="links">blogs</li></a>
                </ul>
                <button className='bg-white/40 text-white px-6 py-2 hover:bg-white/80 btn tracking-wider hover:text-green-500'>
                    login
                </button>
            </div>
            <div className='ml-auto lg:hidden'>
                <LuMenu className='text-2xl text-green-500'  onClick={() => setMenuClicked(true)}/>
            </div>
        </div>
        {isMobile && <SideNavbar menuClicked={menuClicked} setMenuClicked={setMenuClicked} />}
    </nav>
  )
}

export default Navbar