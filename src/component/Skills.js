import React from 'react'
import cpp from '../component/images/cpp.png'
import tw from '../component/images/tw.png'
import Aos from 'aos'
function Skills() {
  return (
    <section id='skills' className='bg-gray-900 bg-opacity-70 pt-24 mt-0 '>
      <div>
     <h3 className='text-4xl font-semibold '>My <span className='text-cyan-400'>Skills</span></h3>
     <p className='mt-5 text-lg'>
      My <span className='text-cyan-400'>Knowledge</span>
     </p>
     <div className='flex justify-center items-center mt-12 gap-10 flex-wrap pb-6'>
    <div data-aos='flip-left' className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 flex items-center justify-center-400 p-10 rounded-xl '>
    <div 
    style={{background:`conic-gradient(rgb(8,145,170),100% , #ddd 100%)`}} 
    className='w-32 h-32 flex items-center justify-center rounded-full '>
      <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center cursor-pointer'>
      <ion-icon name="logo-javascript"></ion-icon>
      </div>
    
    </div>
   
    </div>
    <div data-aos='flip-left' className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 flex items-center justify-center-400 p-10 rounded-xl '>
    <div 
    style={{background:`conic-gradient(rgb(8,145,170),100% , #ddd 100%)`}} 
    className='w-32 h-32 flex items-center justify-center rounded-full '>
      <div className=' w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center cursor-pointer'>
      <img className='h-18 w-20'  src={cpp}></img>
      </div>
    
    </div>
   
    </div>
    <div data-aos='flip-right'  className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 flex items-center justify-center-400 p-10 rounded-xl '>
    <div 
    style={{background:`conic-gradient(rgb(8,145,170),100% , #ddd 100%)`}} 
    className='w-32 h-32 flex items-center justify-center rounded-full '>
      <div className=' w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center cursor-pointer'>
      <img className='h-12 w-17' src={tw}></img>
      </div>
    
    </div>
   
    </div>
    <div data-aos='flip-right' className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 flex items-center justify-center-400 p-10 rounded-xl '>
    <div 
    style={{background:`conic-gradient(rgb(8,145,170),100% , #ddd 100%)`}} 
    className='w-32 h-32 flex items-center justify-center rounded-full '>
      <div className=' w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center text-6xl cursor-pointer'>
      <ion-icon name="logo-react"></ion-icon>
      </div>
    
    </div>
   
    </div>
     </div>
     </div>
    </section>
  )
}

export default Skills
