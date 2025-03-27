import React from "react";
import "./Contact.css";
import contactImage from "./photo/6image.jpg"; 

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Chintpurni Temple</h1>
        <p>Have any questions or need guidance? Reach out to us.</p>
      </div>

      <div className="contact-info-section">
        <div className="contact-details">
          <h2>Temple Address</h2>
          <p>
            Chintpurni Temple, Una District, <br />
            Himachal Pradesh, India - 177110
          </p>

          <h2>Contact Information</h2>
          <p>
             Phone: +91 98765 43210 <br />
             Email: info@divinehimachaltrust.org
          </p>

          <h2>Timings</h2>
          <p>
            Monday - Sunday: 4:00 AM - 10:00 PM <br />
            Special Aarti: 5:00 AM & 7:00 PM
          </p>
        </div>

        <div className="contact-image-container">
          <img src={contactImage} alt="Temple Contact" className="contact-image" />
        </div>
      </div>

      <div className="contact-form-section">
        <h2> Send Us a Message</h2>
        <form className="contact-form">
          <div className="input-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="input-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>

      <div className="map-section">
        <h2>📍 Locate Us</h2>
        <iframe
          title="Chintpurni Temple Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28272.877346639836!2d76.10929058517334!3d31.3841182304357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904a617b3b2b43f%3A0x8f2e6e2f2d5db9e8!2sChintpurni%20Temple!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
