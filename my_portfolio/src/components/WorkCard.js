import "./WorkCardStyles.css"
import React from 'react'

import { NavLink } from "react-router-dom"
const WorkCard = (props) => {
  return (
   <div className="project-card">
              <img src={props.imgsrc} alt="Chatbot Project Preview" />
                   <h2 className="project-title">{props.title}</h2>
                   <div className="pro-details"></div>
                   <p>{props.text}</p>
                    <div className="pro-btns"></div>
                    <NavLink to={props.view} className="btn">View</NavLink>
                    <NavLink to ={props.source} className="btn">Source</NavLink>
              </div>
  )
}

export default WorkCard;
