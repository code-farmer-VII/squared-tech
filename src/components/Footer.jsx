import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaLinkedin } from 'react-icons/fa';
import image from "../assets/Image/Building.png";

const Footer = () => {
  return (
    <div>
<div className='flex justify-center items-center'>
        <img src={image} alt="" />
        </div>
          <footer className="bg-gradient-to-r from-purple-800 via-purple-600 to-indigo-600 text-white py-16">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-300">Quick Links</h3>
            <ul className="space-x-2 flex md:flex-col md:space-y-2 flex-row md:space-x-0">
              <li><a href="#" className="hover:text-blue-400 transition duration-300">Home</a></li>
              <li><a href="#" className="hover:text-blue-400 transition duration-300">Services</a></li>
              <li><a href="#" className="hover:text-blue-400 transition duration-300">Products</a></li>
              <li><a href="#" className="hover:text-blue-400 transition duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition duration-300">Contact Us</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-300">Customer Service</h3>
            <ul className="space-x-4 flex md:flex-col md:space-y-2 flex-row md:space-x-0">
              <li><a href="#" className="hover:text-blue-400 transition duration-300">ERP Development</a></li>
              <li><a href="#" className="hover:text-blue-400 transition duration-300">Ai Software Develpment</a></li>
              <li><a href="#" className="hover:text-blue-400 transition duration-300">Hardware Product</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-300">Follow Us</h3>
            <div className="flex space-x-4 text-lg">
              <a href="#" className="text-blue-600 hover:text-blue-400 transition duration-300"><FaFacebook size={24} /></a>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition duration-300"><FaTwitter size={24} /></a>
              <a href="#" className="text-pink-600 hover:text-pink-400 transition duration-300"><FaInstagram size={24} /></a>
              <a href="#" className="text-blue-500 hover:text-blue-300 transition duration-300"><FaLinkedin size={24} /></a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Section */}
        <div className="mt-16 border-t border-gray-700 pt-8 text-center">
          <p className=" text-sm">&copy; {new Date().getFullYear()} lets work together. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;