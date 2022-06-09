import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const activeStyle = { color: "red", texDecoration: "none" };
  return (
    <>
      <h1>Navbar</h1>
      <div className="nav-div">
        <nav>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/users"
          >
            Users
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/login"
          >
            Login
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
