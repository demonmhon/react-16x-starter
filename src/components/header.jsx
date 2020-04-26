import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

import logo from 'assets/logo.png';

const propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const defaultProps = {
  match: {},
  location: {},
  history: {}
};

const Header = (props) => {
  const { location } = props;
  const { pathname } = location;

  return (
    <header className="app__header">
      <span className="app__header__logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </span>
      <ul>
        <li className={pathname === '/' ? 'active' : null}>
          <Link to="/">Home</Link>
        </li>
        <li className={pathname === '/about' ? 'active' : null}>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
  );
};

Header.propTypes = propTypes;

Header.defaultProps = defaultProps;

export default withRouter(Header);
