import React from "react";
import "./CartEmpty.scss";

const CartEmpty = () => {
  return (
    <div className="cartEmpty">
      <div className="message">
        <h1>Your cart is empty!</h1>
      </div>
      <div className="pictureWrapperFilter"></div>
      <div className="cheeseOne">
        <img src={require("../../../images/cheese.png")} alt="" />
      </div>
      <div className="vegetables">
        <img src={require("../../../images/vegetables.png")} alt="" />
      </div>
      <div className="cheese">
        <img src={require("../../../images/cheese.png")} alt="" />
      </div>
      <div className="carrot">
        <img src={require("../../../images/carrot.png")} alt="" />
      </div>
      <div className="cheeseTwo">
        <img src={require("../../../images/cheese.png")} alt="" />
      </div>
      <div className="vegetablesTwo">
        <img src={require("../../../images/vegetables.png")} alt="" />
      </div>
      <div className="cheeseThree">
        <img src={require("../../../images/cheese.png")} alt="" />
      </div>
      <div className="carrotTwo">
        <img src={require("../../../images/carrot.png")} alt="" />
      </div>
    </div>
  );
};
export default CartEmpty;
