import React from 'react'
import Slide1 from '../../assets/Images/slide-1.png'
import Slide2 from '../../assets/Images/slide-2.png'
import Slide3 from '../../assets/Images/slide-3.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderBox = () => {
    const settings = {
        infinite: true,
        speed: 20000,
        slidesToShow: 1.3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: false,
        arrows:false
    };
  return (
    <div className="slider">
       <Slider {...settings}>
        <img src={Slide1} alt="slide" />
        <img src={Slide2} alt="slide" />
        <img src={Slide3} alt="slide" />
        </Slider>
    </div>
  )
}

export default SliderBox