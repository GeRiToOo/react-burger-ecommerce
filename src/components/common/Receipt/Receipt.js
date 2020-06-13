import React from "react";
import "./Receipt.scss";

const Receipt = () => {
  return (
    <div className="Receipt">
      <div className="content">
        <div className="title">
          <div className="titleContent">
            <p>fresh</p>
            <div className="ingredients">ingredients</div>
          </div>
        </div>
        <div className="ingredientsList">
          <ul className="columnOne">
            <li>10 oz</li>
            <li>10 oz</li>
            <li>10 oz</li>
            <li>10 oz</li>
            <li>10 oz</li>
            <li>10 oz</li>
            <li>10 oz</li>
          </ul>
          <ul className="columnTwo">
            <li>Ground beef</li>
            <li>Ground beef</li>
            <li>Ground beef</li>
            <li>Ground beef</li>
            <li>Ground beef</li>
            <li>Ground beef</li>
            <li>Ground beef</li>
          </ul>
        </div>
      </div>
      <div className="cheese">
        <img src={require("../../images/cheese.png")} alt="" />
      </div>
      <div className="vegetables">
        <img src={require("../../images/vegetables.png")} alt="" />
      </div>
      <div className="cheeseTwo">
        <img src={require("../../images/cheese.png")} alt="" />
      </div>
      <div className="carrot">
        <img src={require("../../images/carrot.png")} alt="" />
      </div>
    </div>
  );
};

export default Receipt;
