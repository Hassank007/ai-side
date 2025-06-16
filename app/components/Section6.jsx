import React from 'react';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';

const Section6 = () => {
  return (
    <div className="bg-transparent text-white min-h-screen flex flex-col justify-between p-4 md:p-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5 gap-4 md:gap-0">
        <h1 className="text-3xl md:text-5xl">
          Accelerate your <span className="text-[#469C71]">AI adoption</span> journey.
        </h1>
        <span className="text-white text-2xl md:text-3xl font-semibold">morningside</span>
      </div>
      <div className="flex-grow">{/* Placeholder for the main content area */}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end pt-10 gap-8 md:gap-0">
        <div className="flex flex-col">
          <p className="font-bold mb-2">CONTACT</p>
          <p className="text-gray-300 mb-5">info@morningside.ai</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-transparent border border-white text-white py-2 px-4 rounded-full flex items-center gap-2 hover:bg-[#469C71] hover:text-black transition-colors duration-300">
              Get In Touch
              <FiArrowUpRight />
            </button>
            <button className="bg-transparent border border-white text-white py-2 px-4 rounded-full flex items-center gap-2 hover:bg-[#469C71] hover:text-black transition-colors duration-300">
              Explore Careers
              <FiArrowUpRight />
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-5">
          <p className="text-gray-300 mb-1">TERMS & CONDITIONS</p>
          <p className="text-gray-300">PRIVACY POLICY</p>
        </div>
        <div className="flex flex-col">
          <p className="font-bold mb-2">FOLLOW</p>
          <p className="text-gray-300 mb-1">LINKEDIN</p>
          <p className="text-gray-300">YOUTUBE</p>
        </div>
      </div>
    </div>
  );
};

export default Section6; 