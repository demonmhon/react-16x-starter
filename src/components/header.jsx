import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png'

const propTypes = {};

const defaultProps = {};

const Header = () => {
  return (
    <header className="app__header">
      <span className="app__header__logo">
        <img src={logo} alt="logo" />
      </span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
  );
};

Header.propTypes = propTypes;

Header.defaultProps = defaultProps;

export default Header;
