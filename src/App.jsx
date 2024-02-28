import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact";
;
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./components/Home/Home";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contactus" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
