import "./FooterStyles.css"
import React from 'react'
import { FaCode, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className ="location">
                    <FaHome size={20} style ={{color : "#fff" , marginRight: "2rem"}}/>
                    <div>
                        <p> Puttur , Chittoor District .</p>
                        <p>AndhraPradesh</p>
                    </div>
                </div>
                <div className="phone">
               <h4>
               <FaPhone size={20} style ={{color : "#fff" , marginRight: "2rem"}}/>
               +91 7780586330
               </h4>
                </div>
                <div className="email">
                 <h4>
                 <FaMailBulk size={20} style ={{color : "#fff" , marginRight: "2rem"}}/>
                 sharmilapuligundla2002@gmail.com
                 </h4>
                </div>
            </div>
            <div className="right">
                <div className="social">
                <FaInstagram size={30} style ={{color : "#fff" , marginRight: "1rem"}}/>
                <FaLinkedin size={30} style ={{color : "#fff" , marginRight: "1rem"}}/>
                <FaGithub size={30} style ={{color : "#fff" , marginRight: "1rem"}}/>
                <FaCode size={30} style ={{color : "#fff" , marginRight: "1rem"}}/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
