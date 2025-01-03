import React, { useState } from "react";
import Logo from "../asset/logo-chichi.jpg";
import {
  faCartShopping,
  faHouseChimney,
  faSearch,
  faStar,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  console.log(isMobileMenuOpen)

  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="nav-left">
        {/* Hamburger Menu */}
        <button className="hamburger-menu" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </button>
        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : "close"}`}>
          <a href="#home" className="home-button">
            <FontAwesomeIcon icon={faHouseChimney} size="1x" /> 
          </a>
          <a href="#shop">Shop</a>
          <a href="#recipes">Recipes</a>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
          <a href="#contacts">Contacts</a>
        </div>
      </div>

      {/* Center Section */}
      <div className="nav-center">
        <div className="logo">
          <img src={Logo} alt="ChiChii Logo" className="logo-img" />
        </div>
      </div>

      {/* Right Section */}
      <div className="nav-right">
        <FontAwesomeIcon className="icon" icon={faSearch} size="1x" />
        <FontAwesomeIcon className="icon" icon={faUser} size="1x" />
        <FontAwesomeIcon className="icon" icon={faStar} size="1x" />
        <span className="badge">0</span>
        <FontAwesomeIcon className="icon" icon={faCartShopping} size="1x" />
        <span className="badge">0</span>
      </div>
    </nav>
  );
};

export default Navbar;
