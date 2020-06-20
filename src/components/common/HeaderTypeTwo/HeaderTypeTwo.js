import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";

import "./HeaderTypeTwo.scss";

const HeaderTypeTwo = ({ cart }) => {
  return (
    <div className="HeaderTypeTwo">
      <NavigationBar cart={cart} />
    </div>
  );
};

export default HeaderTypeTwo;
