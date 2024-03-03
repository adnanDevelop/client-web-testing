import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import logo from "../assets/images/gaming-logo.png";

const Footer = () => {
  return (
    
    <footer className=" text-light mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 my-auto">
          <a className="navbar-brand" href="#">
          <img
            src={logo} // Using the imported logo
            height="30"
            alt="Play Logo"
          />
        </a>
          </div>
          <div className="col-md-4 my-auto  d-flex gap-4">
            <a href="#marketplace" className="text-light d-inline mx-2">Marketplace</a>
            <a href="#stats" className="text-light d-inline mx-2">Stats</a>
            <a href="#collections" className="text-light d-inline mx-2">Collections</a>
            <a href="#explore" className="text-light d-inline mx-2">Explore</a>
            <a href="#community" className="text-light d-inline mx-2">Community</a>
            </div>
            {/* Social icons */}
            <div className=' col-md-4 d-flex justify-content-end footer-social-icons'>
            <a href="https://twitter.com" className="text-light social-links mx-2"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://facebook.com" className="text-light social-links mx-2"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://instagram.com" className="text-light social-links mx-2"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://pinterest.com" className="text-light social-links mx-2"><FontAwesomeIcon icon={faPinterest} /></a>
          </div>
        
        
        </div>
        <hr className='my-5'/>
        <div className=" text-center mt-3 ">
          <small className='copy-right-line'>© Copyright 2022, All Rights Reserved by Play Games</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
