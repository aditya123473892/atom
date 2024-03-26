import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact";
import Explore from "./components/Explore"
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login"
import SignupPage from "./components/SignUp";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/explore" element={< Explore />} />
        <Route path="/login" element={< Login />} />
        <Route path="/signup" element={< SignupPage />} />
        
      </Routes>
      <Footer />
    </>
  );
};

export default App;
