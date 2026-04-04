import React from 'react'
import { IoFitnessOutline } from "react-icons/io5";
import { howItWorksData } from '../../../utils';
const HowItWorks = () => {
  return (
    <section className='w-full min-h-screen relative z-1 px-5 lg:px-40 lg:py-20 bg-linear-to-tr to-[#FBF5F1] from-[#f89d6f]/30  overflow-hidden'>
      <div className='flex items-center gap-3 pr-6 bg-white/50 w-fit mx-auto rounded-full overflow-hidden shadow-lg'>
        <p className='px-3 bg-primary/30 text-primary text-xl py-2 center rounded-full'><IoFitnessOutline /></p>
        <p className='how-it-works-top'>simple</p>
        <p className='mb-[1px] text-primary'>&#8226;</p>
        <p className='how-it-works-top'>effective</p>
        <p className='mb-[1px] text-primary'>&#8226;</p>
        <p className='how-it-works-top'>together</p>
      </div>
      <h1 className='text-5xl font-heading text-[#222] text-center mt-10 font-bold'>How it <span className='text-primary'>works</span></h1>
      <div className="w-40 h-1 mt-4 bg-primary/70 rounded-full mx-auto"></div>
      <p className='text-base text-[#333] font-body text-center mt-4 w-100 mx-auto tracking-wider'>Get started in minutes, stay on track, and build lasting habits with  a community that supports you.</p>
      <div className="w-full flex gap-5 mt-10">
        {
          howItWorksData.map((item, index) => (
            <div className='w-1/4 py-10 bg-white/70 rounded-[42px] shadow-xl shadow-primary/10 relative z-5' key={index}>
              <div className='size-14 absolute rounded-full border-2 border-primary/50 center text-primary font-heading text-xl font-semibold shadow shadow-primary/50 top-0 -translate-y-1/2 bg-white/80 left-0 translate-x-[200%]'>0{index + 1}</div>
              <img src={item.img} className='w-8/10 h-auto mx-auto' alt={item.heading} />
              <h1 className='text-lg font-semibold font-secondary capitalize text-center mt-4 px-18 leading-[140%] text-[#222]'>{item.heading}</h1>
              <div className='w-25 mx-auto h-1 bg-primary/80 rounded-full my-4'></div>
              <p className='text-base text-[#333] font-body text-center mt-2 px-10'>{item.desc}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default HowItWorks