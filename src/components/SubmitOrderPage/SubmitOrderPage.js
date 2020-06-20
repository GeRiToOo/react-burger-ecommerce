import React from "react";
import HeaderTypeTwo from "../common/HeaderTypeTwo/HeaderTypeTwo";
import Form from "./Form/Form";
import SpecialOffer from "../common/SpecialOffer/SpecialOffer";
import Footer from "../common/Footer/Footer";
import ThankYouMessage from "./ThankYouMessage/ThankYouMessage";

const SubmitOrderPage = ({
  deleteFromCart,
  isOrderSuccessfully,
  submitCartHandler,
  updateCart,
  recipes,
  cart,
}) => {
  return (
    <div className="OrderFormPage">
      <HeaderTypeTwo cart={cart} />
      {isOrderSuccessfully ? (
        <ThankYouMessage cart={cart} />
      ) : (
        <Form
          deleteFromCart={deleteFromCart}
          submitCartHandler={submitCartHandler}
          updateCart={updateCart}
          recipes={recipes}
          cart={cart}
        />
      )}
      <SpecialOffer />
      <Footer />
    </div>
  );
};

export default SubmitOrderPage;
