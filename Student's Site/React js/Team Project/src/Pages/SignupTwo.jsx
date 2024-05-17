import React from 'react'
import './SignupTwo.css'
import { Link } from 'react-router-dom';
import work from '../Components/Assets/work.png'

const SignupTwo = () => {
  return (
    <div className="contact-container">
        <form action="" className="contact-left">
            <div className="contact-left-title">
                 <h2>Sign up with us</h2>
                 <p>Already have an  account? <Link to="/login" >Login</Link>
                 </p>
            </div>
            <input type="text" name="name" placeholder="Your Name" className="contact-inputs" required /> 
            <input type="password" name="password" placeholder="Enter your Password" className="contact-inputs" required />
            <input type="password" name="password" placeholder="Confirm Password" className="contact-inputs" required />
            <button type="submit" className="glassy-button"><Link className="submit-btn" to="">Submit</Link></button>
        </form>
        <div className="contact-right">
            <img className="image-work" src={work} alt="Work in progress" />
        </div>
    </div>
  )
}

export default SignupTwo