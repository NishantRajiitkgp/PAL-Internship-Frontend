import React from 'react';
// import { Link } from 'react-router-dom';
import './OTP.css';
import OTPImage from '../Components/Assets/OTP.png'; // Change the name of the imported image

const OTPComponent = () => { // Change the name of the functional component
  return (
    <div className="contact-container-otp">
        <form action="" className="contact-left-otp">
            <div className="contact-left-title-otp">
                 <h2>OTP Verfication</h2>
                 <p>OTP has been sent via your Email</p>
            </div>
            <input type="password" name="password" placeholder="Enter the OTP" className="contact-inputs-otp" required />
            <button type="submit" className="glassy-button-otp">Verify OTP</button>
        </form>
        <div className="contact-right-otp">
            <img className="otp-image" src={OTPImage} alt="Work in progress" /> {/* Change the classname of the image */}
        </div>
    </div>
  )
}

export default OTPComponent; // Export the corrected component
