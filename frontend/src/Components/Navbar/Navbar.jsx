import React, { useState } from "react";
import "./Navbar.css";

import logo from "../../Assets/Images/logo.png";

import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {
  const [navBar, setNavBar] = useState("menu");

  const showNavBar = () => {
    setNavBar("menu showNavBar");
  };
  const closeNavBar = () => {
    setNavBar("menu");
  };

  return (
    <div className="navBar">
      <div className="logoDiv">
        <img src={logo} alt="logo" className="logo" />
        <span>Indunil Motors</span>
      </div>
      <div className={navBar}>
        <ul>
          <li className="navlist">Products</li>
          <li className="navlist">About Us</li>
          <li className="navlist">Contact Us</li>
        </ul>

        <AiFillCloseCircle className="icon closeIcon" onClick={closeNavBar} />
      </div>
      <button className="loginBtn btn">Log in</button>
      <PiDotsNineBold className="icon menuIcon" onClick={showNavBar} />
    </div>
  );
};

export default Navbar;
