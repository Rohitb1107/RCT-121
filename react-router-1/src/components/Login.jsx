import axios from "axios";
import React, { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const [state, dispatch] = useContext(AuthContext);
  const navigate = useNavigate();

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
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: res.data.token,
        });
        navigate("/users");
      })
      .catch((err) => {
        alert("Login failed");
      });
  };

  if (state.isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={loginUser}>Login</button>
    </div>
  );
};

export default Login;
