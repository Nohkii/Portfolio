import React from "react";
import { Link } from "react-router-dom";
import "../scss/Menu.scss";

const Menu = () => {
  return (
    <div className="menu-contatiner">
      <Link to="/"><span>HOME</span></Link>
      <Link to="/about"><span>ABOUT</span></Link>
      <Link to="/project"><span>PROJECT</span></Link>
      <Link to="/contact"><span>CONTACT</span></Link>
    </div>
  );
};

export default Menu;
