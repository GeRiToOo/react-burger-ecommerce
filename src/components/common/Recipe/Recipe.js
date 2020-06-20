import React from "react";
import "./Recipe.scss";

const Recipe = ({ recipe }) => {
  return (
    <div className="Recipe">
      <div className="content">
        <div className="title">
          <div className="titleContent">
            <p>fresh</p>
            <div className="ingredients">ingredients</div>
          </div>
        </div>
        <div className="ingredientsList">
          <ul className="list">
            {recipe !== null
              ? recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    <div className="quantity">{ingredient.quantity}</div>
                    <div className="name">{ingredient.name}</div>
                  </li>
                ))
              : null}
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

export default Recipe;
