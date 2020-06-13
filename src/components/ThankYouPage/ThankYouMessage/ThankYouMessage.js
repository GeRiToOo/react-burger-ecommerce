import React from "react";
import "./ThankYouMessage.scss";

const ThankYouMessage = () => {
  return (
    <div className="ThankYouMessage">
      <div className="message">
        <h1>Thank you for your order!</h1>
      </div>
      <div className="pictureWrapperFilter"></div>
      <div className="vegetablesOne">
        <img src={require("../../images/vegetables.png")} alt="" />
      </div>
      <div className="vegetables">
        <img src={require("../../images/vegetables.png")} alt="" />
      </div>
      <div className="carrot">
        <img src={require("../../images/carrot.png")} alt="" />
      </div>
      <div className="cheese">
        <img src={require("../../images/cheese.png")} alt="" />
      </div>
    </div>
  );
};
export default ThankYouMessage;
