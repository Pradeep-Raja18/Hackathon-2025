import React from "react";
import Herovideo from "../../../assets/Images/Hero-video.mp4";

const HeroVideo = () => {
  return (
    <div className="video-container">
      <video autoPlay muted loop playsInline>
        <source src={Herovideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HeroVideo;
