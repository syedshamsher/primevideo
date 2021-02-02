import React from "react";
import { Switch, Route } from "react-router-dom";
import { Login } from "../Pages/Login/Login";
import { Register } from "../Pages/Register/Register";
import { Nav } from "../Components/Nav";

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact render={() => <Nav />} />
        <Route path="/login" exact render={() => <Login />} />
        <Route path="/register" exact render={() => <Register />} />
      </Switch>
    </div>
  );
};
