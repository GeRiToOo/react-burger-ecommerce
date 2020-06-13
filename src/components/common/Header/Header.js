import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <NavigationBar />
      <div className="header_wrapper">
        <div className="content">
          <h1>Order our top-rated recipes today!</h1>
          <div className="button">
            <button>get started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
