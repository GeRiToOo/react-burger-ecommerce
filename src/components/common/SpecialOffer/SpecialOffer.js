import React from "react";
import { Link } from "react-router-dom";

import "./SpecialOffer.scss";

const SpecialOffer = () => {
  return (
    <div className="SpecialOffer">
      <div className="filter"></div>
      <div className="alert">
        <img src={require("../../images/special.png")} alt="" />
      </div>

      <div className="content">
        <h1>homemade burger</h1>
        <button>
          <Link to="/recipes">get started</Link>
        </button>
      </div>
    </div>
  );
};

export default SpecialOffer;
