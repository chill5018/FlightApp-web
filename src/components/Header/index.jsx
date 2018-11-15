import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../styles/around.png';

/* eslint-disable react/jsx-one-expression-per-line */

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header className="app-header">
   <div>
   <img className="app-header-logo" src={logo} alt="logo"/>
   <h2 className="app-header-h2">DreamFlights</h2>
   </div>
  </header>
);

export default Header;
