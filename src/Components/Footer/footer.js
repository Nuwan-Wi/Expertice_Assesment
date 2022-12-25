import React from "react";
import {MDBContainer} from "mdbreact";
import "./footer.css";
import { blue, grey, deepPurple } from '@mui/material/colors';
import {
  FaFacebookSquare,
  FaLinkedin,
  FaWhatsappSquare,
  FaInstagramSquare,
  FaYoutubeSquare, 
} from 'react-icons/fa';


function Footer(){
  return (
    <div className="footer-page">
    <div className="Subscribe-part">
      <label className="label">Sign up for our newsletter</label>
      <input className="input-field" placeholder="Email Address"/>
      <a className="butn">SUBSCRIBE</a>
    </div>
    <div className="line1"></div>
    <div className="fotter-body">
      <div className="sections">
        <h4>Special Services</h4>
        <ul>
          <li className="lst">
            <a className="nav-link" href="#!">Ayurvedic Spa</a>
          </li>
          <li className="lst">
            <a className="nav-link" href="#!">Wildlife Tour</a>
          </li>
          <li className="lst">
            <a className="nav-link" href="#!">Waterfalls Journey</a>
          </li>
          <li className="lst">
            <a className="nav-link" href="#!">Hills Journey</a>
          </li>
        </ul>
      </div>
      <div className="sections">
        <h4>Updates</h4>
        <ul>
          <li className="lst">
            <a className="nav-link" href="#!">Seasonal Special</a>
          </li>
          <li className="lst">
            <a className="nav-link" href="#!">Packages</a>
          </li>
          <li className="lst">
            <a className="nav-link" href="#!">Newly opend Resavations</a>
          </li>
          <li className="lst">
            <a className="nav-link" href="#!">New Services</a>
          </li>
        </ul>
      </div>
      <div className="sections">
        <h4>Company</h4>
        <ul>
          <li className="lst">
            <a className="nav-link" href="#!">About</a>
          </li>
          <li className="lst">
            <a className="nav-link" href="#!">Carrers and Culture</a>
          </li>
          <li className="lst">
            <a className="nav-link" href="#!">Privacy Policy</a>
          </li>
          <li className="lst">
            <a className="nav-link" href="#!">Be a Partner</a>
          </li>
        </ul>
      </div>
      <div className="social-media">
        <h4>Social Media</h4>
        <FaFacebookSquare className="social-media-icon" href="#"/>
        <FaLinkedin className="social-media-icon" href="#"/>
        <FaWhatsappSquare className="social-media-icon" href="#"/>
        <FaInstagramSquare className="social-media-icon" href="#"/>
        <FaYoutubeSquare className="social-media-icon" href="#"/>
      </div>
    </div>
    <div className="line2"></div>
    <div className="copywrite">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Facebook,Inc
        </MDBContainer>
    </div>
    </div>
    
  );
}

export default Footer;