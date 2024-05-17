import React from 'react'
import './CardRightSide.css'
import Profile from '../Assets/Profile.jpg'
// import Gmail from '../Assets/Gmail.png'

const CardRightSide = () => {
  return (
    <div className="right-side">
          <div className="portfolio">
            <img src={Profile} alt="Professor" />
            <h1>Professor</h1>
            <ul>
              <li>Department</li>
              <li>Domain</li>
            </ul>
          </div>
          <div className="middle-part">
            <h2>Research Statement</h2>
            <p>I spend most of my time researching how to make learning to code fun and make hard concepts easy to understand. I apply everything I discover into my bootcamp courses.</p>
          </div>
          <div className="social-connections">
            <a className="connection-1" href="">
              {/* <img src={Gmail} alt="" /> */}
              <h2>Gmail</h2>
            </a>
            <a className="connection-2" href="">
              <h2>Google Scholar</h2>
            </a>
            <a className="connection-3" href="">
              <h2>LinkedIn</h2>
            </a>
            <a className="connection-4" href="">
              <h2>Personal web page</h2>
            </a>
          </div>
        </div>
  )
}

export default CardRightSide