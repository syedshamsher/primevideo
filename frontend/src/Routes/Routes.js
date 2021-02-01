import React from "react";
import { Switch, Route } from "react-router-dom";
import { Login } from "../Pages/Login/Login";
import { Register } from "../Pages/Register/Register";

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/login" render={() => <Login />} />
        <Route path="/register" render={() => <Register />} />
      </Switch>
    </div>
  );
};
