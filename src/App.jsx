import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Services from "./page/Services";
import AboutUs from "./page/AboutUs";
import Contact from "./page/ContactUs";
import Navbar from "./components/navBar";
import Footer from './components/Footer'
import ScrollToTop from "./components/ScrollToTop";


const App = () => {
  return (
    
    <Router>
      <div>

        {/* Navbar */}
        <Navbar />
        <ScrollToTop />
        {/* Main Content */}
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
