import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Divine Himachal Trust</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li className="dropdown">
          <Link to="#">Chintpurni Temple ▼</Link>
          <ul className="dropdown-menu">
            <li><Link to="/temple-timings">Temple Timings</Link></li>
            <li><Link to="/history">History</Link></li>
          </ul>
        </li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <button className="donate-btn"><Link to="/donatebtn">Donate</Link></button>
      </ul>
    </nav>
  );
};

export default Navbar;
