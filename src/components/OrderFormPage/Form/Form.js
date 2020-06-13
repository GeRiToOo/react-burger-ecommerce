import React from "react";
import Details from "./Details/Details";

import "./Form.scss";

const Form = () => {
  return (
    <div className="Form">
      <div className="formContainer">
        <form action="">
          <p>your details</p>
          <div className="title">Title*</div>
          <div className="personalInfo">
            <div className="name">
              <input
                className="firstName"
                type="text"
                placeholder="First name*"
              />
              <input
                className="lastName"
                type="text"
                placeholder="Last name*"
              />
            </div>
            <input className="email" type="email" placeholder="Email*" />
            <input
              className="password"
              type="password"
              placeholder="Password*"
            />
          </div>

          <div className="contactInfo">
            <label htmlFor="">contact number</label>
            <input
              className="mobileNumber"
              type="text"
              placeholder="Mobile number*"
            />
            <label htmlFor="">delivery address</label>
            <input className="postCode" type="text" placeholder="Postcode*" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="cheeseOne">
        <img src={require("../../images/cheese.png")} alt="" />
      </div>
      <div className="vegetables">
        <img src={require("../../images/vegetables.png")} alt="" />
      </div>
      <div className="cheese">
        <img src={require("../../images/cheese.png")} alt="" />
      </div>
      <div className="carrot">
        <img src={require("../../images/carrot.png")} alt="" />
      </div>
      <Details />
    </div>
  );
};
export default Form;
