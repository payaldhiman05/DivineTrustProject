import React from "react";
import { FaSun, FaMoon, FaClock, FaPrayingHands } from "react-icons/fa";
import "./Templetiming.css";
import bgImage from "./photo/5image.jpg";

const TempleTimings = () => {
  return (
    <div className="temple-timings">
      
      <div className="timing-header" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="overlay">
          <h1>Temple Timings</h1>
          <p>Plan your visit and experience divine serenity</p>
        </div>
      </div>

    
      <div className="timing-container">
        <h2><strong>Daily Darshan Timings</strong> </h2>
        <div className="timing-box">
          <FaSun className="icon" />
          <p><strong>Morning:</strong> 5:00 AM - 12:00 PM</p>
        </div>
        <div className="timing-box">
          <FaMoon className="icon" />
          <p><strong>Evening:</strong> 4:00 PM - 9:00 PM</p>
        </div>
      </div>

   
      <div className="aarti-section">
        <h2><strong>Aarti Schedule</strong> </h2>
        <div className="aarti-box">
          <FaPrayingHands className="icon" />
          <p><strong>Morning Aarti:</strong> 5:30 AM</p>
        </div>
        <div className="aarti-box">
          <FaClock className="icon" />
          <p><strong>Evening Aarti:</strong> 8:30 PM</p>
        </div>
      </div>

      <div className="festival-timings">
        <h2><strong>Special Festival Timings</strong> </h2>
        <p>On auspicious days like <strong>Navratri</strong> and <strong>Diwali</strong>, the temple remains open till <strong>midnight</strong> for special pujas and bhajans.</p>
      </div>

    
      <div className="timing-footer">
        <p><strong>Plan your visit & receive divine blessings!</strong></p>
      </div>
    </div>
  );
};

export default TempleTimings;
