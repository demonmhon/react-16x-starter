import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

class Error404Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Error 404</h1>
      </div>
    );
  }
}

Error404Page.propTypes = propTypes;
Error404Page.defaultProps = defaultProps;

export { Error404Page };
export default Error404Page;
