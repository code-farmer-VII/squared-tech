import React from "react";
import { motion } from "framer-motion";
import ERP from "../assets/Image/ERP.png";
import AI1 from "../assets/Image/AI1.png";
import hardware from "../assets/Image/hard ware.png";
import bg from "../assets/Image/gradiant line.png";

// Service data
const services = [
  {
    title: "ERP Services",
    description:
      "Unlock the full potential of your business with our expert ERP solutions. As an official Odoo partner, we deliver seamless and efficient operations.",
    link: "#erp-services",
    icon: ERP,
    background: bg, // Background image for the service
  },
  {
    title: "AI-Powered Software",
    description:
      "Revolutionize your business operations with our AI-driven software, including warehouse management, smart video management, and RFID-powered weapons management.",
    link: "#ai-software",
    icon: AI1,
    background: bg, // Background image for the service
  },
  {
    title: "Hardware Products",
    description:
      "Explore our range of hardware products, such as GPS tracking systems for cars, designed to enhance safety and efficiency.",
    link: "#hardware-products",
    icon: hardware,
    background: bg, // Background image for the service
  },
];

const ServiceSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ title, description, link, icon, background }, index) => (
            <motion.div
              key={index}
              className="bg-purple-600 bg-opacity-40 backdrop-blur-md rounded-lg p-6 text-center shadow-lg border border-purple-300 relative overflow-hidden"
              initial={{ opacity: 0, x: "-100%" }} // Card starts off-screen to the left
              whileInView={{ opacity: 1, x: 0 }} // Moves into view
              transition={{
                duration: 0.8,
                delay: 0.3 * index, // Delay for sequential animation
                ease: "easeOut",
              }}
            >
              {/* Background image with low opacity */}
              <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${background})`,
                  opacity: 0.2, // Background image opacity
                }}
              />
              
              {/* Card content */}
              <div className="relative z-10">
                <img
                  src={icon}
                  alt={title}
                  className="mx-auto mb-4 w-20 h-20"
                />
                <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
                <p className="text-white mb-6">{description}</p>
                <a
                  href={link}
                  className="text-purple-900 font-bold hover:underline"
                >
                  Discover now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
