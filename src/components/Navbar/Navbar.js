import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  let location = useLocation().pathname;
  let history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  const isHome = location === "/";

  return (
    <div className="navBar">
      <Link to="/">
        <img src="/logo.png" alt="PokeSour Logo" id="logo" />
      </Link>
      <div className="btns">
        <Link to="/favorites" className="links" activeStyle={{ color: "red" }}>
          <i className="far fa-heart"></i>
        </Link>
        {!isHome && (
          <button onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
