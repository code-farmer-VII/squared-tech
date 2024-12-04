import React from "react";
import { motion } from "framer-motion";
import image from "../assets/Image/AI.png";

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 text-white h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
        initial={{ y: "70vh", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      ></motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-purple-800 via-purple-600 to-indigo-600 opacity-75"></div>
      <div className="relative z-10 max-w-4xl text-center px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Using Artificial Intelligence <br />
         <span className="text-black"> To Power the Future</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
            Squared Tech Solutions is a software company that aims to implement AI driven solutions to various sectors and transforming business with Innovative Software and Hardware Solutions.
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#get-started"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md transition"
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg shadow-md transition"
          >
            Contact us
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full filter blur-xl opacity-30"
        whileInView={{
          scale: [1, 1.5, 1],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-500 rounded-full filter blur-xl opacity-30"
        whileInView={{
          scale: [1, 1.5, 1],
          rotate: [0, -360, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      ></motion.div>
    </div>
  );
};

export default HeroSection;
