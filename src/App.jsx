import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Services from "./page/Services";
import Products from "./page/Products";
import AboutUs from "./page/AboutUs";
import ContactUs from "./page/ContactUs";
import Navbar from "./components/navBar";

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
