import React, { useState, useEffect } from "react";
import Item from "./Item/Item";
import "./ProductDetails.scss";

const ProductDetails = ({ deleteFromCart, updateCart, recipes, cart }) => {
  const deliveryFee = 15;
  const cartItemsIds = cart.map((order) => parseInt(order.productId));
  const [total, setTotal] = useState([]);

  const basketProducts = recipes.filter((recipe) =>
    cartItemsIds.includes(recipe.id)
  );

  const quantity = cart.map((item) =>
    basketProducts.map((recipe) =>
      item.productId == recipe.id ? recipe.price * item.quantity : 0
    )
  );

  let sum = quantity.map((array) =>
    array.reduce(function (a, b) {
      return a + b;
    }, 0)
  );
  let totalSum = sum.reduce(function (a, b) {
    return a + b;
  }, 0);

  return (
    <div className="ProductDetails">
      <div className="detailsContainer">
        <div className="header">
          <div className="cartImageWrapper">
            <img src={require("../../../../images/cart.png")} alt="" />
          </div>
          <div className="basket">
            <p>basket</p>
          </div>
        </div>
        <ul className="products">
          {basketProducts.map((product) => (
            <Item
              deleteFromCart={deleteFromCart}
              key={product.id}
              updateCart={updateCart}
              product={product}
              cart={cart}
            />
          ))}
        </ul>
        <div className="delivery">
          <p className="title">Delivery Fee</p>
          <p>£ {deliveryFee}</p>
        </div>
        <div className="total">
          <p className="title">Total price:</p>
          <p>£{(totalSum + deliveryFee).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
