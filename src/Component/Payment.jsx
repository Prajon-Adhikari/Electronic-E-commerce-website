import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PaymentPaySection from "./PaymentPaySection";

export default function Payment({ onClose, totalAmount }) {
  const [showPayElement, setShowPayElement] = useState(false);

  return (
    <>
      {!showPayElement ? (
        <div className="payment-page">
          <div className="payment-form">
            <div className="payment-nav">
              <h4>ELECTRONICS</h4>
              <a href="">Personal</a>
              <a href=""> Pay</a>
              <FontAwesomeIcon
                icon={faClose}
                className="payment-close-icon"
                onClick={onClose}
              />
            </div>
            <div className="payment-order-details">
              <div className="order-summary">
                <div>Order Summary</div>
                <div>{totalAmount}</div>
              </div>
              <div className="gst">Add GST at next step</div>
            </div>
            <div className="payment-personal-info">
              <h4>Enter Your Details</h4>
              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                className="input"
                required
              />
              <input
                type="text"
                placeholder="Address"
                name="address"
                className="input"
                required
              />
              <input
                type="text"
                placeholder="Mobile"
                name="mobile"
                className="input"
                required
              />
            </div>
            <div className="payment-continue-btn">
              <button onClick={() => setShowPayElement(true)}>
                Continue &nbsp;{" "}
                <FontAwesomeIcon icon={faArrowRight} className="right-arrow" />
              </button>
            </div>
            <div className="policy-info">
              By proceeding, I accept that I have read and understood the
              Electronics's <a href="">Privacy Poicy</a> and <a href="">T&C</a>
            </div>
            <div className="payment-last-part">
              <div>T&C | Policy</div>
              <div>&copy; Copyright </div>
              <div>Powered By Infinix GT Pro</div>
            </div>
          </div>
        </div>
      ) : (
        <PaymentPaySection onClose={onClose} totalAmount={totalAmount}/>
      )}
    </>
  );
}
