import React from "react";
import HeaderTypeTwo from "../common/HeaderTypeTwo/HeaderTypeTwo";
import Form from "./Form/Form";
import SpecialOffer from "../common/SpecialOffer/SpecialOffer";
import Footer from "../common/Footer/Footer";

const OrderFormPage = () => {
  return (
    <div className="OrderFormPage">
      <HeaderTypeTwo />
      <Form />
      <SpecialOffer />
      <Footer />
    </div>
  );
};

export default OrderFormPage;
