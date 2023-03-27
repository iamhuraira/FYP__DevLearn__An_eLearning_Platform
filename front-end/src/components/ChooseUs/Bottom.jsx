import React from "react";
import visual from "../../assets/img/LandingPageImg/visual.png";

const Bottom = () => {
  return (
    <div>
      {/* //top container */}
      <div className="bottom-ctnt">
        <div className="bottom-left">
          <p>CODE WALKTHROUGH</p>
          <h2>
            Our contents are curated by top <span>industry experts</span>
          </h2>
          <p>
            We handpick content from top-notch industry experts and convert it
            into highly engaging visual videos with the help of animations.
          </p>
        </div>
        <div className="bottom-right">
          <img src={visual} alt="visualize" />
        </div>
      </div>
    </div>
  );
};

export default Bottom;
