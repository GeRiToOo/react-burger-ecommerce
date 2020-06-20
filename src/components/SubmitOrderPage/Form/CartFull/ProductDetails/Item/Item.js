import React, { useState, useEffect } from "react";
import "../ProductDetails.scss";

const Item = ({ deleteFromCart, updateCart, product, cart }) => {
  const [localQuantity, setLocalQuantity] = useState(0);
  const [selectedCartId, setSelectedCartId] = useState();

  useEffect(() => {
    const selectedProduct = cart.find((item) => item.productId === product.id);
    setLocalQuantity(selectedProduct.quantity);
    setSelectedCartId(selectedProduct.id);
  }, []);

  const onChangeHandler = (event) => {
    setLocalQuantity(parseInt(event.target.value));
    const qtyDiff = parseInt(event.target.value) - localQuantity;
    updateCart(qtyDiff, parseInt(event.target.dataset.value));
  };

  return (
    <li key={product.id}>
      <div className="delete">
        <button onClick={() => deleteFromCart(selectedCartId)}>
          <img src={require("../../../../../images/delete.png")} alt="" />
        </button>
      </div>
      <div className="informationWrapper">
        <div className="imageWrapper">
          <img src={require(`../../../../../images/${product.image}`)} alt="" />
        </div>
        <div className="productDetails">
          <div className="servings">
            <p>
              {cart.map((item) =>
                parseInt(item.productId) === parseInt(product.id)
                  ? item.quantity * product.servings
                  : null
              )}
              servings
            </p>
            <p>
              {cart.map((item) =>
                parseInt(item.productId) === parseInt(product.id)
                  ? item.quantity * product.servings
                  : null
              )}{" "}
              burgers
            </p>
          </div>
          <div className="description">
            <p>{product.description}</p>
          </div>
          <div className="quantityWrapper">
            {cart.map((item) =>
              parseInt(item.productId) === parseInt(product.id) ? (
                <input
                  key={product.id}
                  data-value={product.id}
                  className="quantity"
                  type="number"
                  min={0}
                  value={localQuantity}
                  onChange={onChangeHandler}
                />
              ) : null
            )}
          </div>
        </div>
      </div>
      <div className="price">
        <p>
          £
          {cart.map((item) =>
            parseInt(item.productId) === parseInt(product.id)
              ? (item.quantity * product.price).toFixed(2)
              : null
          )}
        </p>
      </div>
    </li>
  );
};

export default Item;
