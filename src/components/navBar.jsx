import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white/70 backdrop-blur-md fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">
          <Link to="/">LOGO</Link>
        </div>

        <nav className="hidden md:flex space-x-6 text-black">
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
        </nav>

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

      <div
        className={`block md:hidden fixed top-0 left-0 h-full bg-white/70 backdrop-blur-md shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-3/4 md:w-1/3`}
      >
        <div className="flex flex-col items-start px-6 py-10 space-y-6 text-black bg-white/90 backdrop-blur-md shadow-lg h-lvh">
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
        </div>
      </div>
    </header>
  );
};

export default Navbar;
