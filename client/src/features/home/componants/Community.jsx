import React from 'react'

const Community = ({ isMobile }) => {
  return (
    <div className='w-full h-screen relative'>
        <img src={isMobile ? "./home-images/community/community-mobile-bg.jpg" : "./home-images/community/community-bg.jpg"} className='absolute size-full top-0 left-0 object-cover z-1' alt="" />
        <div className="size-full absolute z-2 bg-linear-to-r from-black/70 to-black/40"></div>
        <div className='relative z-3 size-full px-30 py-15'>
            <h1 className='text-4xl font-heading text-white text-center '>Join the Community</h1>
        </div>
    </div>
  )
}

export default Community