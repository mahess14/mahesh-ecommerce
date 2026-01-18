import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Payment.css";

const Payment = ({ cart, clearCart }) => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("cod");

  // Card details
  const [card, setCard] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  // UPI ID
  const [upiId, setUpiId] = useState("");

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  // ✅ SINGLE handlePayment (CORRECT)
  const handlePayment = async () => {
    // Validation
    if (paymentMethod === "upi" && !upiId) {
      alert("Enter UPI ID");
      return;
    }

    if (paymentMethod === "card") {
      const { number, name, expiry, cvv } = card;
      if (!number || !name || !expiry || !cvv) {
        alert("Enter complete card details");
        return;
      }
    }

    try {
      // 🔥 SEND ORDER TO BACKEND
      await axios.post("http://localhost:5000/api/orders", {
        items: cart.map((item) => ({
          productId: item._id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
        })),
        totalAmount,
        paymentMethod,
      });

      alert(`Payment successful via ${paymentMethod.toUpperCase()} ✅`);

      // 🔥 CLEAR CART
      clearCart();

      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Order failed ❌");
    }
  };

  return (
    <div className="checkout-page">
      <h2>Payment</h2>

      <p className="total">Total Amount: ₹{totalAmount}</p>

      {/* PAYMENT METHOD */}
      <div className="payment-methods">
        <label>
          <input
            type="radio"
            value="cod"
            checked={paymentMethod === "cod"}
            onChange={() => setPaymentMethod("cod")}
          />
          Cash on Delivery
        </label>

        <label>
          <input
            type="radio"
            value="upi"
            checked={paymentMethod === "upi"}
            onChange={() => setPaymentMethod("upi")}
          />
          UPI
        </label>

        <label>
          <input
            type="radio"
            value="card"
            checked={paymentMethod === "card"}
            onChange={() => setPaymentMethod("card")}
          />
          Debit / Credit Card
        </label>
      </div>

      {/* UPI INPUT */}
      {paymentMethod === "upi" && (
        <input
          type="text"
          placeholder="Enter UPI ID (example@upi)"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
          className="input"
        />
      )}

      {/* CARD INPUT */}
      {paymentMethod === "card" && (
        <div className="card-form">
          <input
            type="text"
            placeholder="Card Number"
            value={card.number}
            onChange={(e) =>
              setCard({ ...card, number: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Card Holder Name"
            value={card.name}
            onChange={(e) =>
              setCard({ ...card, name: e.target.value })
            }
          />
          <div className="row">
            <input
              type="text"
              placeholder="MM/YY"
              value={card.expiry}
              onChange={(e) =>
                setCard({ ...card, expiry: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="CVV"
              value={card.cvv}
              onChange={(e) =>
                setCard({ ...card, cvv: e.target.value })
              }
            />
          </div>
        </div>
      )}

      <button onClick={handlePayment} className="pay-btn">
        Pay ₹{totalAmount}
      </button>
    </div>
  );
};

export default Payment;
