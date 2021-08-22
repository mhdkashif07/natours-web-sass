import React from "react";
import Button from './Button';
import logo_white from "../images/logo-white.png";


const Header = () => {
  return (
    <div className="container">
      <div className="header_container">
        <div className="header">
          <div className="header_logo_box">
            <img src={logo_white} alt="logo" className="header_logo" />
          </div>
        </div>

        <div className="heading">
          <div className="heading__text_box">
            <h1>
              <span className="heading__primary_main">Outdoors</span>
              <span className="heading__primary_sub">is where life happens</span>
            </h1>
          </div>
          <div><Button text="Discover our tours" /></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
