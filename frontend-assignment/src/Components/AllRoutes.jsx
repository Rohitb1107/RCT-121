import React from "react";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import ProPage from "./ProPage";
import "./style.css";

const AllRoutes = () => {
  return (
    <>
      <div className="all-routes div">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:id" element={<ProPage />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default AllRoutes;
