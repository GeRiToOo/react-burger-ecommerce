import React from "react";
import "./SpecialOffer.scss";

const SpecialOffer = () => {
  return (
    <div className="SpecialOffer">
      <div className="filter"></div>
      <div className="alert">
        <img src={require("../../images/special.png")} alt="" />
      </div>
      >
      <div className="content">
        <h1>homemade burger</h1>
        <button>get started</button>
      </div>
    </div>
  );
};

export default SpecialOffer;
