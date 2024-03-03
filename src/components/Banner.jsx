
import React, { useRef } from 'react';
import logo from "../assets/images/gaming-logo.png";
import particle from "../assets/images/partical.png";
import particlee from "../assets/images/partical2.png";
import white from "../assets/images/white-logo.png";
import black from "../assets/images/black-logo.png";
import orange from "../assets/images/frame-banner.png";
import video from "../assets/images/video.mp4";
import icon from "../assets/images/icon-play.png";

const Banner = () => {
  const videoRef = useRef(null); // Create a ref for the video element

  // Function to toggle play/pause
  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  return (
    <section className="hero-section pt-5 mb-5">
      <div className="container">
        <div className="main-haeding">
          <img src={particle} alt="Twitch" className="heading-partical" />
          <h1 className="text-center banner-heading">
            Next Generation Get Your Desierd Rank Now
          </h1>
          <img src={particlee} alt="Twitch" className="heading-partical-two" />
        </div>
      </div>
      <div className="banner-secction py-5">
        <img src={white} alt="white" className="w-100 white" />
        <div>
          <img src={black} alt="black" className="w-100 black-logo-img" />
          
          <div className="container">
  <img src={orange} alt="Frame" className="frame" />
  <img src={icon} alt="Frame" className="icon-play"  onClick={handlePlayPause} />
  <video ref={videoRef} className="video-in-frame" controls>
    <source src={video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  
</div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
