"use client"

import React, { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import LogoCarousel from './components/LogoCarousel'

export default function Page() {
  const containerRef = useRef(null)
  const [isThrottled, setIsThrottled] = useState(false)
  const [showLoader, setShowLoader] = useState(true)
  const [activeSection, setActiveSection] = useState(0)
  const [pauseMainScroll, setPauseMainScroll] = useState(false)
  const sections = [
    'section1',
    'section2',
    'section3',
    'section4',
    'section5',
    'section6',
    'section7',
  ]

  // hide loader after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  // wheel‑to‑snap logic, disabled while loader is showing or when pauseMainScroll is true
  useEffect(() => {
    if (showLoader || pauseMainScroll) return

    const container = containerRef.current
    if (!container) return

    const handleWheel = (e) => {
      e.preventDefault()
      if (isThrottled) return

      setIsThrottled(true)
      const scrollTop = container.scrollTop
      const currentSection = Math.round(scrollTop / window.innerHeight)
      setActiveSection(currentSection)
      const threshold = 50
      const dir = Math.abs(e.deltaY) > threshold ? (e.deltaY > 0 ? 1 : -1) : 0
      if (dir === 0) {
        setIsThrottled(false)
        return
      }
      // If we're on Section4, pause main scroll and let Section4 handle it
      if (sections[currentSection] === 'section4') {
        setPauseMainScroll(true)
        setIsThrottled(false)
        return
      }
      const nextIndex = Math.min(
        Math.max(currentSection + dir, 0),
        sections.length - 1
      )
      if (nextIndex !== currentSection) {
        const targetY = nextIndex * window.innerHeight
        container.scrollTo({ top: targetY, behavior: 'smooth' })
      }
      setTimeout(() => {
        setIsThrottled(false)
      }, 700)
    }
    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [showLoader, isThrottled, pauseMainScroll])

  // Callback for Section4 to resume main scroll
  const handleSection4Exit = (direction) => {
    setPauseMainScroll(false)
    const container = containerRef.current
    if (container) {
      let targetIndex
      if (direction === 'up') {
        targetIndex = sections.indexOf('section4') - 1
      } else {
        targetIndex = sections.indexOf('section4') + 1
      }
      targetIndex = Math.max(0, Math.min(sections.length - 1, targetIndex))
      const targetY = targetIndex * window.innerHeight
      container.scrollTo({ top: targetY, behavior: 'smooth' })
    }
  }

  return (
    <>
      <AnimatePresence>
        {showLoader && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <motion.h1
              className="text-6xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              transition={{ duration: 0.5 }}
            >
              morning side
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        ref={containerRef}
        className="
          h-screen
          overflow-y-scroll
          scroll-smooth
          snap-y snap-mandatory
          [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:'none']
          [scrollbar-width:'none']
          bg-gradient-to-br
          from-black
          via-green-950/50
          to-black
          text-white
        "
      >
        <section className="h-screen w-full snap-start" id="section1">
          <Hero />
        </section>
        <section className="h-screen w-full snap-start" id="section2">
          <Section2 />
        </section>
        <section className="h-screen w-full snap-start" id="section3">
          <Section3 />
        </section>
        <section className="h-screen w-full snap-start" id="section4">
          <Section4
            isActive={activeSection === 3}
            onExit={handleSection4Exit}
            pauseMainScroll={pauseMainScroll}
            setPauseMainScroll={setPauseMainScroll}
          />
        </section>
        <section className="h-screen w-full snap-start" id="section5">
          <Section5 />
        </section>
        <section className="h-screen w-full snap-start" id="section6">
          <LogoCarousel />
        </section>
        <section className="h-screen w-full snap-start" id="section7">
          <Section6 />
        </section>
      </div>
    </>
  )
}
