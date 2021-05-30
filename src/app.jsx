import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Route from './route';
import { init } from './redux/actions/app';
import { Header } from 'components';
import { loadConfig } from 'core/config';
import { APP } from 'core/constants';

const { NAMESPACE: ns } = APP;

const propTypes = {
  init: PropTypes.func,
};

const defaultProps = {
  init() {},
};

function App(props) {
  const [configLoaded, setConfigLoaded] = useState(false);

  useEffect(() => {
    async function initApp() {
      await loadConfig();
      props.init();
      setConfigLoaded(true);
    }
    initApp();
  }, []);

  return (
    <BrowserRouter>
      {configLoaded ? (
        <div className={ns}>
          <div className={`${ns}__body`}>
            <div className={`${ns}__body__container`}>
              <Header />
              <Route />
            </div>
          </div>
        </div>
      ) : null}
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state.app,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    init: () => dispatch(init()),
  };
};

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export { App };

export default connect(mapStateToProps, mapDispatchToProps)(App);
