import React from 'react'
import Headerbottom from '../../assets/Images/header-bottom.png'
import singularityNET from "../../assets/Images/singularityNET.png"
import Hackindia from "../../assets/Images/hackindia.png"
import HeroVideo from './HeroVideo/HeroVideo'
import Navbar from './Navbar/Navbar'


const Hero = () => {
  return (
    <div className="hero-section">
        <div className="header-border-style">
            <img src={Headerbottom} width="100%" />
        </div>

       <HeroVideo />

       <Navbar />

        <div className="hero-content">
            <div className="container">
                <div className="singualarity-net">
                    <div className="img-wrapper">
                        <img src={singularityNET} alt="singularityNET" />
                    </div>
                </div>
                <div className="hackindia">
                    <div className="img-wrapper">
                        <img src={Hackindia} alt="" />
                    </div>
                </div>
                <div className="hero-tagline">
                    <h2>India’s Biggest Web3 & AI Hackathon</h2>
                </div>
                <a href="" className="hero-btn">February 28 - September 28</a>

                <div className="hero-stats">
                    <div className="price-pool stats-box">
                        <h4><span className="orange-text">$150+ </span>Price Pool</h4>
                    </div>
                    <div className="university stats-box">
                        <h4><span className="orange-text">150+ </span>University</h4>
                    </div>
                    <div className="students stats-box">
                        <h4><span className="orange-text">25,000+ </span>Students</h4>
                    </div>
                </div>

                <div className="svg-button register-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="210" height="63" viewBox="0 0 210 63" fill="none">
                        <path className="content-svg" d="M2.4 56.757H0.35V62.65H5.65V0.350002H0.35V42.3633L2.67077 45.1968L2.75 45.2936V45.4186V56.407V56.757H2.4Z" stroke="#B026FF" stroke-width="0.7"/>
                        <path className="svg-left" d="M64.4032 7.92397L64.5134 7.98276H64.6384H209.5V49.497L197.265 61.5H9.5V0.5H50.4785L64.4032 7.92397Z" fill="#D9D9D9" fill-opacity="0.05" stroke="#B026FF"/>
                        </svg>
                    <div className="svg-content">
                        Register now!
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero