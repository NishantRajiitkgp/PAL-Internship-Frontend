import React from 'react'
import "./UpdateProfilePhoto.css"
import Navbar from '../Components/Navbar/Navbar'
import Profile from '../Components/Assets/Profile.jpg'
import { AiOutlineCamera } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

const UpateProfiePhoto = () => {
  return (
    <>
    <Navbar />
    <div className="profile-outer-border">
        <div className="profile-inner-border">
            <img src={Profile} alt="Profile Photo" />
            <div className="profile-update photo">
                <a>
                    <h2><AiOutlineCamera class="imagee" /> Update Photo</h2>
                </a>
            </div>
            <div className="profile-update remove">
                <a>
                    <h2><AiOutlineDelete class="imagee" />Remove</h2>
                </a>
            </div>
        </div>
    </div>
    </>
  )
}

export default UpateProfiePhoto