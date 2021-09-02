import React from 'react';

import { APP } from 'core/constants';
import LoginIcon from '../assets/icons/user.svg';

const { NAMESPACE: ns } = APP;

const propTypes = {};

const defaultProps = {};

const LoginPage = (props) => {
  return (
    <div className={`${ns}-page ${ns}-page--login`}>
      <div className={`${ns}-page--login__login-box`}>
        <img src={LoginIcon} />
        <div>
          <label>
            <span>Username / Email</span>
            <input type="text" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" />
          </label>
          <div>
            <button type="submit" onClick={() => {}}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

LoginPage.propTypes = propTypes;
LoginPage.defaultProps = defaultProps;

export { LoginPage as HomePage };
export default LoginPage;
