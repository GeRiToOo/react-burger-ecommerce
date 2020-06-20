import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import API from "./API.js";
import RecipesPage from "./components/RecipesPage/RecipesPage";
import SingleRecipePage from "./components/SingleRecipePage/SingleRecipePage";
import Home from "./components/HomePage/Home";
import SubmitOrderPage from "./components/SubmitOrderPage/SubmitOrderPage";
import "./App.scss";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [cart, setCart] = useState([]);
  const [number, setNumber] = useState(9);
  const [isOrderSuccessfully, setIsOrderSuccessfully] = useState(false);

  const submitCartHandler = (response) => {
    setIsOrderSuccessfully(response);
    if (!isOrderSuccessfully) {
      cart.map((item) => API.deleteFromCart(item.id));
      setCart([]);
    } else {
      return null;
    }
  };

  const handleUpdate = () => {
    let { action } = this.state.location;

    if (action === "PUSH") {
      window.scrollTo(0, 0);
    }
  };

  const resetAllState = () => {
    if (isOrderSuccessfully) {
      setIsOrderSuccessfully(false);
    }
  };

  const addItem = async (quantity, id) => {
    let isSaved = false;
    const matched = cart.find((item) => parseInt(item.productId) === id);

    if (matched) {
      let id = matched.id;
      let product = {
        productId: matched.productId,
        quantity: matched.quantity + quantity,
      };

      isSaved = await API.putToCart(id, product);
    } else {
      let product = { productId: id, quantity: 1 };
      isSaved = API.addToCart(product);
    }

    if (isSaved) {
      const newCart = await API.getCartItems();
      setCart(newCart);
    }
  };

  const deleteFromCart = async (id) => {
    API.deleteFromCart(id);
    const newCart = await API.getCartItems();
    setCart(newCart);
  };

  const seeMore = () => {
    setNumber(number + 3);
    API.getRecipes(number + 3).then((recipesApi) => {
      setRecipes([...recipesApi]);
    });
  };

  useEffect(() => {
    API.getRecipes(number).then((recipesApi) => {
      setRecipes([...recipes, ...recipesApi]);
    });
  }, []);

  useEffect(() => {
    API.getCartItems().then((cartApi) => {
      setCart([...cart, ...cartApi]);
    });
  }, []);

  return (
    <div className="App">
      <Route onUpdate={handleUpdate} path="/" exact>
        <Home resetAllState={resetAllState} cart={cart} />
      </Route>
      <Route onUpdate={handleUpdate} path="/recipes" exact>
        <RecipesPage
          resetAllState={resetAllState}
          seeMore={seeMore}
          cart={cart}
          recipes={recipes}
        />
      </Route>
      <Route onUpdate={handleUpdate} path="/recipes/:id">
        <SingleRecipePage addItem={addItem} cart={cart} />
      </Route>
      <Route onUpdate={handleUpdate} path="/cart">
        <SubmitOrderPage
          deleteFromCart={deleteFromCart}
          isOrderSuccessfully={isOrderSuccessfully}
          submitCartHandler={submitCartHandler}
          updateCart={addItem}
          recipes={recipes}
          cart={cart}
        />
      </Route>
    </div>
  );
}

export default App;
