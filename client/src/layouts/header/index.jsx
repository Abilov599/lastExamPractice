import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>OneSchool</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/add-page">Add Page</NavLink>
            </li>
            <li>
              <NavLink to="/wishlist">Wishlist</NavLink>
            </li>
            <li>
              <NavLink to="/teachers">Teachers</NavLink>
            </li>
          </ul>
        </nav>
        <div className="btn">
          <button>CONTACT US</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
