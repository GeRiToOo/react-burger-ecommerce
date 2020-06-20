import React from "react";
import CartEmpty from "./CartEmpty/CartEmpty";
import "./Form.scss";
import CartFull from "./CartFull/CartFull";

const Form = ({
  deleteFromCart,
  submitCartHandler,
  updateCart,
  recipes,
  cart,
}) => {
  return (
    <div className="Form">
      {cart.length === 0 ? (
        <CartEmpty />
      ) : (
        <CartFull
          deleteFromCart={deleteFromCart}
          submitCartHandler={submitCartHandler}
          updateCart={updateCart}
          recipes={recipes}
          cart={cart}
        />
      )}
    </div>
  );
};
export default Form;
