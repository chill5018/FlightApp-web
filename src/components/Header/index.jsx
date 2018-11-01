import React from 'react';
import { Link } from 'react-router-dom';

/* eslint-disable react/jsx-one-expression-per-line */

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bookings">Bookings</Link></li>
        <li><Link to="/flights">Flights</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
