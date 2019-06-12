import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/home';
import Error404Page from './pages/error-404';

class AppRoute extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={Error404Page} />
        </Switch>
      </BrowserRouter>
    );
  }
}

AppRoute.propTypes = {};

AppRoute.defaultProps = {};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export { AppRoute };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRoute);
