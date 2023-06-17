import React, {useRef} from 'react'
import Typewiter from "typewriter-effect"
import sid from '../component/images/sid.png'
import Aos from 'aos'
function Hero() {
  const handleScrollClick = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };//
  return (
    
    <section id='home' className='min-h-screen flex py-10 md:flex-row flex-col gap-5 items-center bg-gray-900 bg-opacity-70'>
      <div data-aos='fade-right'  className='flex-1 flex items-center justify-center'>
      <img src={sid} className='w-1/2 h-full object-scale-down rounded-full opacity-100  ' alt=""></img>
      </div>
      <div className='flex-1 '>
        <div data-aos='fade-left' className=''>
          <h1 className='md:text-5xl text-2xl font-bold md:leading-normal leading-10  '>
            <span className='text-white '>
              Hello!
              <br />
            </span>
            My name is <span>Sidharth Bharadwaj</span> 
          </h1>
         <div className='md:text-2xl text-lg md:leading-normal leading-5 pb-4'>
          <Typewiter options={{autoStart:true,loop:true,delay:40, strings:["Front-end Developer","Programmer","Gamer"],}}/>
         </div>
         <button onClick={handleScrollClick} className='bg-cyan-500 rounded-full py-3 px-6 justify-center items-center font-semibold md:mx-0 mx:auto '>Contact Me</button>
          
        </div>
      </div>
    </section>
  )
}

export default Hero
