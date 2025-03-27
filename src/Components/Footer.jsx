import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Chintpurni Temple</h2>
          <p>
            Experience the divine presence of Goddess Chintpurni at this sacred Shakti Peeth. A place of peace, devotion, and spiritual enlightenment.
          </p>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt /> Chintpurni, Himachal Pradesh, India</p>
          <p><FaPhone /> +91 6230606530</p>
          <p><FaEnvelope /> info@chintpurnitemple.org</p>
        </div>

        <div className="footer-section social">
          <h3>Follow Me </h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Divine Himachal Trust | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
