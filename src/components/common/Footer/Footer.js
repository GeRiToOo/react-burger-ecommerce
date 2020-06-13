import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="content">
        <ul className="firstColumn">
          <li>
            <h2>Categories</h2>
          </li>
          <li>About us</li>
          <li>Testimonials</li>
          <li>Contact</li>
          <li>Journal</li>
          <li>Privacy Policy</li>
        </ul>
        <ul className="secondColumn">
          <li>
            <h2>Partners</h2>
          </li>
          <li>Support </li>
          <li>Shipping & Returns</li>
          <li>Size Guide</li>
          <li>Product Care</li>
        </ul>
        <ul className="thirdColumn">
          <li>
            <h2>Contact us</h2>
          </li>

          <li>26A Pagoda St, TANGS, Singapore, 058187</li>
          <li> +65 6221 5462</li>
        </ul>
        <ul className="fourthColumn">
          <li>
            <h2>Follow us</h2>
          </li>
          <li>
            <img src={require("../../images/bitmap.png")} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
