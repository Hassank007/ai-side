"use client";
import React, { useRef, useState, useEffect } from "react";

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

export default function ScrollSections() {
  const [active, setActive] = useState(sections[0].id);
  const refs = useRef({});
  const containerRef = useRef(null);
  const [isThrottled, setIsThrottled] = useState(false);

  // Highlight active section via IntersectionObserver
  useEffect(() => {
    const observers = Object.keys(refs.current)
      .map((key) => {
        const el = refs.current[key];
        if (!el) return null;
        const obs = new IntersectionObserver(
          ([entry]) => entry.isIntersecting && setActive(key),
          { root: null, rootMargin: "-45% 0px -45% 0px", threshold: 0 }
        );
        obs.observe(el);
        return obs;
      })
      .filter(Boolean);

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // Wheel handler to page-snap with delay + throttle
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();
      if (isThrottled) return;
      setIsThrottled(true);

      const dir = e.deltaY > 0 ? 1 : -1;
      const currentIndex = sections.findIndex((s) => s.id === active);
      let nextIndex = currentIndex + dir;
      nextIndex = Math.max(0, Math.min(sections.length - 1, nextIndex));
      const nextId = sections[nextIndex].id;

      // small delay before scrolling
      setTimeout(() => {
        refs.current[nextId]?.scrollIntoView({ behavior: "smooth" });
      }, 150);

      // release throttle after animation (~700ms)
      setTimeout(() => {
        setIsThrottled(false);
      }, 850);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [active, isThrottled]);

  return (
    <div
      className="h-screen flex flex-col md:flex-row bg-transparent text-white"
    >
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
              onClick={() =>
                refs.current[sec.id]?.scrollIntoView({ behavior: "smooth" })
              }
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
          {sections.map((sec) => (
            <section
              key={sec.id}
              ref={(el) => (refs.current[sec.id] = el)}
              id={sec.id}
              className="h-screen flex flex-col items-center justify-center text-center px-8"
            >
              <h1 className="text-6xl font-bold mb-4">{sec.title}</h1>
              <p className="text-lg max-w-xl text-gray-300">
                {sec.description}
              </p>
            </section>
          ))}
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
                onClick={() =>
                  refs.current[sec.id]?.scrollIntoView({ behavior: "smooth" })
                }
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
