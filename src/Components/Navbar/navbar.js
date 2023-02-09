import React, { useState } from "react";
import "./Navbar.css";
import {Button as Btn} from "@mui/material";
import { blue, grey, deepPurple } from '@mui/material/colors';
import logo from '../../images/logo.png';


function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;

  return (
    <li className={path === href ? "nav__active" : "nav__menu"}>
      <a href={href} {...props} className="nav__link">
        {children}
      </a>
    </li>
  )
}

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu navdown__active");
    } else setActive("nav__menu");

    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };


  return (
    
    <nav className="nav" style={{backgroundColor: 'rgb(216, 245, 255)'}}>
      <div className="sitedetails">
        <img className="logo" src={logo}/>
        <h4>Travel World</h4>
      </div> 
      
      <ul className={active} >
      <CustomLink href="/" >Home</CustomLink>
      <CustomLink href="/destination" >Destinations</CustomLink>
      <CustomLink href="/reservations" >Reservation</CustomLink>
      <CustomLink href="#" >Join With Us</CustomLink>
      <CustomLink href="/about">About</CustomLink>

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