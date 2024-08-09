// import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <div className="contact-heading">
          <p>Contact</p>
        </div>
        <div className="name">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder='Enter Your Name' />
        </div>
        <div className="email">
          <label htmlFor="email">email</label>
          <input type="email" name="email" id="email" placeholder='Enter Your E-mail' />
        </div>
        <div className="mobile">
          <label htmlFor="mobile">Mobile</label>
          <input type="number" name="mobile" id="mobile" placeholder="Enter Your Mobile Number" />
        </div>
        <div className="city">
          <label htmlFor="city">City</label>
          <input type="text" name="city" id="city" placeholder='Enter Your City' />
        </div>
        <div className="message">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows={5} placeholder='Write your message......'></textarea>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
