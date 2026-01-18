import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import ProductCard from "../components/products/ProductCard";

// Animation variants
const slideIn = {
  hidden: { x: "-100%" },
  visible: { x: 0, transition: { type: "spring", stiffness: 50 } },
};

const MobilePage = ({ products, addToCart }) => {
  const mobileProducts = products.filter(
    (p) => p.category.toLowerCase() === "mobiles"
  );

  return (
    <div className="mobile-page">
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
              src="https://img.freepik.com/premium-photo/low-angle-view-statue-against-clear-blue-sky_1048944-401300.jpg"
              alt="1st slide"
            />
              <Carousel.Caption>
              <h3>Top Smartphone Deals</h3>
              <p>Explore the latest smartphones at unbeatable prices.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel-image"
              src="https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/clp/2025/7Feb/Hero-banner._CB549141821_.jpg"
              alt="2nd slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel-image"
              src="https://img.freepik.com/premium-photo/low-angle-view-statue-against-clear-blue-sky_1048944-401300.jpg"
              alt="3rd slide"
            />
            <Carousel.Caption>
              <h3>Top Smartphone Deals</h3>
              <p>Explore the latest smartphones at unbeatable prices.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel-image"
              src="https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/clp/2025/7Feb/Hero-banner._CB549141821_.jpg"
              alt="4th slide"
            />
          </Carousel.Item>
        </Carousel>
      </motion.div>

      {/* Product Grid */}
      <div className="product-container">
        {mobileProducts.length === 0 ? (
          <p>No mobile products found.</p>
        ) : (
          mobileProducts.map((product) => (
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

export default MobilePage;
