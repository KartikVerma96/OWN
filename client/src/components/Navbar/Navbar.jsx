// import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">Logo</div>
      <div className="menu">
        <ul>
          <li>
            <NavLink to="/home" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to="/register" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>Register</NavLink>
          </li>
          <li>
            <NavLink to="/login" className={({ isActive }) => isActive ? "navlink active" : "navlink"}>Login</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
