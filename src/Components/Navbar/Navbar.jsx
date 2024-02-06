import React from 'react';
import './navbar.scss';
function Navbar() {
  return (
    <nav className="nav-container">
      <h1>Shoes store</h1>
      <ul>
        <li>All items</li>
        <li>Best sellers</li>
      </ul>
    </nav>
  );
}
// turime exportuoti
export default Navbar;
