import React from 'react'
import './NewPassword.css'
import { Link } from 'react-router-dom';
import Password from '../Components/Assets/newpassword.png'

const NewPassword = () => {
  return (
    <div className="contact-container-otp">
        <form action="" className="contact-left-forget">
            <div className="contact-left-title-forget">
                 <h2>Set a New Password</h2>
                 <br />
                 
                  
            </div>
            <input type="password" name="password" placeholder="Enter New Password" className="contact-inputs-forget" required />
            <input type="password" name="password" placeholder="Confirm New Password" className="contact-inputs-forget" required />
            <button type="submit" className="glassy-button-forget">Submit </button>
        </form>
        <div className="contact-right-forget">
            <img className="forget-image" src={Password} alt="Work in progress" /> 
        </div>
    </div>
  )
}

export default NewPassword