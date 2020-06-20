import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./NavigationBar.scss";

const NavigationBar = ({ cart }) => {
  let { location } = useHistory();
  const [pageName, setPageName] = useState("main");

  useEffect(() => {
    if (location.pathname === "/") {
      setPageName("main");
    } else if (location.pathname === "/recipes") {
      setPageName("recipes");
    } else if (location.pathname === "/cart") {
      setPageName("cart");
    }
  });

  const quantity = cart.map((item) => item.quantity);
  let sum = quantity.reduce(function (a, b) {
    return a + b;
  }, 0);

  return (
    <div className="NavigationBar">
      <nav>
        <ul className="nav_list">
          <Link to="/" className={pageName === "main" ? "active" : ""}>
            on the menu
          </Link>
          <Link
            to="/recipes"
            className={pageName === "recipes" ? "active" : ""}
          >
            recipes
          </Link>
          <li>wine</li>
          <li>gifts</li>
          <li>market</li>
        </ul>

        <div className="shoppingCartButton">
          <Link to="/cart">
            <img src={require("../../images/cart.png")} alt="" />
          </Link>
          {sum === 0 ? null : (
            <div className="quantity">
              <p>{sum}</p>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};
export default NavigationBar;
