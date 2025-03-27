import React, { useState } from "react";
import qrImage from "./photo/QR.jpg"; 
import "./Donate.css";

const Donate = () => {
  const [selectedMethod, setSelectedMethod] = useState("gpay");

  return (
    <div className="donate-container">
      <h1>Donate to Chintpurni Temple</h1>
      <p>Your donation helps in temple maintenance and charity work.</p>

      <div className="donation-options">
        <button 
          className={selectedMethod === "gpay" ? "active" : ""}
          onClick={() => setSelectedMethod("gpay")} 
        >
          Donate via GPay
        </button>
        <button 
          className={selectedMethod === "netbanking" ? "active" : ""}
          onClick={() => setSelectedMethod("netbanking")}
        >
          Donate via Net Banking
        </button>
      </div>

      {selectedMethod === "gpay" ? (
        <div className="donation-details">
          <h3>Scan & Pay using GPay</h3>
          <img src={qrImage} alt="QR Code" className="qr-image" />
          <p>UPI ID: <b>chintpurnitemple@upi</b></p>
        </div>
      ) : (
        <div className="donation-details">
          <h3>Net Banking Details</h3>
          <p><b>Account No:</b> 1234567890</p>
          <p><b>IFSC Code:</b> ABCD0123456</p>
          <p><b>Bank:</b> HDFC Bank</p>
        </div>
      )}
    </div>
  );
};

export default Donate;
