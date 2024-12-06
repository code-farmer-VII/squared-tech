import React, { useState } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    number: 1,
    title: "Innovation",
    description:
      "Continuously pushing the boundaries of technology, especially the limits of our nation, and developing creative and state-of-the-art solutions.",
    icon: "💡", 
  },
  {
    number: 2,
    title: "Sustainability",
    description:
      "Ensure that our services and products leave a positive mark and minimize our carbon footprint for solutions that last generations.",
    icon: "♻️",
  },
  {
    number: 3,
    title: "Customer Satisfaction",
    description:
      "Empowering businesses and individuals with technology to enable others to reach their full productive potential.",
    icon: "👍",
  },
  {
    number: 4,
    title: "Global Collaboration",
    description:
      "Partnering with like-minded entities and organizations to change people’s lives for the better.",
    icon: "🤝",
  },
];

const Dedication = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="bg-white py-16 px-6">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
        We are dedicated to
      </h2>
      <div className="flex flex-wrap justify-center gap-8 border-t-2 border-gray-300">
        {cards.map((card, index) => (
          <motion.div
            key={card.number}
            className="relative bg-white p-6 shadow-xl rounded-lg w-72 text-center transition-transform duration-300 ease-in-out"
            onMouseEnter={() => setHoveredCard(card.number)}
            onMouseLeave={() => setHoveredCard(null)}
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{
              duration: 0.8,
              delay: 0.3 * index, 
              ease: "easeOut",
            }}
          >
            <div className="relative flex justify-center mb-6">
              <div
                className={`absolute top-[-50px]  w-16 h-16 flex items-center justify-center rounded-full border-4 border-gray-300 bg-white text-blue-600 font-bold text-xl ${
                  hoveredCard === card.number ? "animate-ripple" : ""
                }`}
              >
                {card.number}
              </div>
            </div>
            <motion.div className="mt-12 mb-4 text-2xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
            >{card.icon}</motion.div>
            <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl font-semibold mb-3 text-gray-800">{card.title}</motion.div>
            <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600">{card.description}</motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dedication;
