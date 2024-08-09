import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about-container">  
      <div className="about-box">
        <div className="about-heading">
          <p>About</p>
        </div>
        <div className="name">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder='Enter Your Name' />
        </div>
        <div className="email">
          <label htmlFor="email">email</label>
          <input type="email" name="email" id="email" placeholder='Enter Your E-mail' />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Enter Your Password" />
        </div>
        <div className="dob">
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" name="dob" id="dob" placeholder='Enter Date of Birth'/>
        </div>
        <div className="city">
          <label htmlFor="city">City</label>
          <input type="text" name="city" id="city" placeholder='Enter Your City'/>
        </div>
      </div>
    </div>
  )
}

export default About