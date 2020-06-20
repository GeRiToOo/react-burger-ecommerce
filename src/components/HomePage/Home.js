import React, { useEffect } from "react";
import Header from "../common/Header/Header";
import FirstPageBody from "./FirstPageBody/FirstPageBody";
import SpecialOffer from "../common/SpecialOffer/SpecialOffer";
import Footer from "../common/Footer/Footer";

const Home = ({ resetAllState, cart }) => {
  useEffect(() => {
    resetAllState();
  }, []);
  return (
    <div className="Home">
      <Header cart={cart} />
      <FirstPageBody />
      <SpecialOffer />
      <Footer />
    </div>
  );
};

export default Home;
