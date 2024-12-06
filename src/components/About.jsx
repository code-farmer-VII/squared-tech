import React from "react";
import { motion } from "framer-motion";
import ERP from "../assets/Image/ERP.png"
import AI1 from "../assets/Image/AI1.png"
import hardware from "../assets/Image/hard ware.png"

const AboutSection = () => {
  const cards = [
    {
      title: "ERP Services",
      users: 1250, 
      icon: ERP,
    },
    {
      title: "AI-Powered Software",
      users: 890, 
      icon: AI1,
    },
    {
      title: "Hardware Products",
      users: 670, 
      icon: hardware,
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          About Us
        </h2>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            About Squared Technology
          </h2>
          <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
           className="text-lg text-gray-600 text-justify">
          At <span className="text-purple-600">Squared Technology</span>, we empower businesses with cutting-edge solutions. From ERP services to AI-powered software and hardware products, we drive efficiency and innovation for our clients. Our goal is to transform the way businesses operate by delivering intelligent and customized solutions that increase productivity and streamline operations. We pride ourselves on offering reliable, scalable, and impactful technology that enhances business growth and positions our clients at the forefront of their industries.
          </motion.p>
        </div>

        <div className="h-min grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  md:gap-6 justify-center items-center">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center mt-[10%] md:mt-[30%] border-l-2 border-purple-500 cursor-pointer"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <img
                src={card.icon}
                alt={card.title}
                className="mx-auto mb-4 w-16 h-16"
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {card.title}
              </h3>
              <div className="text-lg font-bold text-purple-600">
                {card.users}+ Users
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
