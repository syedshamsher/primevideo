import React from "react";
import { Switch, Route } from "react-router-dom";
import { Login } from "../Pages/Login/Login";
import { Feed } from "../Pages/Feed/Feed";
import { Register } from "../Pages/Register/Register";
import { Nav } from "../Components/Nav";
import { SearchResult } from "../Pages/SearchResult/SearchResult";
import ViewMedia from "../Pages/View/ViewMedia";
import MediaPlayer from "../Pages/MediaPlayer/MediaPlayer";
import { LandingNav } from "../Components/LandingNav/LandingNav";
import { LandingPage } from "../Pages/LandingPage/LandingPage";
import { Payment } from "../Pages/Payment/Payment";

export const Routes = () => {
  return (
    <div>
        <Route path="/payment" exact render={() => <Payment />} />
        <Route path="/" render={() => <Nav />} />
      <Switch>
        <Route path="/search" exact render={() => <SearchResult />} />
        <Route path="/prime" exact render={() => <LandingPage />} />
        <Route path="/" exact render={() => <Feed />} />
        <Route path="/login" exact render={() => <Login />} />
        <Route path="/register" exact render={() => <Register />} />
        <Route
          path="/media/:id"
          exact
          render={(props) => <ViewMedia {...props} />}
        />
        <Route
          path="/player/:title"
          exact
          render={(props) => <MediaPlayer {...props} />}
        />
      </Switch>
    </div>
  );
};
