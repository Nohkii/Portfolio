import React from "react";
import { Link } from "react-router-dom";
import "../scss/Menu.scss";

const Menu = () => {
  return (
    <div className="menu-contatiner">
      <Link to="/">
        <span className="menu-name">HOME</span>
      </Link>
      <Link to="/about">
        <span className="menu-name">ABOUT</span>
      </Link>
      <Link to="/project">
        <span className="menu-name">PROJECT</span>
      </Link>
      <Link to="/contact">
        <span className="menu-name">CONTACT</span>
      </Link>
    </div>
  );
};

export default Menu;
