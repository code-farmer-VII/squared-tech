import React from "react";
import image1 from "../assets/Image/gradiant line.png"
import image2 from "../assets/Image/her.png"

const AboutSection = () => {
    return (
        <div className="bg-white min-h-screen flex items-center">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            {/* Image Section */}
            <div className="relative md:w-1/2 flex justify-center">
              {/* Background Image */}
              <img
                src={`${image1}`} // Replace with your image path
                alt="Background Graphic"
                className="absolute top-0 left-0 md:left-28 w-80 h-80 md:w-[400px] md:h-[400px] opacity-15"
              />
              {/* Foreground Image */}
              <img
                src={`${image2}`} // Replace with your image path
                alt="Person"
                className="relative z-10 w-64 h-64 md:w-[400px] md:h-[400px]"
              />
            </div>
    
            {/* Text Section */}
            <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left text-black">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome to Our Company
              </h1>
              <p className="text-lg mb-6">
                We are dedicated to building innovative solutions that improve lives
                and inspire change. Join us in our mission to make the world a
                better place.
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-6 py-3 rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>
      );
};

export default AboutSection;
