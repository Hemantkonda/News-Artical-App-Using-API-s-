import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="container mynav">
      <nav className="navbar">
        <div className="right-side">
          <div className="log">
            <h2>MyNews</h2>
          </div>
        </div>
        <div className="left-side">
          <ul className="d-flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
