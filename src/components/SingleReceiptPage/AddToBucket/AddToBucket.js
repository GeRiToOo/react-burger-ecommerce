import React from "react";
import "./AddToBucket.scss";

const AddToBucket = () => {
  return (
    <div className="addToBucket">
      <div className="description">
        <div className="content">
          <div className="name">bacon plant</div>

          <div className="time">
            <img src={require("../../images/clock.png")} alt="" />
            <p>55 min</p>
          </div>

          <div className="moreInfo">
            <div className="servings">
              <img src={require("../../images/tools.png")} alt="" />
              <p>2 Servings</p>
            </div>

            <div className="cals">
              <img src={require("../../images/fruit.png")} alt="" />
              <p>20 Calc/Servings</p>
            </div>
          </div>
          <p>
            Plant-based burger, THIS Isn’t Bacon, vegan smoked gouda, shoestring
            fries, vegan bacon ketchup, chipotle ‘mayo’, spinach and pickles
            with rosemary salted chips
          </p>

          <button>Add to bucket</button>
        </div>
      </div>
      <div className="picture">
        <div className="image_wrapper">
          <img src={require("../../images/sandwitch.png")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AddToBucket;
