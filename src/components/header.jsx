import React from 'react';
import { Link } from 'react-router-dom';

const propTypes = {};

const defaultProps = {};

const Header = () => {
  return (
    <header className="app__header">
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
