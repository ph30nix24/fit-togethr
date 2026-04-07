import { useEffect, useState } from 'react'
import Hero from './componants/Hero'
import Navbar from './componants/Navbar'
import HowItWorks from './componants/HowItWorks';
import FeaturedWorkout from './componants/FeaturedWorkout';
import Community from './componants/Community';

function useWindowWidth(breakpoint = 768) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  const isMobile = width < breakpoint;
  return isMobile;
}

const Home = () => {
  const isMobile = useWindowWidth();
  console.log(isMobile);
  return (
    <>
        <main className=''>
            {/* <div className="grid z-50">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div> */}
            <Navbar isMobile={isMobile} />
            <Hero isMobile={isMobile} />
            <HowItWorks />
            <FeaturedWorkout isMobile={isMobile} />
            <Community isMobile={isMobile} />
            
        </main>
    </>
  )
}

export default Home