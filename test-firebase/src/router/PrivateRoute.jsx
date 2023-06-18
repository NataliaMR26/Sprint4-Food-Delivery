// PrivateRoute.jsx
import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ isLogged, component: Component, ...rest }) => {
  return isLogged ? (
    <Navigate to="/Location" replace={true} />
  ) : (
    <Route {...rest} element={<Component />} />
  );
};

export default PrivateRoute;
