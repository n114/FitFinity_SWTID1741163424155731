import React from 'react'
import '../styles/About.css'
import aboutImg from '../assets/abot.jpeg'

const About = () => {
  return (
    <div className='about-container' id='about'>

      <div className="about-image">
          <img src={aboutImg} alt="" />
      </div>

      <div className="about-text">
          <span>
            <div className="about-line" />
            <h5>About Us</h5>
          </span>
          <h3>FitFinity: Your Path to a Healthier, Stronger You </h3>
          <p>FitFinity is your ultimate destination for achieving fitness goals, whether you're a beginner or a seasoned athlete. Our platform offers expert guidance, personalized workout plans, and nutritional insights to help you stay on track. With a focus on holistic well-being, we provide the tools and motivation you need to build strength, improve endurance, and maintain a healthy lifestyle. Join FitFinity today and take the first step toward a fitter, more confident you!</p>
      </div>

    </div>
  )
}

export default About