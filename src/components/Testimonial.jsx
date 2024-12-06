import React from 'react';
import image1 from "../assets/Image/temu1.jpg"
import image2 from "../assets/Image/temustar.jpg"

const testimonials = [
  {
    quote:
      "Production Online has helped me become a better musician and producer than I ever thought possible.",
    name: "Temesgen Gonfa",
    title: "Space VII CEO",
    image: image1, 
  },
  {
    quote:
      "Online has helped me become a better musician and producer than I ever thought possible.",
    name: "Million Gonfa",
    title: "Media Director, Turn Around Music Group",
    image: image2, 
  },
  
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 p-8 lg:p-16 max-w-screen-xl mx-auto">
      <div className="text-center lg:text-left">
        <h2 className="text-3xl font-bold mb-4">
          From our <span className="text-black">community.</span>
        </h2>
        <p className="text-gray-600">
          Here's what other customers had to say about our Production .
        </p>
        <div className="flex gap-4 mt-6 justify-center lg:justify-start">
          <button
            onClick={handlePrev}
            className="p-3 border rounded-full hover:bg-gray-200 transition"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="p-3 border rounded-full hover:bg-gray-200 transition"
          >
            &#8594;
          </button>
        </div>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-full lg:w-1/2">
        <blockquote className="text-lg text-gray-800 italic mb-4">
          “{testimonials[currentIndex].quote}”
        </blockquote>
        <div className="flex items-center gap-4">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-bold">{testimonials[currentIndex].name}</p>
            <p className="text-sm text-gray-500">{testimonials[currentIndex].title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
