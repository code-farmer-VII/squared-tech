import React, { useState } from "react";
import "./Slider.css"; // CSS file for styling

const sliderData = [
  {
    image: "https://www.projectmanager.com/wp-content/uploads/2019/03/project-portfolio-management-dashboard.jpg", // Replace with your image URL
    title: "E-commerce ERP",
  },
  {
    image: "https://th.bing.com/th/id/OIP.c9EWKOoFZYM4vOyyy_pcZwHaE8?rs=1&pid=ImgDetMain",
    title: "Electronic Hardware Product",
  },
  {
    image: "https://img.freepik.com/premium-photo/home-appliances-gas-cooker-tv-cinema-refrigerator-air-conditioner-microwave-laptop-washing-machine_252025-693.jpg",
    title: "Electronic Devices",
  },
  {
    image: "https://www.techyv.com/sites/default/users/Images-Folder/LogicGate-Risk-Cloud.png",
    title: "Product Design",
  },
  {
    image: "https://th.bing.com/th/id/R.804bd8ada04ce9b5b828b381f1d9a35c?rik=RnyDaX5nJyfyhw&pid=ImgRaw&r=0&sres=1&sresct=1",
    title: "Finance ERP",
  },
  {
    image: "https://th.bing.com/th/id/R.423383c381706bc870ee309c7d3076f9?rik=EWsnxT6Qwn6q6A&riu=http%3a%2f%2fddi-dev.com%2fuploads%2fmedia%2fnews%2f0001%2f02%2f584668831a98d094bf9ceb0a533d0984149e044f.jpeg&ehk=LZ4kSAzJj%2fD5zReIP86GojERXqsDehNZTJxdtNFWnpE%3d&risl=&pid=ImgRaw&r=0",
    title: "AI Chat Bot",
  },
];

const SmoothSlider = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <>
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 pt-3">
          Our Products
        </h2>
    <div
      className="slider-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`slider ${isPaused ? "paused" : ""}`}
      >
        {sliderData.map((item, index) => (
          <div className="slide" key={index}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
        {sliderData.map((item, index) => (
          <div className="slide" key={`duplicate-${index}`}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default SmoothSlider;
