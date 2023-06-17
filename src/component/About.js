import React from 'react'
import sid2 from '../component/images/sid2.png'
import Aos from 'aos'
import resume from '../component/images/resume.pdf'
function About() {
  return (
   <section className='bg-gray-900 bg-opacity-70 mb-0 pb-0 md:pt-6 pt-2' id='about'>
    <div className='text-center mt-8 bg-gray-900 max-w-5xl relative mx-auto'>
      <h3 className='text-3xl font-semibold font-san'>
        ABOUT <span className='text-cyan-400'>ME</span>
      </h3>
      <p className='my-3 text-lg font-bold'><span className='text-cyan-400'>My </span> Introduction</p>
      <div className='flex md:flex-row flex-col-reverse md:gap-6 gap-11 px-10 max-w-6xl mx-auto
      items-center '>
        <div className=''>
          <div data-aos='zoom-in-right' className='my-3 '>
            <p className='text-justify leading-10 mx-auto font-Poppins font-semibold'>
            Hello! I am a third-year undergraduate student at NIT Rourkela, pursing a degree in Electrical Engineering. 
            My academic experience has provided me with a keen interest in and knowledge of topics such as Front-end development, 
            Data Structures and Algorithms, Object-Oriented Programming, and Competitive programming. In addition to my studies, 
            I have developed a passion
             for gaming and cricket, which serve as my recreational activities. I also appreciate exploring and learning about spiritual ideas and concepts.
            </p>
          </div>
          <div className='pb-5 justify-left '><a href={resume} download={resume}><button className='rounded-full bg-cyan-400 px-4 py-3 animate-pulse'>Download CV</button></a></div>
        </div>
        <div data-aos='zoom-in-left'>
          <img className='md:w-full md:h-full h-96 md:object-cover object-cover  opacity-90 hover:opacity-100 md:pb-24' src={sid2}></img>
        </div>
      </div>
    </div>
   </section>
  )
}

export default About
