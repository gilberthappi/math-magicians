import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="logo">
      <Link to="/">Math Magicians</Link>
      {' '}
      {/* Updated path to '/' */}
    </div>
    <nav className="navbar">
      <ul className="navLinks">
        <li>
          <Link to="/">Home</Link>
          {' '}
          {/* Updated path to '/' */}
        </li>
        <li>|</li>
        <li>
          <Link to="/Calculator">Calculator</Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/Quote">Quote</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
