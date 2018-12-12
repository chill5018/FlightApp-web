import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/around.png';

/* eslint-disable react/jsx-one-expression-per-line */

// The Header creates link to go back home (on logo)
const Header = () => (
  <header className="app-header">
    <div>
      <Link to="/">
        <img className="app-header-logo" src={logo} alt="logo" />
        <h2 className="app-header-h2">DreamFlights</h2>
      </Link>
    </div>
  </header>
);

export default Header;
