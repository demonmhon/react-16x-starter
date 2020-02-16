import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { HomePage, AboutPage, Error404Page } from './pages';

function AppRoute(props) {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route component={Error404Page} />
    </Switch>
  );
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
