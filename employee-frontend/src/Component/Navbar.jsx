import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <div>Home</div>
      </Link>
      <Link to={"/main"}>
        <div>All data</div>
      </Link>
    </div>
  );
}

export default Navbar;
