import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ MyComponent, ...rest }) => {
  const { isAuth, userdata } = useSelector((state) => state.auth);
  return isAuth && userdata.subscription ? (
    <Route {...rest} render={(props) => <MyComponent {...props} />} />
  ) 
  // ) : (
  //   <Route {...rest} render={(props) => <MyComponent {...props} />} />
  // );
     : (
      <Redirect to="/" />
    );
};

export default PrivateRoute;
