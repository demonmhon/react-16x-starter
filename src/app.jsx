import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Route from './route';
import { init } from './redux/actions/app';

const propTypes = {
  init: PropTypes.func,
};

const defaultProps = {
  init() {},
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.init();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <div className="app__body">
            <div className="app__body__container">
              <Route />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.app,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    init: () => dispatch(init()),
  };
};

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export { App };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
