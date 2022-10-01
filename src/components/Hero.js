import React from "react";
import "./Hero.css";
import { Player } from "@lottiefiles/react-lottie-player";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        {/* Left Side */}
        <div className="left">
          <h1>Start your crypto journey with Mimo_Dev</h1>
          <p>Buy, Sell, and store all coding cryptos with Mimo_dev</p>
          <div className="input-container">
            <input type="email" placeholder="Enter your email here" />
            <button className="btn">Learn More</button>
          </div>
        </div>

        {/* Right Side */}

        <div className="img-container">
          <Player
            src="https://assets8.lottiefiles.com/packages/lf20_6q3x8d8e.json"
            className="player"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
