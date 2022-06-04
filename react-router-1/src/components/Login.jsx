import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const [isAuth, setIsAuth] = useContext(AuthContext);

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => setIsAuth(true)}>Login</button>
    </div>
  );
};

export default Login;
