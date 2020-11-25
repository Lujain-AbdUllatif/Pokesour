import React from "react";
import { BrowserRouter as Routers, Route, Switch } from "react-router-dom";

import App from "../App/App";
import Profile from "../Profile/Profile";
import Favorites from "../Favorites/Favorites";
import Navbar from "../../components/Navbar/Navbar";

function Router() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </>
  );
}

export default Router;
