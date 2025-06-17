"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    id: "identify",
    title: "Identify",
    description:
      "We help you identify high-impact AI opportunities and build a step-by-step AI Transformation strategy to bring them to life.",
  },
  {
    id: "educate",
    title: "Educate",
    description:
      "Empower your teams with tailored AI training programs, hands-on workshops, and practical toolkits that drive adoption.",
  },
  {
    id: "develop",
    title: "Develop",
    description:
      "Collaborate with our experts to architect, build, and scale AI solutions that generate measurable value.",
  },
];

export default function ScrollSections({ isActive, onExit, pauseMainScroll, setPauseMainScroll }) {
  const [active, setActive] = useState(sections[0].id);
  const [isThrottled, setIsThrottled] = useState(false);
  const containerRef = useRef(null);

  // Reset tab to first when not active
  useEffect(() => {
    if (!isActive) {
      setActive(sections[0].id);
    }
  }, [isActive]);

  // Wheel handler for tab transitions, only when isActive
  useEffect(() => {
    if (!isActive) return;
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();
      if (isThrottled) return;
      const currentIndex = sections.findIndex((s) => s.id === active);
      const isLastSection = currentIndex === sections.length - 1;
      const isFirstSection = currentIndex === 0;
      setIsThrottled(true);
      // Scroll up on first tab: notify parent to go to previous section
      if (isFirstSection && e.deltaY < 0) {
        setIsThrottled(false);
        setPauseMainScroll(false);
        if (onExit) onExit('up');
        return;
      }
      // Scroll down on last tab: only trigger onExit if already on last tab and user scrolls down again
      if (isLastSection && e.deltaY > 0) {
        setIsThrottled(false);
        setPauseMainScroll(false);
        if (onExit) onExit('down');
        return;
      }
      // Otherwise, switch tab
      const nextIndex = e.deltaY > 0
        ? Math.min(currentIndex + 1, sections.length - 1)
        : Math.max(currentIndex - 1, 0);
      setActive(sections[nextIndex].id);
      setTimeout(() => {
        setIsThrottled(false);
      }, 500);
    };
    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [isActive, active, isThrottled, onExit, setPauseMainScroll]);

  return (
    <div className="h-screen flex flex-col md:flex-row bg-transparent text-white">
      {/* Left Panel - Desktop */}
      <nav className="hidden md:flex sticky top-0 h-screen flex-col justify-center pl-12">
        <ul className="space-y-6">
          {sections.map((sec) => (
            <li
              key={sec.id}
              className={`cursor-pointer uppercase ${
                active === sec.id
                  ? "text-white text-base font-semibold border-l-2 border-[#469C71] pl-4"
                  : "text-gray-400 text-sm"
              }`}
              onClick={() => setActive(sec.id)}
            >
              {sec.title}
            </li>
          ))}
        </ul>
      </nav>
      {/* Main Content Area */}
      <div className="w-full md:w-4/5 flex flex-col h-screen">
        <div
          ref={containerRef}
          className="
            flex-1
            relative
            overflow-hidden
          "
        >
          <AnimatePresence mode="wait">
            {sections.map((sec) => (
              sec.id === active && (
                <motion.section
                  key={sec.id}
                  id={sec.id}
                  className="h-screen flex flex-col items-center justify-center text-center px-8 absolute inset-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h1 className="text-6xl font-bold mb-4">{sec.title}</h1>
                  <p className="text-lg max-w-xl text-gray-300">
                    {sec.description}
                  </p>
                </motion.section>
              )
            ))}
          </AnimatePresence>
        </div>
        {/* Bottom Nav - Mobile */}
        <nav className="md:hidden bg-black/70 backdrop-blur-sm py-4">
          <ul className="flex justify-around">
            {sections.map((sec) => (
              <li
                key={sec.id}
                className={`cursor-pointer uppercase ${
                  active === sec.id
                    ? "text-white text-sm font-semibold border-b-2 border-[#469C71] pb-1"
                    : "text-gray-400 text-xs"
                }`}
                onClick={() => setActive(sec.id)}
              >
                {sec.title}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
