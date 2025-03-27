import React from "react";
import "./History.css";
import historyImage from "./photo/4image.jpg"; 

const History = () => {
  return (
    <div className="history-container">
      <div className="history-content">
        <h1>The Sacred History of Chintpurni Temple</h1>
        <p>
          Chintpurni Temple, located in the picturesque hills of Himachal Pradesh, is one of the revered Shakti Peethas. 
          It is believed that Goddess Chintpurni, also known as Chhinnamasta Devi, fulfills the wishes of her devotees and removes all worries.
        </p>
        <p>
          According to legends, this temple was established by Pandit Mai Das, a devotee of the Goddess, in ancient times. 
          Over the centuries, it has become a center of faith, attracting pilgrims seeking divine blessings.
        </p>
        <p>
          The temple is especially vibrant during Navratri when thousands of devotees gather to celebrate and offer prayers.
          The spiritual aura, combined with the serene beauty of the hills, makes this temple a must-visit destination.
        </p>
      </div>
      <div className="history-image">
        <img src={historyImage} alt="Chintpurni Temple History" />
      </div>
    </div>
  );
};

export default History;
