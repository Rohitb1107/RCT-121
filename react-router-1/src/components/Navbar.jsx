import React from "react";
import { Link } from "react";
const Navbar = () => {
  return (
    <>
      <div className="nav-div">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/users">Users</Link>
      </div>
    </>
  );
};

export default Navbar;
