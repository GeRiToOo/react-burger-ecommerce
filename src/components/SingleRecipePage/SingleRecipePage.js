import React, { useEffect, useState } from "react";
import HeaderTypeTwo from "../common/HeaderTypeTwo/HeaderTypeTwo";
import AddToBucket from "./AddToBucket/AddToBucket";
import Recipe from "../common/Recipe/Recipe";
import SpecialOffer from "../common/SpecialOffer/SpecialOffer";
import Footer from "../common/Footer/Footer";
import { useParams } from "react-router-dom";
import API from "../../API.js";

const SingleRecipePage = ({ addItem, cart }) => {
  let { id } = useParams();
  const [recipeSingle, setRecipeSingle] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const getRecipe = await fetch(
        `http://localhost:3000/recipes/${id}`
      ).then((response) => response.json());
      setRecipeSingle(getRecipe);
    };
    fetchRecipe();
  }, []);

  return (
    <div className="SingleRecipePage">
      <HeaderTypeTwo cart={cart} />
      <AddToBucket addItem={addItem} cart={cart} recipe={recipeSingle} />
      <Recipe recipe={recipeSingle} />
      <SpecialOffer />
      <Footer />
    </div>
  );
};

export default SingleRecipePage;
