import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderBox = ({ slides, slidesToShow}) => {
    const settings = {
        infinite: true,
        speed: 20000,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: false,
        arrows: false
    };

    return (
        <div className="slider">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div className="slider-box">
                      <div className="img-box">
                      <img key={index} src={slide.image} alt={`slide-${index + 1}`} />
                    </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderBox;
