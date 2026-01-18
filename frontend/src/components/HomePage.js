import React from 'react';

import './HomePage.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';


// Animation variants


const slideIn = {
  hidden: { x: "-100%" },
  visible: { x: 0, transition: { type: "spring", stiffness: 50 } }
};

const HomePage = () => {
  return (
    
    <div className="home">
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
              className="d-block carousel-image" // Apply CSS class
              src="https://img.freepik.com/premium-photo/technology-shopping-people-concept-modern-cute-hipster-redhead-girl-wearing-white-headphones-hol_1258-143256.jpg?w=826"
              alt="First slide"
            />
               <Carousel.Caption>
              <h3>Top Smartphone Deals</h3>
              <p>Explore the latest smartphones at unbeatable prices.</p>
            </Carousel.Caption>
         
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel-image" // Apply CSS class
              src="https://img.freepik.com/premium-photo/laptop-computer-rainbow-shelf-background-banner_118047-15791.jpg?uid=R182221324&ga=GA1.1.1459837234.1736409783&semt=ais_hybrid"
              alt=" Second slide "
            />
            <Carousel.Caption>
              <h3>Top Laptop Deals</h3>
              <p>Explore the latest Laptop at unbeatable prices.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel-image" // Apply CSS class
              src="https://img.freepik.com/free-photo/coquettish-lovely-cheerful-pretty-redhead-woman-with-blue-eyes-freckles-wearing-white-large-head_1258-126423.jpg?uid=R182221324&ga=GA1.1.1459837234.1736409783&semt=ais_hybrid"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Top Headphones Deals</h3>
              <p>Explore the latest Headphones at unbeatable prices.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel-image" // Apply CSS class
              src="https://img.freepik.com/premium-photo/technology-shopping-people-concept-modern-cute-hipster-redhead-girl-wearing-white-headphones-hol_1258-143256.jpg?w=826"
              alt="Fourth slide"
            />
               <Carousel.Caption>
              <h3>Top Smartphone Deals</h3>
              <p>Explore the latest smartphones at unbeatable prices.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel-image" // Apply CSS class
              src="https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/clp/2025/7Feb/Hero-banner._CB549141821_.jpg"
              alt="Fifth slide"
            />
         
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel-image" // Apply CSS class
              src="https://img.freepik.com/premium-photo/technology-shopping-people-concept-modern-cute-hipster-redhead-girl-wearing-white-headphones-hol_1258-143256.jpg?w=826"
              alt="Sixth slide"
            />
            <Carousel.Caption>
              <h3>Top Headphones Deals</h3>
              <p>Explore the latest Headphones at unbeatable prices.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel-image" // Apply CSS class
              src="https://img.freepik.com/free-vector/fashion-template-design_23-2150368863.jpg?uid=R182221324&ga=GA1.1.1459837234.1736409783&semt=ais_hybrid"
              alt="7slide"
            />
            
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel-image" // Apply CSS class
              src=" https://img.freepik.com/premium-vector/fashion-advertising-web-banner-vector-illustration_262376-159.jpg?uid=R182221324&ga=GA1.1.1459837234.1736409783&semt=ais_hybrid"
              alt="8slide"
            />
            
          </Carousel.Item>

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
              className="d-block carousel-image" // Apply CSS class
              src="https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/clp/2025/7Feb/Hero-banner._CB549141821_.jpg"
              alt="11slide"
                
            />
            
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block carousel-image" // Apply CSS class
              src="https://img.freepik.com/free-vector/hand-drawn-fashion-collection-twitch-banner_23-2149985384.jpg?uid=R182221324&ga=GA1.1.1459837234.1736409783&semt=ais_hybrid"
              alt="12slide"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block carousel-image" // Apply CSS class
              src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/173cacfaf069fe7d.png?q=20" 

              alt="15slide"
            />
            
          </Carousel.Item>
        </Carousel>
      </motion.div>

    </div>

  );
};

export default HomePage;