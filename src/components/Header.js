import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Header = () => (
  <header className="header">
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Smartphone Reviews</h1>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
