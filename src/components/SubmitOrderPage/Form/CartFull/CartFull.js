import React, { useState } from "react";
import ProductDetails from "./ProductDetails/ProductDetails";

import API from "../../../../API";

import "./CartFull.scss";

const CartFull = ({
  deleteFromCart,
  submitCartHandler,
  updateCart,
  recipes,
  cart,
}) => {
  const [user, setUser] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNumber: "",
    postCode: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    event.target.value = "";
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    let order = { user, cart };
    if (
      user.title &&
      user.firstName &&
      user.lastName &&
      user.email &&
      user.password &&
      user.mobileNumber &&
      user.postCode &&
      cart.length > 0
    ) {
      const response = API.submitOrder(order);
      submitCartHandler(response);
    } else {
      console.log("cart is empty");
    }
  };

  return (
    <div className="cartFull">
      <div className="formContainer">
        <form onSubmit={onSubmitForm}>
          <p>your details</p>
          <select
            type="select"
            className="title"
            name="title"
            value={user.title}
            onChange={handleChange}
            required
          >
            <option default> Title*</option>
            <option value="Mrs">Mrs.</option>
            <option value="Mr">Mr.</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
            <option value="Professor">Professor</option>
          </select>
          <div className="personalInfo">
            <div className="name">
              <input
                value={user.firstName}
                name="firstName"
                onChange={handleChange}
                className="firstName"
                type="text"
                placeholder="First name*"
                required
              />
              <input
                value={user.lastName}
                name="lastName"
                onChange={handleChange}
                className="lastName"
                type="text"
                placeholder="Last name*"
                required
              />
            </div>
            <input
              value={user.email}
              name="email"
              onChange={handleChange}
              className="email"
              type="email"
              placeholder="Email*"
              required
            />
            <input
              value={user.password}
              name="password"
              onChange={handleChange}
              className="password"
              type="password"
              placeholder="Password*"
              required
            />
          </div>

          <div className="contactInfo">
            <label htmlFor="">contact number</label>
            <input
              value={user.mobileNumber}
              name="mobileNumber"
              onChange={handleChange}
              className="mobileNumber"
              type="text"
              placeholder="Mobile number*"
              required
            />
            <label htmlFor="">delivery address</label>
            <input
              value={user.postCode}
              name="postCode"
              onChange={handleChange}
              className="postCode"
              type="text"
              placeholder="Postcode*"
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
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
      <ProductDetails
        deleteFromCart={deleteFromCart}
        updateCart={updateCart}
        recipes={recipes}
        cart={cart}
      />
    </div>
  );
};
export default CartFull;
