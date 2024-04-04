// App.js
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact";
import Explore from "./components/Explore";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login";
import SignupPage from "./components/SignUp";
import ExploreSection from "./components/Explore";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import { CartProvider } from './components/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<ExploreSection />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
};

export default App;