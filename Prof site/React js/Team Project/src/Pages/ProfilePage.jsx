import React from 'react'
import './ProfilePage.css'
import Navbar from '../Components/Navbar/Navbar'
import Profile from '../Components/Assets/Profile.jpg'
import { Link } from 'react-router-dom'
import { BiLogoGmail } from "react-icons/bi";
import { SiGooglescholar } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";


const ProfilePage = () => {
    return (
        <>
            <Navbar />
            <div className="full-profile">
                <div className="profile-details-top">
                    <div className="details">
                        <Link to="/home/profile/updateprofilephoto"><img className='user-image' src={Profile} alt="" /></Link>
                    </div>
                    <ul>
                        <li><h1>Name</h1></li>
                        <li><h2>Department</h2></li>
                    </ul>
                </div>
                <div className="profile-details-mid-bottom">
                    <div className="profile-details-middle">
                        <h2>Research Statement</h2>
                        <textarea class="note-profile" name="note" placeholder="Type Something..."></textarea>
                    </div>
                    <div className="profile-detials-bottom">
                        <h2>Important Urls</h2>
                        <ul>
                            <li><BiLogoGmail class="url-icons" /><textarea class="imp-urls" name="note" placeholder="Gmail"></textarea></li>
                            <li><SiGooglescholar class="url-icons" /><textarea class="imp-urls" name="note" placeholder="Google Scholar"></textarea></li>
                            <li><AiFillLinkedin class="url-icons" /><textarea class="imp-urls" name="note" placeholder="LinkedIn"></textarea></li>
                            <li><FaGlobe class="url-icons" /><textarea class="imp-urls" name="note" placeholder="Personal Web Page"></textarea></li>
                        </ul>
                    </div>
                </div>
                <div className="submit-container-profile">
                    <button type="submit" className="submit-new-profile">Save</button>
                </div>
            </div>
        </>
    )
}

export default ProfilePage