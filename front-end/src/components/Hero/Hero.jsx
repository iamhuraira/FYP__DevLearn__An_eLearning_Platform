import React from "react";
import grow from "../../assets/img/LandingPageImg/grow.png";

const Hero = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="content">
          <h2>
            Grow your <br />
            programming skills <br />
            through <span>visualization</span> <br />
          </h2>
          <p>
            Learn programming, data structures & algorithms, and prepare for the
            interview - all in one place
          </p>
          <button className="p-btn">
            <h3> Join Now! </h3>
          </button>
        </div>
      </div>
      <div className="right">
        <img src={grow} alt="programmer" />
      </div>
    </div>
  );
};

export default Hero;
