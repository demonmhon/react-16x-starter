import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}

HomePage.propTypes = propTypes;
HomePage.defaultProps = defaultProps;

export { HomePage };
export default HomePage;
