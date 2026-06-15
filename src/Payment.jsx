import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBooking } from "./Components/BookingContext";
import "./BookingDetails.css";
import "./Payment.css";

const PLATFORM_FEE = 600; // fixed platform fee
const ADVANCE_PERCENT = 0.3; // 30% advance payment

function Payment() {
  const navigate = useNavigate();
  const { vendor, bookingDetails, selectedPackage, totalPrice } = useBooking();

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [billingAddress, setBillingAddress] = useState("");

  // Agar pehle steps complete nahi hue, wapas bhej do
  if (!vendor || !bookingDetails || !selectedPackage) {
    return (
      <div className="booking-page">
        <div className="booking-card">
          <p>Pehle booking aur package selection complete karo.</p>
          <button className="btn-next" onClick={() => navigate("/details")}>
            Back to Booking Details
          </button>
        </div>
      </div>
    );
  }

  const advanceAmount = Math.round(totalPrice * ADVANCE_PERCENT);
  const totalDueToday = advanceAmount + PLATFORM_FEE;

  const handlePay = (e) => {
    e.preventDefault();

    if (!cardName || !cardNumber || !expiry || !cvc || !billingAddress) {
      alert("Card details aur billing address bharo.");
      return;
    }

    // TODO: yahan se actual payment gateway (Safepay / Stripe) call hoga
    // aur booking data backend ko POST hoga
    alert("Booking confirmed! (Payment integration baad mein add hogi)");
    navigate("/");
  };

  return (
    <div className="booking-page">
      <div className="booking-card">

        {/* Step indicator */}
        <div className="booking-steps">
          <div className="step">
            <span className="step__circle">1</span>
            <span className="step__label">Booking details</span>
          </div>
          <div className="step__line"></div>
          <div className="step">
            <span className="step__circle">2</span>
            <span className="step__label">Package</span>
          </div>
          <div className="step__line"></div>
          <div className="step step--active">
            <span className="step__circle">3</span>
            <span className="step__label">Payment</span>
          </div>
        </div>

        {/* Header */}
        <div className="checkout-header">
          <h2 className="checkout-title">Secure checkout</h2>
          <span className="checkout-badge">{ADVANCE_PERCENT * 100}% advance</span>
        </div>
        <div className="checkout-divider"></div>

        {/* Package summary */}
        <div className="summary-box">
          <div>
            <p className="summary-box__name">
              {selectedPackage.packageName} Package - {vendor.name}
            </p>
            <p className="summary-box__date">📅 {bookingDetails.eventDate}</p>
          </div>
          <div className="summary-box__right">
            <p className="summary-box__total">Total: PKR {totalPrice.toLocaleString()}</p>
            <p className="summary-box__advance">Pay now: PKR {advanceAmount.toLocaleString()}</p>
          </div>
        </div>

        <form onSubmit={handlePay}>
          {/* Cardholder name */}
          <div className="form-group form-group--full">
            <label>Cardholder name</label>
            <input
              type="text"
              placeholder="e.g. Ayesha Khan"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />
          </div>

          {/* Card information */}
          <div className="form-group form-group--full">
            <label>Card information</label>
            <div className="card-info-box">
              <span className="card-badge">VISA</span>
              <input
                type="text"
                className="card-number-input"
                placeholder="1234 1234 1234 1234"
                maxLength="19"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
              <input
                type="text"
                className="card-expiry-input"
                placeholder="MM/YY"
                maxLength="5"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
              <input
                type="text"
                className="card-cvc-input"
                placeholder="CVC"
                maxLength="4"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
              />
            </div>
          </div>

          {/* Billing address */}
          <div className="form-group form-group--full">
            <label>Billing address</label>
            <input
              type="text"
              placeholder="e.g. Karachi, Pakistan"
              value={billingAddress}
              onChange={(e) => setBillingAddress(e.target.value)}
            />
          </div>

          {/* Breakdown */}
          <div className="breakdown-box">
            <div className="breakdown-row">
              <span>Advance ({ADVANCE_PERCENT * 100}%)</span>
              <span>PKR {advanceAmount.toLocaleString()}</span>
            </div>
            <div className="breakdown-row">
              <span>Platform fee</span>
              <span>PKR {PLATFORM_FEE.toLocaleString()}</span>
            </div>
            <div className="breakdown-divider"></div>
            <div className="breakdown-row breakdown-row--total">
              <span>Total due today</span>
              <span>PKR {totalDueToday.toLocaleString()}</span>
            </div>
          </div>

          {/* Pay button */}
          <button type="submit" className="btn-pay">
            Confirm & Pay PKR {totalDueToday.toLocaleString()}
          </button>

          <p className="secure-note"> Secured checkout · 256-bit SSL</p>

          <div className="booking-actions">
            <button type="button" className="btn-back" onClick={() => navigate(-1)}>
              Back
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default Payment;

