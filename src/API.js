const API_ENDPOINT = "http://localhost:3000";
const RECIPES_URL = `${API_ENDPOINT}/recipes?_page=1&_limit=9`;
const ORDERS_URL = `${API_ENDPOINT}/orders`;
const CART_URL = `${API_ENDPOINT}/cart`;

const getRecipes = (number) =>
  fetch(`${API_ENDPOINT}/recipes?_page=1&_limit=${number}`).then((response) =>
    response.json()
  );
const getCartItems = () => fetch(CART_URL).then((response) => response.json());

const deleteFromCart = (id) => {
  fetch(`http://localhost:3000/cart/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        return "Deleted!";
      } else {
        return "That could not be deleted!";
      }
    })
    .catch((error) => {
      console.log("Ooops", error);
    });
};

const addToCart = async (product) => {
  return await fetch(CART_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((response) => {
      if (response.ok) {
        console.log("OK");
        return true;
      } else {
        console.log("NOT OK");
        return false;
      }
    })
    .catch((error) => {
      console.log("Ooops", error);
    });
};

const putToCart = async (id, product) => {
  return await fetch(`http://localhost:3000/cart/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((response) => {
      if (response.ok) {
        console.log("OK");
        return true;
      } else {
        console.log("NOT OK");
        return false;
      }
    })
    .catch((error) => {
      console.log("Ooops", error);
    });
};

const submitOrder = async (order) => {
  return await fetch(`http://localhost:3000/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(order),
  })
    .then((response) => {
      if (response.ok) {
        return true;
      } else {
        return false;
      }
    })
    .catch((error) => {
      console.log("Ooops", error);
    });
};

export default {
  getRecipes,
  getCartItems,
  addToCart,
  putToCart,
  submitOrder,
  RECIPES_URL,
  ORDERS_URL,
  CART_URL,
  deleteFromCart,
};
