import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const [state] = useContext(AuthContext);

  if (state.isAuth) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
