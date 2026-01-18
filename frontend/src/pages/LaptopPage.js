import React from "react";
import ProductCard from "../components/products/ProductCard";

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

// Animation variants
const slideIn = {
  hidden: { x: "-100%" },
  visible: { x: 0, transition: { type: "spring", stiffness: 50 } }
};

const LaptopPage = ({ products, addToCart }) => {
  const laptopProducts = products.filter(
    (p) => p.category.toLowerCase() === "laptops"
  );

  return (
    <div className="laptop-page">
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
              src="https://m.media-amazon.com/images/G/31/img24/asus/f16/Mac-1500_2._CB547570271_.png"
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel-image"
              src="https://img.freepik.com/premium-photo/laptop-computer-rainbow-shelf-background-banner_118047-15791.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Top Laptop Deals</h3>
              <p>Explore the latest Laptops at unbeatable prices.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel-image"
              src="https://img.freepik.com/premium-photo/silver-laptop-with-blank-screen-angled-dark-studio-setting-technology-presentation-concept-3d-rendering_670147-83778.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Top Laptop Deals</h3>
              <p>Explore the latest Laptops at unbeatable prices.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel-image"
              src="https://img.freepik.com/premium-photo/low-angle-view-statue-against-clear-blue-sky_1048944-401300.jpg"
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h3>Top Laptop Deals</h3>
              <p>Explore the latest Laptops at unbeatable prices.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel-image"
              src={require('../images/laptopcor.png')}
              alt="Fifth slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel-image"
              src="https://m.media-amazon.com/images/G/31/img15/zak/24/dell/laptop-header_1500X300._CB583178952_.png"
              alt="Sixth slide"
            />
          </Carousel.Item>
        </Carousel>
      </motion.div>

      {/* Product Grid */}
      <div className="product-container">
        {laptopProducts.length === 0 ? (
          <p>No laptops found.</p>
        ) : (
          laptopProducts.map((product) => (
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

export default LaptopPage;
