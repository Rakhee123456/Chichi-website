import React from "react";
import "./Footer.css";
import Logo from "../asset/logo-chichi.jpg";
import AppleIcon from "../asset/applesvg.svg";
import PlayStoreIcon from "../asset/playstore.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo-section">
          <img src={Logo} alt="ChiChii Logo" className="footer-logo-img" />
          <h2 className="footer-logo-title">ChiChii</h2>
          {/* Social Media */}
          <div className="footer-social">
            <FontAwesomeIcon icon={faFacebook} className="social-icon icons" />
            <FontAwesomeIcon icon={faInstagram} className="social-icon icons" />
            <FontAwesomeIcon icon={faWhatsapp} className="social-icon icons" />
            <FontAwesomeIcon icon={faYoutube} className="social-icon icons" />
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-links-container">
          <div className="footer-links">
            <h3>Categories</h3>
            <ul>
              <li>Fast Food</li>
              <li>Drinks</li>
              <li>Packed Food</li>
              <li>Beer</li>
              <li>Babaria's</li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Support</h3>
            <ul>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Returns</li>
              <li>Shipping & Delivery</li>
              <li>Privacy Policy for App</li>
            </ul>
          </div>
        </div>
      </div>
      {/* App Store Links */}
      <div className="footer-app-links">
        {/* Copyright */}
        <div className="footer-copyright">
          <p>&copy; 2024 ChiChii Online — We Serve</p>
        </div>
        <div className="footer-app-links-buttons">
          <button onClick={() => alert("App Store")}>
            {/* <img src={AppleIcon} alt="App Store" /> */}
            Download on the App Store
          </button>
          <button onClick={() => alert("Google Play")}>
            {/* <img src={PlayStoreIcon} alt="Google Play" /> */}
            Get it on Google Play
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
