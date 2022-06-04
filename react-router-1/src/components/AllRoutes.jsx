import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Users from "./Users";
import UserPage from "./UserPage";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/users/:id" element={<UserPage />}></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
