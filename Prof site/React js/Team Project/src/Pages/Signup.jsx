import React from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';
import work from '../Components/Assets/work.png'

const Signup = () => {
  return (
    <div className="contact-container">
        <form action="" className="contact-left">
            <div className="contact-left-title">
                 <h2>Sign up with us</h2>
                 <p>Already have an  account? <Link to="/login" >Login</Link>
                 </p>
            </div>
            <input type="email" name="email" placeholder="Enter your Institute Email" className="contact-inputs" required />   
            <button type="submit" className="glassy-button"><Link className="submit-btn" to="/login/otp">Submit</Link></button>
        </form>
        <div className="contact-right">
            <img className="image-work" src={work} alt="Work in progress" />
        </div>
    </div>
  );
};

export default Signup;
