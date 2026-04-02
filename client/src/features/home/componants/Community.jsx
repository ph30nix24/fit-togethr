import React from 'react'

const Community = ({ isMobile }) => {
  return (
    <div className='w-full h-screen relative'>
        <img src={isMobile ? "./home-images/community/community-mobile-bg.jpg" : "./home-images/community/community-bg.jpg"} className='absolute size-full top-0 left-0 object-cover z-1' alt="" />
        <div className="size-full absolute z-2 bg-linear-to-r from-black/80 to-black/50"></div>
        <div className='relative z-3 size-full px-30 py-15'>
            <h1 className='text-4xl font-heading text-white text-center '>Join the Community</h1>
            <div className="w-35 lg:w-80 mx-auto h-1 bg-linear-to-r from-transparent via-green-500 to-transparent opacity-80 rounded-full mt-2"></div>
            <p className='text-center font-body text-lg text-white/80 tracking-wider mt-2'>See what others are doing today</p>
            <div className='w-full h-fit '>
                <div className='w-7/10 px-5 py-3 bg-white/10 backdrop-blur-xs rounded-lg mt-10 mx-auto flex items-center gap-5'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Community