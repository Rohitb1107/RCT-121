import axios from "axios";
import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const [isAuth, setIsAuth] = useContext(AuthContext);

  const loginUser = async () => {
    axios({
      url: "https://reqres.in/api/login",
      method: "POST",
      data: {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      },
    })
      .then((res) => {
        alert("Success");
      })
      .catch((err) => {
        alert("Login failed");
      });
  };

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
