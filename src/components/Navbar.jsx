import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink className="link" to="/">
        Add
      </NavLink>
      <NavLink className="link" to="/books">
        Books
      </NavLink>
    </nav>
  );
};

export default Navbar;
