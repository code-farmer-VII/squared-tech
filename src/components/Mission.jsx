import React from "react";
import { motion } from "framer-motion";
import image from "../assets/Image/woman.png";

const MissionSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 relative">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Left: Text Content */}
          <motion.div
            className="lg:w-1/2 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              At Squared Tech Solution, our mission is to inspire innovation,
              empower communities, and create sustainable solutions that make a
              positive impact worldwide. We strive to build a future where
              technology and creativity come together to solve global
              challenges.
            </p>
            <ul className="space-y-4">
              {[
                "Deliver exceptional value to our clients and stakeholders.",
                "Foster a culture of innovation, diversity, and inclusivity.",
                "Commit to sustainability and ethical practices.",
              ].map((point, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-700 text-base"
                >
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-4">
                    {index + 1}
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0,  }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={`${image}`}
              alt="Our Mission"
              className="absolute bottom-0 hidden lg:block h-[300px] w-[400px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
