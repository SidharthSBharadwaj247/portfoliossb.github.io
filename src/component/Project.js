import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Autoplay } from 'swiper'
import project1 from '../component/images/project1.png'
import project2 from '../component/images/project2.jpg'
import project3 from '../component/images/project3.png'
import Typewiter from "typewriter-effect"
function Project() {
  return (
    <section id='projects' className='py-10 text-white bg-gray-900 bg-opacity-70'>
        <div className='text-center'>
          <h3 className='text-4xl font-semibold'>
          My <span className='text-cyan-400'>Projects</span>
          </h3>
          <p>Summoning <span className='text-cyan-400'>Projects</span><Typewiter options={{autoStart:true,loop:true,delay:20, strings:[".","..","...","...."],}}/></p>
        </div>
        <br/>
        <div className='flex max-w-6xl px-5 mx-auto items-center justify-center relative'>
          <div className='lg:w-2/3 w-full '>
            <Swiper slidesPerView={1.2} spaceBetween={20} breakpoints={{
              768:{
                slidesPerView: 1,
              },
            }} loop={true} autoplay={{
              delay:3000,
            }
            }
            pagination={{
              clickable:true
            }}
            modules={[Pagination, Autoplay]}
            >
              <SwiperSlide>
                <div className='w-full h-fit p-4 bg-slate-700 rounded-xl'>
                  <img className='rounded-lg' src={project1}></img>
                  <h3 className='text-xl my-4'>Restaurant Rating Predictor</h3>
                  <div className='flex  gap-5'>
                  <a target='_blank' className='text-4xl' href='https://github.com/SidharthSBharadwaj247/foodp.github.io'><ion-icon name="logo-github"></ion-icon></a>
                  <a target='_blank' className='text-4xl' href='https://sidharthsbharadwaj247.github.io/foodp.github.io/'><ion-icon name="link"></ion-icon></a>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide>
                <div className='w-full h-fit p-4 bg-slate-700 rounded-xl'>
                  <img className='rounded-lg' src={project2}></img>
                  <h3 className='text-xl my-4'>Crpto site</h3>
                  <div className='flex  gap-5'>
                  <a target='_blank' className='text-4xl' href='https://github.com/SidharthSBharadwaj247/digitalcoinhub.github.io'><ion-icon name="logo-github"></ion-icon></a>
                  <a target='_blank' className='text-4xl' href='https://sidharthbharadwaj.netlify.app/#contact'><ion-icon name="link"></ion-icon></a>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='w-full h-fit p-4 bg-slate-700 rounded-xl'>
                  <img className='rounded-lg' src={project3}></img>
                  <h3 className='text-xl my-4'>Log in Page</h3>
                  <div className='flex  gap-5'>
                  <a target='_blank' className='text-4xl' href='https://github.com/SidharthSBharadwaj247/logf.github.io' ><ion-icon name="logo-github"></ion-icon></a>
                  <a target='_blank' className='text-4xl' href='https://sidharthsbharadwaj247.github.io/logf.github.io/ ' ><ion-icon name="link"></ion-icon></a>
                  </div>
                </div>
                </SwiperSlide></Swiper>
          </div>
        </div>
    </section>
  )
}

export default Project
