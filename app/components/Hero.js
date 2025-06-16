"use client"
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const words = ['Development', 'Innovation', 'Solutions', 'Future'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fading out
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade(true); // Start fading in
      }, 500); // Half a second for fade out
    }, 5000); // Change word every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen text-white flex flex-col justify-center items-center overflow-hidden">
      {/* Placeholder for live background */}
     

      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 leading-tight">
          We are not an AI
          <br />
          <span className={`text-[#469C71] transition-opacity duration-500 italic ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}>
            {words[currentWordIndex]}
          </span>
          <br />
          Company
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mt-4 sm:mt-6 md:mt-8">
          We are all of the above.
        </p>
      </div>

      {/* Top right "Get In Touch" button */}
      <div className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 z-20">
        <button className="flex items-center space-x-2 px-3 sm:px-4 py-1 border border-white text-white rounded-full text-sm sm:text-md hover:bg-white hover:text-black transition-colors duration-300">
          <span>Get In Touch</span>
          <span className="ml-1 sm:ml-2 transform -rotate-45 text-xl sm:text-2xl">&rarr;</span>
        </button>
      </div>

      {/* Top left logo */}
      <div className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 z-20 flex items-center space-x-2">
        {/* Placeholder for logo - replace with actual SVG or image */}
        <span className="text-white text-xl sm:text-2xl md:text-3xl">morningside</span>
      </div>
    </div>
  );
};

export default Hero;
