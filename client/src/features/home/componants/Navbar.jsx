import { IoFitnessOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className='w-full fixed top-0 left-0 z-50 px-45 py-3'>
        <div className='w-full px-7 py-2 flex'>
            <div className='flex gap-2 items-center'>
                <IoFitnessOutline className='text-2xl text-green-500' />
                <h1 className='text-2xl font-bold text-white font-heading'>fit <span className='text-green-500 capitalize'>togethr</span></h1>
            </div>
            <div className='ml-auto'>
                <button className='bg-green-500 text-white px-4 py-2 hover:bg-green-600 btn'>
                    Get Started
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar