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

const HeadphonesPage = ({ products, addToCart }) => {
  const headphoneProducts = products.filter(
    (p) => p.category.toLowerCase() === "headphones"
  );

  return (
    <div className="headphones-page">
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
              src="https://img.freepik.com/free-photo/coquettish-lovely-cheerful-pretty-redhead-woman-with-blue-eyes-freckles-wearing-white-large-head_1258-126423.jpg"
              alt="1st slide"
            />
            <Carousel.Caption>
              <h3>Top Headphones Deals</h3>
              <p>Explore the latest Headphones at unbeatable prices.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel-image"
              src="https://img.freepik.com/premium-photo/technology-shopping-people-concept-modern-cute-hipster-redhead-girl-wearing-white-headphones-hol_1258-143256.jpg?w=826"
              alt="2nd slide"
            />
            <Carousel.Caption>
              <h3>Top Headphones Deals</h3>
              <p>Explore the latest Headphones at unbeatable prices.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel-image"
              src="https://img.freepik.com/free-photo/copy-space-mother-daughter-listening-music_23-2148482890.jpg"
              alt="3rd slide"
            />
            <Carousel.Caption>
              <h3>Top Headphones Deals</h3>
              <p>Explore the latest Headphones at unbeatable prices.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel-image"
              src="https://img.freepik.com/premium-photo/exciting-black-friday-deals-top-electronics-with-vibrant-visuals-copy-space-ecommerce-marketing-campaign_1153767-4328.jpg"
              alt="4th slide"
            />
            <Carousel.Caption>
              <h3>Top Headphones Deals</h3>
              <p>Explore the latest Headphones at unbeatable prices.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel-image"
              src={require("../images/hp1.jpg")}
              alt="5th slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel-image"
              src={require("../images/hp2.jpg")}
              alt="6th slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel-image"
              src={require("../images/hp1.jpg")}
              alt="7th slide"
            />
          </Carousel.Item>
        </Carousel>
      </motion.div>

      {/* Product Section */}
      <div className="product-container">
        {headphoneProducts.length === 0 ? (
          <p>No headphone products found.</p>
        ) : (
          headphoneProducts.map((product) => (
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

export default HeadphonesPage;
