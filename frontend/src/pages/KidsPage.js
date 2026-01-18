import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import ProductCard from '../components/products/ProductCard';

// Animation variants
const slideIn = {
  hidden: { x: "-100%" },
  visible: { x: 0, transition: { type: "spring", stiffness: 50 } }
};

const KidsPage = ({ products, addToCart }) => {
  const kidsProducts = products.filter(p => p.category === "Kids");

  return (
    <div className="kids-page">
      {/* Carousel Section */}
      <motion.div
        className="carousel-container"
        variants={slideIn}
        initial="hidden"
        animate="visible"
      >
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block carousel-image"
              src="https://img.freepik.com/free-vector/flat-kids-social-media-cover-template_23-2149662558.jpg?t=st=1744131097~exp=1744134697~hmac=336453139072b2e3e233e00eab9fba741c223fd5a18a567174de7aa9ff66b204&w=826"
              alt="1st slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel-image"
              src="https://img.freepik.com/free-vector/flat-kids-sale-banner-template_23-2149662577.jpg?t=st=1744131132~exp=1744134732~hmac=d52e6a0b72ae6f4164bb80d452c374013f667cfc77d0c04fb25c472640b8717b&w=1060"
              alt="2nd slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel-image"
              src="https://img.freepik.com/premium-photo/young-girl-wearing-blue-dress-is-pointing-object-offcamera-her-expression-curious_116547-126789.jpg?w=826"
              alt="3rd slide"
            />
            <Carousel.Caption>
              <h3>Top Kids Fashion Deals</h3>
              <p>Explore the latest Kids fashion at unbeatable prices.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel-image"
              src="https://img.freepik.com/premium-photo/joyful-little-3yearold-cute-indian-child_1003686-92013.jpg?uid=R182221324&ga=GA1.1.1459837234.1736409783&semt=ais_country_boost&w=740"
              alt="4th slide"
            />
          </Carousel.Item>
        </Carousel>
      </motion.div>

      {/* Product Listing Section */}
      <div className="product-container">
        {kidsProducts.length === 0 ? (
          <p>No kids fashion products found.</p>
        ) : (
          kidsProducts.map(product => (
            <ProductCard
              key={product._id}
              product={product}
              addToCart={addToCart}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default KidsPage;
