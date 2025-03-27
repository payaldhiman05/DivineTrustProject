import React from "react";
import "./Services.css";
import serviceImage from "./photo/4image.jpg"; 

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>Experience the spiritual essence of Chintpurni Temple with our dedicated services.</p>
      </div>

      <div className="services-content">
        <div className="services-text">
          <h2>Spiritual & Religious Services</h2>
          <ul>
            <li> Daily Aarti & Bhajans- Join us in divine prayers and soul-soothing bhajans.</li>
            <li>Personalized Poojas- Conduct special poojas for peace, prosperity & well-being.</li>
            <li>Religious Discourses- Gain spiritual knowledge from experienced priests.</li>
          </ul>

          <h2>Charity & Community Services</h2>
          <ul>
            <li>Free Langar (Community Kitchen)- Nourishing meals for all visitors.</li>
            <li>Educational & Awareness Programs- Empowering the community with knowledge.</li>
            <li>Environmental Initiatives- Plantation drives & cleanliness campaigns.</li>
          </ul>
        </div>

        <div className="services-image">
          <img src={serviceImage} alt="Temple Services" />
        </div>
      </div>

      <div className="services-footer">
        <p>Join hands with Divine Himachal Trust and be part of something meaningful.</p>
      </div>
    </div>
  );
};

export default Services;
