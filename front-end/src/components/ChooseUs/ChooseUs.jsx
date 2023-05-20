import React from "react";
import Mid from "./Mid";
import Top from "./Top";
import Bottom from "./Bottom";

const ChooseUs = () => {
  return (
    <>
      <div className="container-heading">
        <h1> Why learners choose us?</h1>
      </div>
      {/* content */}
      <div className="chooseUs">
        <Top />
        <Mid />
        <Bottom />
      </div>
    </>
  );
};

export default ChooseUs;
