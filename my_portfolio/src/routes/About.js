import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Mainpro from '../components/Mainpro'
import Education from '../components/Education'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Mainpro heading="ABOUT" text="I'm a Full Stack Developer"/>
      <Education/>
      <Footer/>
    </div>
  )
}

export default About
