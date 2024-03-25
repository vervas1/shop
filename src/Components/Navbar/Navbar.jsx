import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// components
import User from '../User/User';
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
          <NavLink to="/best">Favorites </NavLink>
        </li>
        <li>
          <NavLink to="/admin">Admin </NavLink>
        </li>
      </ul>
      <User />
    </nav>
  );
}
// turime exportuoti
export default Navbar;
