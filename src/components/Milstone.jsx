import React from "react";
import { motion } from "framer-motion";
import img from "../assets/Image/her.png";
import background from "../assets/Image/gradiant line.png";

export const Services = [
  {
    id: 1,
    title: "Odoo ERP Implementation",
    description: "Streamline your business operations with expert Odoo ERP implementation, tailored to your needs."
  },
  {
    id: 2,
    title: "Custom ERP Modules",
    description: "Develop custom modules for your ERP system to enhance efficiency and scalability."
  },
  {
    id: 3,
    title: "Warehouse Management Software",
    description: "Optimize inventory and operations with AI-driven warehouse management solutions."
  },
  {
    id: 4,
    title: "Smart Video Management",
    description: "Leverage AI-powered video management systems for advanced security and monitoring."
  },
  {
    id: 5,
    title: "RFID Weapons Management",
    description: "Enhance safety and tracking with RFID-powered weapons management solutions."
  },
  {
    id: 6,
    title: "GPS Tracking Systems",
    description: "Ensure safety and efficiency with advanced GPS tracking systems for vehicles."
  }
];


const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const ExperienceCard = ({ service, isOdd }) => (
  <motion.div 
    className={`flex flex-col md:flex-row ${isOdd ? "md:flex-row-reverse" : "md:flex-row"} relative mb-8`} 
    variants={cardVariant}
    initial="hidden"
    whileInView="visible"
  >
    <div className={`relative card-milestone flex flex-col justify-end bg-blue-600 bg-opacity-40 backdrop-blur-md md:w-1/2 text-white px-6 py-4 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 ${isOdd ? "md:mr-0" : "md:ml-0"} mb-2 transition-all ease-in-out duration-700`}>
                  <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${background})`,
                  opacity: 0.1, 
                }}
              />
      <motion.h3
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
       className="text-xl font-bold text-purple-800 py-3">{service.title}</motion.h3>
      <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
       className="text-secondary text-sm font-semibold text-center py-2 text-black">{service.description}</motion.p>
    </div>

    <div className="absolute w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center border-4 border-white -translate-x-1/2 left-[-50px] md:left-1/2 shadow-lg z-20">
      <img
        src={img} 
        alt={service.title}
        className="w-8 h-8 object-contain"
        width={32}
        height={32}
      />
    </div>

    <div className="absolute w-1 bg-gray-200 h-full left-[-50px] md:left-1/2 top-0 md:block"></div>
  </motion.div>
);

const Experience = () => (
  <div id="Service" className="py-8">
    <motion.div 
      initial="hidden" 
      whileInView="visible" 
      variants={textVariant} 
      className="text-center mb-8" 
      id="services"
    >
      <p className="text-secondary text-xl font-bold text-purple-600 ">We do for you</p>
      <h2 className="text-4xl font-bold">My Services</h2>
    </motion.div>

    <div className="relative px-4 md:px-24">
      <motion.div
        className="flex flex-col"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
      >
        {Services.map((service, index) => (
          <ExperienceCard key={index} service={service} isOdd={index % 2 === 1} />
        ))}
      </motion.div>
    </div>
  </div>
);

export default Experience;
