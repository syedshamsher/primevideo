import React from "react";
import { Switch, Route } from "react-router-dom";
import { Login } from "../Pages/Login/Login";
import { Feed } from "../Pages/Feed/Feed";
import { Register } from "../Pages/Register/Register";
import { Nav } from "../Components/Nav";
import { SearchResult } from "../Pages/SearchResult/SearchResult";
import ViewMedia from "../Pages/View/ViewMedia";
import MediaPlayer from "../Pages/MediaPlayer/MediaPlayer";
import { LandingPage } from "../Pages/LandingPage/LandingPage";
import { Payment } from "../Pages/Payment/Payment";
import PrivateRoute from "./PrivateRoute";

export const Routes = () => {
  return (
    <div>
        <Route path="/" render={() => <Nav />} />
        <Route path="/login" exact render={() => <Login />} />
        <Route path="/register" exact render={() => <Register />} />
      <Switch>
        <PrivateRoute path="/payment" exact MyComponent={Payment} />
        <PrivateRoute path="/search" exact MyComponent={SearchResult} />
        <Route path="/" exact render={() => <LandingPage />} />
        <PrivateRoute path="/home" exact MyComponent={Feed} />
        <PrivateRoute
          path="/media/:id"
          exact
          MyComponent={ViewMedia}
        />
        <PrivateRoute
          path="/player/:title"
          exact
          MyComponent={MediaPlayer} />
      </Switch>
    </div>
  );
};
