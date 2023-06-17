import React, { useState } from 'react'

function Navbar() {
    const menuLinks=[{name:"HOME" , link:"#home"},
    {name:"ABOUT" , link:"#about"},
    {name:"SKILLS" , link:"#skills"},
    {name:"PROJECTS" , link:"#projects"},
    {name:"CONTACT" , link:"#contact"}
]
const[open,setOpen]=useState(false)
  return (
    <nav  className='w-full l-0 top-0 right-0 text-lg z-50 fixed'>
        <div className='flex items-center justify-between'>
        <div className='mx-7 '>
      <h4 className='text-4xl uppercase'>S<span className='text-blue-700'>ID</span>HU</h4>
      </div>
      <div className='text-black md:block hidden px-7 py-2 font-medium bg-white rounded-bl-full rig'>
        <ul data-aos='flip-up'  className='flex items-center gap-1 right-0'>
            {menuLinks?.map((menu,i)=>
                (<li className='px-6 hover:text-cyan-600 cursor-pointer' key={i}><a className='' href={menu?.link}>{menu?.name}</a></li>)
            )}
        </ul>
      </div>
      <div onClick={()=>setOpen(!open)} className={`absolute   right-8 text-5xl md:hidden  bg-cyan-400 h-12 w-12 rounded-lg z-[999] top-1 text-black`}>
      <ion-icon className='z-[999] bg-white'  name={`${open?"close":"menu"}`}></ion-icon>
      </div>
      <div className={`z-[998] md:hidden bg-cyan-400 text-white absolute w-2/3 h-screen px-7 py-2 font-medium top-0 fixed  ${open?"right-0":"right-[-100%]"} duration-500`}>
        <ul className=' flex flex-col justify-center h-full gap-10 py-2 '>
        {menuLinks?.map((menu,i)=>
                (<li onClick={()=>setOpen(false)} className='px-6 hover:text-gray-300 cursor-pointer' key={i}><a className='' href={menu?.link}>{menu?.name}</a></li>)
            )}
        </ul>
      </div>
        </div>
       
    </nav>
    
  )
}

export default Navbar
