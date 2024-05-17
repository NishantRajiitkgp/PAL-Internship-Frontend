import React from 'react';
import './Logins.css'
import { Link } from 'react-router-dom';
import work from '../Components/Assets/work.png'

const Login = () => {
  return (
    <div className="contact-container">
      <form action="" className="contact-left">
        <div className="contact-left-title">
          <h2>Login with us</h2>
          <p>Don't have an account? <Link to="/" >Signup</Link></p>
        </div>
        <input type="email" name="email" placeholder="Enter your Institute Email" className="contact-inputs" required />
        <input type="password" name="password" placeholder="Enter your Password" className="contact-inputs" required />
        <p>Forgot Password? <Link to="/login/forgotpassword" >Click here</Link></p>
        <button type="submit" className="glassy-button-login">Login</button>
      </form>
      <div className="contact-right">
        <img className="image-work" src={work} alt="Work in progress" />
      </div>
    </div>
  );
};

export default Login;
