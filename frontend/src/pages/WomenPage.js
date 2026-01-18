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

const WomenPage = ({ products, addToCart }) => {
  const womenProducts = products.filter(p => p.category === "Women");

  return (
    <div className="women-page">
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
              src="https://img.freepik.com/free-vector/horizontal-sale-banner-template_23-2148897328.jpg?t=st=1744128339~exp=1744131939~hmac=1d760628679f32130ea06e769455f3e44309e81dfc642e64a1a1a3edd6e73b9f&w=1060"
              alt="1st slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel-image"
              src="https://img.freepik.com/free-vector/flat-twitch-banner-template-fashion-flowers_23-2150407674.jpg?t=st=1744128463~exp=1744132063~hmac=6b82006e731ba4f97f1d7648191ebc97cacc05446744c4acf478d26e23988648&w=826"
              alt="2nd slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel-image"
              src="https://img.freepik.com/free-photo/travel-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-wtih-trendy-hat-sunglas_1258-124941.jpg?uid=R182221324&ga=GA1.1.1459837234.1736409783&semt=ais_country_boost&w=740"
              alt="3rd slide"
            />
            <Carousel.Caption>
              <h3>Top Women Fashion Deals</h3>
              <p>Explore the latest women fashion at unbeatable prices.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel-image"
              src="https://img.freepik.com/free-vector/flat-design-fashion-template_23-2150382726.jpg?uid=R182221324&ga=GA1.1.1459837234.1736409783&semt=ais_country_boost&w=740"
              alt="4th slide"
            />
          </Carousel.Item>
        </Carousel>
      </motion.div>

      {/* Product Listing Section */}
      <div className="product-container">
        {womenProducts.length === 0 ? (
          <p>No women fashion products found.</p>
        ) : (
          womenProducts.map(product => (
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

export default WomenPage;
