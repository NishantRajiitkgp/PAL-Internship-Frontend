import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Logo from '../Assets/Logo.jpg'
import Profile from '../Assets/Profile.jpg'
import { HiOutlineLogout } from "react-icons/hi";

const Navbar = () => {

    const [menu, setMenu] = useState("Home");

    return (
        <>
            <header>
                <img className="logo" src={Logo} alt="logo" />
                <nav>
                    <ul className="nav__links">
                        <li><Link to="/home" onClick={() => { setMenu("Home") }}>Home{menu === "Home" ? <hr /> : <></>}</Link></li>
                        <li><Link to="/about" onClick={() => { setMenu("About") }}>About{menu === "About" ? <hr /> : <></>}</Link></li>
                    </ul>
                </nav>
                <div className="profile">
                    <Link to="/home/profile"><img src={Profile} alt="Profile" /></Link>
                    <p>User's Name</p>
                </div>
                <Link to="/"><HiOutlineLogout className="log-out" /></Link>
            </header>
        </>
    )
}

export default Navbar