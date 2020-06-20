import React from "react";
import "./AddToBucket.scss";

const AddToBucket = ({ addItem, cart, recipe }) => {
  const onClickAddBasket = (event) => {
    const id = parseInt(event.target.value);
    addItem(1, id);
  };

  return (
    <div className="addToBucket">
      <div className="description">
        <div className="content">
          <div className="name">
            {recipe !== null ? recipe.specialty : null}
          </div>

          <div className="time">
            <img src={require("../../images/clock.png")} alt="" />
            <p> {recipe !== null ? recipe.readyInMinutes : null} min</p>
          </div>

          <div className="moreInfo">
            <div className="servings">
              <img src={require("../../images/tools.png")} alt="" />
              <p>{recipe !== null ? recipe.servings : null} Servings</p>
            </div>

            <div className="cals">
              <img src={require("../../images/fruit.png")} alt="" />
              <p>{recipe !== null ? recipe.calories : null}</p>
            </div>
          </div>
          <p>{recipe !== null ? recipe.fullDescription : null}</p>
          <button
            value={recipe !== null ? recipe.id : null}
            onClick={(event) => onClickAddBasket(event)}
          >
            Add to bucket
          </button>
        </div>
      </div>
      <div className="picture">
        <div className="image_wrapper">
          {recipe !== null ? (
            <img src={require(`../../images/${recipe.image}`)} alt="" />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AddToBucket;
