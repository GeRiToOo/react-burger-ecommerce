import React from "react";
import Sandwiches from "./Sandwiches/Sandwiches";
// import ReceiptPage from "../../ReceiptPage/ReceiptPage";
import "./RecipesPageContent.scss";

const RecipesPageContent = ({ seeMore, recipes }) => {
  return (
    <div className="RecipesPageContent">
      <div className="title">
        <h1>Explore our Menus</h1>
        <p>
          Choose from an ever-changing mix of meat, fish, Beyond Meat™, WW
          Approved, Diabetes Friendly recipes and health-conscious offerings.
        </p>
      </div>
      <Sandwiches recipes={recipes} />
      <button onClick={seeMore}>See more</button>

      <div className="spaghetti">
        <img src={require("../../images/spaghetti.png")} alt="" />
      </div>
      <div className="groceries">
        <img src={require("../../images/groceries.png")} alt="" />
      </div>
      <div className="juice">
        <img src={require("../../images/juice.png")} alt="" />
      </div>
      <div className="juiceSecond">
        <img src={require("../../images/juice.png")} alt="" />
      </div>
      <div className="cheese">
        <img src={require("../../images/cheese.png")} alt="" />
      </div>
      <div className="cheeseSecond">
        <img src={require("../../images/cheese.png")} alt="" />
      </div>
      <div className="vegetables">
        <img src={require("../../images/vegetables.png")} alt="" />
      </div>
      <div className="vegetablesSecond">
        <img src={require("../../images/vegetables.png")} alt="" />
      </div>
      <div className="carrot">
        <img src={require("../../images/carrot.png")} alt="" />
      </div>
    </div>
  );
};
export default RecipesPageContent;
