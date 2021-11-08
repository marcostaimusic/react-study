import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul>
          <li className="nav-item">
            <Link to="./">Home</Link>
          </li>
          <li className="nav-item">
            {" "}
            <Link to="./about">About</Link>
          </li>
          <li className="nav-item">
            {" "}
            <Link to="./login">Login</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
