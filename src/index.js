import React from "react";
import ReactDOM from "react-dom";
import Router from "./screens/Router/Router";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
// import App from "./screens/App/App";
// import Profile from "./screens/Profile/Profile";
// import Favorites from "./screens/Favorites/Favorites";
// import Navbar from "./components/Navbar/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
