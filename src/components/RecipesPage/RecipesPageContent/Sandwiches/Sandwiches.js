import React from "react";
import Item from "./Item/Item";
import { Link } from "react-router-dom";
import "./Sandwiches.scss";

const Sandwiches = ({ recipes }) => {
  return (
    <div className="Sandwiches">
      {recipes.map((recipe) => (
        <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
          <Item key={recipe.id} recipe={recipe} />
        </Link>
      ))}
    </div>
  );
};

export default Sandwiches;
