import React, { useState } from "react";
import "./Navbar.css";
import {Button as Btn} from "@mui/material";
import { blue, grey, deepPurple } from '@mui/material/colors';

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };


  return (
    
    <nav className="nav" style={{backgroundColor: deepPurple[50]}}>
      <ul className={active}>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Destinations
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Resorvations
          </a>
        </li>
        <li className="nav__item">
          <a href="" className="nav__link">
            Join With us
          </a>
        </li>
        <li className="nav__item">
          <a href="/about" className="nav__link">
            About
          </a>
        </li>

        <li className="nav__item">
        <a className="btn" href="/sign-in">Sign In</a>
        </li>
      </ul> 
      
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>

  {/*<Button>SignIn</Button>*/}


    </nav>
  );
};

export default Navbar;