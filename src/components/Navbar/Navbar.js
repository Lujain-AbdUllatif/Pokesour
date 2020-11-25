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
  const isFav = location === "/favorites";

  return (
    <div className="navBar">
      <Link to="/">
        <img src="/logo.png" alt="PokeSour Logo" id="logo" />
      </Link>
      <div className="btns">
        {isHome && (
          <Link
            to="/favorites"
            className="links"
            activestyle={{ color: "red" }}
          >
            <i className="fav_page fas fa-heart"></i>
          </Link>
        )}
        {!isHome && (
          <button onClick={handleBack} className="goback_btn">
            <i className="fas fa-arrow-left"></i>
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
