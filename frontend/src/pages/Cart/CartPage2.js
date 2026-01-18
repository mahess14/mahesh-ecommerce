import React from "react";
import { Link } from "react-router-dom";
import "./CartPage.css";



const Cart = ({ cart, removeFromCart }) => {
  // Calculate total
  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="cart-page">
      <h2>Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
              </div>
               <button onClick={() => removeFromCart(item._id)}>
                ❌
              </button>
            </div>
          ))}

          <h3>Total: ₹{total}</h3>

          <Link to="/checkout">
            <button className="checkout-btn">Proceed to Payment</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
