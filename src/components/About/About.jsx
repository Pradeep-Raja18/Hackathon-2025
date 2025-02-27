import React from 'react'
import Effect from '../../assets/Images/effect.png'
import CountUp from "react-countup";

const About = () => {
    const statsData = [
        { count: 150, label: "Judges" },
        { count: 21, label: "Hackathons" },
        { count: 21, label: "Great Speakers" }
    ];
  return (
    <div className="about">
        <div className="container">
            <div className="about-wrapper">
                <div className="left-about">
                    <div className="about-stats">
                        <div className="participation">
                            <div className="counter-text"><CountUp start={100} end={150} duration={2.5}/>+</div>
                            <p>Universities participating</p>
                        </div>
                        <div className="total-stats">
                        {statsData.map((stat, index) => (
                            <div className="stats-box" key={index}>
                                <div className="counter-text">
                                    <CountUp start={0} end={stat.count} duration={2.5} />+
                                </div>
                                <p>{stat.label}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
                <div className="right-about">
                    <div className="yt-box">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/gi1kkMbfNAE?si=i7chN8wSxU-YVD34" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
        <div className="effect">
            <img src={Effect} alt="" />
        </div>
    </div>
  )
}

export default About