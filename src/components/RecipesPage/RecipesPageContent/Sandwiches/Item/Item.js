import React from "react";
import "./Items.scss";

const Items = ({ receipt, onClickSandwichItem }) => {
  return (
    <div
      className="sandwich"
      onClick={() => {
        onClickSandwichItem(receipt);
      }}
    >
      <div className="imageWrapper">
        <img src={require(`../../../../images/${receipt.image}`)} alt="" />
      </div>
      <div className="special">
        <p>{receipt.specialty}</p>
      </div>
      <div className="description">
        <p>{receipt.description}</p>
        <div className="time">
          <img src={require("../../../../images/clock.png")} alt="" />
          <p>{receipt.readyInMinutes} minutes</p>
        </div>
      </div>
    </div>
  );
};
export default Items;
