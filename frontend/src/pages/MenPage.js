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

const MenPage = ({ products, addToCart }) => {
  const menProducts = products.filter(
    (p) => p.category.toLowerCase() === "men"
  );

  return (
    <div className="men-page">
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
              src="https://img.freepik.com/free-vector/flat-design-fashion-stylist-facebook-cover_23-2150007838.jpg?t=st=1744127180~exp=1744130780~hmac=8792d0cd59be432b5524eef292e552e24692934cd7d798cb96eeebf3f6604ada&w=826"
              alt="1st slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel-image"
              src="https://img.freepik.com/free-vector/flat-design-fashion-show-facebook-cover-template_23-2149253233.jpg?uid=R182221324&ga=GA1.1.1459837234.1736409783&semt=ais_country_boost&w=740"
              alt="2nd slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel-image"
              src="https://img.freepik.com/free-photo/cool-guy-having-fun-vacation-wearing-straw-hat-sunglasses-looking-aside-sassy-standing-blu_1258-164149.jpg?uid=R182221324&ga=GA1.1.1459837234.1736409783&semt=ais_country_boost&w=740"
              alt="3rd slide"
            />
            <Carousel.Caption>
              <h3>Top Men Fashion Deals</h3>
              <p>Explore the latest men fashion at unbeatable prices.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel-image"
              src="https://img.freepik.com/free-vector/hand-drawn-fashion-week-facebook-cover_23-2151093733.jpg?uid=R182221324&ga=GA1.1.1459837234.1736409783&semt=ais_country_boost&w=740"
              alt="4th slide"
            />
          </Carousel.Item>
        </Carousel>
      </motion.div>

      {/* Product Section */}
      <div className="product-container">
        {menProducts.length === 0 ? (
          <p>No men's fashion products found.</p>
        ) : (
          menProducts.map((product) => (
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

export default MenPage;
