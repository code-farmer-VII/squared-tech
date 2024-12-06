import React from "react";
import { motion } from "framer-motion";

const GoalSection = () => {
    const goal = [
        {
          icon: "🚀",
          title: "Innovation",
          description:
            "Push the boundaries of technology and creativity to deliver world-class solutions.",
        },
        {
          icon: "🤝",
          title: "Collaboration",
          description:
            "Work hand-in-hand with clients and partners to achieve shared success.",
        },
        {
          icon: "🌍",
          title: "Sustainability",
          description:
            "Promote sustainable practices in all our operations and projects.",
        },
      ]
  return (
    <section className="bg-purple-100 py-12">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Goals
        </motion.h2>
        <p className="text-gray-600 text-lg mb-8">
          At Squared, we strive to achieve excellence in every
          project. Our goals reflect our vision and dedication to innovation,
          collaboration, and success.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {goal.map((goal, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-6xl mb-4">{goal.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {goal.title}
              </h3>
              <p className="text-gray-600">{goal.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalSection;
