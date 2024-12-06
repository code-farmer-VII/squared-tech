import React from "react";
import { FaEnvelope, FaTwitter, FaComments } from "react-icons/fa";

function ContactUs() {
  return (
    <>
    <div className="flex flex-col lg:flex-row bg-gray-100 py-6 px-12 md:px-20">
      <div className="lg:w-1/2 w-full p-8 lg:p-16 ">
        <h1 className="text-4xl font-bold mb-4">Get in touch</h1>
        <p className="text-gray-600 mb-6">
          We're here to help. Chat to our friendly team 24/7 and get set up and ready to go in just 5 minutes.
        </p>
        <ul className="space-y-4 mb-8">
          <li className="flex items-center space-x-3">
            <FaComments className="text-purple-600 text-lg" />
            <a href="#!" className="text-purple-600 hover:underline">
              Start a live chat
            </a>
          </li>
          <li className="flex items-center space-x-3">
            <FaEnvelope className="text-purple-600 text-lg" />
            <a href="#!" className="text-purple-600 hover:underline">
              Shoot us an email
            </a>
          </li>
          <li className="flex items-center space-x-3">
            <FaTwitter className="text-purple-600 text-lg" />
            <a href="#!" className="text-purple-600 hover:underline">
              Message us on Twitter
            </a>
          </li>
        </ul>
        <form className="space-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <input
              type="text"
              placeholder="First name"
              className="w-full lg:w-1/2 px-4 py-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-full lg:w-1/2 px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <input
            type="email"
            placeholder="you@company.com"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <input
            type="tel"
            placeholder="+251 900-0000-00"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <div>
            <p className="mb-2 text-gray-700">Services</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Website design</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>UX design</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>ERP Services</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Content creation</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Strategy & consulting</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Other</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 w-full shadow-lg"
          >
            Send message
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092245!2d144.9537353153168!3d-37.81627977975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d7cd0ba4b2d9!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1612323127892!5m2!1sen!2sin"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    </>
  );
}

export default ContactUs;
