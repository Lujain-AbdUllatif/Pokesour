import React from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div className="navBar">
      <a>
        <img src="/logo.png" alt="PokeSour Logo" id="logo" />
      </a>
      <div className="btns">
        <a>
          <i className="far fa-heart"></i>
        </a>
        <a>
          <i className="fas fa-arrow-left"></i>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
