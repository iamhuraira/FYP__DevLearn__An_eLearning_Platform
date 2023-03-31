import React from "react";
import heroGif from "../../assets/./img/./LandingPageImg/heo.gif"

const Hero = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="content">
          <h2>
            Grow your
            programming skills 
            through <span>visualization</span> 
          </h2>
          <p>
            Learn programming, data structures & algorithms, and prepare for the interview - all in one place.
          </p>
          <button className="p-btn">
            <h3> Join Now! </h3>
          </button>
        </div>
      </div>
      <div className="right">
        <img src={heroGif} alt=""  />
      </div>
    </div>
  );
};

export default Hero;
