import React from "react";
import "./About.css";
import templeImage from "./photo/7image.jpg";
import templeImage1 from "./photo/5image.jpg";
import templeImage2 from "./photo/8image.jpg";
const About = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <div className="about-image-container">
          <img src={templeImage} alt="Chintpurni Temple" className="about-image" />
        </div>
        <div className="about-content">
          <h1>About Chintpurni Temple</h1>
          <p>
            The Chintpurni Temple, located in the Una district of Himachal Pradesh, is one of the Shakti Peethas, where the forehead of Goddess Sati is believed to have fallen. Dedicated to Goddess Chintpurni (Chhinnamasta Devi), this temple has been a center of faith for centuries. 
          </p>
          <p>
            The temple is particularly famous for its Navratri celebrations, where thousands of devotees gather to seek blessings. The beautiful surroundings of the Shivalik Hills add to the spiritual ambiance of the temple.
          </p>
        </div>
      </section>

      <section className="about-section reverse">
        <div className="about-content">
          <h2>Temple Rituals & Offerings</h2>
          <p>
            Daily worship at the Chintpurni Temple follows **traditional Vedic customs**. Devotees offer **flowers, prasad, and coconut** to the deity. Some of the key rituals include:
          </p>
          <ul>
            <li> Morning Aarti - Starts at 5 AM</li>
            <li> Evening Aarti - At 7 PM, followed by bhajans</li>
            <li> Sankat Mochan Path - Special prayer for removing obstacles</li>
            <li> Navratri Festival Celebrations - Grand worship and festivities</li>
          </ul>
        </div>
        <div className="about-image-container">
          <img src={templeImage1} alt="Temple Rituals" className="about-image" />
        </div>
      </section>

      
      <section className="about-section">
        <div className="about-image-container">
          <img src={templeImage2} alt="Divine Himachal Trust" className="about-image" />
        </div>
        <div className="about-content">
          <h2>About Divine Himachal Trust</h2>
          <p>
            The Divine Himachal Trust is committed to preserving religious and cultural heritage.  
            We work to maintain the temple, organize charity programs, and assist pilgrims.
          </p>
          <p>
            Our trust conducts free food distribution (Langar), medical camps, and educational initiatives for underprivileged children.
            We also ensure that the sanctity and cleanliness of the temple premises are maintained at all times.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
