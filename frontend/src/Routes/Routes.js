import React from "react";
import { Switch, Route } from "react-router-dom";
import { Login } from "../Pages/Login/Login";
import { Register } from "../Pages/Register/Register";
import { Feed } from "../Pages/Feed/Feed";
import { Nav } from "../Components/Nav";

export const Routes = () => {
  return (
    <div>
      <Route path="/" render={() => <Nav />} />
      <Switch>
        <Route path="/" exact render={() => <Feed />} />
        <Route path="/login" exact render={() => <Login />} />
        <Route path="/register" exact render={() => <Register />} />
      </Switch>
    </div>
  );
};
