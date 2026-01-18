import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import ProductCard from "./components/products/ProductCard";
import CartPage from "./pages/Cart/CartPage";
import ContactPage from "./pages/Contact/ContactPage";
import Footer from "./components/Footer/Footer";
import SignupPage from './pages/signup/SignupPage';
import LoginPage from './pages/Login/LoginPage';
import MobilePage from "./pages/MobilePage";
import LaptopPage from "./pages/LaptopPage";
import HeadphonesPage from "./pages/HeadphonesPage";
import MenPage from "./pages/MenPage";
import WomenPage from "./pages/WomenPage";
import KidsPage from "./pages/KidsPage";
import HomePage from "./components/HomePage";
import Payment from "./pages/Payment";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";


const App = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const categories = ["All", "Men", "Women", "Kids", "Laptops", "Earbuds",  "Headphones", "Mobiles"];

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = activeCategory === "All"
          ? "http://localhost:5000/api/products"
          : `http://localhost:5000/api/products?category=${activeCategory}`;
        const response = await axios.get(url);
        setProducts(response.data);
      } catch (err) {
        toast.error("Failed to fetch products");
        console.error("Fetch error:", err);
      }
    };
    fetchProducts();
  }, [activeCategory]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item._id === product._id);
      if (existingItem) {
        return prevCart.map(item =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item._id === productId);
      if (existingItem?.quantity > 1) {
        return prevCart.map(item =>
          item._id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return prevCart.filter(item => item._id !== productId);
    });
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const clearCart = () => {
  setCart([]);
  localStorage.removeItem("cart");
};


  return (
    <Router>
      <ToastContainer 
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <>
            <Navbar 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory} 
              cartCount={cartCount}
              categories={categories}
            />
            <div className="product-container">
              {products.map((product) => (
                <ProductCard 
                  key={product._id} 
                  product={product} 
                  addToCart={addToCart}
                />
              ))}
            </div>
            <Footer />
          </>
        } />

  {/* Home Page */}
  <Route path="/" element={
          <>
            <Navbar 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory} 
              cartCount={cartCount}
              categories={categories}
            />
            <div className="product-container">
              {products.map((product) => (
                <ProductCard 
                  key={product._id} 
                  product={product} 
                  addToCart={addToCart}
                />
              ))}
            </div>
            <Footer />
          </>
        } />

        {/* Mobiles Page */}
        <Route path="/mobiles" element={
          <>
            <Navbar 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory} 
              cartCount={cartCount}
              categories={categories}
            />
            <MobilePage 
              products={products} 
              addToCart={addToCart}
            />
            <Footer />
          </>
        } />

   {/* homepage Page */}
   <Route path="/homepage" element={
          <>
            <Navbar 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory} 
              cartCount={cartCount}
              categories={categories}
            />
            <HomePage 
              products={products} 
              addToCart={addToCart}
            />
            <Footer />
          </>
        } />

{/* Laptops Page */}
<Route path="/laptops" element={
          <>
            <Navbar 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory} 
              cartCount={cartCount}
              categories={categories}
            />
            <LaptopPage
              products={products} 
              addToCart={addToCart}
            />
            <Footer />
          </>
        } />


{/* women Page */}
<Route path="/women" element={
          <>
            <Navbar 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory} 
              cartCount={cartCount}
              categories={categories}
            />
            < WomenPage
              products={products} 
              addToCart={addToCart}
            />
            <Footer />
          </>
        } />



{/* men Page */}
<Route path="/men" element={
          <>
            <Navbar 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory} 
              cartCount={cartCount}
              categories={categories}
            />
            < MenPage
              products={products} 
              addToCart={addToCart}
            />
            <Footer />
          </>
        } />


{/* kids Page */}
<Route path="/kids" element={
          <>
            <Navbar 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory} 
              cartCount={cartCount}
              categories={categories}
            />
            < KidsPage
              products={products} 
              addToCart={addToCart}
            />
            <Footer />
          </>
        } />





{/* headphones Page */}
<Route path="/headphones" element={
          <>
            <Navbar 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory} 
              cartCount={cartCount}
              categories={categories}
            />
            < HeadphonesPage
              products={products} 
              addToCart={addToCart}
            />
            <Footer />
          </>
        } />

        {/* Cart Page */}
        <Route path="/cart" element={
          <>
            <Navbar 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory} 
              cartCount={cartCount}
              categories={categories}
            />
            <CartPage 
              cart={cart} 
              removeFromCart={removeFromCart} 
            />
            <Footer />
          </>
        } />

        {/* Signup Page */}
        <Route path="/signup" element={
          <>
            <Navbar 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory} 
              cartCount={cartCount}
              categories={categories}
            />
            <SignupPage />
            <Footer />
          </>
        } />

        {/* Login Page */}
        <Route path="/login" element={
          <>
            <Navbar 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory} 
              cartCount={cartCount}
              categories={categories}
            />
            <LoginPage />
            <Footer />
          </>
        } />
<Route path="/checkout" element={
  <>
    <Navbar 
      activeCategory={activeCategory} 
      setActiveCategory={setActiveCategory} 
      cartCount={cartCount}
      categories={categories}
    />
    <Payment cart={cart} clearCart={clearCart} />
    <Footer />
  </>
} />





        {/* Contact Page */}
        <Route path="/contact" element={
          <>
            <Navbar 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory} 
              cartCount={cartCount}
              categories={categories}
            />
            <ContactPage />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
};

export default App;
