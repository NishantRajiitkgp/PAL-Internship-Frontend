import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'
import Profile from '../Assets/Profile.jpg'
import card from '../Assets/card.jpg'

const Card = () => {
    return (
        <> <Link to="/details">
            <div className="cards">
                <div className="card">
                    <img src={card} alt="card" />
                    <p>These are just the sample text to be shown</p>
                    <div className="inside-card">
                        <div className="about-card">
                            <img src={Profile} alt="Profile" />
                            <p>Professor</p>
                        </div>
                        <ul>
                            <li>Department</li>
                            <li>Computer Science Engineering</li>
                        </ul>
                    </div>
                </div>
            </div>
            </Link>
        </>
    );
};

export default Card;
