"use client"
import React, { useRef, useState, useEffect } from 'react';

const sections = [
  {
    id: 'identify',
    title: 'Identify',
    description:
      'We help you identify high-impact AI opportunities and build a step-by-step AI Transformation strategy to bring them to life.',
  },
  {
    id: 'educate',
    title: 'Educate',
    description:
      'Empower your teams with tailored AI training programs, hands-on workshops, and practical toolkits that drive adoption.',
  },
  {
    id: 'develop',
    title: 'Develop',
    description:
      'Collaborate with our experts to architect, build, and scale AI solutions that generate measurable value.',
  },
];

export default function ScrollSections() {
  const [active, setActive] = useState(sections[0].id);
  const refs = useRef({});

  useEffect(() => {
    const observers = [];
    Object.keys(refs.current).forEach((key) => {
      const element = refs.current[key];
      if (!element) return;
      const observer = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setActive(key),
        { root: null, rootMargin: '-45% 0px -45% 0px', threshold: 0 }
      );
      observer.observe(element);
      observers.push(observer);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // Single page background gradient
  const pageGradient = 'bg-gradient-to-br from-green-800 via-green-900 to-black';

  return (
    <div className="h-screen flex flex-col md:flex-row bg-transparent">      
      {/* Left Panel - Hidden on mobile, shown on desktop */}
      <nav className="hidden md:flex sticky top-0 h-screen flex-col justify-center pl-12 bg-transparent">
        <ul className="space-y-6">
          {sections.map((sec) => (
            <li
              key={sec.id}
              className={`cursor-pointer uppercase ${
                active === sec.id
                  ? 'text-white text-base font-semibold tracking-normal border-l-2 border-green-500 pl-4'
                  : 'text-gray-300 text-sm tracking-widest'
              }`}
              onClick={() => refs.current[sec.id]?.scrollIntoView({ behavior: 'smooth' })}
            >
              {sec.title}
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content Area */}
      <div className="w-full md:w-4/5 flex flex-col h-screen">
        {/* Scrollable Sections */}
        <div className="flex-1 overflow-y-auto scrollbar-hide snap-y snap-mandatory relative">
          {sections.map((sec) => (
            <section
              key={sec.id}
              ref={(el) => (refs.current[sec.id] = el)}
              className="snap-start h-screen flex flex-col items-center justify-center text-center text-white"
            >
              <div className="space-y-8 max-w-2xl px-12">
                <h1 className="text-6xl font-bold leading-tight">{sec.title}</h1>
                <p className="text-lg leading-relaxed max-w-xl mx-auto text-gray-300">{sec.description}</p>
              </div>
            </section>
          ))}
        </div>

        {/* Bottom Navigation - Shown on mobile, hidden on desktop */}
        <nav className="md:hidden bg-black/80 backdrop-blur-sm py-4 z-10">
          <ul className="flex justify-around items-center">
            {sections.map((sec) => (
              <li
                key={sec.id}
                className={`cursor-pointer uppercase ${
                  active === sec.id
                    ? 'text-white text-sm font-semibold tracking-normal border-b-2 border-green-500 pb-1'
                    : 'text-gray-300 text-xs tracking-widest'
                }`}
                onClick={() => refs.current[sec.id]?.scrollIntoView({ behavior: 'smooth' })}
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
