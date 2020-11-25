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
        <Route exact path="/" component={App}/>   
        <Route path="/profile/:id" component={Profile}/> 
        <Route exact path="/favorites" component={Favorites}/> 
        
      </Switch>
    </>
  );
}

export default Router;
