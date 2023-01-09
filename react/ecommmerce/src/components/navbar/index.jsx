import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 50px",
        fontSize: "20px",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/favorites">Favorites</Link>
    </div>
  );
};

export default Navbar;
