import React, { useEffect } from "react";
import Header from "../common/Header/Header";
import RecipesPageContent from "./RecipesPageContent/RecipesPageContent";
import Footer from "../common/Footer/Footer";
import "./RecipesPage.scss";

const RecipesPage = ({ resetAllState, seeMore, cart, recipes }) => {
  useEffect(() => {
    resetAllState();
  }, []);
  return (
    <div className="RecipesPage">
      <Header cart={cart} />
      <RecipesPageContent seeMore={seeMore} recipes={recipes} />
      <Footer />
    </div>
  );
};

export default RecipesPage;
