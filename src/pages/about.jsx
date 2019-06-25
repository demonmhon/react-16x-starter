import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  }
}

AboutPage.propTypes = propTypes;
AboutPage.defaultProps = defaultProps;

export { AboutPage as HomePage };
export default AboutPage;
