import React from "react";
import visual from "../../assets/img/LandingPageImg/buckit.gif";

const Mid = () => {
  return (
    <div className="mid-content">
      <div className="right">
        <img src={visual} alt="visualize" />
      </div>
      <div className="left-content-mid">
        <p>LEARN FASTER</p>
        <h2>
          Learn coding in <span>Fun & Faster</span> way
        </h2>
        <p>
          Important and complex topics are connected to real life events which
          will make the learning fun and will last forever in one's mind.
        </p>
      </div>
    </div>
  );
};

export default Mid;
