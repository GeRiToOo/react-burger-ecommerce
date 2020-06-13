import React from "react";
import HeaderTypeTwo from "../common/HeaderTypeTwo/HeaderTypeTwo";
import AddToBucket from "./AddToBucket/AddToBucket";
import Receipt from "../common/Receipt/Receipt";
import SpecialOffer from "../common/SpecialOffer/SpecialOffer";
import Footer from "../common/Footer/Footer";

const ReceiptPage = () => {
  return (
    <div className="ReceiptPage">
      <HeaderTypeTwo />
      <AddToBucket />
      <Receipt />
      <SpecialOffer />
      <Footer />
    </div>
  );
};
export default ReceiptPage;
