import React from "react";
import { Switch, Route } from "react-router-dom";
import { Login } from "../Pages/Login/Login";
import { Feed } from "../Pages/Feed/Feed";
import { Register } from "../Pages/Register/Register";
import { Nav } from "../Components/Nav";
import  ViewMedia  from "../Pages/ViewMedia";
import MediaPlayer from "../Pages/MediaPlayer/MediaPlayer";

export const Routes = () => {
  return (
    <div>
      <Route path="/" render={() => <Nav />} />
      <Switch>
        <Route path="/" exact render={() => <Feed />} />
        <Route path="/login" exact render={() => <Login />} />
        <Route path="/register" exact render={() => <Register />} />
        <Route path="/media/:id" exact render={(props) => <ViewMedia {...props} />} />
        <Route path="/player/:title" exact render={(props) => <MediaPlayer {...props} />} />
      </Switch>
    </div>
  );
};
