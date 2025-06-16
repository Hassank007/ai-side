"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = ({ target, duration = 2000, suffix = '', isVisible }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = parseFloat(target);
      const incrementTime = 50; // ms
      const steps = Math.floor(duration / incrementTime);
      const increment = (end / steps);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isVisible, target, duration]);

  const formatNumber = (num) => {
    // If the target already contains 'M', assume it's already in millions and don't divide.
    if (target.includes('M')) {
      return num; // num will be the parsed float from target, e.g., 17 for "17M"
    }
    return Math.floor(num);
  };

  return <span ref={ref}>{formatNumber(count)}{suffix}</span>;
};

const Section5 = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <div ref={sectionRef} className="h-screen w-full bg-transparent text-white flex flex-col justify-center items-center px-4 sm:px-8 relative overflow-hidden">
      {/* Background diagonal lines */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="10" height="10">
              <path d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke="#22c55e" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>
      </div>

      <div className="max-w-7xl w-full text-left mb-8 sm:mb-16 relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-white leading-tight">
          We don't sell AI. We sell <i className="font-normal">Results.</i>
        </h1>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 relative z-10 gap-6 sm:gap-10">
        {/* Item 1 */}
        <div className="flex flex-col items-start pt-4 sm:pt-8 pb-4 border-b border-[#469C71]">
          <div className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-2">
            <Counter target="17" suffix="M+" isVisible={isInView} />
          </div>
          <p className="text-base sm:text-lg text-gray-300">Professionals upskilled in AI via our platforms</p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-start pt-4 sm:pt-8 pb-4 border-b border-[#469C71]">
          <div className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-2">
            <Counter target="435" suffix="+" isVisible={isInView} />
          </div>
          <p className="text-base sm:text-lg text-gray-300">AI Opportunities identified for businesses</p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-start pt-4 sm:pt-8 pb-4 border-b border-[#469C71]">
          <div className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-2">
            <Counter target="55" suffix="+" isVisible={isInView} />
          </div>
          <p className="text-base sm:text-lg text-gray-300">Bespoke AI solutions developed</p>
        </div>
      </div>

      <div className="w-full max-w-7xl text-left pt-4 relative z-10">
        <a href="#" className="text-[#469C71] hover:text-green-400 text-base sm:text-lg flex items-center group">
          Watch our content here <span className="ml-2 transition-transform group-hover:translate-x-1">↗</span>
        </a>
      </div>
    </div>
  );
};

export default Section5; 