import React from 'react'
import Particles from 'react-tsparticles'
import Pconfig from '../config/Pconfig'
import { tsParticles } from "tsparticles-engine";
function ParticleBg() {
  return (
    <div>
      <Particles params={Pconfig}></Particles>
    </div>
  )
}

export default ParticleBg
