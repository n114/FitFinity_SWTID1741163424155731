import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div className='hero-container' id='hero'>
      
      <div className="hero-text">
        <span>
          <div className="hero-line" />
          <h5><b>FitFinity</b></h5>
        </span>
        <h2>Result happens <b>Over time,</b> not Overnight. <b>work hard, stay consistent</b> and be patient!</h2>
        <a href="#search"><button>View more</button></a>
      </div>
    </div>
  )
}

export default Hero