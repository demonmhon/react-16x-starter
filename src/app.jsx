import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
      <div className="app">
        <div className="app__body">
          <div className="app__body__container">
            <Route />
          </div>
        </div>
      </div>
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
