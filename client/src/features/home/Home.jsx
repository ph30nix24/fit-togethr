import React from 'react'
import Hero from './componants/Hero'
import Navbar from './componants/Navbar'

const Home = () => {
  return (
    <>
        <main className='center'>
            <div className="grid z-50">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Navbar />
            <Hero />
        </main>
    </>
  )
}

export default Home