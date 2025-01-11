import "./EducationStyles.css";
import React from 'react'

const Education = () => {
  return (
    <div className="edu">
        <div className="card-container">
            <div className="card">
                <h3>-Secondary School-</h3>
                <span className="bar">----</span>
                <p>Sri Chaitanya Techno School</p>
                <p>2017-2018</p>
                <p>CGPA 9.8</p><br/>
                <a href="https://maps.app.goo.gl/jVt3SVUSZGRbgXSr7" className="btn"> Location </a>
            </div>
            <div className="card">
                <h3>-Board of Internmediate-</h3>
                <span className="bar">----</span>
                <p>Sri Chaitanya Jr College</p>
                <p>2018-2020</p>
                <p>CGPA 9.86</p><br/>
                <a href="https://maps.app.goo.gl/92QonMmHF653vLqZ7" className="btn"> Location </a>
            </div>
            <div className="card">
                <h3>-UnderGraduation-</h3>
                <span className="bar">----</span>
                <p>IIIT Nagpur</p>
                <p>2021-2025</p>
                <p>Final Year</p><br/>
                <a href="https://maps.app.goo.gl/AMP633b3R3arWoYw5" className="btn"> Location </a>
            </div>

        </div>
      
    </div>
  )
}

export default Education
