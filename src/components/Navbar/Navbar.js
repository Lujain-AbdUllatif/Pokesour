import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div className="navBar">
      <Link to="/">
        <img src="/logo.png" alt="PokeSour Logo" id="logo" />
      </Link>
      <div className="btns">
        <Link to="/favorites">
          <i className="far fa-heart"></i>
        </Link>
        <Link to="/profile">
          <i className="fas fa-arrow-left"></i>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
