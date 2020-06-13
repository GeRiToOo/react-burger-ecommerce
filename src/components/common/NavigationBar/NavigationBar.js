import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "../../HomePage/Home";
import RecipesPage from "../../RecipesPage/RecipesPage";

import "./NavigationBar.scss";

const NavigationBar = () => {
  return (
    <div className="NavigationBar">
      <nav>
        <ul className="nav_list">
          <Link to="/home">on the menu</Link>
          <Link to="/recipes">recipes</Link>
          <li>wine</li>
          <li>gifts</li>
          <li>market</li>
        </ul>

        <div className="shoppingCartButton">
          <button>
            <img src={require("../../images/cart.png")} alt="" />
          </button>
        </div>
      </nav>
    </div>
  );
};
export default NavigationBar;
