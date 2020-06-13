import React from "react";
import Header from "../common/Header/Header";
import FirstPageBody from "./FirstPageBody/FirstPageBody";
import SpecialOffer from "../common/SpecialOffer/SpecialOffer";
import Footer from "../common/Footer/Footer";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <FirstPageBody />
      <SpecialOffer />
      <Footer />
    </div>
  );
};

export default Home;
