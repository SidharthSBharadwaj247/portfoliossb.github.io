import logo from './logo.svg';
import './App.css';
import Bot from './component/Bot';
import Navbar from './component/Navbar';
import About from './component/About';
import Skills from './component/Skills';
import Project from './component/Project';
import Contact from './component/Contact';
import Hero from './component/Hero';
import { HashLoader } from 'react-spinners'
import { useEffect, useState } from 'react';
import Particlebackground from './component/Particlebackground';
import Particles from 'react-tsparticles';
import ParticleBg from './component/Particlebg/ParticleBg';
import { tsParticles } from "tsparticles-engine";
import Footer from './component/Footer';

function App() {
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{setLoading(false);},3000)
  },[])
  return (
    
    
      <div >
       
      {loading ?<div>
      <div className='App'>
        <HashLoader 
      
      color={'#79c2d0'}
      loading={loading}
      
      size={100}
      />
      </div> 
    </div>
      :<div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', zIndex: -999 }}>
        <Particlebackground></Particlebackground>
      </div>
    
     
    
      <div style={{ position: 'relative', zIndex: 999 }}>
      <Navbar />
        <Hero />
        <About />
        <Bot />
        <Skills />
        <Project />
        <Contact />
        <Footer/>
      </div>
    </div>
    }
    
     </div>
  );
}

export default App;
