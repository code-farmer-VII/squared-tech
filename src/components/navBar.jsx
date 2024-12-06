import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Image/logo square.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (path) => pathname === path;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const activeLinkStyles = "text-purple-600 font-bold relative group";

  return (
    <header className="bg-white/70 backdrop-blur-md fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">
          <Link to="/" className="flex flex-row">
            <img src={`${logo}`} alt="" className="w-10 h-10 self-center" />
            <div className="flex flex-col pl-4 text-xl">
              <div className="bg-gradient-to-r from-purple-800 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Squared Tech Solution
              </div>
              <div className="text-lg text-purple-500">Technology</div>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-6 text-black">
          {[
            { path: "/", label: "Home" },
            { path: "/about-us", label: "About Us" },
            { path: "/services", label: "Services" },
            { path: "/contact-us", label: "Contact Us" },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${isActive(link.path) ? activeLinkStyles : "hover:text-blue-500"} transition-colors`}
            >
              {link.label}
              {isActive(link.path) && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              )}
            </Link>
          ))}
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`block md:hidden fixed top-0 left-0 h-full bg-white/70 backdrop-blur-md shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-3/4 md:w-1/3`}
      >
 <div className="flex flex-col px-6 py-10 space-y-6 text-black bg-white/90 backdrop-blur-md shadow-lg h-lvh items-center">
 <div className="text-2xl font-bold text-black mb-10">
              <Link to="/" className="flex flex-row">
              <img src={`${logo}`} alt="" className="w-10 h-10 self-center" />
              <div className="flex flex-col pl-4 text-xl">
                <div className="bg-gradient-to-r from-purple-800 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Squared Tech Solution
                </div>
                <div className="text-lg text-purple-500">Technology</div>
              </div>
            </Link>
          </div>
          <div className="flex flex-1 flex-col items-center space-y-6">
            {[
              { path: "/", label: "Home" },
              { path: "/about-us", label: "About Us" },
              { path: "/services", label: "Services" },
              { path: "/contact-us", label: "Contact Us" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={toggleMenu}
                className={`${
                  isActive(link.path) ? activeLinkStyles : "hover:text-blue-500"
                } text-lg w-full text-left`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
