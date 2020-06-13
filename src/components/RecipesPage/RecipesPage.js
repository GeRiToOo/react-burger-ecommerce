import React from "react";
import Header from "../common/Header/Header";
import RecipesPageContent from "./RecipesPageContent/RecipesPageContent";
import Footer from "../common/Footer/Footer";

const RecipesPage = ({ recipes }) => {
  return (
    <div className="RecipesPage">
      <Header />
      <RecipesPageContent recipes={recipes} />
      <Footer />
    </div>
  );
};

export default RecipesPage;
