// App.js
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact";
import Explore from "./components/Explore";
import { Home } from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login";
import SignupPage from "./components/SignUp";
import ExploreSection from "./components/Explore";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext";
import AboutUs from "./components/AboutUs";
import JoinUs from "./components/JoinUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import HelpSupport from "./components/HelpSupport";
import TermsCondition from "./components/TermsCondition";
import CodeofConduct from "./components/CodeofConduct";
import { AuthContext } from "./components/ContextProvider/AuthContext";
import { AuthProvider } from "./components/ContextProvider/AuthContext";
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const App = () => {
    return (
        <AuthProvider>
            <CartProvider>
                <Navbar />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contactus" element={<Contact />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/profile" element={<Login />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/" element={<ExploreSection />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/joinus" element={<JoinUs />} />
                    <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                    <Route path="/help&support" element={<HelpSupport />} />
                    <Route path="/T&C" element={<TermsCondition />} />
                    <Route path="/codeofconduct" element={<CodeofConduct />} />
                </Routes>
                <Footer />
            </CartProvider>
        </AuthProvider>
    );
};

export default App;
