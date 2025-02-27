import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import SliderBox from '../components/Slider/SliderBox'
import Footer from '../components/Footer/Footer'
import About from '../components/About/About'

const Homepage = () => {
  return (
    <div className="dcodeblock-page">
        <Header />
        <Hero />
        <SliderBox />
        <About />
        <Footer />
    </div>
  )
}

export default Homepage