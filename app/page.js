import React from 'react'
import Hero from './components/Hero'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section6 from './components/Section6'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import LogoCarousel from './components/LogoCarousel'

const Page = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] bg-gradient-to-br from-black via-green-950 via-green-900 via-green-950 to-black text-white">
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
        <Section4 />
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
  )
}

export default Page
