import React from 'react';
import './navbar.scss';
function Navbar({ setTab }) {
  return (
    <nav className="nav-container">
      <h1>Shoes store</h1>
      <ul>
        <li
          onClick={() => {
            setTab('all');
          }}
        >
          All items
        </li>
        <li
          onClick={() => {
            setTab('card');
          }}
        >
          My card
        </li>
        <li>Best sellers</li>
      </ul>
    </nav>
  );
}
// turime exportuoti
export default Navbar;
