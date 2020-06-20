import React from "react";
import { Link } from "react-router-dom";

import NavigationBar from "../NavigationBar/NavigationBar";
import "./Header.scss";

const Header = ({ cart }) => {
  return (
    <div className="Header">
      <NavigationBar cart={cart} />
      <div className="header_wrapper">
        <div className="content">
          <h1>Order our top-rated recipes today!</h1>
          <div className="button">
            <button>
              <Link to="/recipes">get started</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
