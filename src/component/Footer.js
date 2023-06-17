import React from 'react'

function Footer() {
  const social_mdeia=[{logo:'logo-linkedin',link:'https://www.linkedin.com/in/sidharth-shankar-bharadwaj-59b297249/'},{logo:'logo-facebook',link:'https://www.facebook.com/sidharth.sibun/'},{logo:'logo-instagram',link:'https://www.instagram.com/sidharthkenway/'},{logo:'logo-github',link:'https://github.com/SidharthSBharadwaj247'}]
  return (
    <div className=' bg-gray-800  p-4 text-center text-white '>
      <div className='text-sm' >Copyright © 2023 Sidharth Bharadwaj. All Rights reserved.</div>
      <div className='pt-4 flex gap-2 justify-center items-center'>
          {social_mdeia.map(icon=>(
            <div className='text-3xl hover:text-white text-cyan-400' key={icon}><a target='_blank' href={icon.link}><ion-icon name={icon.logo}></ion-icon></a></div>
          ))}
         </div>
    </div>
   
   
  )
}

export default Footer
