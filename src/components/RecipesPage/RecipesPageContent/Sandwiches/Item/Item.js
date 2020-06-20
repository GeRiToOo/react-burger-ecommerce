import React from "react";
import "./Item.scss";

const Items = ({ recipe }) => {
  return (
    <div className="sandwich">
      <div className="imageWrapper">
        <img src={require(`../../../../images/${recipe.image}`)} alt="" />
      </div>
      <div className="special">
        <p>{recipe.specialty}</p>
      </div>
      <div className="description">
        <p>{recipe.description}</p>
        <div className="time">
          <img src={require("../../../../images/clock.png")} alt="" />
          <p>{recipe.readyInMinutes} minutes</p>
        </div>
      </div>
    </div>
  );
};
export default Items;
