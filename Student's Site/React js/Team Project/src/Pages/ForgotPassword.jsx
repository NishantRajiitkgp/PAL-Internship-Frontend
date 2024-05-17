import React from 'react'
import './ForgotPassword.css'
import { Link } from 'react-router-dom';
import forgot from '../Components/Assets/forgot.png'

const ForgotPassword = () => {
  return (
    <div className="contact-container-otp">
        <form action="" className="contact-left-forget">
            <div className="contact-left-title-forget">
                 <h2>Forgot Password?</h2>
                 <a className='back-to-login'>Back to <Link to="/login" >Login</Link></a>
                 <br />
                 <p>Enter the email address you used when you joined and <br />
                  we'll send you instructions to reset your password.</p>
                 
                  
            </div>
            <input type="password" name="password" placeholder="Email Address" className="contact-inputs-forget" required />
            <button type="submit" className="glassy-button-forget">Send </button>
        </form>
        <div className="contact-right-forget">
            <img className="forget-image" src={forgot} alt="Work in progress" /> 
        </div>
    </div>
  )
}

export default ForgotPassword