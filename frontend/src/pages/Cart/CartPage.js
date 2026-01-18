import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import "./CartPage.css";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1, when: "beforeChildren" }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120 }
  }
};

const emptyCartVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1,
    opacity: 1,
    transition: { type: "spring", damping: 10 }
  }
};

const CartPage = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleRemove = (productId, productName) => {
    removeFromCart(productId);
    toast.success(`${productName} removed from cart`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <motion.div 
      className="cart-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 variants={itemVariants}>Your Cart</motion.h1>
      
      {cart.length === 0 ? (
        <motion.div 
          className="empty-cart-message"
          variants={emptyCartVariants}
        >
          <motion.p variants={itemVariants}>Your cart is empty</motion.p>
          <motion.div variants={itemVariants}>
            <Link to="/homepage " className="continue-shopping-link">
              Continue shopping
            </Link>
          </motion.div>
          <motion.div 
            className="empty-cart-icon"
            variants={{
              hidden: { scale: 0 },
              visible: { 
                scale: 1,
                transition: { delay: 0.3, type: "spring" }
              }
            }}
          >
            🛒
          </motion.div>
        </motion.div>
      ) : (
        <motion.div variants={containerVariants}>
          <motion.div className="cart-items" variants={containerVariants}>
            {cart.map((item) => (
              <motion.div 
                key={item._id} 
                className="cart-item"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                layout
              >
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price} × {item.quantity}</p>
                  <p>Total: ₹{(item.price * item.quantity).toFixed(2)}</p>
                  <motion.button 
                    onClick={() => handleRemove(item._id, item.name)}
                    className="remove-btn"
                    whileTap={{ scale: 0.95 }}
                  >
                    Remove
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="cart-summary"
            variants={itemVariants}
          >
            <h2>Total: ₹{totalPrice.toFixed(2)}</h2>

         <Link to="/checkout">
                     <button className="checkout-btn">Proceed to Payment</button>
                   </Link>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CartPage;