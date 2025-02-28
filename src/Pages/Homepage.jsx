import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import SliderBox from '../components/Slider/SliderBox'
import Footer from '../components/Footer/Footer'
import About from '../components/About/About'

const Homepage = () => {
  const slidesData = [
    { image: "https://github.com/Pradeep-Raja18/Hackathon-2025/blob/main/src/assets/Images/slide-1.png?raw=true"},
    { image: "https://github.com/Pradeep-Raja18/Hackathon-2025/blob/main/src/assets/Images/slide-2.png?raw=true" },
    { image: "https://github.com/Pradeep-Raja18/Hackathon-2025/blob/main/src/assets/Images/slide-3.png?raw=true" }
];
  return (
    <div className="dcodeblock-page">
        <Header />
        <Hero />
        <SliderBox slides={slidesData} slidesToShow={1.5} />
        <About />
        <Footer />
    </div>
  )
}

export default Homepage