import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="navbar-brand">About</Link>
        </li>
        <li>
          <Link to="/discover" className="navbar-brand">Discover</Link>
        </li>
        <li>
          <Link to="/search" className="navbar-brand">Search</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
