import React from 'react';
import "./MainStyles.css";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from 'react-router-dom';
const Main = () => {
  return (
    <div className='main'>
        <div className='mask'>
            <img className='intro-img' src={IntroImg} alt ="Intro img"/>
        </div>
      <div className='content'>
             <p>HI, I'M SHARMILA </p>
            <h1>Full stack Developer</h1>
             <div>
                <Link to ="/project" className='btn'>Projects</Link>
            
                <Link to ="/contact" className='btn'>Contact</Link>
             </div>
      </div>
    </div>
  )
}

export default Main
