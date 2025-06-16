import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const logos = [
  '/box.png',
  '/stackless.png',
  '/asmuss.png',
  '/realestateu.png',
  '/centcps.png',
  '/milwaukeebucks.png',
  '/citation.png',
  '/readyrns.png',
];

const LogoCarousel = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent px-4 sm:px-6 md:px-8">
      <div className="relative w-full overflow-hidden py-6 sm:py-8 md:py-12">
        <div className="flex animate-marquee whitespace-nowrap">
          {logos.map((logo, index) => (
            <div key={index} className="mx-4 sm:mx-6 md:mx-8 flex justify-center items-center flex-shrink-0">
              <Image 
                src={logo} 
                alt={`Logo ${index + 1}`} 
                width={120} 
                height={60} 
                className="w-20 sm:w-24 md:w-[120px] h-auto"
                objectFit="contain" 
              />
            </div>
          ))}
          {/* Duplicate logos to create a seamless loop */}
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="mx-4 sm:mx-6 md:mx-8 flex justify-center items-center flex-shrink-0">
              <Image 
                src={logo} 
                alt={`Logo ${index + 1}`} 
                width={120} 
                height={60} 
                className="w-20 sm:w-24 md:w-[120px] h-auto"
                objectFit="contain" 
              />
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-6 sm:mt-8 md:mt-12 mb-4 sm:mb-6 md:mb-8 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white leading-tight">
          The best AI systems <br /> are built <span className="text-[#469C71]">side by side.</span>
        </h2>
      </div>
      <button className="mt-6 sm:mt-8 px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 border-2 border-white text-white rounded-full text-2xl sm:text-3xl md:text-4xl hover:bg-white hover:text-black transition-colors duration-300">
        Let's Partner Up <FaArrowRight className="ml-2 inline-block" />
      </button>
    </div>
  );
};

export default LogoCarousel; 