import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo .svg";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <Link to="/" className="logo" aria-label="Little Lemon home">
        <img src={logo} alt="Little Lemon logo" />
      </Link>
      <button
        type="button"
        className="menu-icon"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/">Reservations</a>
        </li>
        <li>
          <Link to="/booking">Order Online</Link>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
