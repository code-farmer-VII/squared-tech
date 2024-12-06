import React from "react";
import image from "../assets/Image/gradiant line.png";
import logo from "../assets/Image/logo square.png";

function HeroContact() {


  return (
<div className="relative bg-cover bg-center h-96 md:h-[400px] mb-12" >
      <div className="absolute inset-0 bg-opacity-50"></div>
      
      <div className="relative flex flex-col items-center justify-center text-center text-black px-6 pb-12">
      <img
          src={`${image}`} 
          alt="Background Graphic"
          className="absolute top-0  bottom-0  w-960 h-80 md:w-[400px] md:h-[400px] opacity-15"
        />
        <div className="mb-6 py-6"> 
          <img 
            src={`${logo}`} 
            alt="Company Logo" 
            className="w-24 h-24 md:w-36 md:h-36 object-contain"
          />
        </div>
        <div className="bg-gradient-to-r from-purple-800 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
  <h1 className="text-4xl md:text-6xl font-bold mb-4">#Squared Tech Solution</h1>
</div>

        <h1 className="text-1xl md:text-2xl font-bold mb-4">Technology</h1>
        
        <p className="text-lg md:text-xl max-w-3xl">
         <span className="text-4xl font-extrabold">''</span> Together, we can achieve greatness, break barriers, and create innovative solutions. Let’s join hands, combine our strengths, and work towards a brighter and successful future!
         <span className="text-4xl font-extrabold">''</span>
        </p>
      </div>
    </div>
  );
}

export default HeroContact;
