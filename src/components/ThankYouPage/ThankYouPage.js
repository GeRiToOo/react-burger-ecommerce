import React from "react";
import HeaderTypeTwo from "../common/HeaderTypeTwo/HeaderTypeTwo";
import ThankYouMessage from "./ThankYouMessage/ThankYouMessage";
import Footer from "../common/Footer/Footer";

const ThankYouPage = ({ cart }) => {
  return (
    <div className="ThankYouPage">
      <HeaderTypeTwo cart={cart} />
      <ThankYouMessage />
      <Footer />
    </div>
  );
};

export default ThankYouPage;
