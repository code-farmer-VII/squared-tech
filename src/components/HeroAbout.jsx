import React from "react";
import image1 from "../assets/Image/left hero.png"

function HeroAbout() {
  const images = [
    "image1", 
    "image1",
    "image1",
    "image1",
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-10">Our Trusted Clients</h1>
      <div className="relative w-72 h-72">
        <div className="absolute top-1/2 left-1/2 w-36 h-36 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full flex items-center justify-center shadow-md">
          <img
            src="https://via.placeholder.com/100"
            alt="Center Client"
            className="rounded-full w-28 h-28 object-cover"
          />
        </div>

        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-12 h-12 rounded-full overflow-hidden`}
            style={{
              transformOrigin: "50% 150px", 
              animation: `rotate 10s linear infinite`,
              animationDelay: `${index * 2.5}s`, 
            }}
          >
            <img
              src={image}
              alt={`Rotating ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-lg text-gray-600">
          We believe in doing great work and building trust with our clients.
        </p>
        <div className="mt-4">
          <span className="block font-bold text-xl">30+</span>
          <p className="text-sm text-gray-500">Clients worldwide</p>
        </div>
        <div className="mt-2">
          <span className="block font-bold text-xl">100k</span>
          <p className="text-sm text-gray-500">Successful projects</p>
        </div>
        <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default HeroAbout;
