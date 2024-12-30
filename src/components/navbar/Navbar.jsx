import React, { useState } from 'react';
import './Navbar.css'; // Ensure this file includes the CSS for your classes like `show_list`, `active`, etc.

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const handleNavTriggerClick = () => {
        setIsActive(!isActive);
        console.log("Clicked menu");
    };

    return (
        <nav className="nav">
            <div className="container">
                <div
                    id="mainListDiv"
                    className={`main_list ${isActive ? "show_list" : ""}`}
                >
                    <ul className="navlinks">
                        <li><a href="#">About me </a></li>
                        <li><a href="#">Experience</a></li>
                        <li><a href="#">Technology</a></li>
                        <li><a href="#">Contact me </a></li>
                    </ul>
                </div>
                <span
                    className={`navTrigger ${isActive ? "active" : ""}`}
                    onClick={handleNavTriggerClick}
                >
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
            </div>
        </nav>
    );
};

export default Navbar;
