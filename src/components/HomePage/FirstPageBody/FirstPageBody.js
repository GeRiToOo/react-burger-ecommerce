import React from "react";
import "./FirstPageBody.scss";

const FirstPageBody = () => {
  return (
    <div className="FirstPageBody">
      <div className="content">
        <div className="first">
          <div>
            <h2>Choose your meals</h2>
            <p>
              Our chef-designed recipes include balanced Mediterranean meals,
              quick one-pan dinners, and top-rated customer favorites.
            </p>
          </div>
        </div>
        <div className="second">
          <div>
            <h2>Unpack your box</h2>
            <p>
              We guarantee the freshness of all our ingredients and deliver them
              in an insulated box right to your door.
            </p>
          </div>
        </div>
        <div className="third">
          <div>
            <h2>Create magic</h2>
            <p>
              Following our step-by-step instructions you’ll experience the
              magic of cooking recipes that our chefs create with your family’s
              tastes in mind.
            </p>
          </div>
        </div>

        <div className="spaghetti">
          <img src={require("../../images/spaghetti.png")} alt="" />
        </div>
        <div className="groceries">
          <img src={require("../../images/groceries.png")} alt="" />
        </div>
        <div className="juice">
          <img src={require("../../images/juice.png")} alt="" />
        </div>
        <div className="cheese">
          <img src={require("../../images/cheese.png")} alt="" />
        </div>
        <div className="vegetables">
          <img src={require("../../images/vegetables.png")} alt="" />
        </div>
        <div className="carrot">
          <img src={require("../../images/carrot.png")} alt="" />
        </div>
      </div>
      <div className="pictures">
        <div className="firstImage">
          <img src={require("../../images/listOne.png")} alt="image" />
        </div>
        <div className="secondImage">
          <img src={require("../../images/listTwo.png")} alt="image" />
        </div>
        <div className="thirdImage">
          <img src={require("../../images/listThree.png")} alt="image" />
        </div>
      </div>
    </div>
  );
};
export default FirstPageBody;
