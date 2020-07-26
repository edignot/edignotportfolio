import React from "react"
import Particles from "react-particles-js"

const ParticleContainer = () => {
  return (
    <Particles
      className="particles-container"
      params={{
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              value_area: 800,
            },
          },
        },
      }}
    />
  )
}

export default ParticleContainer
