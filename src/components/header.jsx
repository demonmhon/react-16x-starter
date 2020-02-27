import React from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/logo.png';

const propTypes = {};

const defaultProps = {};

const Header = () => {
  return (
    <header className="app__header">
      <span className="app__header__logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
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
