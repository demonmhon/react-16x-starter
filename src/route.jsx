import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Pages from './pages';

const propTypes = {};

const defaultProps = {};

const PrivateRoute = ({ component: Component, ...rest }) => {
  // TODO: Implement authenticate hook
  // TODO: Check for authorized
  const isAuthenticated = false;
  const redirectIfUnauthorized = false;
  const unauthorizedComponent = redirectIfUnauthorized ? (
    <Redirect to={{ pathname: '/' }} />
  ) : (
    <Pages.Login />
  );

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : unauthorizedComponent
      }
    />
  );
}

const AppRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Pages.Home} />
      <Route path="/about" component={Pages.About} />
      <Route path="/login" component={Pages.Login} />
      <PrivateRoute path="/account" component={Pages.Account} />
      <Route component={Pages.Error404} />
    </Switch>
  );
}

AppRoute.propTypes = propTypes;
AppRoute.defaultProps = defaultProps;

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export { AppRoute };

export default connect(mapStateToProps, mapDispatchToProps)(AppRoute);
