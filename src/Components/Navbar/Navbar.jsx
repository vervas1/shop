import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';
function Navbar() {
  return (
    <nav className="nav-container">
      <h1>Food store</h1>
      <ul>
        <li>
          <NavLink to="/"> All items </NavLink>
        </li>
        <li>
          <NavLink to="/my-cart">My cart </NavLink>
        </li>
        <li>
          <NavLink to="/best">Best sellers </NavLink>
        </li>
      </ul>
    </nav>
  );
}
// turime exportuoti
export default Navbar;
