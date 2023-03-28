import React from "react";
import visual from "../../assets/img/LandingPageImg/sbs.gif";

const Top = () => {
  return (
    <div>
      {/* //top container */}
      <div className="content-top">
        <div className="left-content-top">
          <p>CODE WALKTHROUGH</p>
          <h2>
            Visualize <span>step-by-step</span> code execution
          </h2>
          <p>
            With our step-by-step code walkthrough, you can visualize what happens in computer memory when each and every line of code executes.
          </p>
        </div>
        <div className="right">
          <img src={visual} alt="visualize" />
        </div>
      </div>
    </div>
  );
};

export default Top;
