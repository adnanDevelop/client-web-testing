import React from "react";
import logo from "../assets/images/gaming-logo.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark homeing-page-navbar ">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src={logo} // Using the imported logo
            height="30"
            alt="Play Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav homepage-menus m-auto gap-4">
            <li className="nav-item  ">
              <a
                className="nav-link menu-link active"
                aria-current="page"
                href="#marketplace"
              >
                Marketplace
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link menu-link" href="#stats">
                Stats
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link menu-link" href="#collections">
                Collections
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link menu-link" href="#explore">
                Explore
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link menu-link" href="#community">
                Community
              </a>
            </li>
          </ul>
        </div>
        <div className="Register-button">
          <button className="btn" type="button">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
