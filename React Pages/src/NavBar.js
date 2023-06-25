import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Product Listing
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/product-details" className="navbar-link">
            Product Details
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;