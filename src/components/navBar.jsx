import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from '../hooks/ThemeContext'; // Import the useTheme hook

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, changeTheme } = useTheme(); // Destructure theme and changeTheme from context
  const [color, setColor] = useState(theme.color); // Local state to manage selected color

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleColorChange = (e) => {
    const selectedColor = e.target.value; // Get the selected color
    setColor(selectedColor); // Update the local state
    changeTheme(selectedColor); // Update the global theme color
  };

  return (
    <header style={{ color: color, borderBottomColor: color }} className={`bg-white/70 backdrop-blur-md fixed w-full top-0 z-50 border-2 `} >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div style={{ color: color }} className="text-2xl font-bold">
          <Link to="/">LOGO</Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6" style={{ color: color }}>
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link to="/services" className="hover:text-blue-500">
            Services
          </Link>
          <Link to="/products" className="hover:text-blue-500">
            Products
          </Link>
          <Link to="/about-us" className="hover:text-blue-500">
            About Us
          </Link>
          <Link to="/contact-us" className="hover:text-blue-500">
            Contact Us
          </Link>
          <div>
          <input 
            type="color" 
            value={color} 
            onChange={handleColorChange} 
            className="w-10 h-10 border-2 border-gray-300 cursor-pointer"
          />
        </div>
        </nav>

        {/* Color Picker */}


        {/* Mobile Menu Toggle */}
        <button
          className="block md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`block md:hidden fixed top-0 left-[-6px] h-full bg-white/70 backdrop-blur-md shadow-lg z-40 transform transition-transform duration-300 ease-in-out border-2 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-3/4 md:w-1/3`}
        
      >
        <div style={{ color: color }} className="flex flex-col items-start px-6 py-10 space-y-6 bg-white/90 backdrop-blur-md shadow-lg h-lvh"         style={{borderRightColor: color, borderWidth: '2px'}}
        >
          <Link
            to="/"
            onClick={toggleMenu}
            className="hover:text-blue-500 text-lg w-full text-left"
          >
            Home
          </Link>
          <Link
            to="/services"
            onClick={toggleMenu}
            className="hover:text-blue-500 text-lg w-full text-left"
          >
            Services
          </Link>
          <Link
            to="/products"
            onClick={toggleMenu}
            className="hover:text-blue-500 text-lg w-full text-left"
          >
            Products
          </Link>
          <Link
            to="/about-us"
            onClick={toggleMenu}
            className="hover:text-blue-500 text-lg w-full text-left"
          >
            About Us
          </Link>
          <Link
            to="/contact-us"
            onClick={toggleMenu}
            className="hover:text-blue-500 text-lg w-full text-left"
          >
            Contact Us
          </Link>
          <input 
            type="color" 
            value={color} 
            onChange={handleColorChange} 
            className="w-10 h-10 border-2 border-gray-300 cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
