import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import Image from '../../images/maheshnav2.png';
import 'bootstrap/dist/css/bootstrap.min.css';
 import './Navbar.css';

const fadeIn = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Navbar = ({ cartCount = 0, activeCategory, setActiveCategory }) => {
  const categories = ["Laptops","Mobiles","Headphones","Men", "Women","Kids"];
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
    alert(`You searched for: ${searchQuery}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="navbar-container">
      <motion.header
        className="header"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="top-nav">
          <div className="logo">
            <Link to="/" className="navbar-brand" onClick={() => setActiveCategory("All")}>
              <img src={Image} alt="Maheesh Logo" className="logo-image" />
            </Link>
          </div>
          
          <div className="search-containers">
            <input
              type="text"
              placeholder="Search for Products, Brands, and More"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="search-button" onClick={handleSearch}>
              <FaSearch className="search-icon" />
            </button>
          </div>

          <div className="nav-links">
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link">Signup</Link>
            <Link to="/cart" className="cart-link" aria-label="Go to Cart">
              <svg className="cart-icon" width="20" height="20" viewBox="0 0 16 16">
                <path
                  d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                  fill="#fff"
                />
              </svg>
              Cart {cartCount > 0 && <span className="cart-count">({cartCount})</span>}
            </Link>
          </div>
        </div>
        
        <nav className="categories-nav">
          <ul className="categories-list">
            {categories.map((category) => (
              <li key={category}>
                <Link
                  to={`/${category.toLowerCase()}`}
                  className={`category-link ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="category-link">Contact</Link>
            </li>
          </ul>
        </nav>
      </motion.header>
    </div>
  );
};

export default Navbar;