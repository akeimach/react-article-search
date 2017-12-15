import React from "react";
import { Link } from "react-router-dom";

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-static-top">
    <div className="container">
      <ul className="nav navbar-nav">
      <li className="nav-item">
        <Link to="/">Article Saver React App</Link>
      </li>
      <li className="nav-item nav-link">
        <Link to="/search">Search</Link>
      </li>
      <li className="nav-item nav-link">
        <Link to="/results">Results</Link>
      </li>
      <li className="nav-item nav-link">
        <Link to="/saved">Saved</Link>
      </li>
    </ul>
    </div>
  </nav>;

export default Nav;


