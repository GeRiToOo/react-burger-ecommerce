import React from "react";
import Sandwiches from "./Sandwiches/Sandwiches";
// import ReceiptPage from "../../ReceiptPage/ReceiptPage";

import "./RecipesPageContent.scss";

const RecipesPageContent = ({ recipes }) => {
  const onClickSandwichItem = (receipt) => {
    // <ReceiptPage receipt={receipt} />;
    console.log(receipt);
  };

  return (
    <div className="RecipesPageContent">
      <div className="title">
        <h1>Explore our Menus</h1>
        <p>
          Choose from an ever-changing mix of meat, fish, Beyond Meat™, WW
          Approved, Diabetes Friendly recipes and health-conscious offerings.
        </p>
      </div>
      <Sandwiches recipes={recipes} onClickSandwichItem={onClickSandwichItem} />
      <button>See more</button>
    </div>
  );
};
export default RecipesPageContent;
